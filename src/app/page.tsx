import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Max Sherman</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Hi, I am Max Sherman, a passionate software developer with expertise in web development, specializing in React and Next.js.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href="/resume/en_software.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Download CV
          </Link>
          <Link href="https://github.com/maxsherman1" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/maxsherman1/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            LinkedIn
          </Link>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Project</h2>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">F1 Data Analysis Tool</h3>
          <p className="text-gray-700 mb-4">A full-stack e-commerce platform with payment integration and user authentication.</p>
          <Link href="/projects" className="text-blue-500 hover:underline">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
