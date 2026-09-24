import { Target, Calendar, MapPin, ChevronRight } from "lucide-react";

/* ---------- Icons (Lucide React) ---------- */

const TargetIcon = () => (
  <Target size={14} strokeWidth={1.75} aria-hidden />
);
const CalendarIcon = () => (
  <Calendar size={13} strokeWidth={1.75} aria-hidden />
);
const PinIcon = () => (
  <MapPin size={13} strokeWidth={1.75} aria-hidden />
);
const ChevronIcon = () => (
  <ChevronRight size={12} strokeWidth={1.75} aria-hidden />
);

/* ---------- Data ---------- */

type Highlight = { title: string; text: string };

type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  badge?: string;
  summary: string;
  bullets?: string[];
  highlights?: Highlight[];
  tags: string[];
};

const roles: Role[] = [
  {
    company: "Gemini Embedded Technology",
    role: "Embedded Software Developer",
    period: "Sep 2024 – Present",
    location: "Netherlands",
    badge: "Current Position",
    current: true,
    summary:
      "Engineering firmware and RTOS-level native C++ applications for critical embedded hardware devices. Implementing rigorous Hardware-in-the-Loop (HIL) test suites to ensure deterministic system stability, while managing complete software change traceability across Git and Jira.",
    bullets: [
      "Developing high-reliability native C++ applications deployed on resource-constrained embedded systems.",
      "Validating firmware correctness and timing constraints using dedicated Hardware-in-the-Loop (HIL) test setups.",
      "Documenting architectural updates and maintaining strict change governance via Jira workflows and Git repositories.",
    ],
    tags: ["C++", "FreeRTOS", "CMake", "Embedded Systems", "HIL Testing", "Git", "Jira"],
  },
  {
    company: "Jaguar Land Rover",
    role: "Software Undergraduate Placement, Automotive Electric Powertrain Controls",
    period: "July 2023 – July 2024",
    location: "United Kingdom",
    badge: "Promoted to Function Owner",
    summary:
      "Engineered and validated core control models for next-generation electric vehicle powertrains. Promoted within six months to Function Owner, managing a team of engineers and acting as liaison between JLR and external suppliers.",
    highlights: [
      {
        title: "Model Architecture & Refactoring",
        text: "Developed and optimised AUTOSAR-compliant Simulink models. Improved model efficiency & maintainability by 60% through architectural refactoring.",
      },
      {
        title: "Validation Pipeline (MIL to HIL)",
        text: "Supported defect resolution from Model-in-the-Loop to Hardware-in-the-Loop testing. Identified and resolved issues early in the development lifecycle to prevent multi-stage system debugging cycles.",
      },
      {
        title: "Function Owner Leadership (<6 Months)",
        text: "Managed an engineering team, coordinated communication between JLR and external suppliers, and ensured on-schedule software releases.",
      },
      {
        title: "Functional Safety & Governance",
        text: "Strict execution of ISO 26262 automotive safety standards. Automated test execution leveraging MATLAB, Simulink, GitLab CI, and Jira.",
      },
    ],
    tags: [
      "AUTOSAR",
      "Simulink",
      "MATLAB",
      "MIL / SIL / HIL",
      "ISO 26262",
      "GitLab",
      "Jira",
    ],
  },
  {
    company: "DRIVEN",
    role: "Software Development Project Manager",
    period: "July 2023 – July 2024",
    location: "United Kingdom",
    badge: "2x Amped-Up Awards",
    summary:
      "Led end-to-end software development for an operational racecar. Implemented robust embedded control logic in C++ and PlatformIO with GitLab CI/CD pipelines, steering the project from architecture design to trackside real-time telemetry testing.",
    bullets: [
      "Pioneered software architecture, sprint efficiency, and hardware integration across the vehicle control unit.",
      "Authored safety-critical control logic in C++ via PlatformIO with continuous deployment pipelines.",
      "Awarded two DRIVEN \u201cAmped-Up\u201d awards for exceptional engineering leadership, technical delivery, and team dedication.",
    ],
    tags: [
      "C++",
      "PlatformIO",
      "Embedded Control Logic",
      "Trackside Telemetry",
      "GitLab CI/CD",
    ],
  },
];

/* ---------- Section ---------- */

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pb-8 sm:pb-12 lg:pb-16">
      <div className="container-site">
        <header className="mb-6">
          <p className="label-caps mb-4 flex items-center gap-2 text-accent">
            <TargetIcon />
            Track record
          </p>
          <h2>Professional Engineering &amp; Industry Roles</h2>
        </header>

        <ol className="grid gap-4 lg:gap-6">
          {roles.map((r) => (
            <li key={r.company}>
              <article className="glass-card p-5 sm:p-8">
                {/* Title row */}
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="flex items-center gap-2 text-lg! font-semibold! text-foreground">
                        {r.company}
                      </h3>
                      {r.badge && (
                        <span className="label-caps rounded-sm bg-accent/10 px-2 py-1 text-accent">
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{r.role}</p>
                  </div>

                  <p className="label-code flex flex-wrap items-center gap-x-4 gap-y-1 text-subtle md:shrink-0 md:justify-end">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon />
                      {r.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PinIcon />
                      {r.location}
                    </span>
                  </p>
                </div>

                {/* Summary */}
                <p className="mt-5 text-foreground/90">{r.summary}</p>

                {/* Bullets */}
                {r.bullets && (
                  <ul className="mt-5 grid gap-2 text-sm text-muted">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-1 text-subtle">
                          <ChevronIcon />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Highlights grid */}
                {r.highlights && (
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {r.highlights.map((h) => (
                      <div
                        key={h.title}
                        className="rounded-md border border-(--border) bg-surface-code p-4"
                      >
                        <h4 className="label-code text-accent! text-sm! font-semibold!">
                          {h.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {h.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {r.tags.map((t) => (
                    <li key={t} className="pill">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}