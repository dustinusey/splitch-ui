export const ACCENTS = ["blue", "purple", "green", "red", "cyan", "orange", "pink", "teal"] as const;
export type Accent = (typeof ACCENTS)[number];
export type MarkColor = Accent | "neutral";

/** Tailwind classes for each palette color (static strings so Tailwind can see them). */
export const MARK_BG: Record<MarkColor, string> = {
  blue: "bg-mark-blue",
  purple: "bg-mark-purple",
  green: "bg-mark-green",
  red: "bg-mark-red",
  cyan: "bg-mark-cyan",
  orange: "bg-mark-orange",
  pink: "bg-mark-pink",
  teal: "bg-mark-teal",
  neutral: "bg-mark-neutral",
};
