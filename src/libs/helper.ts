import { ID } from "appwrite";
import { storage, storeId } from "./appwrite/serverClient";
import toast from "react-hot-toast";

export const uploadFileWithProgress = (file: File, onProgress: (progress: number) => void): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      const fileId = ID.unique();
  
      formData.append("file", file);
      formData.append("fileId", fileId);
  
      xhr.open("POST", `https://cloud.appwrite.io/v1/storage/buckets/${storeId}/files`);
  
      xhr.setRequestHeader("X-Appwrite-Project", process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');
      xhr.setRequestHeader("X-Appwrite-Key", process.env.NEXT_PUBLIC_APPWRITE_STORAGE_KEY || ''); // Only use from a trusted backend/server!
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = (event.loaded / event.total) * 100;
          onProgress(percent);
        }
      };
  
      xhr.onload = () => {
        if (xhr.status === 201) {
          const response = JSON.parse(xhr.responseText);
          const fileUrl = storage.getFilePreview(storeId, response.$id);
          resolve(fileUrl.toString());
        } else {
          toast.error(`❌ Upload failed for: ${file.name}`);
          reject(null);
        }
      };
  
      xhr.onerror = () => {
        toast.error("⚠️ Upload failed due to network error.");
        reject(null);
      };
  
      xhr.send(formData);
    });
  };
  

  export function getBaseUrl() {
    // ① Vercel / Netlify / Render set NEXT_PUBLIC_SITE_URL at build time
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;      // → e.g. https://my‑app.vercel.app
    }
  
    // ② When previewing locally (`next dev`) fall back to localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }

export function parseAppwriteError(error: any): string {
  const type = error?.type || "";

  if (type.includes("user_invalid_credentials")) {
    return "Invalid username or password.";
  }
  if (type.includes("user_already_exists")) {
    return "This username is already taken.";
  }
  if (type.includes("general_unauthorized_scope")) {
    return "Access denied. Please contact support.";
  }

  return "Something went wrong. Please try again later.";
}