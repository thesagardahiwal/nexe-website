import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Innovation Announcement",
  description:
    "Nexe Technologies announces its Innovation Initiative: structured, transparent engineering presentations for privacy-first architecture.",
};

const whyPoints = [
  "Privacy-first infrastructure demands clarity, not obscurity.",
  "Architecture deserves documentation that is structured and decision-ready.",
  "Products earn trust when their thinking is visible.",
  "Innovation should be visible without compromising protection.",
];

const expectations = [
  "Problem Statement",
  "Market Gap",
  "System Architecture",
  "Security Model",
  "Tech Stack",
  "Business Thinking",
  "Future Vision",
];

const commitments = [
  "We will never expose sensitive data or operational secrets.",
  "All presentations are sanitized and security-aware.",
  "Privacy-first principles remain non-negotiable.",
  "Transparency is delivered without compromising protection.",
];

export default function AnnouncementPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
              Innovation Initiative
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground">
              Engineering in the Open.
            </h1>
            <p className="mt-6 text-lg text-muted">
              At Nexe Technologies, we believe innovation should be transparent,
              structured, and impactful.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Explore Innovation
              </Link>
              <Link
                href="/security"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/30 dark:hover:text-white"
              >
                View Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Why We’re Doing This
            </h2>
            <p className="mt-5 text-muted text-lg">
              Nexe Technologies is launching structured innovation briefs to
              showcase our architecture, product thinking, and privacy-first
              decisions. This is a strategic commitment to clarity and trust.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
              {whyPoints.map((item) => (
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
            What To Expect
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Each innovation presentation is designed to be investor-ready and
            engineering-grade, documenting the real thinking behind the product.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expectations.map((item) => (
              <div
                key={item}
                className="glass-card p-5 animate-fade-up anim-delay-200"
              >
                <div className="text-sm font-semibold text-foreground">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Our Commitment
            </h2>
            <p className="mt-4 text-muted">
              We will share the thinking behind our systems without compromising
              user safety. Transparency and protection will move together.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
              {commitments.map((item) => (
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
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Privacy-first. Innovation-driven. Structured by design.
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Explore Innovation →
              </Link>
              <Link
                href="/#products"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                Explore Products →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
