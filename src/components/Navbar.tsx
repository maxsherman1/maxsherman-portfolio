'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text-primary)] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Max Sherman
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className={`hover:text-[var(--text-hover)] ${pathname === '/' ? 'text-[var(--link-active)]' : ''}`}>
            Home
          </Link>
          <Link href="/projects" className={`hover:text-[var(--text-hover)] ${pathname === '/projects' ? 'text-[var(--link-active)]' : ''}`}>
            Projects
          </Link>
          <Link href="/contact" className={`hover:text-[var(--text-hover)] ${pathname === '/contact' ? 'text-[var(--link-active)]' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
