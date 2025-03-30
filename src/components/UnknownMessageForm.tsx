import React, { useState } from "react";
import { databaseId, databases, ID, unknownCollectionId } from "@/libs/appwrite/config";
import useMediaPicker from "@/hooks/useMediaPicker";
import SelectedMediaView from "@/components/SelectedMediaView";
import toast, { Toaster } from "react-hot-toast";
import MediaPickerModal from "./MediaPickerModal";

interface UnknownMessageFormProps {
  onClose: () => void;
}

const UnknownMessageForm: React.FC<UnknownMessageFormProps> = ({ onClose }) => {
  const [chat, setChat] = useState<string>("");
  const [privateId, setPrivateId] = useState<string>("");
  const { selectedMedia, pickMedia, resetMedia, uploadMedia } = useMediaPicker();
  const [uploading, setUploading] = useState<boolean>(false);
  const [isMediaPicking, setIsMediaPicking] = useState<boolean>(false);
  const uploadChat = async () => {
    if (!privateId.trim() || !chat.trim()) {
      toast("Please enter a private ID and message before sending.");
      return;
    }

    setUploading(true);
    try {
      const media = selectedMedia;
      let uploadedFile = await uploadMedia({ selectedMedia: media });
      let selected = media.type === "image" ? "imageURL" :
      media.type === "document" ? "documentURL" :
          "videoURL";
      if (uploadedFile.length > 0) {
        await databases.createDocument(databaseId, unknownCollectionId, ID.unique(), {
          privateId,
          content: chat,
          [selected]: uploadedFile,
        });
        toast.success("Your message with media has been sent successfully!");
      } else {
        await databases.createDocument(databaseId, unknownCollectionId, ID.unique(), {
          privateId,
          content: chat,
        });

        toast.success("Your message has been sent successfully!");
      }
    } catch (error) {
      console.error("Error uploading chat:", error);
      toast.error("Something went wrong while sending your message. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleMediaSelection = (type: "image" | "video" | "document") => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = type === "image" ? "image/*" : type === "video" ? "video/*" : "*";
    input.multiple = type !== "document"; // Allow multiple selection for images and videos
    input.onchange = (e) => pickMedia(e as unknown as React.ChangeEvent<HTMLInputElement>, type);
    input.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-white font-semibold text-xl mb-3">Spam Message</h2>

        {/* Selected Media View */}
        <SelectedMediaView selectedMedia={selectedMedia} resetMedia={resetMedia} />

        {/* Input Fields */}
        <div className="w-full space-y-3">
          <label className="block text-white font-medium">Private ID</label>
          <input
            type="text"
            placeholder="Write private ID here"
            value={privateId}
            onChange={(e) => setPrivateId(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-md"
          />

          <label className="block text-white font-medium">Message</label>
          <textarea
            placeholder="Write message here"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-md min-h-[60px]"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button onClick={() => setIsMediaPicking(true)} className="bg-gray-700 p-3 rounded-lg">
            📎 Attach
          </button>
            <MediaPickerModal 
                onClose={() => setIsMediaPicking(false)}
                isOpen={isMediaPicking}
                onSelect={handleMediaSelection}
            />
            <input hidden type='' />
          <button onClick={uploadChat} className="bg-blue-700 p-3 rounded-lg flex-1">
            {uploading ? "Uploading..." : "Send"}
          </button>

          <button onClick={onClose} className="bg-red-700 p-3 rounded-lg">
            Close
          </button>
        </div>

        <Toaster position='top-right' />
      </div>
    </div>
  );
};

export default UnknownMessageForm;
