import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import {
  innovationLabIntro,
  innovationLabWhy,
  innovationLabInside,
  innovationLabSecurity,
  innovationLabAccessPolicy,
} from "@/constant/data";

export const metadata: Metadata = {
  title: "Innovation Lab",
  description:
    "Nexe Technologies Innovation Lab: a curated showcase of privacy-first engineering and system architecture research.",
};

export default function InnovationIntroPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Innovation Lab
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              {innovationLabIntro.headline}
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              {innovationLabIntro.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/innovation/access"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Request Access
              </Link>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                Learn About Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Why Innovation Matters
            </h2>
            <p className="mt-5 text-slate-300 text-lg">
              We believe the most important systems deserve intentional,
              transparent documentation. Innovation is not a marketing story — it
              is a disciplined record of decisions that shape privacy-first
              infrastructure.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {innovationLabWhy.map((item) => (
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            What You&apos;ll See Inside
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Each presentation is structured to be investor-ready and
            engineering-grade — no fluff, only the thinking that matters.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {innovationLabInside.map((item) => (
              <div key={item} className="glass-card p-5 animate-fade-up anim-delay-200">
                <div className="text-sm font-semibold text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Security Commitment
            </h2>
            <p className="mt-4 text-slate-300">
              Transparency does not mean exposure. Every release is reviewed for
              privacy impact and sanitized to protect users, systems, and
              partners.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {innovationLabSecurity.map((item) => (
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
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Access Policy
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              Curated access, intentional transparency
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {innovationLabAccessPolicy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/innovation/access"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Request Access
              </Link>
              <Link
                href="/announce"
                className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/40 hover:text-white transition"
              >
                Read the Announcement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
