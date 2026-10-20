"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ACCENTS, type Accent } from "@/lib/accents";

type AccentCtx = { accent: Accent; setAccent: (a: Accent) => void };
const AccentContext = React.createContext<AccentCtx | null>(null);
const STORAGE_KEY = "splitch-accent";

function AccentProvider({ children, defaultAccent = "blue" }: { children: React.ReactNode; defaultAccent?: Accent }) {
  const [accent, setAccentState] = React.useState<Accent>(defaultAccent);

  React.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Accent | null;
    if (stored && (ACCENTS as readonly string[]).includes(stored)) setAccentState(stored);
  }, []);

  const setAccent = React.useCallback((a: Accent) => {
    setAccentState(a);
    localStorage.setItem(STORAGE_KEY, a);
    document.documentElement.dataset.accent = a;
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  return <AccentContext.Provider value={{ accent, setAccent }}>{children}</AccentContext.Provider>;
}

export function useAccent() {
  const ctx = React.useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used inside <Providers>");
  return ctx;
}

/** Inline script that applies the stored accent before paint (no flash). */
export const accentScript = `try{var a=localStorage.getItem("${STORAGE_KEY}");if(a)document.documentElement.dataset.accent=a}catch(e){}`;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AccentProvider>
        <TooltipProvider delayDuration={300}>
          {children}
          <Toaster />
        </TooltipProvider>
      </AccentProvider>
    </ThemeProvider>
  );
}
