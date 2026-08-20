import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SkillBadges } from "@/components/ui/SkillBadges";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FadeIn } from "@/components/motion/FadeIn";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import portrait from "@/assets/portrait.jpg";

const title = "About - Resha Ananda Rahman";
const description =
  "Resha Ananda Rahman is an IT support specialist and web developer based in Palangka Raya, working with PHP, Laravel, and WordPress.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  const { pick, t } = useLanguage();
  return (
    <Container className="mt-12 sm:mt-20">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-16">
        <FadeIn className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <img
              src={portrait}
              alt={t("home.portraitAlt")}
              width={900}
              height={900}
              className="w-full max-w-xs rounded-2xl object-cover ring-1 ring-border lg:max-w-none"
            />
            <p className="mt-5 text-sm font-medium text-foreground">{pick(profile.role)}</p>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {pick(profile.location)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Bahasa Indonesia
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                English
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-8" delay={100}>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{pick(profile.headline)}</p>
            <div className="mt-8">
              <SocialLinks />
            </div>

            <div className="mt-12 space-y-6">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.en} className="text-base leading-relaxed text-muted-foreground">
                  {pick(paragraph)}
                </p>
              ))}
            </div>

            <section aria-labelledby="work-heading" className="mt-16">
              <h2
                id="work-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t("about.work")}
              </h2>
              <ol className="mt-8 space-y-8">
                {experiences.map((item) => (
                  <li key={item.company} className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                      <p className="shrink-0 text-xs text-muted-foreground tabular-nums">
                        {item.start} - {pick(item.end)}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-primary">{pick(item.role)}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="education-heading" className="mt-16">
              <h2
                id="education-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t("about.education")}
              </h2>
              <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Universitas Palangka Raya
                  </h3>
                  <p className="shrink-0 text-xs text-muted-foreground tabular-nums">2020 - 2024</p>
                </div>
                <p className="text-sm font-medium text-primary">{t("about.degree")}</p>
                <p className="text-sm text-muted-foreground">{t("about.gpa")}</p>
              </div>
            </section>

            <section aria-labelledby="tools-heading" className="mt-16">
              <h2
                id="tools-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t("about.tools")}
              </h2>
              <div className="mt-6">
                <SkillBadges skills={profile.skills} />
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
