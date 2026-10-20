"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Labelled group of sidebar items ("Bots", "Pinned", "Chats"…). */
export function SidebarSection({
  label,
  action,
  onAction,
  children,
  className,
  size = "sm",
}: {
  label?: string;
  /** Show a trailing "+" (or custom node) next to the label. */
  action?: React.ReactNode | true;
  onAction?: () => void;
  children?: React.ReactNode;
  className?: string;
  /** "md" for top-level headers, "sm" for sub-groups. */
  size?: "sm" | "md";
}) {
  return (
    <div className={cn("flex flex-col gap-px", className)}>
      {label && (
        <div className="flex h-8 items-center justify-between pr-1.5 pl-2.5">
          <span className={cn("text-muted-foreground", size === "md" ? "text-[13.5px]" : "text-[12.5px]")}>{label}</span>
          {action && (
            <button type="button" onClick={onAction} aria-label={`Add to ${label}`} className="grid size-6 place-items-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground">
              {action === true ? <Plus className="size-4" strokeWidth={1.5} /> : action}
            </button>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

/** A sidebar row: icon/avatar + label, with active highlight and optional unread dot. */
export function SidebarItem({
  icon,
  label,
  active,
  unread,
  bold,
  href,
  onClick,
  className,
}: {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  unread?: boolean;
  /** Bold label (e.g. unread conversation). Defaults to `unread`. */
  bold?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      {...(href ? { href } : { type: "button" as const })}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/item flex h-9 w-full min-w-0 items-center gap-2.5 rounded-[10px] px-2.5 text-left text-[14px] text-sidebar-foreground transition-colors",
        "hover:bg-sidebar-accent/70 [&_svg]:size-[17px] [&_svg]:shrink-0 [&>svg]:stroke-[1.5]",
        active && "bg-sidebar-accent hover:bg-sidebar-accent",
        (bold ?? unread) && "font-semibold",
        className,
      )}
    >
      {icon && <span className="flex w-[22px] shrink-0 items-center justify-center">{icon}</span>}
      <span className="truncate">{label}</span>
      {unread && <span aria-label="unread" className="ml-auto size-1.5 shrink-0 rounded-full bg-unread" />}
    </Comp>
  );
}
