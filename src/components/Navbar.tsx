'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import lightModeLogo from "@/assets/Light-Mode.ico";
import darkModeLogo from "@/assets/Dark-Mode.ico";
import { useTheme } from "@/context/theme-provider";

type MenuKey = "products" | "company";

function Navbar() {
  const pathname = usePathname(); // Get current route
  const { resolvedTheme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuCloseTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = (menu: MenuKey) => {
    if (menuCloseTimer.current) {
      clearTimeout(menuCloseTimer.current);
      menuCloseTimer.current = null;
    }
    setOpenMenu(menu);
  };

  const closeDropdown = () => {
    if (menuCloseTimer.current) {
      clearTimeout(menuCloseTimer.current);
    }
    menuCloseTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 120);
  };

  const handleMenuBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setOpenMenu(null);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled
          ? "nav-glass shadow-[0_10px_30px_-24px_rgba(15,23,42,0.4)] dark:shadow-[0_10px_30px_-24px_rgba(0,0,0,0.7)]"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={darkModeLogo}
              className="hidden rounded-2xl dark:block"
              alt="logo for dark mode"
              height={50}
              width={50}
            />
            <Image
              src={lightModeLogo}
              className="rounded-2xl dark:hidden"
              alt="logo for light mode"
              height={50}
              width={50}
            />
            <div className="md:flex hidden flex-col leading-tight">
              <span className="font-semibold text-xl tracking-wide text-foreground">
                Nexe Technologies
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent/70">
                Sprition Company
              </span>
            </div>
          </Link>

          {/* Navbar Items for Medium Screens and Above */}
          <nav className="hidden md:flex-1 md:flex items-center justify-center" aria-label="Main navigation">
            <div className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <div
                className="relative"
                onMouseEnter={() => openDropdown("products")}
                onMouseLeave={closeDropdown}
                onFocusCapture={() => openDropdown("products")}
                onBlurCapture={handleMenuBlur}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-2 py-2 text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={openMenu === "products"}
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform ${openMenu === "products" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.25 7.5l4.75 4.75L14.75 7.5" />
                  </svg>
                </button>
                {openMenu === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-[480px] -translate-x-1/2 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-[0_0_40px_rgba(14,165,233,0.18)] backdrop-blur dark:border-cyan-400/20 dark:bg-black/70 dark:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                    role="menu"
                    onMouseEnter={() => openDropdown("products")}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <Link
                        href="/nexe"
                        className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 transition hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                        role="menuitem"
                      >
                        <div className="text-foreground text-lg font-semibold">Nexe</div>
                        <p className="mt-2 text-sm text-muted">
                          Anonymous Secure Sharing
                        </p>
                        <span className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-accent/80">
                          Product
                        </span>
                      </Link>
                      <a
                        href="https://nexconnect-sigma.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 transition hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                        role="menuitem"
                      >
                        <div className="text-foreground text-lg font-semibold">NexConnect</div>
                        <p className="mt-2 text-sm text-muted">
                          Anonymous Communication Platform
                        </p>
                        <span className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-accent/80">
                          Live Product
                        </span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>

              <Link
                href="/security"
                className={`px-2 py-2 transition-colors ${pathname.startsWith("/security") ? "text-foreground" : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
              >
                Security
              </Link>

              <div
                className="relative"
                onMouseEnter={() => openDropdown("company")}
                onMouseLeave={closeDropdown}
                onFocusCapture={() => openDropdown("company")}
                onBlurCapture={handleMenuBlur}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-2 py-2 text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={openMenu === "company"}
                >
                  Company
                  <svg
                    className={`h-4 w-4 transition-transform ${openMenu === "company" ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.25 7.5l4.75 4.75L14.75 7.5" />
                  </svg>
                </button>
                {openMenu === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-[0_0_30px_rgba(14,165,233,0.16)] backdrop-blur dark:border-cyan-400/20 dark:bg-black/70 dark:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                    role="menu"
                    onMouseEnter={() => openDropdown("company")}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <Link
                        href="/about"
                        className="rounded-xl px-3 py-2 transition hover:bg-slate-100/70 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white"
                        role="menuitem"
                      >
                        About Us
                      </Link>
                      <div className="rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-white/5">
                        <div className="text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-500">
                          Innovation
                        </div>
                        <div className="mt-2 space-y-1">
                          <Link
                            href="/innovation/lab"
                            className="block rounded-lg px-2 py-1 text-sm text-slate-600 transition hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                            role="menuitem"
                          >
                            Innovation Showcase
                          </Link>
                          <Link
                            href="/announce"
                            className="block rounded-lg px-2 py-1 text-sm text-slate-600 transition hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                            role="menuitem"
                          >
                            Announcement
                          </Link>
                        </div>
                      </div>
                      <a
                        href="https://sprition.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl px-3 py-2 transition hover:bg-slate-100/70 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white"
                        role="menuitem"
                      >
                        Parent Company (Sprition)
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="md:flex hidden items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/nexe"
              className="min-w-[140px] h-[44px] px-6 rounded-full font-semibold bg-cyan-500 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:bg-cyan-400 transition-all flex items-center justify-center"
              role="button"
              aria-label="Get started with Nexe"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 transition hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {/* <Link
              href="/nexe"
              className="px-4 py-2 rounded-full flex items-center justify-center font-semibold bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-cyan-400 transition-all"
              aria-label="Get Started"
              style={{ maxWidth: '120px', minWidth: '90px', height: '40px' }}
            >
              Get Started
            </Link> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 dark:text-white"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              style={{ minWidth: '40px', height: '40px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed inset-0 top-0 left-0 bg-white z-[60] p-6 overflow-y-auto dark:bg-[#05070c]"
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="mt-10 space-y-8 text-slate-700 dark:text-slate-200">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Products</div>
              <div className="space-y-3">
                <Link
                  href="/nexe"
                  className="block rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-left dark:border-white/10 dark:bg-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="text-foreground font-semibold">Nexe</div>
                  <div className="text-sm text-muted">Anonymous Secure Sharing</div>
                </Link>
                <a
                  href="https://nexconnect-sigma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-left dark:border-white/10 dark:bg-white/5"
                >
                  <div className="text-foreground font-semibold">NexConnect</div>
                  <div className="text-sm text-muted">Anonymous Communication Platform</div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Company</div>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/innovation/lab"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Innovation Showcase
                </Link>
                <Link
                  href="/announce"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Announcement
                </Link>
                <a
                  href="https://sprition.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  Parent Company (Sprition)
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Security</div>
              <Link
                href="/security"
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy & Security Architecture
              </Link>
            </div>
          </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 dark:text-white"
              aria-label="Close mobile menu"
              style={{ minWidth: '40px', height: '40px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
