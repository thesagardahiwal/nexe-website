import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Security & Privacy",
  description:
    "Security and privacy philosophy for Nexe Technologies, including principles and architecture highlights.",
};

const principles = [
  {
    title: "Anonymous Sharing Model",
    detail:
      "Sharing is anchored to private IDs, not personal accounts or identifiers.",
  },
  {
    title: "No Personal Data Exposure",
    detail:
      "We avoid collecting names, emails, or phone numbers unless absolutely required.",
  },
  {
    title: "Minimal Retention",
    detail:
      "Data is ephemeral by default and can be deleted on demand without shadow copies.",
  },
  {
    title: "Encryption Architecture",
    detail:
      "Client-side encryption, secure transport, and rotating keys protect every payload.",
  },
  {
    title: "Privacy-First Philosophy",
    detail:
      "Every workflow is evaluated for privacy impact before it ships.",
  },
];

const lifecycle = [
  {
    step: "Ingest",
    detail: "Client-side encryption and validation before storage.",
  },
  {
    step: "Store",
    detail: "Isolated storage with policy-driven TTL and access logging.",
  },
  {
    step: "Share",
    detail: "Scoped access using private identifiers and ephemeral links.",
  },
  {
    step: "Expire",
    detail: "Automatic cleanup and user-triggered deletion workflows.",
  },
];

const architecture = [
  "End-to-end encryption with rotating keys and secure envelopes.",
  "Service isolation and least-privilege access controls.",
  "Continuous monitoring with anomaly detection and audit logging.",
  "Regular security reviews, testing, and incident response runbooks.",
];

export default function SecurityPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 animate-fade-up">
            Security & Privacy
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white animate-fade-up anim-delay-100">
            Security & Privacy Philosophy
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl animate-fade-up anim-delay-200">
            Our architecture assumes sensitive data should be protected by
            default. We build privacy into every layer of the stack so people can
            share confidently.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Core Principles
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Data Lifecycle
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {lifecycle.map((item) => (
              <div
                key={item.step}
                className="glass-card p-5 animate-fade-up anim-delay-200"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  {item.step}
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Architecture Highlights
            </h2>
            <p className="mt-4 text-slate-300">
              We combine cryptographic controls, infrastructure isolation, and
              operational discipline to minimize risk.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {architecture.map((item) => (
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
          <div className="glass-card-lg p-10 bg-gradient-to-r from-white/5 via-white/5 to-cyan-500/10 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Explore products built on these guarantees
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Review how Nexe and NexConnect translate these principles into
              real-world workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/nexe"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Nexe Product
              </Link>
              <a
                href="https://nexconnect-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/40 hover:text-white transition"
              >
                NexConnect Product
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
