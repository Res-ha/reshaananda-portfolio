import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("theme.switchToLight") : t("theme.switchToDark")}
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-full text-foreground ring-1 ring-border transition-colors duration-300 hover:bg-accent active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-4 w-4 text-primary" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-foreground" aria-hidden="true" />
      )}
    </button>
  );
}
