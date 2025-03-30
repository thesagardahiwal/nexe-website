'use client';

import { useState } from 'react';
import TopViewInbox from '@/features/guest/components/TopView';
import UnknownMessageForm from '@/components/UnknownMessageForm';
import Modal from '@/components/Modal';

const UnknownMessagesLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col items-center bg-[#00011c] min-h-screen p-4">
            {/* Top Bar */}
            <TopViewInbox
                title="Spam Messages"
                fetchMyMessages={() => { }}
                loading={false}
                onPress={() => setIsModalOpen(true)}
            />

            {/* Message Form Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <UnknownMessageForm onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default UnknownMessagesLayout;