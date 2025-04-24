import { isUserExist } from "@/libs/appwrite/api";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { method } = req;

    if (method !== "GET") {
        return new Response(
            JSON.stringify({ success: false, error: "Method Not Allowed" }),
            { status: 405 }
        );
    }
    const privateId = req.nextUrl.searchParams.get('privateId');
    if (!privateId) {
        return new Response(
            JSON.stringify({ success: false, error: "Missing privateId" }),
            { status: 400 }
        );
    };
    try {
        // Send the request to the actual API
        const response = await isUserExist(privateId);
        // Return the response from the actual API
        if (!response) {
            return new Response(
                JSON.stringify({ success: false, message: "No user found", data: null }),
                { status: 404 }
            );
        };
        return new Response(
            JSON.stringify({ success: true, message: "User is found", data: response }),
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
