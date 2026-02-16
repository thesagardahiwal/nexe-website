'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Send, Clock3 } from 'lucide-react';
import PageBackground from '@/components/PageBackground';
import TopViewInbox from '@/features/guest/components/TopView';
import MessageForm from '@/features/guest/components/MessageForm';

const GuestMessagesLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-2xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Guest Messaging
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              Send Anonymous Messages Instantly
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              Share files or messages using a Private ID. No logins, no accounts,
              just secure, encrypted delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Compose Message
              </button>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                Security Architecture
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Anonymous by Default',
                detail: 'No personal identifiers are required to send or receive.',
                icon: ShieldCheck,
              },
              {
                title: 'Encrypted Delivery',
                detail: 'Messages are encrypted before they ever leave your device.',
                icon: Send,
              },
              {
                title: 'Minimal Retention',
                detail: 'Guest data is ephemeral and can be deleted anytime.',
                icon: Clock3,
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 animate-fade-up anim-delay-200">
                <item.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card p-6 md:p-8 animate-fade-up">
            <TopViewInbox title="Guest Messages" onPress={() => setIsModalOpen(true)} />
            <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-semibold text-white">How it works</h2>
                <p className="mt-4 text-slate-300">
                  Enter the recipient&apos;s Private ID, attach optional media, and
                  send. Nexe encrypts your payload and delivers it securely.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {[
                    'No account required for guest senders.',
                    'Supports documents, images, and video attachments.',
                    'Recipient receives messages instantly in their inbox.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white">Ready to send?</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Use the compose button to create a new guest message and deliver
                  it securely.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full rounded-full bg-cyan-500 px-6 py-3 text-slate-950 font-semibold hover:bg-cyan-400 transition"
                >
                  Open Composer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <MessageForm isRoomMessage={false} onClose={() => setIsModalOpen(false)} />}
    </main>
  );
};

export default GuestMessagesLayout;
