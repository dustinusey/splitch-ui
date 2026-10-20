"use client";

import * as React from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";

type ShellCtx = { collapsed: boolean; setCollapsed: (v: boolean) => void; toggle: () => void };
const Ctx = React.createContext<ShellCtx | null>(null);
export const useAppShell = () => {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useAppShell must be used inside <AppShell>");
  return c;
};

/** Toggle button for the sidebar; works from inside sidebar or main pane. */
export function SidebarToggle({ className }: { className?: string }) {
  const { toggle, collapsed } = useAppShell();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={toggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn("grid size-7 place-items-center rounded-md text-foreground/80 hover:bg-sidebar-accent hover:text-foreground", className)}
        >
          <PanelLeft className="size-[17px]" strokeWidth={1.5} />
        </button>
      </TooltipTrigger>
      <TooltipContent>{collapsed ? "Expand" : "Collapse"} sidebar</TooltipContent>
    </Tooltip>
  );
}

/**
 * Two-pane application shell: collapsible sidebar (warm/darker surface) + main pane.
 * Pass sidebar content via `sidebar` (with optional `sidebarHeader` / `sidebarFooter`).
 */
export function AppShell({
  sidebarHeader,
  sidebar,
  sidebarFooter,
  children,
  defaultCollapsed = false,
  width = 222,
  className,
}: {
  sidebarHeader?: React.ReactNode;
  sidebar: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  width?: number;
  className?: string;
}) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const value = React.useMemo(() => ({ collapsed, setCollapsed, toggle: () => setCollapsed((c) => !c) }), [collapsed]);

  return (
    <Ctx.Provider value={value}>
      <div className={cn("flex h-dvh w-full overflow-hidden bg-background text-foreground", className)}>
        <aside
          aria-hidden={collapsed}
          style={{ width: collapsed ? 0 : width }}
          className={cn(
            "flex shrink-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground transition-[width] duration-200 ease-out",
            !collapsed && "border-r border-sidebar-border/60",
          )}
        >
          <div style={{ width }} className="flex h-full flex-col">
            {sidebarHeader && <div className="shrink-0 px-1.5 pt-2">{sidebarHeader}</div>}
            <div className="min-h-0 flex-1 overflow-y-auto px-1.5 py-1 [scrollbar-width:thin]">{sidebar}</div>
            {sidebarFooter && <div className="shrink-0 px-1.5 pb-2">{sidebarFooter}</div>}
          </div>
        </aside>
        <main className="flex min-w-0 flex-1 flex-col">{children}</main>
      </div>
    </Ctx.Provider>
  );
}
