import * as React$1 from 'react';
import { Avatar as Avatar$1, Dialog as Dialog$1, DropdownMenu as DropdownMenu$1, ScrollArea as ScrollArea$1, Separator as Separator$1, Tabs as Tabs$1, Tooltip as Tooltip$1 } from 'radix-ui';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ToasterProps } from 'sonner';
export { toast } from 'sonner';
export { cn } from 'cn';
export { ThemeProvider, useTheme } from 'next-themes';

declare function Avatar({ className, size, ...props }: React$1.ComponentProps<typeof Avatar$1.Root> & {
    size?: "default" | "sm" | "lg";
}): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof Avatar$1.Fallback>): React$1.JSX.Element;
declare function AvatarBadge({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function AvatarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Card({ className, size, ...props }: React$1.ComponentProps<"div"> & {
    size?: "default" | "sm";
}): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof Dialog$1.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React$1.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.CheckboxItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.RadioItem> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.SubContent>): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare function ScrollArea({ className, children, ...props }: React$1.ComponentProps<typeof ScrollArea$1.Root>): React$1.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React$1.ComponentProps<typeof ScrollArea$1.ScrollAreaScrollbar>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

declare function Tabs({ className, orientation, ...props }: React$1.ComponentProps<typeof Tabs$1.Root>): React$1.JSX.Element;
declare const tabsListVariants: (props?: ({
    variant?: "line" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: React$1.ComponentProps<typeof Tabs$1.List> & VariantProps<typeof tabsListVariants>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Content>): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;

type ShellCtx = {
    collapsed: boolean;
    setCollapsed: (v: boolean) => void;
    toggle: () => void;
};
declare const useAppShell: () => ShellCtx;
/** Toggle button for the sidebar; works from inside sidebar or main pane. */
declare function SidebarToggle({ className }: {
    className?: string;
}): React$1.JSX.Element;
/**
 * Two-pane application shell: collapsible sidebar (warm/darker surface) + main pane.
 * Pass sidebar content via `sidebar` (with optional `sidebarHeader` / `sidebarFooter`).
 */
declare function AppShell({ sidebarHeader, sidebar, sidebarFooter, children, defaultCollapsed, width, className, }: {
    sidebarHeader?: React$1.ReactNode;
    sidebar: React$1.ReactNode;
    sidebarFooter?: React$1.ReactNode;
    children: React$1.ReactNode;
    defaultCollapsed?: boolean;
    width?: number;
    className?: string;
}): React$1.JSX.Element;

/** Labelled group of sidebar items ("Bots", "Pinned", "Chats"…). */
declare function SidebarSection({ label, action, onAction, children, className, size, }: {
    label?: string;
    /** Show a trailing "+" (or custom node) next to the label. */
    action?: React$1.ReactNode | true;
    onAction?: () => void;
    children?: React$1.ReactNode;
    className?: string;
    /** "md" for top-level headers, "sm" for sub-groups. */
    size?: "sm" | "md";
}): React$1.JSX.Element;
/** A sidebar row: icon/avatar + label, with active highlight and optional unread dot. */
declare function SidebarItem({ icon, label, active, unread, bold, href, onClick, className, }: {
    icon?: React$1.ReactNode;
    label: string;
    active?: boolean;
    unread?: boolean;
    /** Bold label (e.g. unread conversation). Defaults to `unread`. */
    bold?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
}): React$1.JSX.Element;

type TopTab = {
    id: string;
    label: string;
    icon?: React.ReactNode;
};
/** Browser-style tab strip shown at the top of the main pane. */
declare function TopTabBar({ tabs, activeId, onSelect, onClose, onAdd, actions, className, }: {
    tabs: TopTab[];
    activeId?: string;
    onSelect?: (id: string) => void;
    onClose?: (id: string) => void;
    onAdd?: () => void;
    actions?: React.ReactNode;
    className?: string;
}): React$1.JSX.Element;

/** Incoming = soft gray bubble; outgoing = filled accent bubble aligned right. */
declare function ChatBubble({ from, children, className, }: {
    from?: "me" | "them";
    children: React.ReactNode;
    className?: string;
}): React$1.JSX.Element;

/** Small centered event line, e.g. "Messaged ● Name". */
declare function SystemLine({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): React$1.JSX.Element;

/** Large rounded message composer with a circular primary button. */
declare function Composer({ placeholder, onSend, className, }: {
    placeholder?: string;
    onSend?: (text: string) => void;
    className?: string;
}): React$1.JSX.Element;

declare const ACCENTS: readonly ["blue", "purple", "green", "red", "cyan", "orange", "pink", "teal"];
type Accent = (typeof ACCENTS)[number];
type MarkColor = Accent | "neutral";
/** Tailwind classes for each palette color (static strings so Tailwind can see them). */
declare const MARK_BG: Record<MarkColor, string>;

type Shape = "pill" | "hex" | "drop" | "tri" | "circle";
declare const SIZES: {
    readonly xs: "w-3.5";
    readonly sm: "w-4";
    readonly md: "w-5";
    readonly lg: "w-8";
};
/**
 * Small colored "mark" used as a bot/user avatar (pill, hexagon, drop, triangle, circle)
 * with two tiny eyes — mirrors the reference sidebar marks.
 */
declare function AccentAvatar({ color, shape, size, eyes, className, label, }: {
    color?: MarkColor;
    shape?: Shape;
    size?: keyof typeof SIZES;
    eyes?: boolean;
    className?: string;
    label?: string;
}): React$1.JSX.Element;

type AccentCtx = {
    accent: Accent;
    setAccent: (a: Accent) => void;
};
declare function AccentProvider({ children, defaultAccent }: {
    children: React$1.ReactNode;
    defaultAccent?: Accent;
}): React$1.JSX.Element;
declare function useAccent(): AccentCtx;
type ProvidersProps = {
    children: React$1.ReactNode;
    /** Accent used until the visitor picks one. Keep in sync with <html data-accent>. */
    defaultAccent?: Accent;
    /** "light" | "dark" | "system" (default). */
    defaultTheme?: string;
    /** Render the sonner <Toaster/> (default true). */
    toaster?: boolean;
};
/** ThemeProvider (next-themes) + accent + tooltip provider + toaster in one wrapper. */
declare function Providers({ children, defaultAccent, defaultTheme, toaster }: ProvidersProps): React$1.JSX.Element;

/**
 * Light / dark / system switch backed by next-themes.
 * - `variant="segmented"` (default): pill with sun · moon · monitor and a sliding thumb.
 * - `variant="icon"`: single icon button (animated sun ↔ moon) with a menu incl. System.
 */
declare function ThemeToggle({ variant, className }: {
    variant?: "segmented" | "icon";
    className?: string;
}): React$1.JSX.Element;

declare function AccentPicker({ className }: {
    className?: string;
}): React$1.JSX.Element;

export { ACCENTS, type Accent, AccentAvatar, AccentPicker, AccentProvider, AppShell, Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, ChatBubble, Composer, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Input, MARK_BG, type MarkColor, Providers, type ProvidersProps, ScrollArea, ScrollBar, Separator, SidebarItem, SidebarSection, SidebarToggle, SystemLine, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeToggle, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, type TopTab, TopTabBar, badgeVariants, buttonVariants, tabsListVariants, useAccent, useAppShell };
