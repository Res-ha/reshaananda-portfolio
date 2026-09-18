import { SocialLinks } from "@/components/sections/shared/SocialLinks";
import { profile } from "@/data/profile";

export function SideRails() {
  return (
    <>
      <aside
        aria-label="Social links"
        className="fixed bottom-0 left-7 z-20 hidden flex-col items-center xl:flex 2xl:left-10"
      >
        <SocialLinks compact vertical />
        <span className="mt-4 h-24 w-px bg-border" aria-hidden="true" />
      </aside>

      <aside className="fixed right-7 bottom-0 z-20 hidden flex-col items-center xl:flex 2xl:right-10">
        <a
          href={`mailto:${profile.email}`}
          className="mb-5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground transition-[color,transform] duration-300 [writing-mode:vertical-rl] hover:-translate-y-1 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          {profile.email}
        </a>
        <span className="h-24 w-px bg-border" aria-hidden="true" />
      </aside>
    </>
  );
}
