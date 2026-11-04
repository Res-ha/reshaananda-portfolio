import { Briefcase, Linkedin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";

export function CareerSection() {
  const { pick, t } = useLanguage();

  return (
    <section id="career" aria-labelledby="career-heading" className="scroll-mt-28">
      <Card className="overflow-hidden rounded-lg border-border bg-card/75 shadow-sm p-6 sm:p-8">
        <header className="mb-6">
          <h2
            id="career-heading"
            className="flex items-center gap-2 text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
            {t("about.career")}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("about.careerIntro")}
          </p>
        </header>

        <ol aria-label={t("about.career")} className="space-y-5">
          {experiences.map((item, index) => (
            <li key={item.company} className={index < experiences.length - 1 ? "pb-5" : ""}>
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-semibold text-primary"
                  >
                    {item.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground">{item.company}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pick(item.role)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground tabular-nums sm:text-right">
                  {pick(item.start)} - {pick(item.end)}
                </p>
              </div>
              {index < experiences.length - 1 && <Separator className="mt-5" />}
            </li>
          ))}
        </ol>

        <footer className="mt-6 border-t border-border bg-muted/30 p-4 sm:px-0">
          <a
            href="https://www.linkedin.com/in/resha-ananda-rahman/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-mono font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            {t("experience.linkedin")}
          </a>
        </footer>
      </Card>
    </section>
  );
}
