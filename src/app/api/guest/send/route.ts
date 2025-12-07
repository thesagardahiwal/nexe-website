import { uploadMessage } from "@/libs/appwrite/api";
import sendNotificationToUser from "@/libs/notification";
import { decryptMessage } from "@/utils/encryption";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, message: "Method Not Allowed" }),
      { status: 405 }
    );
  }

  try {
    const { content, privateId, mediaType, mediaUrl, room } = await req.json();
    const decryptedPrivateId = decryptMessage(privateId);

    if (!decryptedPrivateId) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid Private ID" }),
        { status: 400 }
      );
    }
    // Upload to Appwrite
    const response = await uploadMessage({ content, privateId: decryptMessage(privateId), mediaType, mediaUrl, room });

    // Send Notification
    await sendNotificationToUser({
      privateId: decryptMessage(privateId),
      messageText: decryptMessage(content),
      customTitle: room ? "New Room Message" : "New Guest Message",
      data: {
        type: room ? "room_message" : "guest_message",
        notificationData: response,
        url: "nexe://",
        imageUrl: mediaUrl?.[0],
      }
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Message/Notification Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again."
      }),
      { status: 500 }
    );
  }
}
