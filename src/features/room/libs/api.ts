import { databaseId, databases, guestCollectionId, userCollectionId } from "@/libs/appwrite/config";
import { Query } from "appwrite";
import axios from "axios";

interface RoomMessagesProps {
    contactNo: string;
    privateId: string;
    username: string;
}

export const fetchRoomMessages = async ({
    contactNo,
    privateId,
    username
} : RoomMessagesProps) => {
    try {
        const payload = {
            contactNo,
            privateId,
            username
        }
        const result =  await axios.post("/api/room", payload, {
            headers: {
            "Content-Type": "application/json",
            },
        });

        if (result.status !== 200) {
            console.log("Error fetching room messages:", result.data);
            return;
        }
        const messages = result.data;
        if (!messages) {
            console.log("No messages found for this room.");
            return;
        }
        return messages;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
}