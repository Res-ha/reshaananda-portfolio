import { Briefcase, Linkedin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n";
import { SectionMarker } from "@/components/ui/SectionMarker";

export function ExperienceCard({ sectionIndex }: { sectionIndex?: string }) {
  const { pick, t } = useLanguage();
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-28">
      {sectionIndex && (
        <div className="mb-4">
          <SectionMarker index={sectionIndex} label={t("home.sectionExperience")} />
        </div>
      )}
      <a
        href="https://www.linkedin.com/in/resha-ananda-rahman/"
        target="_blank"
        rel="noreferrer"
        aria-label={t("experience.linkedin")}
        className="group -mx-4 block rounded-2xl border-t border-border px-4 pt-10 pb-4 transition-[transform,background-color,box-shadow] duration-500 hover:-translate-y-0.5 hover:bg-card/70 hover:shadow-lg hover:shadow-zinc-800/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:shadow-black/10 sm:pt-12"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <div className="flex items-start justify-between gap-4">
              <h2
                id="experience-heading"
                className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary"
              >
                <Briefcase className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {t("experience.title")}
              </h2>
              <Linkedin
                className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("experience.intro")}
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 lg:grid-cols-1">
              <div className="border-t border-border pt-3">
                <dt className="text-xs leading-tight text-muted-foreground">
                  {t("experience.technicians")}
                </dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums text-foreground">117</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="text-xs leading-tight text-muted-foreground">
                  {t("experience.resolution")}
                </dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums text-foreground">85%</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="text-xs leading-tight text-muted-foreground">
                  {t("experience.tickets")}
                </dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums text-foreground">10+</dd>
              </div>
            </dl>
          </div>

          <ol className="lg:col-span-8">
            {experiences.map((item) => (
              <li key={item.company} className="border-t border-border py-5 first:pt-4 last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pick(item.role)}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted-foreground tabular-nums">
                    {pick(item.start)} - {pick(item.end)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </a>
    </section>
  );
}
