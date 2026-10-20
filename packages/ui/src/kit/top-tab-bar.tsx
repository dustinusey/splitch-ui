"use client";

import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type TopTab = { id: string; label: string; icon?: React.ReactNode };

/** Browser-style tab strip shown at the top of the main pane. */
export function TopTabBar({
  tabs,
  activeId,
  onSelect,
  onClose,
  onAdd,
  actions,
  className,
}: {
  tabs: TopTab[];
  activeId?: string;
  onSelect?: (id: string) => void;
  onClose?: (id: string) => void;
  onAdd?: () => void;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-11 shrink-0 items-center gap-1 px-4", className)}>
      <div role="tablist" className="flex min-w-0 items-center gap-1">
        {tabs.map((t) => {
          const active = t.id === activeId;
          return (
            <div
              key={t.id}
              role="tab"
              aria-selected={active}
              tabIndex={0}
              onClick={() => onSelect?.(t.id)}
              onKeyDown={(e) => e.key === "Enter" && onSelect?.(t.id)}
              className={cn(
                "group flex h-8 min-w-0 cursor-default items-center gap-2 rounded-lg px-2.5 text-[13.5px] transition-colors",
                active ? "text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
              )}
            >
              {t.icon}
              <span className="truncate">{t.label}</span>
              {onClose && tabs.length > 1 && (
                <button
                  type="button"
                  aria-label={`Close ${t.label}`}
                  onClick={(e) => { e.stopPropagation(); onClose(t.id); }}
                  className="hidden size-4 place-items-center rounded text-muted-foreground hover:text-foreground group-hover:grid"
                >
                  <X className="size-3" />
                </button>
              )}
            </div>
          );
        })}
      </div>
      {onAdd && (
        <button type="button" aria-label="New tab" onClick={onAdd} className="grid size-7 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground">
          <Plus className="size-4" strokeWidth={1.5} />
        </button>
      )}
      <div className="ml-auto flex items-center gap-1">{actions}</div>
    </div>
  );
}
