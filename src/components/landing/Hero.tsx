import type { ReactNode } from "react";
import { Award, Gauge, LineChart, Terminal, Code2, ArrowRight } from "lucide-react";

type Stat = {
  label: string;
  title: string;
  caption: string;
  icon: ReactNode;
};

const stats: Stat[] = [
  {
    label: "Academic merit",
    title: "1st Class (GPA 80)",
    caption: "BSc (Hons) Computer Science · University of Brighton",
    icon: <Award size={18} strokeWidth={1.75} aria-hidden />,
  },
  {
    label: "Industrial experience",
    title: "Jaguar Land Rover",
    caption: "Automotive software telemetry, pipelines & QA suite",
    icon: <Gauge size={18} strokeWidth={1.75} aria-hidden />,
  },
  {
    label: "Core specialism",
    title: "Embedded & Full-Stack",
    caption: "Firmware, C++, TypeScript, React",
    icon: <LineChart size={18} strokeWidth={1.75} aria-hidden />,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-8 sm:pb-12 lg:pb-16 pt-4 sm:pt-6 lg:pt-8"
    >
      {/* Ambient wash (Layer 0) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem]"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(56,189,248,0.08) 0%, rgba(9,13,22,0) 70%)",
        }}
      />

      <div className="container-site relative">
        {/* Status row */}
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mb-8">
          <span className="pill pill-status font-sans! text-[0.75rem] font-medium text-foreground">
            Available for Software Engineering Roles
          </span>
          <span className="label-code text-muted">
            Nijmegen, Netherlands
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[18ch] sm:max-w-[22ch] lg:max-w-[20ch]">
          Full-Stack Systems, Built with Telemetric Precision.
        </h1>

        {/* Summary */}
        <p className="measure mt-6 text-base text-muted sm:text-lg sm:leading-relaxed">
          Software Engineer specializing in scalable web systems, real-time data
          pipelines, and telemetry visualization. First-Class Honours graduate
          with industrial engineering background at{" "}
          <strong className="font-medium text-foreground">
            Jaguar Land Rover
          </strong>
          .
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#contact" className="btn btn-primary">
            Get in touch
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </a>
          <a href="#architecture" className="btn btn-secondary">
            <Terminal size={16} strokeWidth={1.75} aria-hidden />
            Explore Architecture
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost label-code"
          >
            <Code2 size={14} strokeWidth={1.75} aria-hidden />
            GitHub
          </a>
        </div>

        {/* Highlights */}
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3 lg:gap-6">
          {stats.map((stat) => (
            <li key={stat.label} className="glass-card flex min-h-44 flex-col p-5 sm:min-h-52 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="label-caps text-muted">{stat.label}</span>
                <span className="text-accent">{stat.icon}</span>
              </div>
              <div className="mt-auto pt-8">
                <p className="text-2xl font-semibold leading-tight tracking-tight text-foreground lg:text-3xl">
                  {stat.title}
                </p>
                <p className="mt-2 text-[0.8125rem] leading-snug text-muted">
                  {stat.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}