import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-3xl mx-auto transition-all duration-500">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Max Sherman</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Hi, I am Max Sherman, a passionate software developer with expertise in web development, specializing in React and Next.js.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-2">
            <Link href="/resume/en_software.pdf" target="_blank" rel="noopener noreferrer" className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 hover:bg-[var(--accent-opacity)] transition-all duration-300 w-1/2 sm:w-auto self-center">
              Download CV
            </Link>
            <Link href="https://github.com/maxsherman1" target="_blank" rel="noopener noreferrer" className="bg-[var(--secondary-accent)] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 hover:bg-[var(--secondary-accent-opacity)] transition-all duration-300 w-1/2 sm:w-auto self-center">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/maxsherman1/" target="_blank" rel="noopener noreferrer" className="bg-[var(--secondary-accent)] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 hover:bg-[var(--secondary-accent-opacity)] transition-all duration-300 w-1/2 sm:w-auto self-center">
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <section className="py-2">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">Featured Project</h2>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-2xl mx-auto transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-3 text-[var(--foreground)]">F1 Data Analysis Tool</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">A data visualization tool for Formula 1 racing statistics, built with React and integrated with real-time data APIs for comprehensive analysis.</p>
          <Link href="/projects" className="text-[var(--secondary-accent)] font-medium hover:underline transition-all duration-300">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
