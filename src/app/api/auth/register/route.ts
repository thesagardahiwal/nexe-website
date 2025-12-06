import { registerUser } from "@/libs/appwrite/api";
import { decryptMessage } from "@/utils/encryption";


export async function POST(req: Request) {
  try {
      const { method } = req;

      if (method !== "POST") {
        return new Response(
          JSON.stringify({ success: false, error: "Method Not Allowed" }),
          { status: 405 },
        );
      };
      
      const { username, password, publicId, privateId } = await req.json();
    
      const payload = { 
        username : decryptMessage(username), 
        password : decryptMessage(password), 
        publicId: decryptMessage(publicId), 
        privateId: decryptMessage(privateId) 
      };

      await registerUser(
        payload.privateId,
        payload.publicId,
        payload.username,
        payload.password
      );

      return new Response(
        JSON.stringify({ success: true, message: "User registered successfully" }),
        { status: 201 },
      );
  } catch (error) {
    console.error("Error in registration:", error);
    return new Response(
      JSON.stringify({ success: false, error: (error as Error).message }),
      { status: 500 },
    );
  }
};