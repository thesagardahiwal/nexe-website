'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'How Guest Messaging Works in Nexe',
    excerpt: 'Learn how Nexe enables seamless guest messaging without signups, OTPs, or hassle.',
    date: 'March 31, 2025',
    link: '/blog/guest-messaging',
  },
  {
    id: 2,
    title: 'Privacy First: How Nexe Secures Your Data',
    excerpt: 'A deep dive into Nexe\'s encryption and privacy-first approach to messaging.',
    date: 'March 25, 2025',
    link: '/blog/privacy-first',
  },
  {
    id: 3,
    title: 'The Future of Secure Messaging',
    excerpt: 'How Nexe is redefining private and anonymous communication for the future.',
    date: 'March 15, 2025',
    link: '/blog/secure-messaging',
  },
];

export default function Blog() {
  return (
    <div
      className="relative max-w-5xl mx-auto px-6 py-16 text-center overflow-hidden"
      role="main"
      aria-labelledby="blog-heading"
    >
      {/* Floating Gradient Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }}
      >
        <h1
          id="blog-heading"
          className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text dark:from-pink-400"
        >
          Nexe Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Stay updated with the latest insights on secure messaging, privacy, and technology.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div
        className="mt-12 space-y-8"
        role="region"
        aria-labelledby="posts-heading"
      >
        <h2 id="posts-heading" className="sr-only">Recent Blog Posts</h2>
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            className="relative p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-all group focus-within:ring-2 ring-offset-2 ring-blue-500"
            tabIndex={0}
            aria-labelledby={`post-title-${post.id}`}
          >
            <h3 id={`post-title-${post.id}`} className="text-2xl font-semibold text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>

            <Link
              href={post.link}
              aria-label={`Read full post: ${post.title}`}
              className="inline-block mt-6 px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-green-500 to-blue-600 dark:from-pink-400 text-white shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Read More →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
