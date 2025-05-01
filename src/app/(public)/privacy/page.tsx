'use client';

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-100 px-6 py-12 max-w-4xl mx-auto relative">
      {/* Animated Background Div */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
        className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 relative z-10"
      >
        Privacy Policy for Nexe
      </motion.h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 relative z-10">Last Updated: April 30, 2025</p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mb-6 relative z-10"
      >
        Welcome to <strong>Nexe</strong>. Your privacy and security are at the core of our values. This Privacy Policy
        describes how we collect, use, and protect your information when you use our application and services.
      </motion.p>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Information We Collect
        </motion.h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account Information:</strong> We collect your Private ID and Username. If you use Google or GitHub
            login, your email is used solely for authentication.
          </li>
          <li>
            <strong>Guest Messages:</strong> Stored temporarily for delivery. No sender data is saved.
          </li>
          <li>
            <strong>Media Files:</strong> Securely stored for recipient access only. No scanning or usage beyond delivery.
          </li>
          <li>
            <strong>Room Access:</strong> Web access requires Private ID, Username, and Contact No. Not stored permanently.
          </li>
          <li>
            <strong>Usage Data:</strong> Optional and anonymized, only used to improve the app.
          </li>
        </ul>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          How We Use Your Data
        </motion.h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Authenticate users</li>
          <li>Deliver messages and media</li>
          <li>Improve performance and features</li>
          <li>Provide cross-device syncing (Room access)</li>
        </ul>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4"
        >
          We do not sell your data, track you, or show advertisements.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Third-Party Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          We use services from Google, GitHub, Appwrite, Expo, and Firebase. They have their own privacy policies for
          data handling.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Data Security
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          We use end-to-end encryption, secure HTTPS, and regular security audits. While we do our best, no system is
          100% secure.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Data Retention
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          We keep data only as long as needed. Deleting your Private ID or account deletes your data. Guest messages are
          not stored permanently.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Your Rights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          You can delete your account at any time. You can also contact us to request data deletion.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Sharing of Private ID and Public ID
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          To maintain the privacy and security of your communication, <strong>do not share your Private ID or Public ID with unknown persons</strong>.
          These IDs are intended to be shared only with trusted individuals such as <strong>college friends</strong> or <strong>teachers</strong> in order to exchange academic documents, assignments, and other related media.
        </motion.p>
      </section>

      <section className="mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          Email: <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:dahiwalsagar07@gmail.com">dahiwalsagar07@gmail.com</a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          Website: <a className="text-blue-600 dark:text-blue-400 underline" href="https://nexe.vercel.app">https://nexe.vercel.app</a>
        </motion.p>
      </section>

      <section className="relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-semibold mb-4"
        >
          Changes to This Policy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          We may update this Privacy Policy from time to time. You’ll be notified via the app or our website in case of
          major changes.
        </motion.p>
      </section>
    </div>
  );
}
