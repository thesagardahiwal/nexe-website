'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RoomFormModal from '@/features/room/components/RoomFormModal'; // You'll create this
import { LucideDelete, SendIcon, GalleryVerticalEnd, EarthIcon } from 'lucide-react';
import { fetchPublicRoomMessages, fetchRoomMessages } from "@/features/room/libs/api"
import toast from 'react-hot-toast';
import { RoomMessage } from '@/types';
import RoomMessageCard from '@/features/room/components/RoomMessages';
import MessageForm from '@/features/guest/components/MessageForm';


const RoomMessagesLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);
    const [loading, setLoading] = useState<boolean>(false);               // 🆕 loading flag
    const [isRoomMessage, setIsRoomMessage] = useState<boolean>(false);       // 🆕 room message flag
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const handleSubmit = async (data: { username: string; privateId: string; contactNo: string, publicId?: string }) => {
        try {
            setLoading(true);                                        // start
            const response = data.publicId ? await fetchPublicRoomMessages({publicId: data.publicId}) : await fetchRoomMessages(data);
            if (!response || !response.success) {
                toast.error(response?.message || 'Unable to fetch messages');
                return;
            }
            if (response && response.success) {
                setRoomMessages(response.data);                     // set messages
                toast.success('Messages fetched successfully');
            }
            
        } catch (err) {
            console.error('Error fetching room messages:', err);
            toast.error('Unable to fetch messages');
        } finally {
            setLoading(false);                                       // stop
        }
    };


    const handleDownload = async (fileId: string, fileName: string) => {
        const res = await fetch(`/api/appwrite/download?id=${fileId}&name=${encodeURIComponent(
            fileName,
        )}`);
        if (!res.ok) return;
        // Directly get the URL from the response text (no need for JSON parsing)
        const url = await res.text(); // Will be the raw URL

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className="flex flex-col justify-start items-center min-h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
            {/* Animated Gradient Background */}
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
                            className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
                            onClick={() => {
                                setIsRoomMessage(true);
                                setIsModalOpen(() => true);
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
                                className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
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
                                    className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
                                    onClick={() => {
                                        setIsRoomMessage(false);
                                        setIsPublic(false);
                                        setIsModalOpen(true)
                                    }}
                                    title="Start fetch private messages"
                                    aria-label="Start fetch private messages"
                                >
                                    <div className='text-white font-medium'>
                                        <GalleryVerticalEnd />
                                    </div>
                                </button>
                                <button
                                    className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
                                    onClick={() => {
                                        setIsPublic(true);
                                        setIsRoomMessage(false);
                                        setIsModalOpen(true);
                                    }}
                                    title="Start fetch public messages"
                                    aria-label="Start fetch public messages"
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
                {/* Info card */}
                <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Messages
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        View and manage your room messages.
                    </p>
                </div>

                {/* Messages list */}
                <div className="p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md space-y-4">
                    {loading ? (
                        /* 🌀 Spinner */
                        <div className="flex justify-center py-10">
                            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : roomMessages.length === 0 ? (
                        <p className="text-center text-gray-500 dark:text-gray-400">No messages yet.</p>
                    ) : (
                        roomMessages.map((msg) => (
                            <RoomMessageCard key={msg.createdAt} message={msg} onDownload={handleDownload} />
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (!isRoomMessage ? (
                <RoomFormModal isPublic={isPublic} onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
            ) : (
                <MessageForm isRoomMessage={isRoomMessage} onClose={() => setIsModalOpen(false)}/>
            ) )}
        </div>
    );
};

export default RoomMessagesLayout;
