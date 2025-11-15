interface RoomMessagesProps {
    privateId: string;
    username: string;
}

export const fetchRoomMessages = async ({
    privateId,
    username
} : RoomMessagesProps) => {
    try {
        const payload = {
            privateId,
            username
        }
        const result =  await fetch("/api/room", {
            headers: {
            "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(payload),
        });
        const response = await result.json();
        return response;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
}
export const fetchPublicRoomMessages = async ({
    publicId
} : {publicId: string}) => {
    try {
        const payload = {
            publicId
        }
        const result =  await fetch("/api/room", {
            headers: {
            "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(payload),
        });
        const response = await result.json();
        return response;
    } catch (error) {
        console.log("Error fetching room messages:", error);
    }
}