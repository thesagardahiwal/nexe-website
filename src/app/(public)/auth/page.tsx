'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AuthChoice() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden">
      
      {/* Floating Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="dark:text-white text-gray-900 font-bold text-4xl mb-6"
      >
        Welcome to Nexe
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="dark:text-gray-300 text-center text-gray-600 text-lg mb-8"
      >
        Continue as a guest or sign in {'('}in Mobile{')'} to unlock full features.
      </motion.p>

      {/* Buttons Section */}
      <div className='w-[50%] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 15, delay: 0.7 }}
          className="w-full flex flex-col space-y-4"
        >
          {/* Continue as Guest Button */}
          <button
            onClick={() => router.push('/guest')}
            className="w-fit text-nowrap cursor-pointer mx-auto bg-gray-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Continue as Guest
          </button>

          {/* Sign In Button (Optional) */}
          {/* <button
            onClick={() => router.push('/auth/signin')}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Sign In
          </button> */}
        </motion.div>
      </div>
    </div>
  );
}
