"use client";

import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
  LucideDelete,
  SendIcon,
  GalleryVerticalEnd,
  EarthIcon,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import PageBackground from '@/components/PageBackground';

import RoomFormModal from '@/features/room/components/RoomFormModal';
import RoomMessageCard from '@/features/room/components/RoomMessages';
import MessageForm from '@/features/guest/components/MessageForm';

import { fetchPublicRoomMessages, fetchRoomMessages } from "@/features/room/libs/api";
import { RoomMessage } from '@/types';
import { decryptMessage } from '@/utils/encryption';

const RoomMessagesLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRoomMessage, setIsRoomMessage] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const searchParams = useSearchParams();

  const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [slowConnection, setSlowConnection] = useState(false);

  const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
  const [downloadedFileIds, setDownloadedFileIds] = useState<Set<string>>(new Set());
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  const slowTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (loading) {
      slowTimerRef.current = setTimeout(() => setSlowConnection(true), 5000);
    } else {
      setSlowConnection(false);
      clearTimeout(slowTimerRef.current!);
    }
  }, [loading]);

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (!mode) return;

    if (mode === 'send') {
      setIsRoomMessage(true);
      setIsPublic(false);
      setIsModalOpen(true);
      return;
    }

    if (mode === 'public') {
      setIsRoomMessage(false);
      setIsPublic(true);
      setIsModalOpen(true);
      return;
    }

    if (mode === 'private') {
      setIsRoomMessage(false);
      setIsPublic(false);
      setIsModalOpen(true);
    }
  }, [searchParams]);

  const handleSubmit = async (data: { username: string; privateId: string; publicId?: string }) => {
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
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error fetching room messages:', err);
      toast.error('Unable to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (fileId: string, fileName: string) => {
    setDownloadingFileId(fileId);
    setDownloadProgress(0);
    const toastId = toast.loading(`Downloading ${fileName}...`);

    try {
      const encodedFileName = encodeURIComponent(fileName);
      const decryptFileId = decryptMessage(fileId);
      const res = await fetch(`/api/appwrite/download?id=${decryptFileId}&name=${encodedFileName}`);

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

      const encryptedBlob = new Blob(
        chunks.map(chunk => new Uint8Array(chunk))
      );
      const decryptedFileName = fileName.replace('.enc', '');
      const blobUrl = URL.createObjectURL(encryptedBlob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = decryptedFileName;
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

  const renderMessages = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center py-10 space-y-4">
          <div className="w-16 h-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
          <p className="text-sm text-muted animate-pulse">Fetching your messages...</p>
          {slowConnection && (
            <p className="text-sm text-orange-500 dark:text-orange-300 animate-pulse">
              This is taking longer than usual. Please check your internet connection. 📶
            </p>
          )}
        </div>
      );
    }

    if (roomMessages.length === 0) {
      return <p className="text-center text-slate-500 dark:text-slate-400">No messages yet.</p>;
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
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="animate-fade-up">
              <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
                Room Workspace
              </div>
              <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground">
                Room Messages
              </h1>
              <p className="mt-4 text-lg text-muted">
                Fetch private or public room messages, or send a new room update.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setIsRoomMessage(true);
                  setIsPublic(false);
                  setIsModalOpen(true);
                }}
                title="Send room message"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-slate-950 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition"
              >
                Send Room Message
              </button>
              <button
                onClick={() => {
                  setIsRoomMessage(false);
                  setIsPublic(false);
                  setIsModalOpen(true);
                }}
                title="Fetch private messages"
                className="rounded-full border border-border px-5 py-2.5 text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                Fetch Private Room
              </button>
              <button
                onClick={() => {
                  setIsRoomMessage(false);
                  setIsPublic(true);
                  setIsModalOpen(true);
                }}
                title="Fetch public messages"
                className="rounded-full border border-border px-5 py-2.5 text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                Fetch Public Room
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container space-y-6">
          <div className="glass-card p-6 animate-fade-up">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Messages</h2>
                <p className="text-sm text-muted">
                  View and manage your room messages.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsRoomMessage(true);
                    setIsPublic(false);
                    setIsModalOpen(true);
                  }}
                  title="Start new message"
                  className="h-10 w-10 rounded-full border border-border bg-white/80 text-cyan-700 hover:border-cyan-400/60 hover:text-cyan-800 transition dark:bg-white/5 dark:text-cyan-200 dark:hover:text-white"
                >
                  <SendIcon className="mx-auto" />
                </button>
                {roomMessages.length > 0 ? (
                  <button
                    onClick={() => setRoomMessages([])}
                    title="Clear messages"
                    className="h-10 w-10 rounded-full border border-border bg-white/80 text-cyan-700 hover:border-cyan-400/60 hover:text-cyan-800 transition dark:bg-white/5 dark:text-cyan-200 dark:hover:text-white"
                  >
                    <LucideDelete className="mx-auto" />
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
                      className="h-10 w-10 rounded-full border border-border bg-white/80 text-cyan-700 hover:border-cyan-400/60 hover:text-cyan-800 transition dark:bg-white/5 dark:text-cyan-200 dark:hover:text-white"
                    >
                      <GalleryVerticalEnd className="mx-auto" />
                    </button>
                    <button
                      onClick={() => {
                        setIsPublic(true);
                        setIsRoomMessage(false);
                        setIsModalOpen(true);
                      }}
                      title="Fetch public messages"
                      className="h-10 w-10 rounded-full border border-border bg-white/80 text-cyan-700 hover:border-cyan-400/60 hover:text-cyan-800 transition dark:bg-white/5 dark:text-cyan-200 dark:hover:text-white"
                    >
                      <EarthIcon className="mx-auto" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200 space-y-4">
            {renderMessages()}
          </div>
        </div>
      </section>

      {isModalOpen && (
        isRoomMessage
          ? <MessageForm isRoomMessage onClose={() => setIsModalOpen(false)} />
          : <RoomFormModal loading={loading} isPublic={isPublic} onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
};

export default RoomMessagesLayout;
