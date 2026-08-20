import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SurfaceCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 text-card-foreground transition-colors duration-300 dark:backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
