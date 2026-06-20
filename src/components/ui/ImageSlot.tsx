import Image from "next/image";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

type Shape = "arch" | "rounded" | "circle" | "square" | "tall" | "wide";

const RADIUS: Record<Shape, string> = {
  arch: "180px 180px 28px 28px",
  rounded: "var(--radius-lg)",
  circle: "999px",
  square: "var(--radius-md)",
  tall: "var(--radius-md)",
  wide: "var(--radius-md)",
};

const TINT_BG: Record<string, string> = {
  sage: "bg-sage-soft",
  clay: "bg-clay-soft",
  sand: "bg-sand-soft",
  blush: "bg-blush-soft",
  cream: "bg-cream-deep",
};

/**
 * Drop-in image slot. Pass `src` to use a real photo, otherwise it renders a
 * tasteful labelled placeholder so you can see exactly where each photo goes.
 *
 * TODO(client): add real, consented photographs and pass them via `src`.
 */
export function ImageSlot({
  src,
  alt = "",
  label = "Add photo",
  shape = "rounded",
  tint = "sage",
  aspect = "4 / 3",
  className = "",
}: {
  src?: string;
  alt?: string;
  label?: string;
  shape?: Shape;
  tint?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: RADIUS[shape], aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div
          className={`border-border-soft flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed ${TINT_BG[tint] ?? "bg-cream-deep"}`}
          style={{ borderRadius: RADIUS[shape] }}
        >
          <ImageIcon size={28} weight="duotone" className="text-ink-soft/60" aria-hidden />
          <span className="text-ink-soft px-3 text-center text-[0.78rem] font-medium">{label}</span>
        </div>
      )}
    </div>
  );
}
