'use client';

import { useState } from 'react';
import TopViewInbox from '@/features/guest/components/TopView';
import UnknownMessageForm from '@/components/UnknownMessageForm';
import { motion } from 'framer-motion';

const UnknownMessagesLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col justify-start items-center h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
            </div>
            {/* Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
                className="w-full max-w-5xl p-1 bg-transparent dark:bg-gray-800 rounded-b-xl shadow-lg"
            >
                <TopViewInbox
                    title="Guest Messages"
                    onPress={() => setIsModalOpen(true)}
                />
            </motion.div>

            {/* Message Form Modal */}
            {isModalOpen &&
                <UnknownMessageForm onClose={() => setIsModalOpen(false)} />
            }
        </div>
    );
};

export default UnknownMessagesLayout;
