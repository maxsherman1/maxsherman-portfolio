import { SlidersHorizontal } from "lucide-react";

const SlidersHorizontalIcon = () => (
    <SlidersHorizontal className="mb-0.5" size={14} strokeWidth={1.75} aria-hidden />
);

type Tone = "muted" | "accent" | "strong";

type Skill = { name: string; detail?: string; tone?: Tone };

type Group = { index: string; label: string; skills: Skill[] };

const toneClass: Record<Tone, string> = {
    muted: "text-muted",
    accent: "text-accent",
    strong: "text-foreground font-semibold",
};

const groups: Group[] = [
    {
        index: "01",
        label: "Languages",
        skills: [
            { name: "Python"},
            { name: "TypeScript / JavaScript"},
            { name: " C / C++"},
            { name: "Java / Kotlin"},
            { name: "HTML / CSS"},
            { name: "SQL / PostgreSQL"},
        ],
    },
    {
        index: "02",
        label: "Development Tools",
        skills: [
            { name: "Git"},
            { name: "Visual Studio Code"},
            { name: "MATLAB"},
            { name: "AWS"},
            { name: "CI/CD"},
            { name: "Obsidian"},
        ],
    },
    {
        index: "03",
        label: "Project Management",
        skills: [
            { name: "Jira"},
            { name: "GitHub / GitLab"},
            { name: "Microsoft Office"},
            { name: "Markdown"},
            { name: "Notion"},
            { name: "LaTeX"},
        ],
    },
    {
        index: "04",
        label: "Frameworks",
        skills: [
            { name: "React"},
            { name: "Next.js / node.js"},
            { name: "CMake"},
            { name: "Simulink"},
            { name: "FreeRTOS"},
            { name: "Django"},
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-20 pb-8 sm:pb-12 lg:pb-16">
            <div className="container-site">
                <header className="mb-6">
                    <p className="label-caps mb-4 flex items-center gap-2 text-accent">
                        <SlidersHorizontalIcon />
                        CAPABILITIES MATRIX
                    </p>
                    <h2>Engineered Technical Capabilities</h2>
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {groups.map((g) => (
                        <section
                            key={g.index}
                            aria-labelledby={`skills-${g.index}`}
                            className="glass-card p-4 sm:p-5"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="label-code text-accent" aria-hidden>
                                    {g.index}
                                </span>
                                <h3
                                    id={`skills-${g.index}`}
                                    className="label-caps text-right text-[0.6875rem]! font-semibold! tracking-[0.08em]! text-subtle uppercase"
                                >
                                    {g.label}
                                </h3>
                            </div>

                            <ul className="grid gap-2">
                                {g.skills.map((s) => (
                                    <li
                                        key={s.name}
                                        className="label-code flex items-center justify-between gap-4 rounded-sm bg-surface-code px-3 py-3"
                                    >
                                        <span className="font-semibold text-foreground">{s.name}</span>
                                        <span className={`text-right ${toneClass[s.tone ?? "muted"]}`}>
                                            {s.detail}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}