import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import NexeScreenshots from "@/components/NexeScreenshots";

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
          <div className="text-xs uppercase tracking-[0.35em] text-accent/70 animate-fade-up">
            Product
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground animate-fade-up anim-delay-100">
            Nexe
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl animate-fade-up anim-delay-200">
            Anonymous data sharing product built for secure, frictionless
            delivery of files and messages.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up anim-delay-300">
            <Link
              href="/guest?compose=1"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
            >
              Send a Guest Message
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 rounded-full border border-border text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
            >
              Create Account
            </Link>
            <Link
              href="/doc"
              className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-700 font-semibold hover:border-cyan-400 hover:text-cyan-800 transition dark:text-cyan-100 dark:hover:text-white"
            >
              Explore Documentation
            </Link>
            <a
              href="https://expo.dev/artifacts/eas/pVCDh2fJwMELjyyaah2rVP.apk"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-border text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
            >
              Download APK
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Nexe Actions</h2>
          <p className="mt-4 text-muted max-w-2xl">
            Launch secure workflows instantly — send messages, fetch rooms, or
            download the app for continuous access.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Send Guest Message",
                detail: "Deliver a message or file using a private ID.",
                href: "/guest?compose=1",
                cta: "Compose Guest Message",
              },
              {
                title: "Send Room Message",
                detail: "Publish a message directly into a private room.",
                href: "/room?mode=send",
                cta: "Send Room Message",
              },
              {
                title: "Fetch Room Messages",
                detail: "Access private room messages with your credentials.",
                href: "/room?mode=private",
                cta: "Fetch Private Room",
              },
              {
                title: "Fetch Public Messages",
                detail: "Retrieve public room messages with a public ID.",
                href: "/room?mode=public",
                cta: "Fetch Public Room",
              },
              {
                title: "Download Nexe App",
                detail: "Install the mobile app for continuous access.",
                href: "/advertise",
                cta: "Download App",
              },
              {
                title: "Download APK",
                detail: "Grab the latest APK build for Android devices.",
                href: "https://expo.dev/artifacts/eas/pVCDh2fJwMELjyyaah2rVP.apk",
                cta: "Download APK",
                external: true,
              },
            ].map((action) => (
              <div key={action.title} className="glass-card p-6 animate-fade-up anim-delay-200">
                <h3 className="text-lg font-semibold text-foreground">{action.title}</h3>
                <p className="mt-3 text-sm text-muted">{action.detail}</p>
                {action.external ? (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm text-accent hover:text-foreground"
                  >
                    {action.cta} →
                  </a>
                ) : (
                  <Link
                    href={action.href}
                    className="mt-5 inline-flex text-sm text-accent hover:text-foreground"
                  >
                    {action.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                App Screenshots
              </h2>
              <p className="mt-4 text-muted max-w-2xl">
                A quick look at the Nexe mobile experience, from onboarding to
                secure sharing.
              </p>
            </div>
            <Link
              href="/advertise"
              className="text-sm uppercase tracking-[0.3em] text-accent/80 hover:text-foreground"
            >
              View Download Page
            </Link>
          </div>
          <div className="mt-10">
            <NexeScreenshots />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Problem Statement
            </h2>
            <p className="mt-4 text-muted">
              Most sharing tools require accounts, introduce identity risk, or
              leave behind data trails that users cannot control. Nexe was built
              for environments where privacy and speed matter equally.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Solution Overview
            </h2>
            <p className="mt-4 text-muted">
              Nexe enables users to exchange messages and files via private IDs.
              The flow is anonymous, encrypted, and designed for shared devices
              or public terminals.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Key Features</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 text-muted">
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Security Architecture
            </h2>
            <p className="mt-4 text-muted">
              Privacy is preserved through encryption, isolation, and minimal
              metadata collection.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Use Cases</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-3 text-sm text-muted">{useCase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Roadmap</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {roadmap.map((item) => (
              <div
                key={item.phase}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-accent/70">
                  {item.phase}
                </div>
                <p className="mt-3 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-slate-200/60 via-white/40 to-cyan-200/40 animate-fade-up dark:from-white/5 dark:via-white/5 dark:to-cyan-500/10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Start sharing without compromising privacy
            </h2>
            <p className="mt-4 text-muted max-w-2xl">
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
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
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
