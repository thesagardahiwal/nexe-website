'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Features() {
    const featuresList = [
        {
          title: "Anonymous Messaging",
          icon: "🕵️‍♂️",
          description: {
            core: "Send and receive messages without revealing your identity—**no email or phone required**.",
            detail: "Users communicate via Private and Public IDs, keeping identity fully hidden.",
            usability: "Ideal for anonymous self-expression or private feedback."
          },
          benefit: "Express yourself freely without exposing personal details.",
          security: "Messages are end-to-end encrypted and tied only to IDs, not personal data."
        },
        {
          title: "Guest Messaging",
          icon: "📩",
          description: {
            core: "Receive encrypted messages from anyone using only your Private ID—**no account needed**.",
            detail: "Guests can send messages or files, which appear securely in your Private Inbox.",
            usability: "Perfect for collecting feedback or anonymous messages."
          },
          benefit: "Quick and secure sharing without requiring the sender to sign up.",
          security: "Guest messages are encrypted and automatically removable from their device."
        },
        {
          title: "Private & Public Rooms",
          icon: "🔑",
          description: {
            core: "Organize messages into Private or Public spaces.",
            detail: "Private rooms are accessible only via Private ID. Public messages can be shared selectively using Public ID.",
            usability: "Great for controlling visibility of messages and files."
          },
          benefit: "Decide which messages remain confidential and which can be shared publicly.",
          security: "Identity separation ensures private messages are never exposed unintentionally."
        },
        {
          title: "Secure File Sharing",
          icon: "🔒",
          description: {
            core: "Send files up to 50MB securely across devices.",
            detail: "All files are encrypted and accessible only to the intended recipient.",
            usability: "Useful for confidential document or media transfer."
          },
          benefit: "Protect sensitive files from unauthorized access.",
          security: "AES-256 encryption with access tied only to Private/Public IDs."
        },
        {
          title: "Cross-Device Sync",
          icon: "📱💻",
          description: {
            core: "Access your messages and files on multiple devices without login.",
            detail: "Real-time updates ensure your data stays synchronized securely.",
            usability: "Switch between mobile, tablet, and desktop effortlessly."
          },
          benefit: "Your messages follow you anywhere safely.",
          security: "Secure sessions and encrypted sync maintain data privacy."
        },
        {
          title: "Remote Delete",
          icon: "🗑️",
          description: {
            core: "Delete messages from guest devices instantly.",
            detail: "Ensure that your private content disappears from any external device after viewing.",
            usability: "Critical for maintaining full control over your information.",
          },
          benefit: "Keep your conversations under your control at all times.",
          security: "Encrypted messages can be wiped remotely to prevent leaks."
        }
    ];

    const nexeFeaturesContent = {
        title: "NEXE Features",
        subtitle: "Privacy-First & Anonymous Messaging",
        gradientColors: {
          light: "from-green-400 to-blue-500",
          dark: "from-pink-400 to-purple-500"
        },
        description: {
          short: "Private ID-based messaging—secure, anonymous, and cross-device.",
          details: "NEXE empowers users to communicate freely while maintaining full privacy. Share messages, files, and feedback safely with Private and Public ID separation.",
          benefits: [
            "No phone, email, or PII required.",
            "End-to-end encrypted messages and files.",
            "Instant real-time delivery across devices.",
            "Remote deletion for full control."
          ]
        }
    };

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
                className="mt-20 w-full max-w-4xl mx-auto text-center px-6"
            >
                <h1 className={`text-6xl font-extrabold tracking-wide bg-gradient-to-r ${nexeFeaturesContent.gradientColors.light} dark:${nexeFeaturesContent.gradientColors.dark} text-transparent bg-clip-text`}>
                    {nexeFeaturesContent.title}
                </h1>

                <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
                    {nexeFeaturesContent.subtitle}
                </h2>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {nexeFeaturesContent.description.short}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-md">
                    {nexeFeaturesContent.description.details}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {nexeFeaturesContent.description.benefits.map((benefit, index) => (
                        <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200 shadow-md">
                            {benefit}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.3 }}
                className="mt-16 w-full max-w-6xl mx-auto px-6 pb-20 relative"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {featuresList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.2, type: 'spring', damping: 15 }}
                            className="relative bg-white/5 dark:bg-gray-900 p-6 rounded-3xl shadow-sm hover:shadow-[0px] transform transition-transform hover:scale-105"
                        >
                            {/* <div className="text-5xl">{feature.icon}</div> */}

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4">
                                {feature.title}
                            </h2>

                            <p className="text-gray-700 dark:text-gray-300 mt-3">
                                {feature.description.core}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                                {feature.description.detail}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1 italic text-xs">
                                {feature.description.usability}
                            </p>

                            <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-xl">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Benefit:</strong> {feature.benefit}
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                                    <strong>Security:</strong> {feature.security}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 1.6 }}
                className="mt-20 relative"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse"></div>
                </div>
                <Link href={'/advertise'} className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl">
                    Download NEXE Now
                </Link>
            </motion.div>

        </div>
    );
}
