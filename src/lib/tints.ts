/* Maps a tint name to Tailwind classes. Keeps colour usage consistent
   and traceable to the brand swatches. */

export const TINT_CARD: Record<string, string> = {
  sage: "bg-sage",
  clay: "bg-clay",
  sand: "bg-sand",
  blush: "bg-blush",
};

export const TINT_SOFT: Record<string, string> = {
  sage: "bg-sage-soft",
  clay: "bg-clay-soft",
  sand: "bg-sand-soft",
  blush: "bg-blush-soft",
};

export const TINT_RING: Record<string, string> = {
  sage: "ring-sage",
  clay: "ring-clay",
  sand: "ring-sand",
  blush: "ring-blush",
};

export function tintCard(t: string) {
  return TINT_CARD[t] ?? TINT_CARD.sage;
}
export function tintSoft(t: string) {
  return TINT_SOFT[t] ?? TINT_SOFT.sage;
}
