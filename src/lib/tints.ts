/* Maps a tint name to Tailwind classes. Keeps colour usage consistent. */

export const TINT_CARD: Record<string, string> = {
  sky: "bg-sky",
  sage: "bg-sage",
  clay: "bg-clay",
  sand: "bg-sand",
  blush: "bg-blush",
  lilac: "bg-lilac",
};

export const TINT_SOFT: Record<string, string> = {
  sky: "bg-sky-soft",
  sage: "bg-sage-soft",
  clay: "bg-clay-soft",
  sand: "bg-sand-soft",
  blush: "bg-blush-soft",
  lilac: "bg-lilac-soft",
};

export function tintCard(t: string) {
  return TINT_CARD[t] ?? TINT_CARD.sky;
}
export function tintSoft(t: string) {
  return TINT_SOFT[t] ?? TINT_SOFT.sky;
}
