import { GuestMessageProps } from "@/types";

export async function isUserExist (privateId :string)  {
    try {
        const response = await fetch(`/api/user/exists?privateId=${privateId}`);
        if (!response.ok) {
            return;
        }
        const data = await response.json();
        if (!data) {
            return;
        }
        return data;
    } catch (error) {
        console.error("Error checking user existence:", error);
        throw error;
    }
};

export async function sendGuestMessage(data: GuestMessageProps)  {
    try {
        const response = await fetch("/api/guest/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (!result) {
            return;
        }
        return result;
    } catch (error) {
        console.log("Error sending guest message:", error);
    }
}