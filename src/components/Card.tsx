import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SurfaceCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-900/5 bg-white p-6 transition-colors duration-300 dark:border-white/10 dark:bg-zinc-800/50 dark:backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
