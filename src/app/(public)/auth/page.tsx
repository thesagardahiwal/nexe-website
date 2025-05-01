'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function AuthChoice() {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);
  const hasAnimatedOnce = useRef(false);

  useEffect(() => {
    if (!hasAnimatedOnce.current && !sessionStorage.getItem('authChoiceAnimated')) {
      hasAnimatedOnce.current = true;
      setShowAnimation(true);
      sessionStorage.setItem('authChoiceAnimated', 'true');
    }
  }, []);

  const titleAnimation = showAnimation
    ? { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 12, stiffness: 100, delay: 0.3 } }
    : {};

  const subtitleAnimation = showAnimation
    ? { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, type: 'spring' } }
    : {};

  const buttonAnimation = showAnimation
    ? { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', damping: 15, delay: 0.7 } }
    : {};

  return (
    <main
      className="flex flex-col justify-center items-center h-screen w-full max-w-6xl mx-auto px-6 pb-20 relative overflow-hidden"
      role="main"
      aria-label="Authentication Choice Page"
    >
      {/* Decorative Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-gradient-to-r from-blue-400 to-green-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[150px] h-[150px] bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Heading */}
      <motion.header
        {...titleAnimation}
        className="z-10 text-center mb-6"
        role="region"
        aria-labelledby="auth-heading"
      >
        <h1 id="auth-heading" className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Welcome to Nexe
        </h1>
      </motion.header>

      {/* Subtitle */}
      <motion.p
        {...subtitleAnimation}
        className="z-10 max-w-xl text-center text-lg text-gray-700 dark:text-gray-300 mb-8"
        aria-label="authentication options description"
      >
        Continue as a guest or sign in (on Mobile) to unlock full features.
      </motion.p>

      {/* Buttons */}
      <section className="w-full max-w-sm z-10" role="region" aria-labelledby="auth-options">
        <h2 id="auth-options" className="sr-only">Authentication Options</h2>
        <motion.div {...buttonAnimation} className="flex flex-col space-y-4">
          <button
            onClick={() => router.push('/guest')}
            className="w-full bg-gray-700 text-white px-6 py-3 rounded-full shadow-md font-semibold text-center hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Continue as Guest"
          >
            Continue as Guest
          </button>

          {/* Optional Sign-In button (hidden or controlled via prop later) */}
          {/* <button
            onClick={() => router.push('/auth/signin')}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-md font-semibold hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
            aria-label="Sign In"
          >
            Sign In
          </button> */}
        </motion.div>
      </section>
    </main>
  );
}
