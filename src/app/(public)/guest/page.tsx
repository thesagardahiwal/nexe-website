'use client';

import { useEffect, useState, useCallback } from 'react';
import { getUnknownMessages } from '@/libs/appwrite/api';
import { useAuth } from '@/context/authContext';
import MessageCard from '@/features/guest/components/MessageCard';
import TopViewInbox from '@/features/guest/components/TopView';
import UnknownMessageForm from '@/components/UnknownMessageForm';
import Modal from '@/components/Modal';
import { Models } from 'appwrite';

const UnknownMessagesLayout = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<Models.Document[]>([]);
  const { user } = useAuth();

  // Fetch user messages
  const fetchMyMessages = async () => {
    if (!user?.privateId) return;
    setLoading(true);
    try {
      const response = await getUnknownMessages(user.privateId);
      setMessages(response.documents);
    } catch (error) {
      console.error('Error fetching spam messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyMessages();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#00011c] min-h-screen p-4">
      {/* Top Bar */}
      <TopViewInbox 
        title="Spam Messages" 
        fetchMyMessages={fetchMyMessages} 
        loading={loading} 
        onPress={() => setIsModalOpen(true)}
      />

      {/* Message Form Modal */}
      <Modal 
            isOpen={isModalOpen} 
            title='' 
            children={
                <UnknownMessageForm 
                    onClose={() => setIsModalOpen(false)}
                />} 
            onClose={() => setIsModalOpen(false)}
        />
      {/* Messages List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-400 text-lg">No messages yet</p>
            </div>
          ) : (
            messages.map((item, index) => (
              <MessageCard key={index} item={item} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default UnknownMessagesLayout;