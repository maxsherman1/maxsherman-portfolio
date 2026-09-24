import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

/* ---------- Icons (Lucide React) ---------- */

const GradCapIcon = () => (
  <GraduationCap className="mb-0.5" size={14} strokeWidth={1.75} aria-hidden />
);
const CheckCircleIcon = () => (
  <CheckCircle2 size={16} strokeWidth={1.75} aria-hidden />
);

/* ---------- Data ---------- */

const coursework = [
  "Algorithms",
  "Artificial Intelligence",
  "Cyber Security",
  "Data Mining",
  "Data Structures",
  "Functional Programming",
  "Mobile App Development",
  "Object-Oriented Programming",
  "Usability Evaluation",
  "Web Development",
];

/* ---------- Section ---------- */

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 pb-8 sm:pb-12 lg:pb-16">
      <div className="container-site grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        {/* Left: degree summary */}
        <div>
          <p className="label-caps mb-2.5 flex items-center gap-2 text-accent">
            <GradCapIcon />
            Academic rigor
          </p>
          <h2>University of Brighton</h2>

          <div className="mt-2">
            <h3 className="text-lg! font-medium! text-foreground sm:text-xl!">
              BSc (Hons) Computer Science
            </h3>
            <p className="label-code mt-1 text-subtle">
                United Kingdom, Sep 2021 – May 2025
            </p>
          </div>

          <div className="glass-card mt-6 p-5">
            <p className="label-caps text-subtle">Final result</p>
            <p className="mt-2 text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-5xl">
              First Class
            </p>
            <p className="label-code mt-2 text-accent">
              80 / 100 Overall Grade Point Average
            </p>
          </div>

          <div className="glass-card mt-6 p-5">
            <p className="label-caps text-subtle">
                Athletic Leadership
            </p>
            <p className="mt-2 text-lg font-semibold leading-none tracking-tight text-foreground sm:text-xl">
                Men's Hockey Captain & Welfare Officer
            </p>
            <p className="label-code mt-2 leading-relaxed text-muted">
              Guided squad to Team of the Year (2023) and recipient of
              prestigious Club Colours (2025) for exemplary institutional
              contribution.
            </p>
          </div>
        </div>

        {/* Right: coursework */}
        <div className="glass-card flex flex-col overflow-hidden p-0">
          <div className="p-5 sm:p-6">
            <h3 className="text-xl! font-semibold! text-foreground">
              Evaluated Academic Coursework
            </h3>
            <p className="mt-3 max-w-[60ch] text-[0.8125rem] leading-relaxed text-muted">
              Rigorous foundation across computer systems foundations, discrete
              mathematics, algorithmic optimisation, and enterprise software
              patterns.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coursework.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-md bg-white/[0.03] px-3.5 py-3.5 text-sm text-foreground"
                >
                  <span className="text-accent">
                    <CheckCircleIcon />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}