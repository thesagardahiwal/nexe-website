import { fetchRoomMessages } from "@/libs/appwrite/api";
import sendNotificationToUser from "@/libs/notification";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { method } = req;

  if (method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method Not Allowed" }),
      { status: 405 }
    );
  }
  const { username, privateId, contactNo } = await req.json();
  try {
    // Send the request to the actual API
    const response = await fetchRoomMessages({username, privateId, contactNo});

    sendNotificationToUser({
      customTitle: "Someone accesing your room",
      privateId: privateId,
      messageText: `Someone is trying to access your room with contact number ${contactNo}`,
      data: {
        type: "room_message",
        notificationData: null,
        url: "nexe://",
        imageUrl: "",
      },
    })
    if (!response) {
      return new Response(
        JSON.stringify({ success: false, error: "No messages found" }),
        { status: 404 }
      );
    }
    // Return the response from the actual API
    return new Response(
      JSON.stringify({ success: true, message: "Notification sent", data: response }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sending notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: (error as Error).message }),
      { status: 500 }
    );
  }
}
