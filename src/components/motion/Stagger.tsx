import { Children, isValidElement, type ReactNode } from "react";
import { FadeIn } from "./FadeIn";

export function StaggerContainer({
  children,
  className,
  step = 80,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) =>
        isValidElement(child) ? <FadeIn delay={i * step}>{child}</FadeIn> : child,
      )}
    </div>
  );
}
