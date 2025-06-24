import React from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  reportLink?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[var(--text-primary)] shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-2 text-[var(--foreground)]">{project.title}</h2>
      <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[var(--foreground)]">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <li key={index} className="bg-[var(--accent)] px-3 py-1 rounded text-[var(--text-primary)]">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[var(--link-active)] hover:underline">
          GitHub
        </Link>
        {project.reportLink && (
          <Link href={project.reportLink} target="_blank" rel="noopener noreferrer" className="text-[var(--link-active)] hover:underline">
            Report
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
