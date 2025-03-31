'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="flex p-10 flex-col items-center w-full max-w-6xl mx-auto px-6 pb-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Main Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="text-5xl font-extrabold text-white text-center"
      >
        Privacy & Security
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.5 }}
        className="mt-4 text-lg text-white text-center"
      >
        At Nexe, your privacy is our top priority. We ensure your messages and media are protected with state-of-the-art encryption.
      </motion.p>

      {/* Security Highlights Section */}
      <div className="mt-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.7 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-violet-400">
            🔐 End-to-End Encryption
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Every message and media file you send is encrypted, ensuring that only the recipient can access it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 1 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-violet-400">
            🕵️ No Data Collection
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We do not store or track your messages, media, or user activity—your data remains completely private.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 1.3 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-violet-400">
            ❌ No OTPs, No Signups
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            You can share files and messages instantly using a private ID, without the hassle of signups, logins, or OTP verification.
          </p>
        </motion.div>
      </div>

      {/* Final Assurance */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
        className="mt-12 text-lg text-white text-center"
      >
        With Nexe, you stay in control of your privacy. We believe in a secure and frictionless communication experience.
      </motion.p>
    </div>
  );
}
