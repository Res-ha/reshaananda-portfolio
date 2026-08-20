import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { useLanguage } from "@/lib/i18n";

const channels = [
  {
    id: "email",
    icon: Mail,
    title: "contact.emailTitle",
    description: "contact.emailDescription",
    action: "contact.emailAction",
    href: `mailto:${profile.email}`,
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "contact.instagramTitle",
    description: "contact.instagramDescription",
    action: "contact.instagramAction",
    href: "https://www.instagram.com/reshaanandaa/",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "contact.linkedinTitle",
    description: "contact.linkedinDescription",
    action: "contact.linkedinAction",
    href: "https://www.linkedin.com/in/resha-ananda-rahman/",
  },
  {
    id: "github",
    icon: Github,
    title: "contact.githubTitle",
    description: "contact.githubDescription",
    action: "contact.githubAction",
    href: "https://github.com/Res-ha",
  },
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Resha Ananda Rahman" },
      {
        name: "description",
        content:
          "Get in touch with Resha Ananda Rahman for web development projects, collaborations, and professional opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/contact") },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${siteUrl}/contact#contactpage`,
          name: "Contact Resha Ananda Rahman",
          url: absoluteUrl("/contact"),
          mainEntity: { "@id": `${siteUrl}/#person` },
        },
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <PortfolioPageLayout>
      <FadeIn>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
          {t("contact.socialHeading")}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("contact.pageTitle")}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t("contact.pageIntro")}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            const isEmail = channel.id === "email";

            return (
              <FadeIn key={channel.id} delay={index * 60}>
                <a
                  href={channel.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-zinc-800/5 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-8">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {t(channel.title)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(channel.description)}
                    </p>
                    <span className="mt-4 inline-flex text-sm font-medium text-primary">
                      {t(channel.action)}
                    </span>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {t("contact.messageHeading")}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("contact.messageDescription")}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t("contact.sendEmail")}
          </a>
        </div>
      </FadeIn>
    </PortfolioPageLayout>
  );
}
