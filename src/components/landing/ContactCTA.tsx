"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Link2, Code } from "lucide-react";

const EMAIL = "work.maxsherman@outlook.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/maxsherman1";
const GITHUB_URL = "https://github.com/maxsherman1";

const LinkIcon = () => (
  <Link2 size={14} strokeWidth={1.75} aria-hidden />
);
const CodeIcon = () => (
  <Code size={14} strokeWidth={1.75} aria-hidden />
);

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the address stays visible to copy manually.
    }
  }

  return (
    <section className="pb-8 sm:pb-12 lg:pb-16">
      <div className="container-site">
        <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto] sm:gap-10 md:gap-16">
          {/* Copy */}
          <div>
            <h2 className="max-w-[24ch]">
              Ready to discuss reliable systems &amp; software engineering roles?
            </h2>
            <p className="measure mt-5 text-[0.9375rem] text-muted">
              Whether you are scaling low-level embedded hardware, electric
              vehicle controls, or building full-stack platforms, feel free to
              reach out directly.
            </p>
          </div>

          {/* Actions */}
          <div className="w-full lg:w-72">
            <a href="/contact" className="btn btn-primary w-full">
              Get in Touch
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </a>

            <div className="mt-2 grid grid-cols-2 gap-2 rounded-md ">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost label-code bg-white/[0.03]"
              >
                <LinkIcon />
                LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost label-code bg-white/[0.03]"
              >
                <CodeIcon />
                GitHub
              </a>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="cursor-pointer label-code mt-4 w-full rounded-md px-2 py-1 text-center text-subtle transition-colors hover:text-foreground"
              aria-label={`Copy email address ${EMAIL}`}
            >
              {copied ? "Copied to clipboard" : `Copy: ${EMAIL}`}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? "Email address copied" : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}