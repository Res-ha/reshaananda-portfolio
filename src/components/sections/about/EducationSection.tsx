import { GraduationCap } from "lucide-react";
import { education } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";

export function EducationSection() {
  const { pick, t } = useLanguage();

  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-28">
      <Card className="overflow-hidden rounded-2xl border-border bg-card/75 shadow-sm">
        <CardHeader className="p-6 sm:p-8">
          <CardTitle
            id="education-heading"
            className="flex items-center gap-2 text-2xl tracking-tight text-foreground sm:text-3xl"
          >
            <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
            {t("about.education")}
          </CardTitle>
          <CardDescription className="max-w-xl text-sm leading-relaxed sm:text-base">
            {t("about.educationIntro")}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-8">
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-semibold text-primary"
              >
                UPR
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground">{education.institution}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t("about.degree")}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground tabular-nums sm:text-right">
              {pick(education.period)}
            </p>
          </div>

          <Separator className="my-5" />

          <dl>
            <div>
              <dt className="text-xs text-muted-foreground">{t("about.gpa")}</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{education.gpa}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </section>
  );
}
