'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const missionContent = {
    title: "Our Mission",
    description: "We believe in privacy-first messaging. With our private ID-based system, you can instantly connect without compromising your personal data.",
    emphasis: "Empowering seamless communication with full anonymity and security.",
    coreValues: [
      { key: "privacy", label: "Privacy", detail: "No personal data collection, no tracking, complete anonymity.", icon: "🛡️" },
      { key: "security", label: "Security", detail: "End-to-end encryption ensures total confidentiality.", icon: "🔐" },
      { key: "accessibility", label: "Accessibility", detail: "Instant connection without sign-ups or logins.", icon: "⚡" },
      { key: "innovation", label: "Innovation", detail: "Revolutionizing digital interactions with next-gen privacy tech.", icon: "🚀" }
    ],
    animation: { opacity: 0, y: 40 },
    transition: { delay: 0.6, type: "spring", damping: 15 }
  };

  const aboutNexe = {
    title: "About Nexe",
    tagline: "Revolutionizing communication with privacy-first technology.",
    description: "Nexe is a cutting-edge private messaging platform designed for seamless, secure, and unrestricted communication. No logins, no passwords—just pure connectivity.",
    highlights: [
      { key: "no-login", label: "No Logins Required", detail: "Communicate freely without creating an account or remembering passwords.", icon: "🔓" },
      { key: "private-ids", label: "Private ID-Based Messaging", detail: "Send messages securely using private IDs instead of phone numbers or emails.", icon: "🆔" },
      { key: "end-to-end", label: "End-to-End Encryption", detail: "Every message is encrypted, ensuring total privacy.", icon: "🔐" },
      { key: "global-access", label: "Global Accessibility", detail: "Use Nexe anywhere, on any device, without restrictions.", icon: "🌍" }
    ],
    animation: { opacity: 0, y: -30 },
    transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.3 }
  };
  


  return (
    <div className="relative flex flex-col items-center w-full max-w-5xl mx-auto px-6 pb-24 text-center overflow-hidden">

      {/* Floating Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-green-400 to-blue-500 blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[180px] h-[180px] bg-gradient-to-r from-pink-400 to-purple-500 blur-[100px] opacity-30 animate-pulse" />
      </div>

      {/* About Us Section */}
      <motion.div
        initial={aboutNexe.animation}
        animate={{ opacity: 1, y: 0 }}
        transition={aboutNexe.transition}
        className="relative mt-20 mx-auto max-w-4xl p-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-xl rounded-3xl text-center"
      >
        {/* Floating Background Effects */}
        <div className="absolute -top-12 left-1/3 w-36 h-36 bg-green-400 opacity-25 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-blue-400 opacity-20 blur-3xl pointer-events-none"></div>

        {/* Title & Tagline */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400">
          {aboutNexe.title}
        </h1>
        <p className="mt-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic font-medium">
          {aboutNexe.tagline}
        </p>

        {/* Description */}
        <p className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {aboutNexe.description}
        </p>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {aboutNexe.highlights.map((highlight) => (
            <div
              key={highlight.key}
              className="flex items-center p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <span className="text-3xl">{highlight.icon}</span>
              <div className="ml-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                  {highlight.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {highlight.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>


      {/* Mission Section */}
      <motion.div
        initial={missionContent.animation}
        animate={{ opacity: 1, y: 0 }}
        transition={missionContent.transition}
        className="relative mt-16 mx-auto max-w-4xl p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-2xl text-center"
      >
        {/* Floating Background Glow Effects */}
        <div className="absolute -top-10 left-1/3 w-40 h-40 bg-blue-400 opacity-30 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-400 opacity-20 blur-3xl pointer-events-none"></div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
          {missionContent.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {missionContent.description}
        </p>

        {/* Emphasized Statement */}
        <p className="mt-3 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 italic">
          {missionContent.emphasis}
        </p>

        {/* Core Values Section (Fully Responsive) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {missionContent.coreValues.map((value) => (
            <div
              key={value.key}
              className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <span className="text-3xl">{value.icon}</span>
              <div className="ml-4">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                  {value.label}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {value.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
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
              <span className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl shadow-md dark:from-pink-400 dark:to-purple-500">
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
