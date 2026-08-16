import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { profile } from "@/data/profile";
import { useLanguage, type MessageKey } from "@/lib/i18n";

const links = [
  { to: "/about", label: "nav.about" },
  { to: "/projects", label: "nav.projects" },
  { to: "/blog", label: "nav.blog" },
  { to: "/gallery", label: "nav.gallery" },
] as const satisfies ReadonlyArray<{ to: string; label: MessageKey }>;

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 border-t border-zinc-900/5 py-10 transition-colors duration-300 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-teal-700 dark:text-zinc-300 dark:hover:text-teal-400"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              &copy; 2026 {profile.name}. {t("footer.rights")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
