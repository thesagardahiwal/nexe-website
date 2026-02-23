'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import {
  STUDENT_PROGRAM_FORM_URL,
  studentProgramIntro,
  studentProgramAbout,
  studentProgramFramework,
  studentProgramTimeline,
  studentProgramRecognition,
  studentProgramSecurity,
} from "@/constant/data";

const SUBMISSION_KEY = "nexeStudentProgramSubmitted";

export default function AccessClient() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(SUBMISSION_KEY);
    if (stored === "true") {
      setSubmitted(true);
    }
  }, []);

  const handleSubmitted = () => {
    localStorage.setItem(SUBMISSION_KEY, "true");
    setSubmitted(true);
  };

  return (
    <main className="page-shell">
      <PageBackground />

      {/* <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Student Innovation Program
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              {studentProgramIntro.headline}
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              {studentProgramIntro.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#submission-form"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Submit Your Project
              </a>
              <a
                href="#framework"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                View Guidelines
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              About the Program
            </h2>
            <p className="mt-5 text-slate-300 text-lg">
              This program is designed for students who can communicate structured
              product thinking, system architecture, and security-aware design.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Structured Innovation Framework
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Submissions must follow this framework to ensure consistency and
            evaluation clarity.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studentProgramFramework.map((item) => (
              <div key={item} className="glass-card p-5 animate-fade-up anim-delay-200">
                <div className="text-sm font-semibold text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Innovation Cycle 01 Timeline
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {studentProgramTimeline.map((item) => (
              <div key={item.label} className="glass-card p-5 animate-fade-up anim-delay-200">
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {item.label}
                </div>
                <div className="mt-3 text-sm text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Recognition & Certification
            </h2>
            <p className="mt-4 text-slate-300">
              Selected projects will receive official recognition from Nexe
              Technologies.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {studentProgramRecognition.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      <section id="submission-form" className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card-lg p-6 md:p-8 animate-fade-up">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Submission Form
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-slate-100/80 overflow-hidden dark:bg-black/40">
              <iframe
                title="Student Innovation Program Submission"
                src={STUDENT_PROGRAM_FORM_URL}
                className="w-full min-h-[620px]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleSubmitted}
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                I&apos;ve submitted my project
              </button>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                We will review your submission and respond by email.
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 animate-fade-up anim-delay-200">
              <h2 className="text-xl font-semibold text-foreground">Privacy Note</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {studentProgramSecurity.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 animate-fade-up anim-delay-300">
              <h2 className="text-xl font-semibold text-foreground">Submission Status</h2>
              {submitted ? (
                <div className="mt-4 text-muted">
                  <div className="text-sm uppercase tracking-[0.3em] text-accent/80">
                    Submission Received
                  </div>
                  <p className="mt-3 text-sm">
                    Thank you. Our team will review your submission.
                  </p>
                  <Link
                    href="/innovation/lab"
                    className="mt-4 inline-flex text-sm text-accent hover:text-foreground"
                  >
                    Explore the Innovation Showcase →
                  </Link>
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  Submit the form to complete your entry.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-slate-200/60 via-white/40 to-cyan-200/40 animate-fade-up dark:from-white/5 dark:via-white/5 dark:to-cyan-500/10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Privacy-first. Innovation-driven. Structured by design.
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                Back to Innovation
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
