import type { ReactNode } from "react";
import { ExternalLink, Code, Layers, Shield, Lock, CreditCard, BarChart3, FileText } from "lucide-react";

/* ---------- Icons (Lucide React) ---------- */

const ExternalIcon = () => (
    <ExternalLink size={14} strokeWidth={1.75} aria-hidden />
);
const CodeIcon = () => (
    <Code size={14} strokeWidth={1.75} aria-hidden />
);
const FileTextIcon = () => (
    <FileText size={14} strokeWidth={1.75} aria-hidden />
);
const LayersIcon = () => (
    <Layers size={14} strokeWidth={1.75} aria-hidden />
);
const ShieldIcon = () => (
    <Shield size={16} strokeWidth={1.75} aria-hidden />
);
const LockIcon = () => (
    <Lock size={16} strokeWidth={1.75} aria-hidden />
);
const CardIcon = () => (
    <CreditCard size={16} strokeWidth={1.75} aria-hidden />
);
const ChartIcon = () => (
    <BarChart3 size={16} strokeWidth={1.75} aria-hidden />
);

/* ---------- Small shared pieces ---------- */

function TechChips({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {items.map((t) => (
                <li key={t} className="pill">
                    {t}
                </li>
            ))}
        </ul>
    );
}

function CardMeta({ tag, meta }: { tag: string; meta: string }) {
    return (
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="label-caps rounded-sm bg-accent/10 px-2 py-1 text-accent">
                {tag}
            </span>
            <span className="label-code text-muted">{meta}</span>
        </div>
    );
}

/* ---------- Featured project visuals ---------- */

function DashboardPreview() {
    return (
        <div className="flex h-full flex-col rounded-lg border border-(--border) bg-surface-code p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
                <span className="label-code text-muted">Application Architecture</span>
            </div>

            <div className="hidden sm:inline rounded-md border border-(--border) bg-surface/60 p-0 sm:p-4">
                <div className="flex items-center gap-2">
                    <span className="pt-0.5 label-code text-accent">Client</span>
                    <span className="flex flex-1 items-center" aria-hidden>
                        <span className="border-y-[4px] border-r-[5px] border-y-transparent border-r-white/20" />
                        <span className="h-0.5 flex-1 bg-white/20" />
                        <span className="border-y-[4px] border-l-[5px] border-y-transparent border-l-white/20" />
                    </span>
                    <span className="pt-0.5 label-code text-accent">API</span>
                    <span className="flex flex-1 items-center" aria-hidden>
                        <span className="border-y-[4px] border-r-[5px] border-y-transparent border-r-white/20" />
                        <span className="h-0.5 flex-1 bg-white/20" />
                        <span className="border-y-[4px] border-l-[5px] border-y-transparent border-l-white/20" />
                    </span>
                    <span className="pt-0.5 label-code text-accent">Data</span>
                    <span className="flex flex-1 items-center" aria-hidden>
                        <span className="border-y-[4px] border-r-[5px] border-y-transparent border-r-white/20" />
                        <span className="h-0.5 flex-1 bg-white/20" />
                        <span className="border-y-[4px] border-l-[5px] border-y-transparent border-l-white/20" />
                    </span>
                    <span className="pt-0.5 label-code text-accent">Storage</span>
                </div>
            </div>

            <div className="mt-0 sm:mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                    ["Frontend", "Next.js / React"],
                    ["Backend", "Next.js API Routes"],
                ].map(([label, value]) => (
                    <div key={label} className="rounded-md border border-(--border) bg-surface/60 p-3">
                        <p className="label-caps text-subtle">{label}</p>
                        <p className="mt-1 font-medium text-foreground">{value}</p>
                    </div>
                ))}
            </div>

            <dl className="label-code mt-3 rounded-md border border-(--border) bg-surface/60 p-3">
                {[
                    ["Hosting:", "Vercel"],
                    ["Database:", "PostgreSQL"],
                    ["File Storage:", "AWS S3"],
                    ["Emails:", "Resend API"],
                    ["Payments:", "Stripe API"],
                    ["UI Components:", "shadcn/ui, Radix"]
                ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-0.5">
                        <dt className="text-muted">{k}</dt>
                        <dd className="text-foreground">{v}</dd>
                    </div>
                ))}
            </dl>

            <div className="hidden label-caps mt-auto md:flex flex-wrap justify-between gap-2 pt-4 text-subtle">
                <span>Client &amp; Admin Portal</span>
                <span>End-to-end encrypted</span>
            </div>
        </div>
    );
}

/* ---------- Section ---------- */

const features: { icon: ReactNode; text: string }[] = [
    { icon: <ShieldIcon />, text: "Role-based access & admin controls" },
    { icon: <LockIcon />, text: "Secure file uploads & asset storage" },
    { icon: <CardIcon />, text: "Integrated transaction & payment gateway" },
    { icon: <ChartIcon />, text: "Responsive analytics viewports" },
];

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-20 pb-8 sm:pb-12 lg:pb-16">
            <div className="container-site">
                {/* Header */}
                <header className="mb-6">
                    <p className="label-caps mb-4 flex items-center gap-2 text-accent">
                        <LayersIcon />
                        Flagship case studies
                    </p>
                    <h2>Engineered Systems &amp; Deployments</h2>
                </header>

                <div className="grid gap-4 lg:gap-6">
                    {/* Featured: Investment Health Checks */}
                    <article className="glass-card grid gap-4 p-5 sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
                        <div className="flex flex-col">
                            <CardMeta tag="Production platform" meta="investmenthealthchecks.com" />
                            <h3 className="text-foreground">Investment Health Checks</h3>
                            <p className="measure mt-4 text-muted">
                                A comprehensive full-stack enterprise financial web platform
                                delivering investment health audits. Built with client-side
                                interactive calculators, segregated customer &amp; administrator
                                dashboards, encrypted file handling, role-based authorization,
                                and integrated payment pipelines.
                            </p>

                            <ul className="mt-6 grid gap-x-6 gap-y-3 text-[0.8125rem] text-foreground sm:grid-cols-2">
                                {features.map((f) => (
                                    <li key={f.text} className="flex items-start gap-2.5">
                                        <span className="mt-0.5 text-accent">{f.icon}</span>
                                        {f.text}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <TechChips
                                    items={["React", "Next.js", "TypeScript", "SQL Database", "AWS", "Tailwind CSS"]}
                                />
                            </div>

                            <div className="mt-8 lg:mt-auto lg:pt-8">
                                <a
                                    href="https://investmenthealthchecks.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full sm:w-auto"
                                >
                                    View Live Platform
                                    <ExternalIcon />
                                </a>
                            </div>
                        </div>

                        <DashboardPreview />
                    </article>

                    {/* Secondary projects */}
                    <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                        {/* F1 */}
                        <article className="glass-card flex flex-col p-5 sm:p-8">
                            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                <span className="label-caps rounded-sm bg-accent/10 px-2 py-1 text-accent">
                                    Final-year research project
                                </span>
                                <span className="label-code flex gap-2">
                                    <span className="rounded-sm bg-white/5 px-2 py-1 text-foreground">Report: 85</span>
                                    <span className="rounded-sm bg-white/5 px-2 py-1 text-foreground">Presentation: 95</span>
                                </span>
                            </div>
                            <h3 className="text-foreground">F1 Telemetry &amp; Statistical Analysis Tool</h3>
                            <p className="mt-4 text-muted">
                                Motorsport analysis system for telemetry visualisation and statistical analysis.
                                Designed to provide actionable insights from high-frequency Formula 1
                                vehicle telemetry. Generates lap time charts, race strategies, and
                                driver performance through statistical distributions.
                            </p>

                            <div className="mt-6">
                                <TechChips items={["Python", "Pandas", "Matplotlib", "Plotly", "SciPy", "Statsmodels"]} />
                            </div>

                            <div className="mt-8 md:mt-auto md:pt-8 flex flex-row flex-wrap gap-3">
                                <a
                                    href="https://github.com/maxsherman1/f1-data-analysis-tool"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full sm:w-auto"
                                >
                                    <CodeIcon />
                                    View GitHub
                                </a>

                                <a
                                    href="/reports/F1_Data_Analysis_Tool_Report.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full sm:w-auto"
                                >
                                    <FileTextIcon />
                                    View Report
                                </a>
                            </div>
                        </article>

                        {/* CWD */}
                        <article className="glass-card flex flex-col p-5 sm:p-8">
                            <CardMeta tag="Client deployment" meta="cwdconsulting.vercel.app" />
                            <h3 className="text-foreground">CWD Consulting Web Platform</h3>
                            <p className="mt-4 text-muted">
                                Modern high-performance web platform presenting corporate
                                advisory, academic research, and engineering services. Features
                                dynamic client routing, responsive component structures, and
                                performant asynchronous contact routing.
                            </p>

                            <div className="mt-6">
                                <TechChips items={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
                            </div>

                            <div className="mt-8 md:mt-auto md:pt-8  flex flex-row flex-wrap gap-3">
                                <a
                                    href="https://github.com/maxsherman1/cwd-consulting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full sm:w-auto"
                                >
                                    <CodeIcon />
                                    View GitHub
                                </a>

                                <a
                                    href="https://cwdconsulting.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full sm:w-auto"
                                >
                                    Visit Site
                                    <ExternalIcon />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}