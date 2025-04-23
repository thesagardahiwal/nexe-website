import { Models, Query } from "appwrite";
import { databaseId, databases, guestCollectionId, userCollectionId, unknownCollectionId } from "./serverClient";
import { RoomMessage } from "@/types";
import { toRoomMessages } from "../serverHelper";

export async function getUnknownMessages(privateId :string): Promise<Models.DocumentList<Models.Document>> {
    try {
        const response = await databases.listDocuments<Models.Document>(
            databaseId,
            unknownCollectionId,
            [
                Query.equal("privateId", privateId)
            ]
        );
        return response;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
};

interface RoomMessagesProps {
    contactNo: string;
    privateId: string;
    username: string;
}

export const fetchRoomMessages  = async ({
    contactNo,
    privateId,
    username
} : RoomMessagesProps) : Promise<RoomMessage[] | undefined> => {
    try {
        const userSnap = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [
                Query.and([
                    Query.equal("privateId", privateId),
                    Query.equal("username", username),
                    Query.equal("phone", contactNo),
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
                ])
            ]
        );
        if (!result) {
            console.log("No messages found for this room.");
            return;
        };
        const messages = toRoomMessages(result.documents);
        console.log("Fetched room messages:", messages);
        return messages;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
};