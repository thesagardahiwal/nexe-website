import { ID, Query } from "appwrite";
import { account, databaseId, databases, guestCollectionId, userCollectionId } from "./serverClient";
import { GuestMessageProps, RoomMessage } from "@/types";
import { toRoomMessages } from "../serverHelper";
import { NEXESUFFIX } from "@/constant/data";
import { parseAppwriteError } from "../helper";

interface RoomMessagesProps {
    privateId: string;
    username: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retry = async <T>(fn: () => Promise<T>, retries = 2, delayMs = 500): Promise<T> => {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            console.warn(`Retrying... (${retries} attempts left)`);
            await sleep(delayMs);
            return retry(fn, retries - 1, delayMs);
        }
        throw error;
    }
};

async function fetchRoomMessages({ privateId, username }: RoomMessagesProps): Promise<RoomMessage[] | undefined> {
    try {
        const accountnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.and([Query.equal("privateId", privateId), Query.equal("username", username)])
        ]);

        if (accountnap.total === 0) return undefined;

        const result = await databases.listDocuments(databaseId, guestCollectionId, [
            Query.and([Query.equal("room", true), Query.equal("privateId", privateId)]),
            Query.orderDesc("$createdAt")
        ]);

        return result ? toRoomMessages(result.documents) : undefined;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
}

async function fetchPublicRoomMessages({ privateId }: { privateId: string }): Promise<RoomMessage[] | undefined> {
    try {
        const result = await databases.listDocuments(databaseId, guestCollectionId, [
            Query.and([Query.equal("room", true), Query.equal("public", true), Query.equal("privateId", privateId)]),
            Query.orderDesc("$createdAt")
        ]);

        return result ? toRoomMessages(result.documents) : undefined;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
}

async function fetchUserByPublicId({ publicId }: { publicId: string }) {
    try {
        const userSnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.equal("publicId", publicId)
        ]);

        return userSnap.total > 0 ? userSnap.documents[0] : undefined;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
}

async function checkUserExists(privateId: string): Promise<boolean> {
    try {
        const userSnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.equal("privateId", privateId)
        ]);
        return userSnap.total > 0;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
}

async function sendGuestMessage(data: GuestMessageProps) {
    try {
        return await databases.createDocument(databaseId, guestCollectionId, ID.unique(), data);
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
}

export const isUserExist = async (privateId: string) => {
    return retry(() => checkUserExists(privateId), 2, 1000).catch(error => {
        throw new Error(parseAppwriteError(error));
    });
};

export const uploadMessage = async (data: GuestMessageProps) => {
    return retry(() => sendGuestMessage(data), 2, 1000).catch(error => {
        throw new Error(parseAppwriteError(error));
    });
};

export const fetchPublicUser = async (publicId: string) => {
    return retry(() => fetchUserByPublicId({ publicId }), 2, 1000).catch(error => {
        throw new Error(parseAppwriteError(error));
    });
};

export const fetchPublicMessages = async (privateId: string) => {
    return retry(() => fetchPublicRoomMessages({ privateId }), 2, 1000).catch(error => {
        throw new Error(parseAppwriteError(error));
    });
};

export const fetchMessage = async (data: RoomMessagesProps) => {
    return retry(() => fetchRoomMessages(data), 2, 1000).catch(error => {
        throw new Error(parseAppwriteError(error));
    });
};

export const usernameExists = async (username: string): Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.equal("username", username)
        ]);
        return userSnap.total > 0;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
};

export const privateIdExists = async (privateId: string): Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.equal("privateId", privateId)
        ]);
        return userSnap.total > 0;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
};

export const publicIdExists = async (publicId: string): Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(databaseId, userCollectionId, [
            Query.equal("publicId", publicId)
        ]);
        return userSnap.total > 0;
    } catch (error) {
        throw new Error(parseAppwriteError(error));
    }
};

export const registerUser = async (privateId: string, publicId: string, username: string, password: string) => {
    try {
        const emailAddress = `${username}${NEXESUFFIX}`;

        const user = await account.create(ID.unique(), emailAddress, password);

        return databases.createDocument(databaseId, userCollectionId, ID.unique(), {
            id: user.$id,
            privateId,
            publicId,
            username,
        });
    } catch (error) {
        console.error("❌ Registration error:", error);
        throw new Error(parseAppwriteError(error));
    }
};
