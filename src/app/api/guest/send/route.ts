import { uploadMessage } from "@/libs/appwrite/api";
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
  const { content, privateId, mediaType, mediaUrl, room } = await req.json();
  try {
    // Send the request to the actual API
    const response = await uploadMessage({ content, privateId, mediaType, mediaUrl, room });

    if (!response) {
      return new Response(
        JSON.stringify({ success: false, message: "Internet Error found!" }),
        { status: 404 }
      );
    };

    sendNotificationToUser({
      privateId: privateId,
      messageText: content,
      customTitle: room ? "New Room Message" : "New Guest Message",
      data: {
        type: room ? "room_message" : "guest_message",
        notificationData: response,
        url: "nexe://",
        imageUrl: mediaUrl?.[0],
      }
    });
    // Return the response from the actual API
    return new Response(
      JSON.stringify({ success: true, message: "Guest message sent successfully" }),
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
