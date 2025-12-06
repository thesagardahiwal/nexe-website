import { ID, Query } from "appwrite";
import { databaseId, databases, guestCollectionId, userCollectionId } from "./serverClient";
import { GuestMessageProps, RoomMessage } from "@/types";
import { toRoomMessages } from "../serverHelper";

interface RoomMessagesProps {
    privateId: string;
    username: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retry = async <T>(
  fn: () => Promise<T>,
  retries = 2,
  delayMs = 500
): Promise<T> => {
  try {
    return await fn();
  } catch (e) {
    if (retries > 0) {
      console.warn(`Retrying... (${retries} attempts left)`);
      await sleep(delayMs);
      return retry(fn, retries - 1, delayMs);
    }
    throw e;
  }
};


async function fetchRoomMessages ({
    privateId,
    username
} : RoomMessagesProps) : Promise<RoomMessage[] | undefined> {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.and([
                    Query.equal("privateId", privateId),
                    Query.equal("username", username),
                ])
            ]
        );

        if (userSnap.total === 0) {
            console.log("User not exist for this private ID!");
            return;
        }; 

        const result = await databases.listDocuments(
            databaseId,
            guestCollectionId,
            [
                Query.and([
                    Query.equal("room", true),
                    Query.equal("privateId", privateId),
                ]),
                Query.orderDesc("$createdAt")
            ]
        );
        if (!result) {
            console.log("No messages found for this room.");
            return;
        };
        const messages = toRoomMessages(result.documents);
        return messages;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
};

async function fetchPublicRoomMessages ({
    privateId
} : {privateId: string}) : Promise<RoomMessage[] | undefined> {
    try {

        const result = await databases.listDocuments(
            databaseId,
            guestCollectionId,
            [
                Query.and([
                    Query.equal("room", true),
                    Query.equal("public", true),
                    Query.equal("privateId", privateId),
                ]),
                Query.orderDesc("$createdAt")
            ]
        );
        if (!result) {
            console.log("No messages found for this room.");
            return;
        };
        const messages = toRoomMessages(result.documents);
        return messages;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
};

async function fetchUserByPublicId ({publicId} : {publicId: string}){
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.equal("publicId", publicId),
            ]
        );

        if (userSnap.total === 0) {
            console.log("User not exist for this public ID!");
            return;
        }; 
        
        return userSnap.documents[0];
    } catch (error) {
        console.log(error)
    }
}


async function checkUserExists (privateId: string) : Promise<boolean> {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.equal("privateId", privateId)
            ]
        );
        return userSnap.total > 0;
    } catch (error) {
        console.error("Error checking user existence:", error);
        throw error;
    }
};


async function sendGuestMessage(data: GuestMessageProps) {
    try {
        const result = await databases.createDocument(
            databaseId,
            guestCollectionId,
            ID.unique(),
            {
                ...data
            }
            
        );
        if (!result) {
            console.log("No messages found for this room.");
            return;
        };
        return result;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
}

export const isUserExist = async (privateId: string) => {
    try {
        const result = await retry(() => checkUserExists(privateId), 2, 1000);
        return result;
    } catch (error) {
        throw (error as Error).message || "Internet unstable!"
    }
};

export const uploadMessage = async (data: GuestMessageProps) => {
    try {
        const result = await retry(() => sendGuestMessage(data), 2, 1000);
        return result;
    } catch (error) {
        throw (error as Error).message;
    }
}

export const fetchPublicUser = async (publicId: string) => {
    try {
        const result = await retry(() =>  fetchUserByPublicId({publicId: publicId}), 2, 1000);
        return result;
    } catch (error) {
        throw (error as Error).message;
    }
}

export const fetchPublicMessages = async (privateId: string) => {
    try {
        const result = await retry(() => fetchPublicRoomMessages({privateId}))
        return result;
    } catch (error) {
        throw (error as Error).message
    }
}

export const fetchMessage = async (data: RoomMessagesProps) => {
    try {
        const result = await retry(() => fetchRoomMessages(data), 2, 1000);
        return result;
    } catch (error) {
        throw (error as Error).message
    }
}

export const usernameExists = async (username: string) : Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.equal("username", username)
            ]
        );
        return userSnap.total > 0;
    } catch (error) {
        console.error("Error checking username existence:", error);
        throw error;
    }
};

export const privateIdExists = async (privateId: string) : Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.equal("privateId", privateId)
            ]
        );
        return userSnap.total > 0;
    } catch (error) {
        console.error("Error checking privateId existence:", error);
        throw error;
    }
};

export const publicIdExists = async (publicId: string) : Promise<boolean> => {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.equal("publicId", publicId)
            ]
        );
        return userSnap.total > 0;
    } catch (error) {
        console.error("Error checking publicId existence:", error);
        throw error;
    }
}

export const registerUser = async (privateId: string, publicId: string, username: string, password: string) => {
    try {
        const result = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                privateId,
                publicId,
                username,
                password,
            }
        );
        return result;
    } catch (error) {
        console.error("Error registering user:", error);
        throw (error as Error).message;
    }
}