"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
export { ThemeProvider, useTheme } from "next-themes";
import { TooltipProvider } from "@/ui/tooltip";
import { Toaster } from "@/ui/sonner";
import { ACCENTS, type Accent } from "@/lib/accents";

type AccentCtx = { accent: Accent; setAccent: (a: Accent) => void };
const AccentContext = React.createContext<AccentCtx | null>(null);
const STORAGE_KEY = "splitch-accent";

export function AccentProvider({ children, defaultAccent = "blue" }: { children: React.ReactNode; defaultAccent?: Accent }) {
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


export type ProvidersProps = {
  children: React.ReactNode;
  /** Accent used until the visitor picks one. Keep in sync with <html data-accent>. */
  defaultAccent?: Accent;
  /** "light" | "dark" | "system" (default). */
  defaultTheme?: string;
  /** Render the sonner <Toaster/> (default true). */
  toaster?: boolean;
};

/** ThemeProvider (next-themes) + accent + tooltip provider + toaster in one wrapper. */
export function Providers({ children, defaultAccent = "blue", defaultTheme = "system", toaster = true }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem disableTransitionOnChange>
      <AccentProvider defaultAccent={defaultAccent}>
        <TooltipProvider delayDuration={300}>
          {children}
          {toaster && <Toaster />}
        </TooltipProvider>
      </AccentProvider>
    </ThemeProvider>
  );
}
