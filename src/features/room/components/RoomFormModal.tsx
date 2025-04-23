'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

interface RoomFormModalProps {
  onClose: () => void;
  onSubmit: (data: { username: string; privateId: string; contactNo: string }) => void;
}

const RoomFormModal: React.FC<RoomFormModalProps> = ({ onClose, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [privateId, setPrivateId] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [errors, setErrors] = useState<{ username?: string; privateId?: string; contactNo?: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!privateId.trim()) newErrors.privateId = 'Private ID is required';
    if (!/^\d+$/.test(contactNo.trim())) newErrors.contactNo = 'Contact No must be numbers only';
    if (!contactNo.trim()) newErrors.contactNo = 'Contact No is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setLoading(true);
    onSubmit({
      username: username.trim(),
      privateId: privateId.trim().toLowerCase().replace(/\s/g, ''),
      contactNo: contactNo.trim(),
    });
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        className="bg-white dark:bg-zinc-800 mx-4 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-5"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Enter Room Info</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                let cleanedText = e.target.value.toLowerCase().replace(/\s/g, '');
                setUsername(cleanedText);
                if (errors.username) setErrors(prev => ({ ...prev, username: undefined }));
              }}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Private ID</label>
            <input
              type="text"
              value={privateId}
              onChange={(e) => {
                const formatted = e.target.value.toLowerCase().replace(/\s/g, '');
                setPrivateId(formatted);
                if (errors.privateId) setErrors(prev => ({ ...prev, privateId: undefined }));
              }}
              placeholder="Enter Private ID"
              className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none"
            />
            {errors.privateId && <p className="text-red-500 text-sm mt-1">{errors.privateId}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact No</label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, '');
                setContactNo(onlyDigits);
                if (errors.contactNo) setErrors(prev => ({ ...prev, contactNo: undefined }));
              }}
              placeholder="Enter contact number"
              inputMode="numeric"
              className="w-full p-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none"
            />
            {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || !username.trim() || !privateId.trim() || !contactNo.trim()}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        <Toaster position="top-right" />
      </motion.div>
    </div>
  );
};

export default RoomFormModal;
