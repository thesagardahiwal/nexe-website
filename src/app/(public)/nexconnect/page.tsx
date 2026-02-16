import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "NexConnect",
  description:
    "NexConnect is an anonymous communication platform for regulated teams and high-stakes collaboration.",
};

const keyFeatures = [
  "Encrypted channels with role-based access control.",
  "Secure file handoff with automatic expiry policies.",
  "Verified device sessions and session revocation.",
  "Context-aware compliance controls and audit trails.",
  "Low-friction onboarding for partners and vendors.",
];

const securityArchitecture = [
  "End-to-end encryption for messages and attachments.",
  "Zero-trust session boundaries with continuous verification.",
  "Compartmentalized storage and key rotation.",
  "Policy-driven retention and export controls.",
];

const useCases = [
  {
    title: "Executive Briefings",
    detail:
      "Distribute sensitive updates to leadership without persistent chat logs.",
  },
  {
    title: "Client Collaboration",
    detail:
      "Secure vendor interactions that require audited communication histories.",
  },
  {
    title: "Incident Response",
    detail:
      "Coordinate responders quickly with encrypted, temporary channels.",
  },
];

const roadmap = [
  {
    phase: "Now",
    detail: "Secure onboarding kits, compliance exports, and improved analytics.",
  },
  {
    phase: "Next",
    detail: "Confidential voice and video sessions with ephemeral storage.",
  },
  {
    phase: "Future",
    detail: "Cross-organization federation with decentralized key custody.",
  },
];

export default function NexConnectPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 animate-fade-up">
            Product
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white animate-fade-up anim-delay-100">
            NexConnect
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl animate-fade-up anim-delay-200">
            Anonymous communication platform built for regulated teams and
            high-stakes collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up anim-delay-300">
            <a
              href="https://nexconnect-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
            >
              Launch NexConnect
            </a>
            <Link
              href="/security"
              className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-100 font-semibold hover:border-cyan-300 hover:text-white transition"
            >
              Security Architecture
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
              Traditional collaboration tools leak metadata, store data for too
              long, or require access models that do not scale to sensitive work.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Solution Overview
            </h2>
            <p className="mt-4 text-slate-300">
              NexConnect provides encrypted, policy-driven communication layers
              with auditable access and strong compliance controls.
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
              Every interaction is verified, encrypted, and governed by policy
              to maintain control over sensitive communications.
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
              Build secure communication for every stakeholder
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              NexConnect provides policy-driven collaboration without
              compromising confidentiality or compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Explore Deployments
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/40 hover:text-white transition"
              >
                Talk to Nexe Technologies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
