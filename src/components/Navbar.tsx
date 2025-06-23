'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Max Sherman
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className={`hover:text-gray-300 ${pathname === '/' ? 'text-blue-400' : ''}`}>
            Home
          </Link>
          <Link href="/projects" className={`hover:text-gray-300 ${pathname === '/projects' ? 'text-blue-400' : ''}`}>
            Projects
          </Link>
          <Link href="/contact" className={`hover:text-gray-300 ${pathname === '/contact' ? 'text-blue-400' : ''}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
