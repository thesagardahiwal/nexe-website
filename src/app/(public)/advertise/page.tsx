'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import appIcon from "@/app/favicon.ico";
import darkModeIcon from "@/assets/Dark-Mode.ico"

export default function AppDownload() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-16 text-center overflow-hidden">
      {/* Floating Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text dark:from-pink-400">
          Download the Nexe App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Get the full Nexe experience with fast, secure messaging right on your device.
        </p>
      </motion.div>

      {/* App Image & Play Store Button */}
      <div className="mt-12 space-y-8 flex flex-col items-center justify-center">
        {/* App Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg dark:bg-gray-900"
        >
          <Image
            src={appIcon} // Example app image (adjust path as needed)
            alt="Nexe App Image"
            width={350}
            height={650}
            className="w-full dark:hidden h-auto rounded-lg shadow-xl"
          />
          <Image
            src={darkModeIcon} // Example app image (adjust path as needed)
            alt="Nexe app image"
            width={350}
            height={650}
            className="w-full dark:block hidden h-auto rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Play Store Button */}
        <motion.a
          href="https://drive.google.com/file/d/1WCF08DFK6g81RsPAbUnTLmTp-xV-a6Rx/view?ts=67f8f03a" // Replace with actual link to Play Store
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', damping: 15 }}
          className="mt-6 px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white shadow-md hover:scale-105 transition-transform hover:shadow-2xl"
        >
          Download
        </motion.a>
      </div>
    </div>
  );
}
