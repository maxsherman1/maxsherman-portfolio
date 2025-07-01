import React from "react";
import skillsData from "../../../data/skills.json";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <section className="py-6">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
          About Me
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 mx-auto transition-all duration-500">
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m a motivated Computer Science graduate with a passion for software development and with a year of experience in
software engineering. Throughout an industrial placement with Jaguar Land Rover, I&apos;ve improved my skills in
software development, testing, and project management. Known for a proactive approach, I was promoted to a
leadership role within 6 months of starting my placement. Proven ability to quickly learn new frameworks and easily adapt to new environments
and circumstances. Currentlty working as a freelance full-stack developer, creating websites for start-up companies such as CWD Consulting.
          </p>
        </div>
      </section>

      <section className="py-6"> 
        <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
          Skills
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 mx-auto transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((group, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700 dark:text-gray-300 w-1/3">
                          {skill.name}
                        </span>
                        <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-[var(--nav-accent)] h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
