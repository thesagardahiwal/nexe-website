import { Models, Query } from "appwrite";
import { databaseId, databases, unknownCollectionId } from "./config";

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