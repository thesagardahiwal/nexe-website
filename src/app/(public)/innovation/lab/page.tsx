import type { Metadata } from "next";
import PageBackground from "@/components/PageBackground";
import { innovationShowcase } from "@/constant/data";

export const metadata: Metadata = {
  title: "Innovation Showcase",
  description:
    "Innovation Showcase highlighting structured, privacy-conscious engineering submissions.",
};

export default function InnovationLabPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
              Innovation Showcase
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground">
              Student Innovation Highlights
            </h1>
            <p className="mt-6 text-lg text-muted">
              A curated selection of student submissions demonstrating structured
              product thinking, system architecture, and privacy-aware design.
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
                  <div className="text-xs uppercase tracking-[0.3em] text-accent/70">
                    {initiative.tagline}
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-foreground">
                    {initiative.name}
                  </h2>
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Recognition Brief
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-3 text-muted">{initiative.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Market Gap
                  </h3>
                  <p className="mt-3 text-muted">{initiative.marketGap}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    System Architecture
                  </h3>
                  <p className="mt-3 text-muted">{initiative.architecture}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Tech Stack
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {initiative.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-white/80 px-3 py-1 text-xs text-muted dark:bg-white/5"
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
                  <p className="mt-3 text-muted">{initiative.securityModel}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Business Thinking
                  </h3>
                  <p className="mt-3 text-muted">{initiative.businessVision}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Future Vision
                  </h3>
                  <p className="mt-3 text-muted">{initiative.roadmap}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
