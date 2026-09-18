import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useLanguage, type MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/about", label: "nav.about" },
  { to: "/projects", label: "nav.projects" },
  { to: "/certifications", label: "nav.certifications" },
] as const satisfies ReadonlyArray<{ to: string; label: MessageKey }>;

export function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { pick, t } = useLanguage();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) => pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/85 backdrop-blur-xl transition-colors duration-300 supports-[backdrop-filter]:bg-background/72">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          aria-label={t("footer.homeLabel")}
          className="group grid h-11 w-11 place-items-center rounded-md border border-primary font-mono text-sm font-semibold text-primary transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring"
        >
          {profile.initials}
        </Link>

        <div className="flex items-center gap-1.5">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={isActive(link.to) ? "page" : undefined}
                    className={cn(
                      "relative block rounded-md px-3 py-2 font-mono text-xs transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring",
                      isActive(link.to)
                        ? "text-primary after:absolute after:right-3 after:bottom-0 after:left-3 after:h-px after:bg-primary"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageToggle className="rounded-md border-0 ring-0" />
          <ThemeToggle className="rounded-md border-0 ring-0" />
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            className="ml-1 hidden min-h-10 rounded-md border-primary px-4 font-mono text-xs text-primary hover:bg-primary/10 hover:text-primary md:inline-flex"
            render={<Link to="/contact" />}
          >
            {t("nav.contact")}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label={t("nav.openMenu")}
                  className="rounded-md md:hidden"
                />
              }
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)] bg-background">
              <SheetHeader className="border-b border-border pb-5">
                <SheetTitle>{profile.name}</SheetTitle>
                <SheetDescription>{pick(profile.role)}</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="grid gap-2">
                  {[...links, { to: "/contact", label: "nav.contact" as MessageKey }].map(
                    (link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          aria-current={isActive(link.to) ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block rounded-md border-l-2 px-4 py-3 font-mono text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring",
                            isActive(link.to)
                              ? "border-primary bg-primary/8 text-primary"
                              : "border-transparent text-muted-foreground hover:bg-secondary hover:text-primary",
                          )}
                        >
                          {t(link.label)}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
