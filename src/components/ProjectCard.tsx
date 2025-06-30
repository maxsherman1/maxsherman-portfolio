import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  reportLink?: string;
  websiteLink?: string;
  icon?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Dynamically select the icon component based on the icon field
  const IconComponent = project.icon && FaIcons[project.icon as keyof typeof FaIcons];
  
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center mb-3">
        {IconComponent && <IconComponent className="text-[var(--secondary-accent)] text-3xl mr-3" />}
        <h2 className="text-xl font-bold text-[var(--text-primary)]">{project.title}</h2>
      </div>
      <p className="text-[var(--text-primary)] mb-4">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <li key={index} className="bg-[var(--accent)] px-3 py-1 rounded text-white">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        {project.githubLink && (
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-accent)] hover:underline">
            GitHub
          </Link>
        )}
        {project.websiteLink && (
          <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-accent)] hover:underline">
            Website
          </Link>
        )}
        {project.reportLink && (
          <Link href={project.reportLink} target="_blank" rel="noopener noreferrer" className="text-[var(--secondary-accent)] hover:underline">
            Report
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
