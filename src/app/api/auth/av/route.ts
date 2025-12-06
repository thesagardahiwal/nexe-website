import { privateIdExists, publicIdExists, usernameExists } from "@/libs/appwrite/api";
import { decryptMessage } from "@/utils/encryption";

export const POST = async (req: Request) => {
    const { method } = req;
    if (method !== "POST") {
        return new Response(
            JSON.stringify({ success: false, error: "Method Not Allowed" }),
            { status: 405 }
        );
    };

    try {

        const { username, privateId, publicId } = await req.json();
        const payload = { 
            username : decryptMessage(username), 
            privateId: decryptMessage(privateId), 
            publicId: decryptMessage(publicId)
         };
        let data = {}
        if (username) {
            const isUsernameExist = await usernameExists(payload.username);
            data = { ...data, isUsernameExist };
        };

        if (publicId) {
            const isPublicIdExist =  await publicIdExists(payload.publicId);
            data = { ...data, isPublicIdExist };
        };

        if (privateId) {
            const isPrivateIdExist =  await privateIdExists(payload.privateId);
            data = { ...data, isPrivateIdExist };
        }

        return new Response(
            JSON.stringify({ 
                success: true, 
                message: "ID existence checked successfully", 
                data: data
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in checking ID existence:", error);
        return new Response(
            JSON.stringify({ success: false, error: (error as Error).message }),
            { status: 500 }
        );
    }
};