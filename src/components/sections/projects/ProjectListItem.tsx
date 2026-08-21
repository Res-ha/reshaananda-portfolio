import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectListItem({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const { pick, t } = useLanguage();

  if (!featured) {
    return (
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group grid gap-4 border-b border-border py-6 transition-colors duration-300 md:grid-cols-[minmax(0,1fr)_auto] md:items-start focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>{pick(project.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{pick(project.category)}</span>
            <span className="font-medium text-primary">{pick(project.status)}</span>
          </div>
          <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {pick(project.summary)}
          </p>
          <dl className="mt-4 grid gap-3 border-t border-border pt-4 text-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
            <div>
              <dt className="text-xs text-muted-foreground">{t("project.role")}</dt>
              <dd className="mt-1 font-medium text-foreground">{pick(project.role)}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">{t("project.impact")}</dt>
              <dd className="mt-1 leading-relaxed text-foreground">{pick(project.impact)}</dd>
            </div>
          </dl>
        </div>
        <p className="flex min-h-11 items-center gap-1 text-sm font-medium text-primary md:mt-4">
          {t("project.view")}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </p>
      </Link>
    );
  }

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group grid gap-8 border-y border-border py-8 md:grid-cols-12 md:items-center focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="overflow-hidden rounded-2xl bg-secondary md:col-span-5">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            width={960}
            height={540}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        ) : (
          <div className="grid aspect-video place-items-center bg-foreground transition-colors duration-300 group-hover:bg-primary">
            <span className="text-4xl font-semibold text-background" aria-hidden="true">
              {project.initials}
            </span>
          </div>
        )}
      </div>
      <div className="md:col-span-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span>{pick(project.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{pick(project.category)}</span>
          <span className="font-medium text-primary">{pick(project.status)}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {pick(project.summary)}
        </p>
        <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.role")}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{pick(project.role)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.impact")}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground">{pick(project.impact)}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-1 text-sm font-medium text-primary">
          {t("project.view")}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </p>
      </div>
    </Link>
  );
}
