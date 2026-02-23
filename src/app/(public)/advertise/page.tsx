import Image from "next/image";
import PageBackground from "@/components/PageBackground";
import screenshot1 from "@/assets/images/1.png";

const highlights = [
  {
    title: "Private by Default",
    detail: "Anonymous sharing and room messaging without identity exposure.",
  },
  {
    title: "Encrypted Delivery",
    detail: "Messages and media are protected end-to-end by default.",
  },
  {
    title: "Mobile-First Flows",
    detail: "Fast sharing, clean UX, and secure access on the go.",
  },
];

export default function AppDownload() {
  return (
    <main className="page-shell">
      <PageBackground />

      <section className="page-hero">
        <div className="page-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="animate-fade-up">
            <div className="text-xs uppercase tracking-[0.35em] text-accent/70">
              Nexe Mobile
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold text-foreground">
              Download the Nexe App
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl">
              Bring privacy-first sharing to your device. The Nexe app delivers
              secure, anonymous messaging with zero friction.
            </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://expo.dev/artifacts/eas/pVCDh2fJwMELjyyaah2rVP.apk"
              target="_blank"
              rel="noreferrer"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
              >
                Download APK
              </a>
            <a
              href="https://nexe.in"
              className="px-6 py-3 rounded-full border border-border text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
            >
              Visit Nexe.in
            </a>
            <a
              href="/auth/register"
              className="px-6 py-3 rounded-full border border-border text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
            >
              Create Account
            </a>
          </div>
        </div>

          <div className="glass-card-lg p-6 md:p-8 animate-fade-up anim-delay-200">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              App Preview
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={screenshot1}

                alt="Nexe mobile preview"
                className="w-full h-auto max-h-96 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Built for Secure Sharing
              </h2>
              <p className="mt-4 text-muted max-w-2xl">
                The Nexe app is optimized for anonymous collaboration, quick
                access, and privacy-first workflows.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="glass-card p-6 animate-fade-up anim-delay-200">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="glass-card-lg p-10 bg-gradient-to-r from-slate-200/60 via-white/40 to-cyan-200/40 animate-fade-up dark:from-white/5 dark:via-white/5 dark:to-cyan-500/10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Ready to go mobile?
            </h2>
            <p className="mt-4 text-muted max-w-2xl">
              Install the APK and experience Nexe on your device with full
              privacy-first protection.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://expo.dev/artifacts/eas/pVCDh2fJwMELjyyaah2rVP.apk"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Download APK
              </a>
              <a
                href="/security"
                className="px-6 py-3 rounded-full border border-border text-slate-700 font-semibold hover:border-slate-300 hover:text-slate-900 transition dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              >
                Review Security
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
