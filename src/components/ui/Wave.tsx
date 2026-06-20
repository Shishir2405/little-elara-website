/* Scalloped / bumpy section divider, matching the reference's soft wavy edges. */

function scallopPath(width = 1440, bumps = 16, amp = 26, baseY = 30, height = 48) {
  const seg = width / bumps;
  let d = `M0,${height} L0,${baseY}`;
  for (let i = 0; i < bumps; i++) {
    d += ` q ${seg / 2},${-amp} ${seg},0`;
  }
  d += ` L${width},${height} Z`;
  return d;
}

const FILL: Record<string, string> = {
  cream: "var(--color-cream)",
  "cream-deep": "var(--color-cream-deep)",
  white: "var(--color-white)",
  charcoal: "var(--color-charcoal)",
  sage: "var(--color-sage)",
  clay: "var(--color-clay)",
  sand: "var(--color-sand)",
};

export function Wave({
  fill = "cream",
  flip = false,
  className = "",
}: {
  fill?: keyof typeof FILL | string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full leading-none ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="block h-[clamp(26px,4vw,52px)] w-full"
      >
        <path d={scallopPath()} fill={FILL[fill] ?? fill} />
      </svg>
    </div>
  );
}
