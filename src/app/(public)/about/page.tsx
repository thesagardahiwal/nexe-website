import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nexe Technologies, a privacy-first product company under Sprition.",
};

const values = [
  {
    title: "Privacy First",
    detail: "We design systems that protect identity and minimize exposure.",
  },
  {
    title: "Security by Design",
    detail: "Encryption, isolation, and policy controls are non-negotiable.",
  },
  {
    title: "Operational Clarity",
    detail: "Clear retention policies and user controls create durable trust.",
  },
  {
    title: "Product Simplicity",
    detail: "Powerful capabilities delivered with minimal friction for users.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70 animate-fade-up">
            About
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white animate-fade-up anim-delay-100">
            Nexe Technologies
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl animate-fade-up anim-delay-200">
            Nexe Technologies is a privacy-first product company within Sprition,
            focused on building anonymous sharing and secure communication
            platforms for modern digital infrastructure.
          </p>
          <a
            href="https://sprition.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
          >
            Visit Sprition →
          </a>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Mission</h2>
            <p className="mt-4 text-slate-300">
              Build systems that let people share information without sacrificing
              privacy. We remove identity friction while strengthening trust,
              enabling secure collaboration in everyday workflows.
            </p>
            <p className="mt-4 text-slate-400">
              Our teams focus on privacy-first architecture, minimal data
              retention, and human-centered UX.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Operating Model
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              {[
                "Product-first teams embedded with security expertise.",
                "Shared infrastructure and governance through Sprition.",
                "Continuous research into privacy-preserving workflows.",
              ].map((item) => (
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Values</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-6 md:grid-cols-2">
          <div className="glass-card p-8 animate-fade-up anim-delay-200">
            <h3 className="text-xl font-semibold text-white">Nexe</h3>
            <p className="mt-4 text-slate-300">
              Anonymous data sharing built for fast, secure delivery of messages
              and files.
            </p>
            <Link
              href="/nexe"
              className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
            >
              Explore Nexe →
            </Link>
          </div>
          <div className="glass-card p-8 animate-fade-up anim-delay-200">
            <h3 className="text-xl font-semibold text-white">NexConnect</h3>
            <p className="mt-4 text-slate-300">
              Anonymous communication platform for teams who operate in regulated
              or high-risk environments.
            </p>
            <a
              href="https://nexconnect-sigma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
            >
              Explore NexConnect →
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-white/5 via-white/5 to-cyan-500/10 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              See how we build
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Review our innovation briefs and security philosophy to
              understand how Nexe Technologies delivers trusted infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                View Innovation
              </Link>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/40 hover:text-white transition"
              >
                Security Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
