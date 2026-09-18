import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";

export function HomeContact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="home-contact-heading"
      className="scroll-mt-28 text-center"
    >
      <p className="section-kicker justify-center">{t("home.sectionContact")}</p>
      <h2 id="home-contact-heading" className="section-title mt-4 text-4xl sm:text-5xl">
        {t("contact.title")}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
        {t("contact.subtitle")}
      </p>
      <Button
        variant="outline"
        size="lg"
        nativeButton={false}
        className="mt-8 min-h-12 rounded-md border-primary px-6 font-mono text-xs text-primary hover:bg-primary/10 hover:text-primary"
        render={<a href={`mailto:${profile.email}`} />}
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {t("contact.sendEmail")}
      </Button>
    </section>
  );
}
