'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { encryptMessage } from '@/utils/encryption';

interface RoomFormModalProps {
  onClose: () => void;
  onSubmit: (data: { username: string; privateId: string; publicId?: string }) => void;
  isPublic: boolean;
  loading:boolean
}

const RoomFormModal: React.FC<RoomFormModalProps> = ({ onClose, onSubmit, isPublic, loading }) => {
  const [username, setUsername] = useState('');
  const [privateId, setPrivateId] = useState('');
  const [errors, setErrors] = useState<{ username?: string; privateId?: string; contactNo?: string }>({});

  const validateInputs = () => {
    const trimmedPrivateId = privateId.trim().toLowerCase().replace(/\s/g, '');
    const newErrors: { username?: string; privateId?: string; contactNo?: string } = {};
    if (!trimmedPrivateId || trimmedPrivateId.length < 6) {
      newErrors.privateId = 'Private ID must be at least 6 characters long.';
    }
    setErrors(newErrors);
    if (isPublic) {
      return true;
    }
    const trimmedUsername = username.trim().toLowerCase().replace(/\s/g, '');


    if (!trimmedUsername || trimmedUsername.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.';
    }

    if (/^\d/.test(trimmedUsername)) {
      newErrors.username = 'Username cannot start with a number.';
    }

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    onSubmit({
      username: isPublic ? "" : encryptMessage(username.trim()),
      privateId: isPublic ? "" : encryptMessage(privateId.trim().toLowerCase().replace(/\s/g, '')),
      ...(isPublic ? {publicId: encryptMessage(privateId.trim().toLowerCase().replace(/\s/g, ''))} : {})
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 dark:bg-black/70">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        className="mx-4 w-full max-w-md space-y-5 p-6 glass-card shadow-[0_0_40px_rgba(14,165,233,0.16)] dark:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
      >
        <h2 className="text-xl font-semibold text-foreground">Enter Room Info</h2>

        <div className="space-y-4">
          {!isPublic && (
              <div>
                <label className="block text-sm font-medium text-muted mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase().replace(/\s/g, '');
                    setUsername(value);
                    if (errors.username) setErrors(prev => ({ ...prev, username: undefined }));
                  }}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-200/70 bg-slate-100/80 p-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-black/40 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
          )}

          <div>
            <label className="block text-sm font-medium text-muted mb-1">{isPublic ? "Public" : "Private"} ID</label>
            <input
              type="text"
              value={privateId}
              onChange={(e) => {
                setPrivateId(e.target.value.toLowerCase().replace(/\s/g, ''));
                if (errors.privateId) setErrors(prev => ({ ...prev, privateId: undefined }));
              }}
              placeholder={`Enter ${isPublic ? "Public" : "Private"} ID`}
              className="w-full rounded-lg border border-slate-200/70 bg-slate-100/80 p-3 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-white/10 dark:bg-black/40 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            {errors.privateId && <p className="text-red-500 text-sm mt-1">{errors.privateId}</p>}
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-slate-200/70 bg-white/80 px-4 py-2 font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || !privateId.trim() || (!isPublic && (!username.trim()))}
            className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoomFormModal;
