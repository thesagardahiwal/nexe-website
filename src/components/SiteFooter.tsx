import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-card text-foreground backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold text-foreground">Nexe Technologies</div>
          <p className="text-sm text-muted">
            Privacy-first digital infrastructure for anonymous sharing and secure
            communication.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-accent/60">
            Sprition Company
          </p>
        </div>

        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Company</div>
          <Link href="/about" className="block hover:text-slate-900 dark:hover:text-white">
            About
          </Link>
          <Link href="/innovation" className="block hover:text-slate-900 dark:hover:text-white">
            Innovation
          </Link>
          <a
            href="https://sprition.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-slate-900 dark:hover:text-white"
          >
            Sprition
          </a>
        </div>

        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Products</div>
          <Link href="/nexe" className="block hover:text-slate-900 dark:hover:text-white">
            Nexe
          </Link>
          <a
            href="https://nexconnect-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-slate-900 dark:hover:text-white"
          >
            NexConnect
          </a>
          <Link href="/security" className="block hover:text-slate-900 dark:hover:text-white">
            Security
          </Link>
        </div>

        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Legal</div>
          <Link href="/privacy" className="block hover:text-slate-900 dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/security" className="block hover:text-slate-900 dark:hover:text-white">
            Security & Privacy Philosophy
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200/60 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
          <span>© {year} Nexe Technologies. All rights reserved.</span>
          <span>Built under Sprition.</span>
        </div>
      </div>
    </footer>
  );
}
