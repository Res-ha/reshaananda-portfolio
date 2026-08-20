import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function PortfolioPageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Container className={cn("mt-12 sm:mt-20", className)}>
      <div className="min-w-0">{children}</div>
    </Container>
  );
}
