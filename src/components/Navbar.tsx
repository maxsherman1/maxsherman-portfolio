"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Code2, Share2, Download, Menu, X } from "lucide-react";
import Link from "next/link";

type NavLink = { id: string; href: string; label: string };

const NAV_LINKS: NavLink[] = [
  { id: "hero", href: "/#hero", label: "About" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "contact", href: "/contact", label: "Contact" },
];

const GITHUB_URL = "https://github.com/maxsherman1";
const SCROLL_SUPPRESS_MS = 1200;

const Icon = ({ icon: IconComponent, size = 16, strokeWidth = 1.75 }: { icon: React.ElementType; size?: number; strokeWidth?: number }) => (
  <IconComponent size={size} strokeWidth={strokeWidth} aria-hidden />
);

function NavLinks({
  activeHref,
  onClick,
  onClose,
  className = "",
}: {
  activeHref: string | null;
  onClick: (href: string) => void;
  onClose?: () => void;
  className?: string;
}) {
  return (
    <ul className={`grid gap-1 ${className}`}>
      {NAV_LINKS.map((link) => {
        const active = activeHref === link.href;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => {
                onClick(link.href);
                onClose?.();
              }}
              aria-current={active ? "page" : undefined}
              className={`block rounded-lg px-3 py-2.5 font-serif text-sm font-semibold transition-colors ${
                active
                  ? "bg-white/10 text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopNavLinks({ activeHref, onClick }: { activeHref: string | null; onClick: (href: string) => void }) {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1 rounded-full border border-(--border) bg-white/[0.04] p-1">
        {NAV_LINKS.map((link) => {
          const active = activeHref === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => onClick(link.href)}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 font-serif text-[0.875rem] font-semibold transition-colors ${
                  active
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ActionButtons({ className = "" }: { className?: string }) {
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or error - fall through to clipboard
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // Silently fail if clipboard API unavailable
    }
  }, []);

  return (
    <div className={`hidden items-center gap-2 lg:flex ${className}`}>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-foreground transition-colors hover:bg-white/[0.1]"
      >
        <Icon icon={Code2} />
      </a>
      <button
        type="button"
        aria-label={shareCopied ? "Link copied!" : "Share this page"}
        onClick={handleShare}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-foreground transition-colors hover:bg-white/[0.1]"
      >
        <Icon icon={Share2} />
      </button>
      <Link
        href="/resume/en_software.pdf"
        className="btn btn-primary h-9 rounded-md px-4"
        target="_blank"
      >
        <Icon icon={Download} size={14} />
        Download CV
      </Link>
    </div>
  );
}

function MobileActions({ onClose }: { onClose?: () => void }) {
  const [shareCopied, setShareCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // fall through
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // silent fail
    }
  }, []);

  return (
    <div className="mt-2 flex items-center gap-2 border-t border-(--border) pt-4">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-foreground"
      >
        <Icon icon={Code2} />
      </a>
      <button
        type="button"
        aria-label={shareCopied ? "Link copied!" : "Share this page"}
        onClick={handleShare}
        className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-foreground"
      >
        <Icon icon={Share2} />
      </button>
      <a
        href="/resume/en_software.pdf"
        target="_blank"
        onClick={onClose}
        className="btn btn-primary ml-auto h-9 rounded-md px-4"
      >
        <Icon icon={Download} size={14} />
        Download CV
      </a>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isContactRoute = pathname === "/contact";

  const [activeHref, setActiveHref] = useState<string | null>(NAV_LINKS[0].href);
  const [menuOpen, setMenuOpen] = useState(false);
  const suppressScrollSpyUntil = useRef(0);

  const sectionsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // On the /contact route there's nothing to scroll-spy — the Contact link
  // is simply active because we're on that page.
  const effectiveActiveHref = isContactRoute ? "/contact" : activeHref;

  // Initialize observer once
  useEffect(() => {
    if (isContactRoute) return;

    // Client-side only: look up section elements
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    sectionsRef.current = sections;
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressScrollSpyUntil.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // If more than one section straddles the band (rare, short sections),
        // prefer the one closest to the vertical center of the viewport.
        const centered = visible.sort((a, b) => {
          const centerA = a.boundingClientRect.top + a.boundingClientRect.height / 2;
          const centerB = b.boundingClientRect.top + b.boundingClientRect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          return Math.abs(centerA - viewportCenter) - Math.abs(centerB - viewportCenter);
        })[0];

        const link = NAV_LINKS.find((l) => l.id === centered.target.id);
        if (link) setActiveHref(link.href);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    observerRef.current = observer;
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isContactRoute]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Highlight immediately on click, and briefly hold that highlight so the
  // scroll-into-view animation doesn't hand it back to the scroll spy mid-flight.
  const handleNavClick = useCallback((href: string) => {
    setActiveHref(href);
    suppressScrollSpyUntil.current = Date.now() + SCROLL_SUPPRESS_MS;
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-background">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo + availability */}
          <Link
            href="/#hero"
            onClick={() => handleNavClick("/#hero")}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="truncate font-serif text-2xl font-semibold tracking-tight text-foreground">
              Max Sherman
            </span>
          </Link>

          {/* Desktop nav */}
          <DesktopNavLinks activeHref={effectiveActiveHref} onClick={handleNavClick} />

          {/* Desktop actions */}
          <ActionButtons />

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-foreground lg:hidden"
          >
            {menuOpen ? <Icon icon={CloseIcon} size={20} /> : <Icon icon={MenuIcon} size={20} />}
          </button>
        </div>

        {/* Mobile panel */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="border-t border-(--border) pt-2 pb-4 lg:hidden"
          >
            <NavLinks activeHref={effectiveActiveHref} onClick={handleNavClick} onClose={() => setMenuOpen(false)} />
            <MobileActions onClose={() => setMenuOpen(false)} />
          </nav>
        )}
      </div>
    </header>
  );
}

// Need to export these for the Icon component above
const MenuIcon = () => <Icon icon={Menu} size={20} />;
const CloseIcon = () => <Icon icon={X} size={20} />;