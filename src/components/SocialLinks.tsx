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
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-zinc-700 ring-1 ring-zinc-900/5 transition-all duration-300 hover:bg-teal-700 hover:text-white hover:shadow-lg hover:shadow-teal-700/20 active:scale-95 dark:bg-zinc-800/50 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-teal-600 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
