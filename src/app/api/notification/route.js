import axios from "axios";

export async function POST(req) {
  const { method } = req;

  if (method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method Not Allowed" }),
      { status: 405 }
    );
  }

  const notificationUrl = "https://67f7d9b1565f7bc31e35.appwrite.global"; // Actual API URL

  try {
    // Send the request to the actual API
    const response = await axios.post(notificationUrl, await req.json(), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Return the response from the actual API
    return new Response(
      JSON.stringify({ success: true, message: "Notification sent", data: response.data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sending notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
