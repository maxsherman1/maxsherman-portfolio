import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--nav-bg)] text-[var(--text-primary)] p-6 mt-auto border-t border-[var(--nav-accent)] border-opacity-30">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Max Sherman. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://github.com/maxsherman1" target="_blank" rel="noopener noreferrer" className="relative transition-all duration-300 hover:text-[var(--nav-accent)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/maxsherman1/" target="_blank" rel="noopener noreferrer" className="relative transition-all duration-300 hover:text-[var(--nav-accent)] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--nav-accent)] after:transition-all after:duration-300 hover:after:w-full">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
