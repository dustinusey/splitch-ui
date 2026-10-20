"use client";

import { Check } from "lucide-react";
import { ACCENTS, MARK_BG } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { useAccent } from "./providers";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";

export function AccentPicker({ className }: { className?: string }) {
  const { accent, setAccent } = useAccent();
  return (
    <div role="radiogroup" aria-label="Accent color" className={cn("flex items-center gap-1.5", className)}>
      {ACCENTS.map((a) => (
        <Tooltip key={a}>
          <TooltipTrigger asChild>
            <button
              type="button"
              role="radio"
              aria-checked={accent === a}
              aria-label={a}
              onClick={() => setAccent(a)}
              className={cn(
                "grid size-5 place-items-center rounded-full text-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2",
                MARK_BG[a],
                accent === a && "ring-2 ring-foreground/20 ring-offset-2 ring-offset-background",
              )}
            >
              {accent === a && <Check className="size-3" strokeWidth={2.5} />}
            </button>
          </TooltipTrigger>
          <TooltipContent className="capitalize">{a}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
