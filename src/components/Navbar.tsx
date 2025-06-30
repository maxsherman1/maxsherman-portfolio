'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text-primary)] border-b border-[var(--nav-accent)] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Max Sherman
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className={`relative transition-all duration-300 hover:text-[var(--text-hover)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full ${pathname === '/' ? 'text-[var(--nav-accent)] after:w-full' : ''}`}>
            Home
          </Link>
          <Link href="/projects" className={`relative transition-all duration-300 hover:text-[var(--text-hover)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full ${pathname === '/projects' ? 'text-[var(--nav-accent)] after:w-full' : ''}`}>
            Projects
          </Link>
          <Link href="/contact" className={`relative transition-all duration-300 hover:text-[var(--text-hover)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full ${pathname === '/contact' ? 'text-[var(--nav-accent)] after:w-full' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
