import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Max Sherman. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://github.com/maxsherman1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/maxsherman1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
