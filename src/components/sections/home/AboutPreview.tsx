import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import portrait from "@/assets/portrait.jpg";

export function AboutPreview() {
  const { pick, t } = useLanguage();
  const technologies = ["PHP", "Laravel", "React", "WordPress", "TypeScript", "MySQL"];

  return (
    <section id="about" aria-labelledby="about-preview-heading" className="scroll-mt-28">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] md:items-center md:gap-16">
        <div>
          <p className="section-kicker">{t("home.aboutKicker")}</p>
          <h2 id="about-preview-heading" className="section-title mt-4">
            {t("home.aboutTitle")}
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{pick(profile.bio[0]!)}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {t("home.aboutToolsIntro")}
          </p>
          <ul className="mt-5 grid max-w-lg grid-cols-2 gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground">
            {technologies.map((technology) => (
              <li key={technology} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 bg-primary" aria-hidden="true" />
                {technology}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="group mt-7 inline-flex min-h-11 items-center gap-2 font-mono text-xs text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t("home.moreAbout")}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <figure className="relative mx-auto w-full max-w-xs md:mx-0 md:justify-self-end">
          <span
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border-2 border-primary transition-transform duration-500 hover:translate-x-3 hover:translate-y-3"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-lg bg-primary">
            <img
              src={portrait}
              alt={t("home.portraitAlt")}
              width={900}
              height={900}
              loading="lazy"
              className="aspect-square w-full object-cover grayscale-[20%] mix-blend-luminosity transition-[filter,mix-blend-mode] duration-500 hover:grayscale-0 hover:mix-blend-normal"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
