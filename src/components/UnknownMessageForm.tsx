'use client';

import React, { useState } from "react";
import { databaseId, databases, guestCollectionId, ID } from "@/libs/appwrite/config";
import useMediaPicker from "@/hooks/useMediaPicker";
import SelectedMediaView from "@/components/SelectedMediaView";
import toast, { Toaster } from "react-hot-toast";
import MediaPickerModal from "./MediaPickerModal";
import { motion } from "framer-motion";

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
    const trimmedPrivateId = privateId.trim();
    const trimmedChat = chat.trim()
    if (!trimmedPrivateId || !trimmedChat) {
      toast("Please enter a private ID and message before sending.");
      return;
    }

    setUploading(true);
    try {
      const media = selectedMedia;
      if (media.type !== "cancel") {
        const uploadedFile = await uploadMedia({ selectedMedia: media });
        
        await databases.createDocument(databaseId, guestCollectionId, ID.unique(), {
          privateId: trimmedPrivateId,
          content: trimmedChat,
          mediaUrl: uploadedFile,
          mediaType: media.type
        });
        toast.success("Your message with media has been sent successfully!");
      } else {
        await databases.createDocument(databaseId, guestCollectionId, ID.unique(), {
          privateId: trimmedPrivateId,
          content: trimmedChat,
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
    input.multiple = true;
    input.onchange = (e) => pickMedia(e as unknown as React.ChangeEvent<HTMLInputElement>, type);
    input.click();
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-white/70  dark:bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="bg-slate-50 m-4 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full space-y-6"
        >
          <h2 className="text-gray-800 dark:text-white font-semibold text-xl">Send a Message</h2>

          {/* Selected Media View */}
          <SelectedMediaView selectedMedia={selectedMedia} resetMedia={resetMedia} />

          {/* Input Fields */}
          <div className="w-full space-y-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Private ID</label>
            <input
              type="text"
              placeholder="Enter private ID"
              value={privateId}
              onChange={(e) => setPrivateId(e.target.value)}
              className="w-full bg-slate-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-md border border-gray-300 dark:border-gray-600"
            />

            <label className="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
            <textarea
              placeholder="Write your message here"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              className="w-full bg-slate-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-md min-h-[60px] border border-gray-300 dark:border-gray-600"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button onClick={() => setIsMediaPicking(true)} className="bg-slate-200 cursor-pointer dark:bg-gray-600 p-3 flex items-center justify-center gap-2 rounded-lg hover:bg-blue-900/50 dark:hover:bg-gray-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-upload-icon lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              Upload
            </button>

            <MediaPickerModal
              onClose={() => setIsMediaPicking(false)}
              isOpen={isMediaPicking}
              onSelect={handleMediaSelection}
            />

            <button onClick={uploadChat} className="bg-blue-600 cursor-pointer flex gap-2 p-3 rounded-lg text-white hover:bg-blue-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
              {uploading ? "Uploading..." : "Send"}
            </button>

            <button onClick={onClose} className="bg-red-600 gap-2 cursor-pointer flex p-3 rounded-lg text-white hover:bg-red-500 transition-all">
              Close
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          <Toaster position="top-right" />
        </motion.div>
      </div>
    </>
  );
};

export default UnknownMessageForm;
