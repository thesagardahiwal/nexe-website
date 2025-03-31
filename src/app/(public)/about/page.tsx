'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto px-6 pb-24 text-center overflow-hidden">

      {/* Floating Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-green-400 to-blue-500 blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[180px] h-[180px] bg-gradient-to-r from-pink-400 to-purple-500 blur-[100px] opacity-30 animate-pulse" />
      </div>

      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="mt-20 max-w-3xl"
      >
        <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400">
          About Nexe
        </h1>
        <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          **Nexe** is a cutting-edge **private messaging platform** designed for **seamless, secure, and unrestricted** communication.
          No logins, no passwords—just pure connectivity.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring', damping: 15 }}
        className="mt-12 max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Our Mission
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We believe in **privacy-first messaging**. With our **private ID-based system**, you can instantly connect **without compromising your personal data**.
        </p>
      </motion.div>

      {/* Why Choose Nexe? */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, type: 'spring', damping: 15 }}
        className="mt-12 max-w-3xl"
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Why Choose Nexe?
        </h2>

        <div className="mt-6 space-y-6 text-lg text-gray-700 dark:text-gray-300">
          {[
            { icon: "🚀", title: "No Sign-ups, No Hassle", description: "Start messaging instantly using just a private ID—no accounts required." },
            { icon: "🔒", title: "End-to-End Encryption", description: "Your data is fully secured and private, safe from third parties." },
            { icon: "📁", title: "Instant Media Sharing", description: "Send files, images, and videos without any size restrictions." },
            { icon: "🌍", title: "Global Access, No Barriers", description: "Works seamlessly across all devices, ensuring universal connectivity." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 100 }}
              className="flex items-start space-x-4"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl shadow-md dark:from-pink-400 dark:to-purple-500">
                {feature.icon}
              </span>

              <div className="ml-4 text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Engaging CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15, delay: 1.2 }}
        className="mt-14 relative"
      >
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[150px] h-[150px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className="relative px-8 py-3 rounded-full font-bold text-lg shadow-lg bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Back to Home
        </Link>
      </motion.div>

    </div>
  );
}
