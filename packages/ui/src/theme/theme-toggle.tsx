"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

const OPTIONS = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
] as const;

function useMounted() {
  const [m, setM] = React.useState(false);
  React.useEffect(() => setM(true), []);
  return m;
}

/**
 * Light / dark / system switch backed by next-themes.
 * - `variant="segmented"` (default): pill with sun · moon · monitor and a sliding thumb.
 * - `variant="icon"`: single icon button (animated sun ↔ moon) with a menu incl. System.
 */
export function ThemeToggle({ variant = "segmented", className }: { variant?: "segmented" | "icon"; className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const current = mounted ? (theme ?? "system") : "system";

  if (variant === "icon") {
    const dark = mounted && resolvedTheme === "dark";
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Change theme" className={cn("relative text-muted-foreground hover:text-foreground", className)}>
            <Sun strokeWidth={1.5} className={cn("transition-all duration-300", dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")} />
            <Moon strokeWidth={1.5} className={cn("absolute transition-all duration-300", dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0")} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuRadioGroup value={current} onValueChange={setTheme}>
            {OPTIONS.map(({ value, label, Icon }) => (
              <DropdownMenuRadioItem key={value} value={value}><Icon strokeWidth={1.5} /> {label}</DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const index = OPTIONS.findIndex((o) => o.value === current);
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn("relative inline-flex h-8 items-center rounded-full bg-muted p-0.5", className)}
    >
      <span
        aria-hidden
        className="absolute top-0.5 left-0.5 size-7 rounded-full bg-background shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-transform duration-200 ease-out dark:bg-secondary"
        style={{ transform: `translateX(${Math.max(index, 0) * 28}px)`, opacity: mounted ? 1 : 0 }}
      />
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={current === value}
          aria-label={label}
          title={label}
          onClick={() => setTheme(value)}
          className={cn(
            "relative z-10 grid size-7 place-items-center rounded-full transition-colors",
            current === value ? "text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-[15px]" strokeWidth={1.5} />
        </button>
      ))}
    </div>
  );
}
