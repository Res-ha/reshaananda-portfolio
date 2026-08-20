import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
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
    <footer className="mt-24 border-t border-border py-10 transition-colors duration-300">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 {profile.name}. {t("footer.rights")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
