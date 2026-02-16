import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Nexe",
  description:
    "Nexe is an anonymous secure sharing product for frictionless delivery of files and messages.",
};

const keyFeatures = [
  "Anonymous sharing with private IDs instead of personal accounts.",
  "Guest message flow for fast file delivery on shared devices.",
  "Multi-format media support with encrypted payloads.",
  "Room-based persistence for messages that must live longer.",
  "Cross-device access without identity exposure.",
];

const securityArchitecture = [
  "Client-side encryption before transmission.",
  "Ephemeral storage policies with automated expiry windows.",
  "Isolated storage buckets per private ID.",
  "Metadata minimization and audit logging.",
];

const useCases = [
  {
    title: "Campus & Lab Sharing",
    detail:
      "Move files from shared machines to personal devices without logging in.",
  },
  {
    title: "Anonymous Feedback",
    detail:
      "Collect feedback or whistleblower messages without exposing identity.",
  },
  {
    title: "Event Operations",
    detail:
      "Distribute schedules and updates to attendees without a signup barrier.",
  },
];

const roadmap = [
  {
    phase: "Now",
    detail: "Expanded guest flows, improved file integrity checks, and new admin tools.",
  },
  {
    phase: "Next",
    detail: "Private ID federation for teams and shared organizations.",
  },
  {
    phase: "Future",
    detail: "Offline-first sync and hardware-backed encryption.",
  },
];

export default function NexePage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 animate-fade-up">
            Product
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white animate-fade-up anim-delay-100">
            Nexe
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl animate-fade-up anim-delay-200">
            Anonymous data sharing product built for secure, frictionless
            delivery of files and messages.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up anim-delay-300">
            <Link
              href="/guest"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
            >
              Send a Guest Message
            </Link>
            <Link
              href="/doc"
              className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-100 font-semibold hover:border-cyan-300 hover:text-white transition"
            >
              Explore Documentation
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Problem Statement
            </h2>
            <p className="mt-4 text-slate-300">
              Most sharing tools require accounts, introduce identity risk, or
              leave behind data trails that users cannot control. Nexe was built
              for environments where privacy and speed matter equally.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Solution Overview
            </h2>
            <p className="mt-4 text-slate-300">
              Nexe enables users to exchange messages and files via private IDs.
              The flow is anonymous, encrypted, and designed for shared devices
              or public terminals.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Key Features</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 text-slate-300">
            {keyFeatures.map((feature) => (
              <li
                key={feature}
                className="glass-card p-5 animate-fade-up anim-delay-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Security Architecture
            </h2>
            <p className="mt-4 text-slate-300">
              Privacy is preserved through encryption, isolation, and minimal
              metadata collection.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {securityArchitecture.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Use Cases</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{useCase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Roadmap</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {roadmap.map((item) => (
              <div
                key={item.phase}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  {item.phase}
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-white/5 via-white/5 to-cyan-500/10 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Start sharing without compromising privacy
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Launch Nexe in minutes and deliver content securely without forcing
              users through account creation or identity exposure.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/guest"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Try Guest Sharing
              </Link>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/40 hover:text-white transition"
              >
                Review Security
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
