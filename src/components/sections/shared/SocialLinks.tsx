import { Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const icons = { github: Github, instagram: Instagram, linkedin: Linkedin };

export function SocialLinks({
  label = "Professional social links",
  compact = false,
  vertical = false,
}: {
  label?: string;
  compact?: boolean;
  vertical?: boolean;
}) {
  return (
    <ul
      aria-label={label}
      className={cn("flex items-center gap-2", vertical ? "flex-col" : "flex-wrap")}
    >
      {profile.socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-foreground transition-[color,transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:text-primary active:translate-y-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                compact
                  ? "w-11 rounded-md"
                  : "rounded-md bg-card px-3.5 ring-1 ring-border hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10",
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {!compact && <span>{social.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
