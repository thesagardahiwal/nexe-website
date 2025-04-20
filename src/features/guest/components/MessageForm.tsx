'use client';

import React, { useState } from "react";
import { databaseId, databases, guestCollectionId, ID, userCollectionId } from "@/libs/appwrite/config";
import useMediaPicker from "@/hooks/useMediaPicker";
import SelectedMediaView from "@/components/SelectedMediaView";
import toast, { Toaster } from "react-hot-toast";
import MediaPickerModal from "../../../components/MediaPickerModal";
import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";
import { Query } from "appwrite";
import sendNotificationToUser from "@/libs/notification";

interface MessageFormProps {
  onClose: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onClose }) => {
  const [chat, setChat] = useState<string>("");
  const [privateId, setPrivateId] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [isMediaPicking, setIsMediaPicking] = useState<boolean>(false);

  const { selectedMedia, pickMedia, resetMedia, uploadMedia } = useMediaPicker();

  const uploadChat = async () => {
    const trimmedPrivateId = privateId.trim();
    const trimmedChat = chat.trim();

    if (!trimmedPrivateId || !trimmedChat) {
      toast("Please enter a private ID and message.");
      return;
    }

    setUploading(true);
    try {
      const isUserExist = await databases.listDocuments(
        databaseId,
        userCollectionId,
        [
          Query.equal('privateId', trimmedPrivateId)
        ]
      );

      if (isUserExist.total === 0) {
        toast.error("User not exist for this private ID!");
        setUploading(false);
        return;
      }
      let mediaUrl: string[] = [];
      if (selectedMedia.type !== "cancel") {
        mediaUrl = await uploadMedia({ selectedMedia });
      }

      const doc = await databases.createDocument(databaseId, guestCollectionId, ID.unique(), {
        privateId: trimmedPrivateId,
        content: trimmedChat,
        ...(mediaUrl.length > 0 && {
          mediaUrl,
          mediaType: selectedMedia.type,
        }),
      });
      sendNotificationToUser({
        privateId: trimmedPrivateId,
        messageText: trimmedChat,
        data: {
          type: "guest_message",
          notificationData: doc,
          url: "nexe://",
          imageUrl: mediaUrl?.[0],
        }
      });

      toast.success(mediaUrl.length ? "Message with media sent!" : "Message sent!");
      setChat("");
      setPrivateId("");
      resetMedia();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
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
      <div className="fixed inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 250 }}
          className="bg-white dark:bg-zinc-800 mx-4 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-5"
        >
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Send a Message</h2>

          <SelectedMediaView selectedMedia={selectedMedia} resetMedia={resetMedia} />

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Private ID</label>
              <input
                type="text"
                value={privateId}
                onChange={(e) => setPrivateId(e.target.value.toLowerCase().replace(/\s/g, ''))}
                className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none"
                placeholder="Enter Private ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                value={chat}
                onChange={(e) => setChat(e.target.value)}
                className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none min-h-[100px]"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsMediaPicking(true)}
                className="bg-zinc-200 cursor-pointer dark:bg-zinc-600 px-4 py-2 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-blue-500/30 dark:hover:bg-zinc-500"
              >
                <Paperclip className="w-5 h-5" />
              </button>

              <MediaPickerModal
                isOpen={isMediaPicking}
                onClose={() => setIsMediaPicking(false)}
                onSelect={handleMediaSelection}
              />
            </div>
          </div>

          <div className="flex justify-between gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium"
            >
              Close
            </button>
            <button
              onClick={uploadChat}
              disabled={uploading || !chat.trim() || !privateId.trim()}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
            >
              {uploading ? (
                "Sending..."
              ) : (
                <>
                  <span>Send</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4Z" /></svg>
                </>
              )}
            </button>
          </div>

          <Toaster position="top-right" />
        </motion.div>
      </div>
    </>
  );
};

export default MessageForm;
