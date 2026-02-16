import React from "react";
import PageBackground from "@/components/PageBackground";

export default function PrivacyPolicy() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container-narrow">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 animate-fade-up">
            Legal
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold text-white animate-fade-up anim-delay-100">
            Privacy Policy for NEXE
          </h1>
          <p className="mt-3 text-sm text-slate-400 animate-fade-up anim-delay-200">
            Last Updated: December 4, 2025
          </p>
          <p className="mt-6 text-slate-300 animate-fade-up anim-delay-300">
            Welcome to <strong>NEXE</strong>. We are committed to providing a
            secure and anonymous messaging platform. This policy explains how we
            protect your privacy and handle your data while giving you full
            control over your identity.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container-narrow space-y-8 text-slate-300">
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                <strong>Private ID & Public ID:</strong> Used to separate your
                private and public communications. These IDs are never linked to
                personal identifiers.
              </li>
              <li>
                <strong>Username:</strong> Only required for account access. No
                email or phone number is needed.
              </li>
              <li>
                <strong>Guest Messages:</strong> Temporarily stored for delivery
                and encrypted. Guests do not need accounts to send messages.
              </li>
              <li>
                <strong>Files & Attachments:</strong> Encrypted and accessible
                only to the intended recipient (up to 50MB per file).
              </li>
              <li>
                <strong>Optional Usage Data:</strong> Fully anonymized, used only
                to improve app performance. Never linked to your identity or
                sold.
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">How We Use Your Data</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Enable anonymous communication and message delivery</li>
              <li>Support cross-device message access</li>
              <li>Ensure security through encryption and authentication</li>
              <li>Maintain ephemeral guest data only for session duration</li>
            </ul>
            <p className="mt-4 text-sm">
              We <strong>do not collect personal identifiers</strong> and
              <strong> never sell or rent your data</strong>.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
            <p className="mt-4 text-sm">
              NEXE uses trusted services such as Firebase, Vercel, and other
              secure platforms to enable functionality. These providers manage
              data according to their own privacy policies.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Data Security</h2>
            <p className="mt-4 text-sm">
              All messages and files are protected with end-to-end encryption. We
              use secure storage practices and HTTPS connections. You remain in
              control of your data at all times, including remote deletion
              capabilities.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Data Retention</h2>
            <p className="mt-4 text-sm">
              Messages and files are stored only as long as necessary for
              delivery. Users can delete messages at any time, and guest messages
              are automatically cleared after viewing. Deleting your account
              removes all associated data permanently.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Your Rights</h2>
            <p className="mt-4 text-sm">
              You may delete your account or any messages at any time. Contact us
              to request data deletion or inquire about privacy practices.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Using Private & Public IDs</h2>
            <p className="mt-4 text-sm">
              Your <strong>Private ID</strong> is for secure, personal
              communication, while your <strong>Public ID</strong> can share
              select messages publicly. Do not share your Private ID with unknown
              parties. Public messages are visible to anyone with your Public ID.
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <p className="mt-4 text-sm">
              Email: <a className="text-cyan-200 hover:text-white" href="mailto:hello.sprition@gmail.com">hello.sprition@gmail.com</a>
            </p>
            <p className="text-sm">
              Website: <a className="text-cyan-200 hover:text-white" href="https://nexe.in">https://nexe.in</a>
            </p>
          </div>

          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
            <p className="mt-4 text-sm">
              We may update this Privacy Policy as the platform evolves.
              Significant changes will be communicated via our app or website.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
