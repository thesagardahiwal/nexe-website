'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AuthChoice() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-10/12 mx-auto text-center">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="text-white font-bold text-4xl mb-6"
      >
        Welcome to Nexe
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="text-gray-300 text-lg mb-8"
      >
        Continue as a guest or sign in to unlock full features.
      </motion.p>

      {/* Buttons */}
      <div className='w-[50%] mx-auto'>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 15, delay: 0.7 }}
            className="w-full flex flex-col space-y-4"
        >
            <button
            onClick={() => router.push('/guest')}
            className="w-full bg-gray-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
            Continue as Guest
            </button>
            <button
            onClick={() => router.push('/signin')}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
            Sign In
            </button>
            <button
            onClick={() => router.push('/signup')}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
            Sign Up
            </button>
        </motion.div>
      </div>
    </div>
  );
}
