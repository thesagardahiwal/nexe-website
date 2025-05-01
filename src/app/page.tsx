'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('nexeHomeAnimated');
    if (!hasVisited) {
      setShouldAnimate(true);
      sessionStorage.setItem('nexeHomeAnimated', 'true');
    }
  }, []);

  const animatedProps = (base: any, delay: number = 0) =>
    shouldAnimate
      ? {
          initial: base.initial,
          animate: base.animate,
          transition: { ...base.transition, delay },
        }
      : {};

  return (
    <main
      className="flex flex-col items-center min-h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden"
      role="main"
      aria-label="Nexe Home Page"
    >
      {/* Animated Gradient Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Welcome Section */}
      <motion.section
        {...animatedProps(
          { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 12, stiffness: 100 } },
          0.3
        )}
        className="mt-24 text-center z-10"
        role="region"
        aria-labelledby="welcome-heading"
      >
        <p className="text-gray-900 dark:text-gray-200 text-2xl" id="welcome-heading">Welcome to</p>
        <motion.h1
          {...animatedProps(
            { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { type: 'spring', damping: 10 } },
            0.7
          )}
          className="font-extrabold text-8xl tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400"
        >
          Nexe
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto" aria-label="Home Page Description">
          A seamless way to share messages and media securely.
        </p>
      </motion.section>

      {/* CTA Button - Mobile */}
      <motion.section
        {...animatedProps(
          { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 15 } },
          0.6
        )}
        className="mt-16 md:hidden relative z-10"
        role="region"
        aria-labelledby="get-started-mobile"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[200px] h-[200px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse" />
        </div>
        <Link
          href="/auth"
          id="get-started-mobile"
          aria-label="Get Started on Mobile"
          className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Get Started
        </Link>
      </motion.section>

      {/* Features Section */}
      <section
        className="mt-16 flex flex-wrap justify-center gap-16 w-full max-w-5xl z-10"
        role="region"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">Features</h2>
        {[
          { title: "Stay Connected", description: "Chat and share moments effortlessly." },
          { title: "Secure & Private", description: "End-to-end encryption for total security." },
          { title: "Guest Messaging", description: "Send media to private IDs instantly." },
        ].map((feature, index) => (
          <motion.article
            key={index}
            {...animatedProps(
              { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 15 } },
              0.1 + index * 0.2
            )}
            className="relative text-center max-w-sm"
            aria-labelledby={`feature-${index}-title`}
          >
            <h3 id={`feature-${index}-title`} className="text-2xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
          </motion.article>
        ))}
      </section>

      {/* CTA Button - Desktop */}
      <motion.section
        {...animatedProps(
          { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 15 } },
          0.6
        )}
        className="mt-16 hidden md:block relative z-10"
        role="region"
        aria-labelledby="get-started-desktop"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[200px] h-[200px] rounded-full bg-blue-500 opacity-20 blur-2xl animate-pulse" />
        </div>
        <Link
          href="/auth"
          id="get-started-desktop"
          aria-label="Get Started on Desktop"
          className="relative px-10 py-4 rounded-full font-bold text-lg shadow-xl bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white hover:scale-110 transition-transform hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Get Started
        </Link>
      </motion.section>
    </main>
  );
}
