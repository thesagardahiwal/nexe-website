import { fetchRoomMessages } from "@/libs/appwrite/api";
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
  console.log("Received data:", { username, privateId, contactNo });
  try {
    // Send the request to the actual API
    const response = await fetchRoomMessages({username, privateId, contactNo});

    if (!response) {
      console.log("No messages found for this room.");
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
