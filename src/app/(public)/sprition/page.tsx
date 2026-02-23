import type { Metadata } from "next";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Sprition",
  description:
    "Sprition is the parent organization supporting Nexe Technologies with governance and long-term strategy.",
};

const focusAreas = [
  {
    title: "Long-Term Stewardship",
    detail:
      "Sprition provides durable capital and governance to protect mission focus.",
  },
  {
    title: "Privacy-First Portfolio",
    detail:
      "Nexe Technologies is a core product company within the Sprition ecosystem.",
  },
  {
    title: "Shared Infrastructure",
    detail:
      "Centralized security, legal, and compliance resources accelerate execution.",
  },
];

export default function SpritionPage() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="text-xs uppercase tracking-[0.35em] text-accent/70 animate-fade-up">
            Parent Company
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground animate-fade-up anim-delay-100">
            Sprition
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl animate-fade-up anim-delay-200">
            Sprition is the parent organization supporting Nexe Technologies with
            strategic oversight, capital, and a long-term privacy mission.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 animate-fade-up anim-delay-200"
            >
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Relationship to Nexe Technologies
            </h2>
            <p className="mt-4 text-muted">
              Sprition operates as a parent company similar to a holding studio,
              enabling Nexe Technologies to focus on product excellence while
              benefiting from shared governance and long-term strategy.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-muted">
              {[
                "Centralized risk management and compliance oversight.",
                "Shared research into privacy-first infrastructure.",
                "Operational support across security, legal, and finance.",
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
          <div className="glass-card-lg p-10 bg-gradient-to-r from-slate-200/60 via-white/40 to-cyan-200/40 animate-fade-up dark:from-white/5 dark:via-white/5 dark:to-cyan-500/10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Build with Nexe Technologies
            </h2>
            <p className="mt-4 text-muted max-w-2xl">
              Learn how the Sprition portfolio is delivering privacy-first
              infrastructure through Nexe and NexConnect.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/nexe"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Nexe Product
              </Link>
              <Link
                href="/nexconnect"
                className="px-6 py-3 rounded-full border border-border text-slate-700 hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                NexConnect Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
