'use client';

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-100 px-6 py-12 max-w-4xl mx-auto relative">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400 relative ">
        Privacy Policy for Nexe
      </h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 relative ">
        Last Updated: April 30, 2025
      </p>

      <p className="mb-6 relative">
        Welcome to <strong>Nexe</strong>. We take your privacy seriously. This policy outlines how we collect, store, and use your information while ensuring full transparency and user control.
      </p>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Private ID & Username:</strong> Required for communication. These are never made public or shared without your action.
          </li>
          <li>
            <strong>Guest Messages:</strong> Temporarily stored for delivery and never permanently saved or analyzed.
          </li>
          <li>
            <strong>Media Files:</strong> Encrypted and accessible only to the intended recipient.
          </li>
          <li>
            <strong>Room Access:</strong> Requires Private ID, Username, and Contact Number; data is used momentarily and never retained.
          </li>
          <li>
            <strong>Optional Usage Data:</strong> Anonymized for improving performance. Never sold or linked to your identity.
          </li>
        </ul>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To verify users and allow access to services</li>
          <li>To deliver messages and files securely</li>
          <li>To improve app reliability and performance</li>
          <li>To support temporary cross-device access (Room)</li>
        </ul>
        <p className="mt-4">
          We <strong>do not track you</strong>, and we <strong>never sell or rent your data</strong>.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>
          We use trusted services such as Google, GitHub, Appwrite, Expo, and Firebase to enable functionality. These providers handle data according to their own privacy policies.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          Nexe uses end-to-end encryption, HTTPS, and secure storage practices. While no system is entirely immune, we follow best practices to safeguard your data.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          We store data only as long as it is needed for operation. Guest messages are deleted after delivery. Deleting your Private ID or account removes all associated data.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          You may delete your account and associated data at any time. You can also contact us to request data deletion or ask questions about our practices.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Sharing of Private ID and Public ID</h2>
        <p>
          <strong>Do not share your Private ID or Public ID with strangers.</strong> These IDs are meant to help students and teachers exchange files and academic materials securely.
          Nexe is designed for use in an educational context—not for private or sensitive communication.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          Email: <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:dahiwalsagar07@gmail.com">support@nexe.co.in</a>
        </p>
        <p>
          Website: <a className="text-blue-600 dark:text-blue-400 underline" href="https://nexe.in">https://nexe.in</a>
        </p>
      </section>

      <section className="relative ">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as our app evolves. Any significant changes will be communicated via our app or website.
        </p>
      </section>
    </div>
  );
}
