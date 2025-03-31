'use client';

import { motion } from 'framer-motion';

export default function Features() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-6 pb-20 text-center relative overflow-hidden">
      
      {/* Floating Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="mt-20 max-w-4xl"
      >
        <h1 className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400">
          Nexe Features
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Seamless & secure messaging with **private ID-based sharing**. Communicate effortlessly without login barriers.
        </p>
      </motion.div>

      {/* Features Section - Floating & Natural */}
      <div className="mt-16 flex flex-wrap justify-center gap-16 w-full max-w-5xl relative">
        {[
          { title: "Guest Message Sharing", description: "Send messages & media to private IDs **without OTP, sign-up, or login**. Share files instantly from any device, even anonymously." },
          { title: "Secure Media Sharing", description: "End-to-end encrypted image, video, and document sharing with **private access controls**." },
          { title: "Group Messaging", description: "Create private chat rooms with **secure, invite-only access**." },
          { title: "Cloud Backups", description: "Encrypted backups ensure **your data is safe and accessible anywhere**." },
          { title: "Multi-Device Support", description: "Access messages & media across **multiple devices seamlessly**." },
          { title: "Real-Time Sync", description: "Instant synchronization across devices for **a seamless experience**." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.2, type: 'spring', damping: 15 }}
            className="relative text-center"
          >
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{feature.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-lg">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Download CTA - Floating & Glowing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15, delay: 1.6 }}
        className="mt-20 relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200px] h-[200px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>
        </div>
        <button className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl">
          Download Nexe Now
        </button>
      </motion.div>

    </div>
  );
}
