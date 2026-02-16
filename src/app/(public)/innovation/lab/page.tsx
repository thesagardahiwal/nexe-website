'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";
import {
  innovationShowcase,
  INNOVATION_LAB_ACCESS_CODE,
} from "@/constant/data";

const REQUEST_KEY = "nexeInnovationLabRequested";
const ACCESS_KEY = "nexeInnovationLabAccess";

export default function InnovationLabPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [requested, setRequested] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const granted = localStorage.getItem(ACCESS_KEY) === "granted";
    const hasRequested = localStorage.getItem(REQUEST_KEY) === "true";
    setHasAccess(granted);
    setRequested(hasRequested);
  }, []);

  const handleAccess = () => {
    if (accessCode.trim().toLowerCase() === INNOVATION_LAB_ACCESS_CODE.toLowerCase()) {
      localStorage.setItem(ACCESS_KEY, "granted");
      setHasAccess(true);
      setError("");
      return;
    }
    setError("Invalid access code. Please check your email invite.");
  };

  if (!hasAccess) {
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
                Access Required
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                The Innovation Lab is a curated engineering showcase. Access is
                granted by approval to protect sensitive architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/innovation/access"
                  className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
                >
                  Request Access
                </Link>
                <Link
                  href="/innovation"
                  className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
                >
                  Back to Innovation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card p-6 animate-fade-up">
              <h2 className="text-xl font-semibold text-white">Have an access code?</h2>
              <p className="mt-3 text-sm text-slate-300">
                Access codes are delivered by email once your request is
                approved.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <input
                  value={accessCode}
                  onChange={(event) => setAccessCode(event.target.value)}
                  placeholder="Enter access code"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                {error && <span className="text-sm text-red-400">{error}</span>}
                <button
                  type="button"
                  onClick={handleAccess}
                  className="rounded-full bg-cyan-500 px-5 py-2.5 text-slate-950 font-semibold hover:bg-cyan-400 transition"
                >
                  Enter Lab
                </button>
              </div>
            </div>

            <div className="glass-card p-6 animate-fade-up anim-delay-200">
              <h2 className="text-xl font-semibold text-white">Access Status</h2>
              {requested ? (
                <p className="mt-3 text-sm text-slate-300">
                  Request received. Access will be granted after review.
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-300">
                  Submit a request to begin the approval process.
                </p>
              )}
              <p className="mt-4 text-xs text-slate-500">
                Access is granted manually to protect sensitive infrastructure.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

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
              Innovation Showcase
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Curated project presentations focused on privacy-first
              architecture, system design, and product strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-12">
          {innovationShowcase.map((initiative) => (
            <article
              key={initiative.name}
              className="glass-card-lg p-8 animate-fade-up anim-delay-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                    {initiative.tagline}
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    {initiative.name}
                  </h2>
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Confidential Brief
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Market Gap
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.marketGap}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    System Architecture
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.architecture}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Tech Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {initiative.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Security Model
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.securityModel}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Business Thinking
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.businessVision}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Future Vision
                  </h3>
                  <p className="mt-3 text-slate-300">{initiative.roadmap}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
