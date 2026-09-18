import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  showHeading = true,
}: {
  sectionIndex?: string;
  showHeading?: boolean;
}) {
  const { pick, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = experiences[activeIndex] ?? experiences[0];

  function moveTab(direction: 1 | -1) {
    const next = (activeIndex + direction + experiences.length) % experiences.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section
      id="experience"
      aria-labelledby={showHeading ? "experience-heading" : undefined}
      aria-label={showHeading ? undefined : t("experience.title")}
      className="scroll-mt-28"
    >
      {showHeading && (
        <div className="max-w-2xl">
          <p className="section-kicker">{t("home.sectionExperience")}</p>
          <h2 id="experience-heading" className="section-title mt-4">
            {t("experience.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("experience.intro")}
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
        <div
          role="tablist"
          aria-label={t("experience.title")}
          aria-orientation="vertical"
          className="flex max-w-full overflow-x-auto border-b border-border md:block md:overflow-visible md:border-b-0 md:border-l"
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
              event.preventDefault();
              moveTab(1);
            }
            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
              event.preventDefault();
              moveTab(-1);
            }
          }}
        >
          {experiences.map((item, index) => (
            <button
              key={item.company}
              id={`experience-tab-${index}`}
              type="button"
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`experience-panel-${index}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative min-h-12 shrink-0 border-b-2 px-5 text-left font-mono text-xs whitespace-nowrap transition-colors duration-300 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring md:w-full md:border-b-0 md:border-l-2 md:px-5",
                activeIndex === index
                  ? "border-primary bg-primary/8 text-primary md:-ml-px"
                  : "border-transparent text-muted-foreground hover:bg-secondary/60 hover:text-primary md:-ml-px",
              )}
            >
              {item.company}
            </button>
          ))}
        </div>

        {active && (
          <div
            id={`experience-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${activeIndex}`}
            className="min-h-64"
          >
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {pick(active.role)} <span className="text-primary">@ {active.company}</span>
            </h3>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {pick(active.start)} - {pick(active.end)}
            </p>
            <ul className="mt-7 space-y-4">
              {pick(active.highlights).map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.linkedin.com/in/resha-ananda-rahman/"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t("experience.linkedin")}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
