'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/theme-provider';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
      
      {/* Floating Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="mt-24 text-center"
      >
        <p className="text-gray-900 dark:text-gray-200 text-2xl">Welcome to</p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', damping: 10 }}
          className="font-extrabold text-8xl tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400"
        >
          Nexe
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          A seamless way to share messages and media securely.
        </p>
      </motion.div>

      {/* Features Section - Floating & Free-flowing */}
      <div className="mt-16 flex flex-wrap justify-center gap-16 w-full max-w-5xl relative">
        {[
          { title: "Stay Connected", description: "Chat and share moments effortlessly." },
          { title: "Secure & Private", description: "End-to-end encryption for total security." },
          { title: "Guest Messaging", description: "Send media to private IDs instantly." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2, type: 'spring', damping: 15 }}
            className="relative text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{feature.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Get Started Button - Most Important, Floating Effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15, delay: 1.6 }}
        className="mt-16 relative"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200px] h-[200px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>
        </div>
        <Link
          href={"/auth"}
          className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}
