import { Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const icons = { github: Github, instagram: Instagram, linkedin: Linkedin };

export function SocialLinks({ label = "Professional social links" }: { label?: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap items-center gap-2">
      {profile.socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-card px-3.5 text-sm font-medium text-foreground ring-1 ring-border transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-teal-700/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{social.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
