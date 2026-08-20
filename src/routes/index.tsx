import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactCard } from "@/components/ui/ContactCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { PhotoCollage } from "@/components/media/PhotoCollage";
import { ProjectListItem } from "@/components/ui/ProjectListItem";
import { SkillBadges } from "@/components/ui/SkillBadges";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/Stagger";
import { posts } from "@/data/posts";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import portrait from "@/assets/portrait.jpg";

const title = `${profile.name} - Web Developer in Palangka Raya`;
const description =
  "Portfolio of Resha Ananda Rahman: PHP, Laravel, and WordPress projects, network notes, and writing in Indonesian.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { pick, t } = useLanguage();
  return (
    <>
      <Container className="mt-12 sm:mt-20">
        <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-16">
          <FadeIn className="lg:col-span-7">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {pick(profile.headline)}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {pick(profile.short)}
            </p>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </FadeIn>
          <FadeIn delay={100} className="lg:col-span-5">
            <img
              src={portrait}
              alt={t("home.portraitAlt")}
              width={900}
              height={900}
              className="float-soft mx-auto aspect-[4/5] w-full max-w-sm rotate-2 rounded-2xl object-cover ring-1 ring-border lg:mx-0 lg:ml-auto"
            />
          </FadeIn>
        </div>
      </Container>

      <PhotoCollage />

      <Container className="mt-20 sm:mt-28">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <section aria-labelledby="projects-heading">
              <h2
                id="projects-heading"
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t("home.selectedProjects")}
              </h2>
              <StaggerContainer className="mt-6 -mx-5 space-y-2">
                {projects.slice(0, 4).map((project) => (
                  <ProjectListItem key={project.slug} project={project} />
                ))}
              </StaggerContainer>
              <Link
                to="/projects"
                className="group mt-6 ml-0 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t("home.allProjects")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </section>

            <section aria-labelledby="writing-heading" className="mt-16">
              <h2
                id="writing-heading"
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t("home.latestWriting")}
              </h2>
              <StaggerContainer className="mt-6 space-y-6">
                {posts.slice(0, 3).map((post) => (
                  <article key={post.slug} className="group">
                    <p className="text-xs text-muted-foreground">{pick(post.dateLabel)}</p>
                    <h3 className="mt-1 text-lg font-medium text-foreground">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="transition-colors duration-300 group-hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {pick(post.title)}
                      </Link>
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {pick(post.excerpt)}
                    </p>
                  </article>
                ))}
              </StaggerContainer>
              <Link
                to="/blog"
                className="group mt-8 ml-0 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t("home.allPosts")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </section>

            <section aria-labelledby="skills-heading" className="mt-16">
              <h2
                id="skills-heading"
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t("home.skills")}
              </h2>
              <div className="mt-6">
                <SkillBadges skills={profile.skills} />
              </div>
            </section>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <FadeIn>
              <ExperienceCard />
            </FadeIn>
            <FadeIn delay={100}>
              <ContactCard />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  );
}
