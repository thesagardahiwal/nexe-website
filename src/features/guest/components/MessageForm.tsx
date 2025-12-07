import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Paperclip } from 'lucide-react';
import { validateMessageForm } from '@/utils/validation';
import { isUserExist, sendGuestMessage } from '../libs/api';
import useMediaPicker from '@/hooks/useMediaPicker';
import { encryptMessage } from '@/utils/encryption'; // Import the encryption function

const MediaPickerModal  = dynamic(() => import('@/components/MediaPickerModal'), { ssr: false });
const SelectedMediaView = dynamic(() => import('@/components/SelectedMediaView'), { ssr: false });

interface MessageFormProps { 
  onClose(): void;
  isRoomMessage: boolean;
}

export default function MessageForm({ onClose, isRoomMessage = false }: MessageFormProps) {
  const [chat, setChat] = useState('');
  const [privateId, setPrivateId] = useState('');
  const [uploading, setUploading] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  const { selectedMedia, pickMedia, resetMedia, uploadMedia } = useMediaPicker();

  /* -------------------- handlers -------------------- */
  const handleMediaSelection = useCallback(
    (type: 'image' | 'video' | 'document') => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = type === 'image' ? 'image/*' : type === 'video' ? 'video/*' : '*';
      input.multiple = true;
      input.onchange = (e) =>
        pickMedia(e as unknown as React.ChangeEvent<HTMLInputElement>, type);
      input.click();
    },
    [pickMedia]
  );

  const uploadChat = useCallback(async () => {
    const error = validateMessageForm(privateId, chat);
    if (error) {
      (await getToast()).error(error);
      return;
    }

    setUploading(true);
    try {
      const user = await isUserExist(privateId.trim());
      if (!user?.success) {
        (await getToast()).error(
          'Unknown Private ID\nWe couldn’t find a user with that ID.'
        );
        return;
      }

      let mediaUrl: string[] = [];
      if (selectedMedia.type !== 'cancel') {
        mediaUrl = await uploadMedia({ selectedMedia });
      }

      // Encrypt the message content before sending
      const encryptedMessage = encryptMessage(chat.trim());
      const encryptedPrivateId = encryptMessage(privateId.trim());
      const { message, success } = await sendGuestMessage({
        content: encryptedMessage, // Send encrypted message
        privateId: encryptedPrivateId, // Send encrypted privateId
        room: isRoomMessage,
        ...(mediaUrl.length > 0 && selectedMedia.type !== 'cancel'
          ? { mediaUrl, mediaType: selectedMedia.type }
          : {})
      });

      if (!success) {
        (await getToast()).error(
          `Delivery failed\n${message ?? 'Recipient cannot accept messages.'}`
        );
        return;
      }

      (await getToast()).success(
        mediaUrl.length
          ? 'Sent\nYour message & media are on the way 🚀'
          : 'Sent\nYour message is on the way 🚀'
      );

      setChat(() => '');
      setPrivateId(() => '');
      resetMedia();
    } catch (err) {
      console.error(err);
      (await getToast()).error(
        'Error sending\nSomething went wrong. Please try again.'
      );
    } finally {
      setUploading(false);
    }
  }, [chat, privateId, selectedMedia, isRoomMessage, uploadMedia, resetMedia]);

  /* -------------------- UI -------------------- */
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/70 dark:bg-black/70">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        className="mx-4 w-full max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-800"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Send a Message
        </h2>

        <SelectedMediaView selectedMedia={selectedMedia} resetMedia={resetMedia} />

        {/* Inputs */}
        <div className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Private ID
            </span>
            <input
              value={privateId}
              onChange={(e) =>
                setPrivateId(e.target.value.toLowerCase().replace(/\s/g, ''))
              }
              placeholder="Enter Private ID"
              className="w-full rounded-lg border border-gray-300 bg-zinc-100 p-3 text-gray-900 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </span>
            <textarea
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              placeholder="Write your message here"
              className="min-h-[100px] w-full rounded-lg border border-gray-300 bg-zinc-100 p-3 text-gray-900 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white"
            />
          </label>

          {/* Attach media */}
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 text-gray-800 transition hover:bg-blue-500/30 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-zinc-600 dark:text-white dark:hover:bg-zinc-500"
            aria-label="Attach media"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <MediaPickerModal
            isOpen={pickerOpen}
            onClose={() => setPickerOpen(false)}
            onSelect={handleMediaSelection}
          />
        </div>

        {/* Footer buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-red-500"
          >
            Close
          </button>
          <button
            type="button"
            onClick={uploadChat}
            disabled={uploading || !chat.trim() || !privateId.trim()}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500 disabled:opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            {uploading ? (
              'Sending...'
            ) : (
              <>
                <span>Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- helper to lazy‑load toast ---------------- */
async function getToast() {
  const mod = await import('react-hot-toast');
  return mod.default;
}
