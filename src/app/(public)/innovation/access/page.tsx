'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import {
  INNOVATION_LAB_FORM_URL,
  innovationLabSecurity,
} from "@/constant/data";

const REQUEST_KEY = "nexeInnovationLabRequested";

export default function InnovationAccessPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(REQUEST_KEY);
    if (stored === "true") {
      setSubmitted(true);
    }
  }, []);

  const handleSubmitted = () => {
    localStorage.setItem(REQUEST_KEY, "true");
    setSubmitted(true);
  };

  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Innovation Lab Access
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              Request Access to the Innovation Lab
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Access is granted to developers, researchers, collaborators, and
              potential partners. Requests are reviewed manually.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                Back to Innovation
              </Link>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                Privacy Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card-lg p-6 md:p-8 animate-fade-up">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Registration Form
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
              <iframe
                title="Innovation Lab Registration"
                src={INNOVATION_LAB_FORM_URL}
                className="w-full min-h-[620px]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleSubmitted}
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                I&apos;ve submitted the form
              </button>
              <span className="text-sm text-slate-400">
                We will review your request and respond by email.
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 animate-fade-up anim-delay-200">
              <h2 className="text-xl font-semibold text-white">Security Note</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {innovationLabSecurity.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 animate-fade-up anim-delay-300">
              <h2 className="text-xl font-semibold text-white">Application Status</h2>
              {submitted ? (
                <div className="mt-4 text-slate-300">
                  <div className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                    Application Received
                  </div>
                  <p className="mt-3 text-sm">
                    Thank you. Our team will review your request.
                  </p>
                  <Link
                    href="/innovation/lab"
                    className="mt-4 inline-flex text-sm text-cyan-200 hover:text-white"
                  >
                    Check Innovation Lab status →
                  </Link>
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-300">
                  Submit the form to begin the approval process.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
