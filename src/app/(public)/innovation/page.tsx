import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import {
  studentProgramIntro,
  studentProgramAbout,
  studentProgramFramework,
  studentProgramTimeline,
  studentProgramRecognition,
  studentProgramSecurity,
} from "@/constant/data";

export const metadata: Metadata = {
  title: "Student Innovation Program",
  description:
    "Nexe Technologies Student Innovation Program – Cycle 01 for structured, privacy-conscious engineering submissions.",
};

export default function InnovationIntroPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
              Innovation Program
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground">
              {studentProgramIntro.headline}
            </h1>
            <p className="mt-6 text-lg text-muted">
              {studentProgramIntro.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/innovation/access"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Submit Your Project
              </Link>
              <Link
                href="#framework"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/30 dark:hover:text-white"
              >
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              About the Program
            </h2>
            <p className="mt-5 text-muted text-lg">
              This is a structured student innovation program focused on
              technical clarity, security-aware design, and product thinking.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
              {studentProgramAbout.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="framework" className="page-section">
        <div className="page-container">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Structured Innovation Framework
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Every submission must follow our structured framework to ensure
            clear, comparable engineering decisions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studentProgramFramework.map((item) => (
              <div key={item} className="glass-card p-5 animate-fade-up anim-delay-200">
                <div className="text-sm font-semibold text-foreground">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            Innovation Cycle 01 Timeline
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {studentProgramTimeline.map((item) => (
              <div key={item.label} className="glass-card p-5 animate-fade-up anim-delay-200">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.label}
                </div>
                <div className="mt-3 text-sm text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Recognition & Certification
            </h2>
            <p className="mt-4 text-muted">
              Selected projects receive official recognition based on technical
              depth and structured thinking.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
              {studentProgramRecognition.map((item) => (
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
          <div className="glass-card-lg p-10 bg-gradient-to-r from-slate-200/60 via-white/40 to-cyan-200/40 animate-fade-up dark:from-white/5 dark:via-white/5 dark:to-cyan-500/10">
            <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
              Privacy Commitment
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
              Transparency without compromising protection
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {studentProgramSecurity.map((item) => (
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
                Submit Your Project
              </Link>
              <Link
                href="/announce"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
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
