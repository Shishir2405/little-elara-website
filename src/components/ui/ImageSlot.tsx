"use client";

import Image from "next/image";
import { useState } from "react";
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
  sky: "bg-sky-soft",
  sage: "bg-sage-soft",
  clay: "bg-clay-soft",
  sand: "bg-sand-soft",
  blush: "bg-blush-soft",
  lilac: "bg-lilac-soft",
  cream: "bg-cream-deep",
};

/**
 * Drop-in image slot. Pass `src` to use a real photo. If the file is missing
 * (or fails to load), it gracefully shows a labelled placeholder instead of a
 * broken image, so you always see exactly where each photo goes.
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
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius: RADIUS[shape], aspectRatio: aspect }}
    >
      {showImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
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
