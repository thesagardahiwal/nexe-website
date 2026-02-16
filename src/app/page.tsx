import Link from "next/link";
import PageBackground from "@/components/PageBackground";

const visionSignals = [
  {
    title: "Anonymous by Default",
    description:
      "Identity is optional. Sharing works with private identifiers and minimal metadata.",
  },
  {
    title: "Security by Design",
    description:
      "Encryption, compartmentalization, and rigorous threat modeling from day one.",
  },
  {
    title: "Minimal Data Retention",
    description:
      "Data expires or is user-controlled, reducing exposure and compliance risk.",
  },
];

const products = [
  {
    name: "Nexe",
    tagline: "Anonymous Secure Sharing",
    description:
      "A frictionless way to share files and messages without accounts, powered by private IDs.",
    href: "/nexe",
  },
  {
    name: "NexConnect",
    tagline: "Anonymous Communication Platform",
    description:
      "Encrypted channels for teams, communities, and partners who demand confidentiality.",
    href: "https://nexconnect-sigma.vercel.app/",
    external: true,
  },
];

const securityCommitments = [
  "Zero-knowledge data handling with encrypted payloads end-to-end.",
  "Ephemeral storage with transparent retention controls.",
  "Infrastructure segmentation to reduce blast radius.",
  "Continuous security testing and privacy reviews.",
];

const projectPreviews = [
  {
    name: "Lab Briefs",
    focus: "Curated engineering narratives",
    summary:
      "Structured presentations that detail architecture, security, and product thinking.",
  },
  {
    name: "System Blueprints",
    focus: "Privacy-first infrastructure",
    summary:
      "Deep dives into how we build secure systems without exposing sensitive details.",
  },
  {
    name: "Research Summaries",
    focus: "Innovation signals",
    summary:
      "High-level insights into the roadmap and strategic direction behind our products.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Nexe Technologies · A Sprition Company
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-white">
              Building Privacy-First Digital Infrastructure
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Nexe Technologies builds secure, privacy-driven platforms for
              anonymous communication and data sharing.
            </p>
            <div className="mt-6 inline-flex">
              <Link
                href="/announce"
                className="glass-card px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200/80 hover:text-white transition animate-fade-up anim-delay-100"
              >
                We’ve launched our Innovation Initiative →
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/#products"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Explore Products
              </Link>
              <Link
                href="/innovation"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                View Innovation
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {visionSignals.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Our Philosophy
            </h2>
            <p className="mt-5 text-slate-300 text-lg">
              We believe privacy should be the default setting for modern
              communication. Nexe Technologies designs infrastructure that makes
              anonymous sharing and secure collaboration feel effortless.
            </p>
            <p className="mt-4 text-slate-400">
              Our products remove friction, reduce exposure, and keep control in
              the hands of the user.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Privacy-First Architecture",
                detail:
                  "Products are built to operate without persistent identity or unnecessary metadata.",
              },
              {
                title: "Trust Through Transparency",
                detail:
                  "Clear controls for data retention, access, and deletion are standard.",
              },
              {
                title: "Resilient Delivery",
                detail:
                  "Systems remain reliable even on shared or constrained devices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="page-section">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Products Overview
              </h2>
              <p className="mt-4 text-slate-300">
                Two focused platforms, one shared commitment to privacy-first
                infrastructure.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.name}
                className="glass-card p-8 animate-fade-up anim-delay-200"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                  {product.tagline}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-4 text-slate-300">{product.description}</p>
                {product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
                  >
                    Visit product →
                  </a>
                ) : (
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
                  >
                    Explore product →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Security Commitment
            </h2>
            <p className="mt-5 text-slate-300">
              We embed privacy into the product lifecycle: from architecture and
              encryption to operational practices and retention controls.
            </p>
          </div>
          <div className="glass-card p-6 animate-fade-up anim-delay-200">
            <ul className="space-y-4 text-sm text-slate-300">
              {securityCommitments.map((item) => (
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
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Innovation Showcase
              </h2>
              <p className="mt-4 text-slate-300">
                A curated preview of our Innovation Lab, highlighting how we
                document privacy-first engineering decisions.
              </p>
            </div>
            <Link
              href="/innovation"
              className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 hover:text-white"
            >
              View all innovation
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projectPreviews.map((project) => (
              <div
                key={project.name}
                className="glass-card p-6 animate-fade-up anim-delay-200"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {project.focus}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-white/5 via-white/5 to-cyan-500/10 animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">
              Parent Company
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
              About Sprition
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Sprition is the parent organization guiding Nexe Technologies with
              long-term capital, governance, and a focus on privacy-first
              innovation. Together we build resilient, trusted infrastructure
              for the next generation of digital communication.
            </p>
            <a
              href="https://sprition.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-cyan-200 hover:text-white"
            >
              Learn about Sprition →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
