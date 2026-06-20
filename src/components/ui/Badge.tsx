export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`rounded-pill border-highlight/25 bg-highlight-soft text-highlight-deep inline-flex items-center gap-1.5 border px-4 py-1.5 text-[0.74rem] font-semibold tracking-wide ${className}`}
    >
      <span className="bg-highlight h-1.5 w-1.5 rounded-full" aria-hidden />
      {children}
    </span>
  );
}
