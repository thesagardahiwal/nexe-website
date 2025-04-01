'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Features() {
    const featuresList = [
        {
          title: "Guest Message Sharing",
          icon: "📩",
          description: {
            core: "Share messages and media using private IDs—**no OTPs, no sign-ups, no hassle**.",
            detail: "Simply enter a private ID, send messages, and instantly share files across devices.",
            usability: "Perfect for quick and anonymous communication.",
          },
          benefit: "Quick and easy sharing without creating an account.",
          security: "Private ID-based delivery with no stored metadata."
        },
        {
          title: "Secure Media Sharing",
          icon: "🔒",
          description: {
            core: "Encrypt images, videos, and documents with **end-to-end security**.",
            detail: "Set **custom access controls** to manage who can view and download your media.",
            usability: "Ideal for secure document and media transfers."
          },
          benefit: "Protect sensitive files from unauthorized access.",
          security: "AES-256 encryption with access expiration controls."
        },
        {
          title: "Group Messaging",
          icon: "👥",
          description: {
            core: "Host private conversations in **secure, invite-only rooms**.",
            detail: "No unwanted guests—just a trusted space for important discussions.",
            usability: "Great for work teams, family groups, or private networks."
          },
          benefit: "Create exclusive chat groups for focused discussions.",
          security: "Invite-based access with encrypted message storage."
        },
        {
          title: "Cloud Backups",
          icon: "☁️",
          description: {
            core: "Never lose your messages or media—**secure backups keep everything safe**.",
            detail: "Your data is encrypted and **accessible only by you** across devices.",
            usability: "Ensures peace of mind for long-term message retention."
          },
          benefit: "Automatic backup ensures messages are never lost.",
          security: "Encrypted cloud storage with zero-knowledge architecture."
        },
        {
          title: "Multi-Device Sync",
          icon: "📱💻",
          description: {
            core: "Seamlessly access your messages and files across all your devices.",
            detail: "Real-time updates ensure your data stays synchronized without delay.",
            usability: "Switch between mobile, tablet, and desktop effortlessly."
          },
          benefit: "Stay connected whether on mobile, tablet, or desktop.",
          security: "Device-based authentication with secure session management."
        },
        {
          title: "Instant Real-Time Sync",
          icon: "⚡",
          description: {
            core: "Enjoy **lightning-fast synchronization** across all your devices.",
            detail: "Built on a **low-latency WebSockets architecture** to eliminate lag.",
            usability: "Perfect for business and high-speed communications."
          },
          benefit: "No lag, no waiting—instant updates everywhere.",
          security: "WebSockets-based real-time updates with low latency."
        }
      ];

      const nexeFeaturesContent = {
        title: "Nexe Features",
        subtitle: "Seamless & Secure Messaging",
        gradientColors: {
          light: "from-green-400 to-blue-500",
          dark: "from-pink-400 to-purple-500"
        },
        description: {
          short: "Private ID-based messaging—no logins, no passwords.",
          details: "Nexe ensures instant communication without the need for sign-ups. Share messages and media with full privacy.",
          benefits: [
            "No need for email or phone numbers.",
            "End-to-end encrypted conversations.",
            "Lightning-fast message delivery."
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
                {/* Floating Effects for Modern Look */}
                <div className="absolute -top-10 left-1/4 w-24 h-24 bg-blue-400 opacity-30 blur-2xl pointer-events-none"></div>
                <div className="absolute top-5 right-1/3 w-32 h-32 bg-green-400 opacity-20 blur-3xl pointer-events-none"></div>

                {/* Title with Gradient */}
                <h1 className={`text-6xl font-extrabold tracking-wide bg-gradient-to-r ${nexeFeaturesContent.gradientColors.light} dark:${nexeFeaturesContent.gradientColors.dark} text-transparent bg-clip-text`}>
                    {nexeFeaturesContent.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
                    {nexeFeaturesContent.subtitle}
                </h2>

                {/* Description */}
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {nexeFeaturesContent.description.short}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-md">
                    {nexeFeaturesContent.description.details}
                </p>

                {/* Key Benefits */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {nexeFeaturesContent.description.benefits.map((benefit, index) => (
                        <div key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200 shadow-md">
                            {benefit}
                        </div>
                    ))}
                </div>
            </motion.div>


            {/* Features Section - Floating & Natural */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.3 }}
                className="mt-16 w-full max-w-6xl mx-auto px-6 pb-20 relative"
            >
                {/* Floating Background Effects */}
                <div className="absolute -top-12 left-1/3 w-36 h-36 bg-green-400 opacity-25 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-28 h-28 bg-blue-400 opacity-20 blur-3xl pointer-events-none"></div>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {featuresList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.2, type: 'spring', damping: 15 }}
                            className="relative bg-white/5 dark:bg-gray-900 p-6 rounded-3xl shadow-sm hover:shadow-[0px] transform transition-transform hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="text-5xl">{feature.icon}</div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4">
                                {feature.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 mt-3">
                                {feature.description.core}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                                {feature.description.detail}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1 italic text-xs">
                                {feature.description.usability}
                            </p>

                            {/* Benefits & Security */}
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
                <Link href={'/advertise'} className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl">
                    Download Nexe Now
                </Link>
            </motion.div>

        </div>
    );
}
