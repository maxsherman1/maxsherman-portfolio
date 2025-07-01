"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Common styles for navigation links
  const linkStyle =
    "relative transition-all duration-300 hover:text-[var(--text-hover)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full";

  // Helper to determine active link class
  const getActiveClass = (path: string) =>
    pathname === path ? "text-[var(--nav-accent)] after:w-full" : "";

  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text-primary)] border-b border-[var(--nav-accent)] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Max Sherman
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={`${linkStyle} ${getActiveClass("/")}`}>
            Home
          </Link>
          <Link
            href="/projects"
            className={`${linkStyle} ${getActiveClass("/projects")}`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`${linkStyle} ${getActiveClass("/about")}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${linkStyle} ${getActiveClass("/contact")}`}
          >
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-[var(--nav-accent)] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--nav-bg)] border-t border-[var(--nav-accent)] absolute top-[64px] left-0 right-0 z-10 transition-all duration-300 ease-in-out">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`${linkStyle} ${getActiveClass("/")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${linkStyle} ${getActiveClass("/projects")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`${linkStyle} ${getActiveClass("/about")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${linkStyle} ${getActiveClass("/contact")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
