import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-zinc-900/5 transition-colors duration-300 hover:bg-zinc-100 active:scale-95 dark:ring-white/10 dark:hover:bg-zinc-700/60",
        className,
      )}
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-4 w-4 text-teal-400" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
      )}
    </button>
  );
}
