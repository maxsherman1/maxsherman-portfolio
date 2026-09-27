import { Link2, Code, Mail, MapPin } from "lucide-react";

const EMAIL = "contact@maxsherman.dev";
const LINKEDIN_URL = "https://www.linkedin.com/in/"; // TODO: add your profile slug
const GITHUB_URL = "https://github.com/"; // TODO: add your username

const LinkIcon = () => (
  <Link2 size={14} strokeWidth={1.75} aria-hidden />
);
const CodeIcon = () => (
  <Code size={14} strokeWidth={1.75} aria-hidden />
);
const MailIcon = () => (
  <Mail size={14} strokeWidth={1.75} aria-hidden />
);
const PinIcon = () => (
  <MapPin size={14} strokeWidth={1.75} aria-hidden />
);

const footerLinks = [
  { href: LINKEDIN_URL, label: "LinkedIn", icon: <LinkIcon />, external: true },
  { href: GITHUB_URL, label: "GitHub", icon: <CodeIcon />, external: true },
  { href: `mailto:${EMAIL}`, label: "Email", icon: <MailIcon />, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--border) py-4">
      <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.8125rem] text-foreground">
            © {year} Max Sherman. Engineered with precision.
          </p>
          <p className="label-code mt-2 flex items-center gap-1.5 text-subtle">
            <PinIcon />
            Netherlands &amp; UK
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="label-code flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}