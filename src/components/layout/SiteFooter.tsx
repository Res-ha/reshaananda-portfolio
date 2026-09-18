import { Container } from "@/components/layout/Container";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-8 transition-colors duration-300">
      <Container>
        <div className="text-center font-mono text-[11px] leading-6 text-muted-foreground">
          <p>
            &copy; 2026 {profile.name}. {t("footer.rights")}
          </p>
          <p className="mt-1">
            {t("footer.inspiredBy")}{" "}
            <a
              href="https://v4.brittanychiang.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
            >
              Brittany Chiang v4
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
