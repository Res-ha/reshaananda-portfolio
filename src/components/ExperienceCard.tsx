import { ArrowDown, Briefcase } from "lucide-react";
import { SurfaceCard } from "./Card";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";

export function ExperienceCard() {
  const { pick, t } = useLanguage();
  return (
    <SurfaceCard>
      <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase className="h-4 w-4 text-zinc-600 dark:text-zinc-400" aria-hidden="true" />
        {t("experience.title")}
      </h2>
      <ol className="mt-6 space-y-4">
        {experiences.map((item) => (
          <li key={item.company} className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200"
            >
              {item.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {item.company}
              </p>
              <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">{pick(item.role)}</p>
            </div>
            <p className="shrink-0 text-xs text-zinc-600 tabular-nums dark:text-zinc-400">
              {item.start} - {pick(item.end)}
            </p>
          </li>
        ))}
      </ol>
      <a
        href={profile.cvUrl}
        className="mt-8 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 active:scale-[0.98] dark:bg-zinc-700/60 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {t("experience.download")}
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </SurfaceCard>
  );
}
