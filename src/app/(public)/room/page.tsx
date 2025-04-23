'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import RoomFormModal from '@/features/room/components/RoomFormModal'; // You'll create this
import { JoystickIcon, LucideDelete } from 'lucide-react';
import { fetchRoomMessages } from "@/features/room/libs/api"
import toast from 'react-hot-toast';
import { RoomMessage } from '@/types';
import RoomMessageCard from '@/features/room/components/RoomMessages';


const RoomMessagesLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomMessages, setRoomMessages] = useState<RoomMessage[]>([]);
    const handleSubmit = async (submitData: { username: string; privateId: string; contactNo: string }) => {
        try {
            const { success, data, message } = await fetchRoomMessages({ ...submitData });
            console.log("Fetched room messages:", data);
            if (success) {
                setRoomMessages(data as unknown as RoomMessage[]);
                toast.success(message || "Room messages fetched successfully!");
            };
        } catch (error) {
            console.log("Error fetching room messages:", error);
        }
    }
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
                        {roomMessages.length > 0 ? (
                            <button
                                className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
                                onClick={() => setRoomMessages([])}
                                title="Start new chat"
                                aria-label="Start new chat"
                            >
                                <div className='text-white font-medium'>
                                    <LucideDelete />
                                </div>
                            </button>
                        ) : (
                            <button
                                className="text-transparent cursor-pointer bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
                                onClick={() => setIsModalOpen(true)}
                                title="Start new chat"
                                aria-label="Start new chat"
                            >
                                <div className='text-white font-medium'>
                                    <JoystickIcon />
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Messages</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Here you can view and manage your room messages. Click the button above to start a new chat.
                </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-full max-w-5xl p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-4">
                {roomMessages.map((msg) => (
                    <RoomMessageCard key={msg.createdAt} message={msg} />
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <RoomFormModal onSubmit={handleSubmit} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default RoomMessagesLayout;
