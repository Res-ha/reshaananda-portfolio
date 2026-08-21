import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 border-t border-border py-10 transition-colors duration-300">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <Link
            to="/"
            aria-label={t("footer.homeLabel")}
            className="group inline-flex items-center gap-3 rounded-xl text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src="/favicon.svg"
              alt=""
              width={64}
              height={64}
              aria-hidden="true"
              className="h-9 w-9 rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          </Link>
          <Separator className="sm:hidden" />
          <p className="text-sm text-muted-foreground sm:text-right">
            &copy; 2026 {profile.name}. {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
