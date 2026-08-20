import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import { SectionMarker } from "@/components/ui/SectionMarker";

type CapabilityGroup = {
  id: "web" | "networking" | "data";
  skills: string[];
  className: string;
};

const groups: CapabilityGroup[] = [
  { id: "web", skills: profile.skillGroups.web.slice(0, 4), className: "md:col-span-5" },
  {
    id: "networking",
    skills: profile.skillGroups.networking.slice(0, 2),
    className: "md:col-span-4",
  },
  { id: "data", skills: profile.skillGroups.data.slice(0, 2), className: "md:col-span-3" },
];

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="capabilities-heading">
      <div className="max-w-2xl">
        <SectionMarker index="01" label={t("home.sectionCapabilities")} />
        <h2
          id="capabilities-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("home.capabilities")}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {t("home.capabilitiesIntro")}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-12">
        {groups.map((group) => (
          <article
            key={group.id}
            className={`group border-t border-border pt-5 transition-colors duration-500 hover:border-primary/60 ${group.className}`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-foreground">{t(`skills.${group.id}`)}</h3>
              {group.id === "data" && (
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                  {t("skills.learning")}
                </span>
              )}
            </div>
            <ul className="mt-5 space-y-2" aria-label={t(`skills.${group.id}`)}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                >
                  <span
                    className="h-px w-4 bg-border transition-all duration-300 group-hover:w-6 group-hover:bg-primary"
                    aria-hidden="true"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
