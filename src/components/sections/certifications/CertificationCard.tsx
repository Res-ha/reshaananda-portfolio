import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/Card";
import type { Certification } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";

export function CertificationCard({
  certification,
  onOpen,
}: {
  certification: Certification;
  onOpen: () => void;
}) {
  const { pick, t } = useLanguage();

  return (
    <Card className="h-full gap-0 border-border p-0 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-card/80 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/20">
      <button
        type="button"
        onClick={onOpen}
        className="group flex h-full w-full flex-col text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={certification.image}
            alt={`${pick(certification.name)} certificate preview`}
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold leading-snug text-foreground">
                {pick(certification.name)}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
            </div>
            <ArrowUpRight
              className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-primary"
              aria-hidden="true"
            />
          </div>
          <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs text-muted-foreground">
            <span>{pick(certification.issueDate)}</span>
            <Badge variant="secondary">{pick(certification.type)}</Badge>
          </div>
          <span className="sr-only">{t("certification.viewDetails")}</span>
        </div>
      </button>
    </Card>
  );
}
