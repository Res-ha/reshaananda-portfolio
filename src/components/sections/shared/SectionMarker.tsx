export function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
      <span className="font-semibold tabular-nums text-primary">{index}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
    </p>
  );
}
