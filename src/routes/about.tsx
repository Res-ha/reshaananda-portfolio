import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { SkillBadges } from "@/components/SkillBadges";
import { SocialLinks } from "@/components/SocialLinks";
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
              className="w-full max-w-xs rounded-2xl object-cover ring-1 ring-zinc-900/5 lg:max-w-none dark:ring-white/10"
            />
            <p className="mt-5 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {pick(profile.role)}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {pick(profile.location)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                Bahasa Indonesia
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                English
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-8" delay={100}>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              {pick(profile.headline)}
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>

            <div className="mt-12 space-y-6">
              {profile.bio.map((paragraph) => (
                <p
                  key={paragraph.en}
                  className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {pick(paragraph)}
                </p>
              ))}
            </div>

            <section aria-labelledby="work-heading" className="mt-16">
              <h2
                id="work-heading"
                className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                {t("about.work")}
              </h2>
              <ol className="mt-8 space-y-8">
                {experiences.map((item) => (
                  <li key={item.company} className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.company}
                      </h3>
                      <p className="shrink-0 text-xs text-zinc-600 tabular-nums dark:text-zinc-400">
                        {item.start} - {pick(item.end)}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                      {pick(item.role)}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="education-heading" className="mt-16">
              <h2
                id="education-heading"
                className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                {t("about.education")}
              </h2>
              <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    Universitas Palangka Raya
                  </h3>
                  <p className="shrink-0 text-xs text-zinc-600 tabular-nums dark:text-zinc-400">
                    2020 - 2024
                  </p>
                </div>
                <p className="text-sm font-medium text-teal-700 dark:text-teal-400">
                  {t("about.degree")}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("about.gpa")}</p>
              </div>
            </section>

            <section aria-labelledby="tools-heading" className="mt-16">
              <h2
                id="tools-heading"
                className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
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
