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
        Privacy Policy for NEXE
      </h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 relative ">
        Last Updated: December 4, 2025
      </p>

      <p className="mb-6 relative">
        Welcome to <strong>NEXE</strong>. We are committed to providing a secure and anonymous messaging platform. This policy explains how we protect your privacy and handle your data while giving you full control over your identity.
      </p>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Private ID & Public ID:</strong> Used to separate your private and public communications. These IDs are never linked to personal identifiers.
          </li>
          <li>
            <strong>Username:</strong> Only required for account access. No email or phone number is needed.
          </li>
          <li>
            <strong>Guest Messages:</strong> Temporarily stored for delivery and encrypted. Guests do not need accounts to send messages.
          </li>
          <li>
            <strong>Files & Attachments:</strong> Encrypted and accessible only to the intended recipient (up to 50MB per file).
          </li>
          <li>
            <strong>Optional Usage Data:</strong> Fully anonymized, used only to improve app performance. Never linked to your identity or sold.
          </li>
        </ul>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enable anonymous communication and message delivery</li>
          <li>Support cross-device message access</li>
          <li>Ensure security through encryption and authentication</li>
          <li>Maintain ephemeral guest data only for session duration</li>
        </ul>
        <p className="mt-4">
          We <strong>do not collect personal identifiers</strong> and <strong>never sell or rent your data</strong>.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>
          NEXE uses trusted services such as Firebase, Vercel, and other secure platforms to enable functionality. These providers manage data according to their own privacy policies.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          All messages and files are protected with end-to-end encryption. We use secure storage practices and HTTPS connections. You remain in control of your data at all times, including remote deletion capabilities.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          Messages and files are stored only as long as necessary for delivery. Users can delete messages at any time, and guest messages are automatically cleared after viewing. Deleting your account removes all associated data permanently.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          You may delete your account or any messages at any time. Contact us to request data deletion or inquire about privacy practices.
        </p>
      </section>

      <section className="mb-10 relative">
        <h2 className="text-2xl font-semibold mb-4">Using Private & Public IDs</h2>
        <p>
          Your <strong>Private ID</strong> is for secure, personal communication, while your <strong>Public ID</strong> can share select messages publicly. Do not share your Private ID with unknown parties. Public messages are visible to anyone with your Public ID.
        </p>
      </section>

      <section className="mb-10 relative ">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          Email: <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:thesagardahiwal@gmail.com">thesagardahiwal@gmail.com</a>
        </p>
        <p>
          Website: <a className="text-blue-600 dark:text-blue-400 underline" href="https://nexe.in">https://nexe.in</a>
        </p>
      </section>

      <section className="relative ">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as the platform evolves. Significant changes will be communicated via our app or website.
        </p>
      </section>
    </div>
  );
}
