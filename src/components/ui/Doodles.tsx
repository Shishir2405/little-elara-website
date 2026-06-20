/* Hand-drawn brand doodles (charcoal stroke), matching the reference style.
   All decorative + aria-hidden. Add the `floaty` class for ambient motion. */

type D = { className?: string; style?: React.CSSProperties };
const stroke = "#4a4a4a";

export function Rocket({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      <path
        d="M40 8c8 2 14 9 16 18-9 2-15 8-18 16-5-3-9-7-12-12-3-5-4-11-2-18 5-3 11-4 16-4Z"
        fill="#d6e0d4"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle cx="42" cy="22" r="5" fill="#faf8f2" stroke={stroke} strokeWidth="2" />
      <path
        d="M26 38c-6 2-9 7-10 14 7-1 12-4 14-10"
        fill="#faf8f2"
        stroke={stroke}
        strokeWidth="2"
      />
      <path d="M30 46l-8 8M24 42l-6 6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Moon({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      <circle cx="32" cy="32" r="22" fill="#d6e0d4" stroke={stroke} strokeWidth="2" />
      <circle cx="24" cy="26" r="3" stroke={stroke} strokeWidth="2" />
      <circle cx="40" cy="34" r="4" stroke={stroke} strokeWidth="2" />
      <circle cx="30" cy="42" r="2.5" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export function StarBurst({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      <path
        d="M24 4l4 12 12-4-8 10 10 6-13 1 2 13-7-11-7 11 2-13-13-1 10-6-8-10 12 4z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#faf8f2"
      />
    </svg>
  );
}

export function CloudRainbow({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 80 56"
      width="80"
      height="56"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      <path
        d="M22 40c-7 0-12-5-12-11s5-11 12-11c2-7 8-12 16-12s14 5 16 12c6 0 11 4 11 10s-5 11-12 11H22Z"
        fill="#faf8f2"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M20 48c4-6 10-9 18-9s14 3 18 9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Birds({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 80 48"
      width="80"
      height="48"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      {[
        [8, 18],
        [26, 10],
        [44, 20],
        [60, 12],
        [20, 32],
        [40, 36],
        [58, 30],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y}q4 -5 8 0q4 -5 8 0`}
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  );
}

export function Squiggle({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 100 24"
      width="100"
      height="24"
      className={className}
      style={style}
      aria-hidden
      fill="none"
    >
      <path
        d="M2 12c8-12 16 12 24 0s16-12 24 0 16 12 24 0 16-12 24 0"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Blob({ className, style, fill = "#d6e0d4" }: D & { fill?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        fill={fill}
        d="M48 -64C61 -53 70 -36 73 -18C76 0 73 19 63 33C53 47 36 56 17 62C-2 68 -23 71 -41 63C-59 55 -74 36 -78 15C-82 -6 -75 -29 -61 -45C-47 -61 -26 -70 -5 -65C16 -60 35 -75 48 -64Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/* Curvy dashed connector line, like the one between the hero photos. */
export function DashedConnector({ className, style }: D) {
  return (
    <svg
      viewBox="0 0 600 160"
      className={className}
      style={style}
      aria-hidden
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        className="dashed-path"
        d="M10 30 C 150 -20 200 120 320 90 C 430 64 470 10 590 70"
        stroke={stroke}
        strokeWidth="2.5"
      />
    </svg>
  );
}
