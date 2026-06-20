export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-pill border-border-soft bg-cream/70 text-ink-soft inline-flex items-center gap-1.5 border px-4 py-1.5 text-[0.72rem] font-medium tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
