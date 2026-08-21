import { Briefcase, Linkedin } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";

export function CareerSection() {
  const { pick, t } = useLanguage();

  return (
    <section id="career" aria-labelledby="career-heading" className="scroll-mt-28">
      <Card className="overflow-hidden rounded-2xl border-border bg-card/75 shadow-sm">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle
            id="career-heading"
            className="flex items-center gap-2 text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            <Briefcase className="h-5 w-5 text-primary" aria-hidden="true" />
            {t("about.career")}
          </CardTitle>
          <CardDescription className="max-w-xl text-sm leading-relaxed sm:text-base">
            {t("about.careerIntro")}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
          <ol aria-label={t("about.career")}>
            {experiences.map((item, index) => (
              <li key={item.company} className="py-5 first:pt-0 last:pb-0">
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
        </CardContent>

        <CardFooter className="justify-start border-t border-border bg-muted/30 px-6 py-4 sm:px-8">
          <Button
            variant="outline"
            className="min-h-10 rounded-full"
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
        </CardFooter>
      </Card>
    </section>
  );
}
