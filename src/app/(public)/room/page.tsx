'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RoomFormModal from '@/features/room/components/RoomFormModal';
import { LucideDelete, SendIcon, GalleryVerticalEnd, EarthIcon } from 'lucide-react';
import { fetchPublicRoomMessages, fetchRoomMessages } from "@/features/room/libs/api"
import toast from 'react-hot-toast';
import { RoomMessage } from '@/types';
import RoomMessageCard from '@/features/room/components/RoomMessages';
import MessageForm from '@/features/guest/components/MessageForm';


const RoomMessagesLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isRoomMessage, setIsRoomMessage] = useState<boolean>(false);
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const [slowConnection, setSlowConnection] = useState<boolean>(false);
    const slowTimerRef = useRef<NodeJS.Timeout | null>(null);
    const [downloadingFileId, setDownloadingFileId] = useState<string | null>(null);
    const [downloadedFileIds, setDownloadedFileIds] = useState<Set<string>>(new Set());


    useEffect(() => {
        if (loading) {
            slowTimerRef.current = setTimeout(() => {
                setSlowConnection(true);
            }, 5000);
        } else {
            setSlowConnection(false);
            if (slowTimerRef.current) {
                clearTimeout(slowTimerRef.current);
                slowTimerRef.current = null;
            }
        }
    }, [loading]);

    const handleSubmit = async (data: { username: string; privateId: string; contactNo: string, publicId?: string }) => {
        try {
            setLoading(true);
            const response = data.publicId
                ? await fetchPublicRoomMessages({ publicId: data.publicId })
                : await fetchRoomMessages(data);

            if (!response || !response.success) {
                toast.error(response?.message || 'Unable to fetch messages');
                return;
            }

            if (response && response.success) {
                setRoomMessages(response.data);
                toast.success('Messages fetched successfully');
            }

        } catch (err) {
            console.error('Error fetching room messages:', err);
            toast.error('Unable to fetch messages');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (fileId: string, fileName: string) => {
        setDownloadingFileId(fileId);
        const toastId = toast.loading('Preparing your download...');
      
        try {
          const res = await fetch(`/api/appwrite/download?id=${fileId}&name=${encodeURIComponent(fileName)}`);
          if (!res.ok) throw new Error('Failed to get file URL');
      
          const url = await res.text();
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
      
          // ✅ Track downloaded file
          setDownloadedFileIds(prev => new Set(prev).add(fileId));
          toast.success('Download started!', { id: toastId });
        } catch (error) {
          console.error(error);
          toast.error('Failed to download file', { id: toastId });
        } finally {
          setDownloadingFileId(null);
        }
      };
      
    

    return (
        <div className="flex flex-col justify-start items-center min-h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-indigo-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
            </div>

            {/* Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
                className="w-full max-w-5xl p-1 bg-transparent dark:bg-gray-800 rounded-b-xl shadow-lg"
            >
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Room Messages</h1>
                    <div className='flex items-center space-x-2'>
                        <button
                            className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                            onClick={() => {
                                setIsRoomMessage(true);
                                setIsModalOpen(true);
                            }}
                            title="Start new message"
                            aria-label="send message"
                        >
                            <div className='text-white font-medium'>
                                <SendIcon />
                            </div>
                        </button>
                        {roomMessages.length > 0 ? (
                            <button
                                className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                                onClick={() => setRoomMessages([])}
                                title="Delete messages"
                                aria-label="delete room messages"
                            >
                                <div className='text-white font-medium'>
                                    <LucideDelete />
                                </div>
                            </button>
                        ) : (
                            <>
                                <button
                                    className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                                    onClick={() => {
                                        setIsRoomMessage(false);
                                        setIsPublic(false);
                                        setIsModalOpen(true);
                                    }}
                                    title="Fetch private messages"
                                >
                                    <div className='text-white font-medium'>
                                        <GalleryVerticalEnd />
                                    </div>
                                </button>
                                <button
                                    className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 transition-all"
                                    onClick={() => {
                                        setIsPublic(true);
                                        setIsRoomMessage(false);
                                        setIsModalOpen(true);
                                    }}
                                    title="Fetch public messages"
                                >
                                    <div className='text-white font-medium'>
                                        <EarthIcon />
                                    </div>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 w-full max-w-5xl mt-4">
                {/* Info */}
                <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Messages</h2>
                    <p className="text-gray-600 dark:text-gray-300">View and manage your room messages.</p>
                </div>

                {/* Messages */}
                <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md space-y-4">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4">
                            <div className="w-16 h-16 animate-spin rounded-full border-4 border-blue-400 border-t-transparent" />
                            <p className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">Fetching your messages...</p>
                            {slowConnection && (
                                <p className="text-sm text-orange-500 dark:text-orange-300 animate-pulse">
                                    This is taking longer than usual. Please check your internet connection. 📶
                                </p>
                            )}
                        </div>
                    ) : roomMessages.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">No messages yet.</p>
                    ) : (
                        roomMessages.map((msg) => (
                            <RoomMessageCard 
                                downloadingFileId={downloadingFileId} 
                                key={msg.createdAt} 
                                message={msg} 
                                downloadedFileIds={downloadedFileIds}
                                onDownload={handleDownload}
                             />
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (!isRoomMessage ? (
                <RoomFormModal isPublic={isPublic} onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
            ) : (
                <MessageForm isRoomMessage={isRoomMessage} onClose={() => setIsModalOpen(false)} />
            ))}
        </div>
    );
};

export default RoomMessagesLayout;
