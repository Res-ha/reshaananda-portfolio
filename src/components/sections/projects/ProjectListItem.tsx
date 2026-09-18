import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ProjectListItem({ project, index = 0 }: { project: Project; index?: number }) {
  const { pick, t } = useLanguage();
  const reversed = index % 2 === 1;

  return (
    <article className="group grid items-center gap-7 lg:grid-cols-12 lg:gap-0">
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`${t("project.view")}: ${project.title}`}
        className={cn(
          "relative overflow-hidden rounded-lg border border-border bg-secondary focus-visible:ring-2 focus-visible:ring-ring lg:col-span-7 lg:row-start-1",
          reversed ? "lg:col-start-6" : "lg:col-start-1",
        )}
      >
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              width={960}
              height={540}
              loading="lazy"
              className="aspect-video w-full object-cover grayscale-[35%] transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
            <span
              className="absolute inset-0 bg-primary/10 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 dark:bg-primary/20"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="project-placeholder grid aspect-video place-items-center p-8">
            <div className="text-center">
              <span className="font-mono text-xs tracking-[0.25em] text-primary">
                {pick(project.category)}
              </span>
              <span className="mt-4 block text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.08em] text-foreground/90">
                {project.initials}
              </span>
            </div>
          </div>
        )}
      </Link>

      <div
        className={cn(
          "relative z-10 lg:col-span-6 lg:row-start-1",
          reversed ? "lg:col-start-1 lg:text-left" : "lg:col-start-7 lg:text-right",
        )}
      >
        <p className="font-mono text-xs text-primary">{t("project.caseStudy")}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
          >
            {project.title}
          </Link>
        </h3>
        <div className="mt-5 rounded-lg border border-border bg-card p-5 shadow-xl shadow-foreground/5 lg:p-6">
          <p className="text-sm leading-7 text-muted-foreground">{pick(project.summary)}</p>
          <p className="mt-3 text-sm leading-6 text-foreground">{pick(project.impact)}</p>
        </div>
        <ul
          aria-label={t("projects.stack")}
          className={cn(
            "mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-foreground",
            !reversed && "lg:justify-end",
          )}
        >
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={cn("mt-5 flex items-center gap-1", !reversed && "lg:justify-end")}>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
            className="grid h-11 w-11 place-items-center rounded-md text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} ${t("project.liveDemo")}`}
              className="grid h-11 w-11 place-items-center rounded-md text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="group/link ml-2 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t("project.view")}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
