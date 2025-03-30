'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-end items-center h-screen w-10/12 mx-auto pb-20 relative">
      {/* Animated Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="absolute top-48 left-6"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="text-white text-2xl"
        >
          Welcome to
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', damping: 10 }}
          className="text-white font-bold text-7xl tracking-wide"
          style={{
            textShadow: '0px 5px 10px rgba(255, 255, 255, 0.5)'
          }}
        >
          Nexe
        </motion.h1>
      </motion.div>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15, delay: 1 }}
      >
        <Link
          href={"/guest"}
          className="mt-20 w-full bg-white px-6 py-3 rounded-full shadow-lg text-[#00011c] font-bold text-lg transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
}
