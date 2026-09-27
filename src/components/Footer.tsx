import { Link2, Code, Mail, MapPin } from "lucide-react";

const EMAIL = "contact@maxsherman.dev";
const LINKEDIN_URL = "https://www.linkedin.com/in/maxsherman1";
const GITHUB_URL = "https://github.com/maxsherman1";

const icons = {
  linkedin: Link2,
  github: Code,
  email: Mail,
  location: MapPin,
} as const;

type FooterLink = {
  href: string;
  label: string;
  icon: keyof typeof icons;
  external: boolean;
};

const footerLinks: FooterLink[] = [
  { href: LINKEDIN_URL, label: "LinkedIn", icon: "linkedin", external: true },
  { href: GITHUB_URL, label: "GitHub", icon: "github", external: true },
  { href: `mailto:${EMAIL}`, label: "Email", icon: "email", external: false },
];

function Icon({ name, size = 14 }: { name: keyof typeof icons; size?: number }) {
  const IconComponent = icons[name];
  return <IconComponent size={size} strokeWidth={1.75} aria-hidden />;
}

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
            <Icon name="location" />
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
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}