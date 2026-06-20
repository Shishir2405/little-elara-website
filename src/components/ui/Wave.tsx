/* Clean, small, uniform wavy section divider. */

function wavePath() {
  const width = 1440;
  const height = 40;
  const baseY = 22;
  const amp = 11; // small amplitude
  const seg = 80; // half-wavelength -> uniform ripples
  let d = `M0 ${baseY}`;
  let up = true;
  for (let x = 0; x < width; x += seg) {
    const nx = x + seg;
    const cx = x + seg / 2;
    const cy = up ? baseY - amp : baseY + amp;
    d += ` Q ${cx} ${cy} ${nx} ${baseY}`;
    up = !up;
  }
  d += ` L${width} ${height} L0 ${height} Z`;
  return d;
}

const PATH = wavePath();

const FILL: Record<string, string> = {
  cream: "var(--color-cream)",
  "cream-deep": "var(--color-cream-deep)",
  white: "var(--color-white)",
  sky: "var(--color-sky)",
  "sky-soft": "var(--color-sky-soft)",
  sage: "var(--color-sage)",
  "sage-soft": "var(--color-sage-soft)",
  clay: "var(--color-clay)",
  sand: "var(--color-sand)",
  blush: "var(--color-blush)",
  lilac: "var(--color-lilac)",
  "lilac-soft": "var(--color-lilac-soft)",
  footer: "var(--color-footer)",
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
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="block h-[clamp(22px,3vw,40px)] w-full"
      >
        <path d={PATH} fill={FILL[fill] ?? fill} />
      </svg>
    </div>
  );
}
