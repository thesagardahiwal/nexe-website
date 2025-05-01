'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  LucideDelete,
  SendIcon,
  GalleryVerticalEnd,
  EarthIcon,
} from 'lucide-react';

import RoomFormModal from '@/features/room/components/RoomFormModal';
import RoomMessageCard from '@/features/room/components/RoomMessages';
import MessageForm from '@/features/guest/components/MessageForm';

import { fetchPublicRoomMessages, fetchRoomMessages } from "@/features/room/libs/api";
import { RoomMessage } from '@/types';

const RoomMessagesLayout = () => {
  // 🔧 UI state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoomMessage, setIsRoomMessage] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  // 📥 Message state
  const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [slowConnection, setSlowConnection] = useState(false);

  // 📦 File download state
  const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
  const [downloadedFileIds, setDownloadedFileIds] = useState<Set<string>>(new Set());
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const slowTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 🐢 Slow connection indicator
  useEffect(() => {
    if (loading) {
      slowTimerRef.current = setTimeout(() => setSlowConnection(true), 5000);
    } else {
      setSlowConnection(false);
      clearTimeout(slowTimerRef.current!);
    }
  }, [loading]);

  // 🚀 Form submit (room/private/public)
  const handleSubmit = async (data: { username: string; privateId: string; contactNo: string, publicId?: string }) => {
    try {
      setLoading(true);
      const response = data.publicId
        ? await fetchPublicRoomMessages({ publicId: data.publicId })
        : await fetchRoomMessages(data);

      if (!response?.success) {
        toast.error(response?.message || 'Unable to fetch messages');
        return;
      }

      setRoomMessages(response.data);
      toast.success('Messages fetched successfully');
    } catch (err) {
      console.error('Error fetching room messages:', err);
      toast.error('Unable to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  // 📁 File download
  const handleDownload = async (fileId: string, fileName: string) => {
    setDownloadingFileId(fileId);
    setDownloadProgress(0);
    const toastId = toast.loading(`Downloading ${fileName}...`);

    try {
      const encodedFileName = encodeURIComponent(fileName);
      const res = await fetch(`/api/appwrite/download?id=${fileId}&name=${encodedFileName}`);

      if (!res.ok || !res.body) throw new Error('Failed to download file');

      const reader = res.body.getReader();
      const total = parseInt(res.headers.get('Content-Length') || '0', 10);
      let received = 0;
      const chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          received += value.length;

          if (total) {
            const percent = Math.round((received / total) * 100);
            setDownloadProgress(percent);
            toast.loading(`Downloading ${fileName}... ${percent}%`, { id: toastId });
          }
        }
      }

      const blob = new Blob(chunks);
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);

      setDownloadedFileIds(prev => new Set(prev).add(fileId));
      toast.success(`Downloaded ${fileName}`, { id: toastId });
    } catch (err) {
      console.error('Download error:', err);
      toast.error(`Failed to download ${fileName}`, { id: toastId });
    } finally {
      setDownloadingFileId(null);
      setDownloadProgress(null);
    }
  };

  // 📦 Message Cards Section
  const renderMessages = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center py-10 space-y-4">
          <div className="w-16 h-16 animate-spin rounded-full border-4 border-blue-400 border-t-transparent" />
          <p className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">Fetching your messages...</p>
          {slowConnection && (
            <p className="text-sm text-orange-500 dark:text-orange-300 animate-pulse">
              This is taking longer than usual. Please check your internet connection. 📶
            </p>
          )}
        </div>
      );
    }

    if (roomMessages.length === 0) {
      return <p className="text-center text-gray-500 dark:text-gray-400">No messages yet.</p>;
    }

    return roomMessages.map((msg) => (
      <RoomMessageCard
        key={msg.createdAt}
        message={msg}
        downloadingFileId={downloadingFileId}
        downloadProgress={downloadProgress}
        downloadedFileIds={downloadedFileIds}
        onDownload={handleDownload}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
      {/* 🎨 Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-indigo-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* 🔝 Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="w-full max-w-5xl p-1 bg-transparent dark:bg-gray-800 rounded-b-xl shadow-lg"
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Room Messages</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setIsRoomMessage(true);
                setIsModalOpen(true);
              }}
              title="Start new message"
              className="bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
            >
              <SendIcon className="text-white" />
            </button>

            {roomMessages.length > 0 ? (
              <button
                onClick={() => setRoomMessages([])}
                title="Delete messages"
                className="bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
              >
                <LucideDelete className="text-white" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsRoomMessage(false);
                    setIsPublic(false);
                    setIsModalOpen(true);
                  }}
                  title="Fetch private messages"
                  className="bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                >
                  <GalleryVerticalEnd className="text-white" />
                </button>
                <button
                  onClick={() => {
                    setIsPublic(true);
                    setIsRoomMessage(false);
                    setIsModalOpen(true);
                  }}
                  title="Fetch public messages"
                  className="bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                >
                  <EarthIcon className="text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* 📄 Message Overview */}
      <div className="flex flex-col gap-4 w-full max-w-5xl mt-4">
        <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Messages</h2>
          <p className="text-gray-600 dark:text-gray-300">View and manage your room messages.</p>
        </div>

        {/* 📬 Messages */}
        <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md space-y-4">
          {renderMessages()}
        </div>
      </div>

      {/* 📤 Modal */}
      {isModalOpen && (
        isRoomMessage
          ? <MessageForm isRoomMessage onClose={() => setIsModalOpen(false)} />
          : <RoomFormModal isPublic={isPublic} onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default RoomMessagesLayout;
