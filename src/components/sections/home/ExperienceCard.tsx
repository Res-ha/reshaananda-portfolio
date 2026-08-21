import { Briefcase, Linkedin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n";
import { SectionMarker } from "@/components/sections/shared/SectionMarker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";

export function ExperienceCard({
  sectionIndex,
  showHeading = true,
}: {
  sectionIndex?: string;
  showHeading?: boolean;
}) {
  const { pick, t } = useLanguage();
  return (
    <section
      id="experience"
      aria-labelledby={showHeading ? "experience-heading" : undefined}
      aria-label={showHeading ? undefined : t("experience.title")}
      className="scroll-mt-28"
    >
      {sectionIndex && (
        <div className="mb-4">
          <SectionMarker index={sectionIndex} label={t("home.sectionExperience")} />
        </div>
      )}
      <Card className="group overflow-hidden rounded-2xl border-border bg-card/70 shadow-sm transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-800/5 dark:hover:shadow-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(15rem,0.75fr)_minmax(0,1.25fr)]">
          <CardHeader className="border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
            {showHeading && (
              <CardTitle
                id="experience-heading"
                className="flex items-center gap-2 text-2xl tracking-tight text-foreground"
              >
                <Briefcase className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {t("experience.title")}
              </CardTitle>
            )}
            <CardDescription className="max-w-sm text-sm leading-relaxed">
              {t("experience.intro")}
            </CardDescription>

            <dl className="mt-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-3 lg:mt-8 lg:grid-cols-1">
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

            <Button
              variant="outline"
              size="lg"
              className="mt-8 min-h-11 w-full rounded-full"
              render={
                <a
                  href="https://www.linkedin.com/in/resha-ananda-rahman/"
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              {t("experience.linkedin")}
            </Button>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <ol aria-label={t("experience.title")}>
              {experiences.map((item, index) => (
                <li key={item.company} className="pt-5 first:pt-0">
                  <div className="grid gap-2 sm:grid-cols-[minmax(9rem,0.45fr)_minmax(0,1fr)] sm:gap-8">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.company}</p>
                      <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                        {pick(item.start)} - {pick(item.end)}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pick(item.role)}
                    </p>
                  </div>
                  {index < experiences.length - 1 && <Separator className="mt-5" />}
                </li>
              ))}
            </ol>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
