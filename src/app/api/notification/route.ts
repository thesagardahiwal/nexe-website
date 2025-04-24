import { notificationUrl } from "@/libs/appwrite/serverClient";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method Not Allowed" }),
      { status: 405 },
    );
  }

  try {
    const payload = await req.json();

    const { data } = await axios.post(notificationUrl, payload, {
      headers: { "Content-Type": "application/json" },
    });

    return new Response(
      JSON.stringify({ success: true, message: "Notification sent", data }),
      { status: 200 },
    );
  } catch (err) {
    const ax = err as AxiosError;

    // ⬇︎ everything the downstream API reported
    const upstreamStatus  = ax.response?.status;
    const upstreamData    = ax.response?.data;

    console.error("Notification proxy error:", {
      message: ax.message,
      upstreamStatus,
      upstreamData,
    });

    return new Response(
      JSON.stringify({
        success: false,
        error: ax.message,
        upstreamStatus,
        upstreamData,
      }),
      { status: upstreamStatus ?? 500 },
    );
  }
}
