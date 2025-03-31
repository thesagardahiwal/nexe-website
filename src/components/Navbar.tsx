'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
    <div className='flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-gray-900'>
      {/* Logo Section */}
      <div className='flex w-[200px] items-center gap-2'>
        <Image
          src={require("@/app/favicon.ico")}
          alt='logo'
          height={50}
          width={50}
        />
        <Link href='/' className='font-bold text-3xl tracking-wide bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text dark:from-pink-400'>
          Nexe
        </Link>
      </div>

      {/* Navbar Items for Large Screens */}
      <nav className='hidden md:flex-1 md:flex items-center gap-8'>
        <div className='w-[1px] h-[30px] bg-slate-600' />
        <ul className='flex font-medium items-center gap-8 text-lg'>
          {navItems.map(({ name, path }, index) => (
            <li key={index} className='relative group cursor-pointer'>
              <Link href={path} className={`text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white 
                ${pathname === path ? 'font-bold' : ''}`}>
                {name}
              </Link>

              {/* Underline: Visible on hover & if active */}
              <motion.div
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-600 w-full transition-transform duration-300 
                  ${pathname === path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Download Button */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 rounded-full font-bold bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md hover:scale-105 transition-all">
          <Link href="/advertise">
            Download
          </Link>
        </button>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className='fixed inset-0 top-[65px] left-0 bg-white dark:bg-gray-900 z-20 p-6 overflow-y-auto'
      >
        <ul className='flex flex-col items-center gap-6'>
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <Link href={path} className={`text-gray-700 dark:text-gray-200 text-lg ${pathname === path ? 'font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Close Button */}
        <div className='absolute top-4 right-4'>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 dark:text-white">
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
