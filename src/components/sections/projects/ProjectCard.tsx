import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <Card className="group h-full gap-0 border-border p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-800/5 dark:hover:shadow-black/20">
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-foreground transition-colors duration-300 group-hover:bg-primary">
            <span aria-hidden="true" className="text-4xl font-semibold text-background">
              {project.initials}
            </span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-medium">
          <span className="text-muted-foreground">{project.year}</span>
          <span className="text-primary">{pick(project.status)}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="transition-colors duration-300 group-hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
            >
              {project.title}
            </Link>
          </h2>
          {project.caseStudy && (
            <Badge variant="secondary" className="shrink-0 ring-1 ring-border">
              {t("project.caseStudy")}
            </Badge>
          )}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {pick(project.summary)}
        </p>

        <dl className="mt-2 grid gap-3 border-t border-border pt-4">
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.role")}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{pick(project.role)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.impact")}</dt>
            <dd className="mt-1 line-clamp-2 text-sm leading-relaxed text-foreground">
              {pick(project.impact)}
            </dd>
          </div>
        </dl>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex flex-wrap gap-2 border-border bg-transparent p-5 pt-4">
        <Button
          variant="outline"
          size="lg"
          className="min-h-11 rounded-full"
          render={<a href={project.link} target="_blank" rel="noreferrer" />}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </Button>
        {project.live ? (
          <Button
            size="lg"
            className="min-h-11 rounded-full"
            render={<a href={project.live} target="_blank" rel="noreferrer" />}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {t("project.liveDemo")}
          </Button>
        ) : (
          <Button
            size="lg"
            className="min-h-11 rounded-full"
            render={<Link to="/projects/$slug" params={{ slug: project.slug }} />}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            {t("project.view")}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
