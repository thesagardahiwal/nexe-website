import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-100 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Privacy Policy for Nexe</h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">Last Updated: April 30, 2025</p>

      <p className="mb-6">
        Welcome to <strong>Nexe</strong>. Your privacy and security are at the core of our values. This Privacy Policy
        describes how we collect, use, and protect your information when you use our application and services.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
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

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Authenticate users</li>
          <li>Deliver messages and media</li>
          <li>Improve performance and features</li>
          <li>Provide cross-device syncing (Room access)</li>
        </ul>
        <p className="mt-4">We do not sell your data, track you, or show advertisements.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>
          We use services from Google, GitHub, Appwrite, Expo, and Firebase. They have their own privacy policies for
          data handling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          We use end-to-end encryption, secure HTTPS, and regular security audits. While we do our best, no system is
          100% secure.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          We keep data only as long as needed. Deleting your Private ID or account deletes your data. Guest messages are
          not stored permanently.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>You can delete your account at any time. You can also contact us to request data deletion.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:nexemessages@gmail.com">nexemessages@gmail.com</a></p>
        <p>Website: <a className="text-blue-600 dark:text-blue-400 underline" href="https://nexe.vercel.app">https://nexe.vercel.app</a></p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. You’ll be notified via the app or our website in case of
          major changes.
        </p>
      </section>
    </div>
  );
}
