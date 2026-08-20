import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const icons = { github: Github, instagram: Instagram, linkedin: Linkedin, mail: Mail };

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {profile.socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.icon === "mail" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-11 w-11 place-items-center rounded-full bg-card text-foreground ring-1 ring-border transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-teal-700/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
