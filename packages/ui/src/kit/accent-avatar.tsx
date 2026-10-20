import { cn } from "@/lib/utils";
import { MARK_BG, type MarkColor } from "@/lib/accents";

type Shape = "pill" | "hex" | "drop" | "tri" | "circle";

const SIZES = { xs: "w-3.5", sm: "w-4", md: "w-5", lg: "w-8" } as const;

/**
 * Small colored "mark" used as a bot/user avatar (pill, hexagon, drop, triangle, circle)
 * with two tiny eyes — mirrors the reference sidebar marks.
 */
export function AccentAvatar({
  color = "blue",
  shape = "circle",
  size = "md",
  eyes = true,
  className,
  label,
}: {
  color?: MarkColor;
  shape?: Shape;
  size?: keyof typeof SIZES;
  eyes?: boolean;
  className?: string;
  label?: string;
}) {
  const shapeCls: Record<Shape, string> = {
    pill: "aspect-[1.65] rounded-full",
    circle: "aspect-square rounded-full",
    hex: "aspect-[0.92] [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]",
    drop: "aspect-square rounded-[50%_0_50%_50%] -rotate-45",
    tri: "aspect-[1.15] rounded-[3px] [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  };
  const eyeColor = color === "neutral" ? "bg-background" : "bg-white";
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("relative inline-flex shrink-0 items-center justify-center", SIZES[size], shapeCls[shape], MARK_BG[color], className)}
    >
      {eyes && (
        <span className={cn("flex h-full items-center justify-center gap-[3px]", (shape === "tri" || shape === "drop") && "pt-[30%]")}>
          <span className={cn("h-[32%] w-[1.5px] rounded-full", eyeColor)} />
          <span className={cn("h-[32%] w-[1.5px] rounded-full", eyeColor)} />
        </span>
      )}
    </span>
  );
}
