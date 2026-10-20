"use client";
// src/ui/avatar.tsx
import { cn } from "cn";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx } from "react/jsx-runtime";
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn(
        "aspect-square size-full rounded-full object-cover",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AvatarBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "avatar-badge",
      className: cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "avatar-group",
      className: cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      ),
      ...props
    }
  );
}
function AvatarGroupCount({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      ),
      ...props
    }
  );
}

// src/ui/badge.tsx
import { cva } from "class-variance-authority";
import { cn as cn2 } from "cn";
import { Slot } from "radix-ui";
import { jsx as jsx2 } from "react/jsx-runtime";
var badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn2(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/ui/button.tsx
import { cva as cva2 } from "class-variance-authority";
import { cn as cn3 } from "cn";
import { Slot as Slot2 } from "radix-ui";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva2(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "button";
  return /* @__PURE__ */ jsx3(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn3(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/ui/card.tsx
import { cn as cn4 } from "cn";
import { jsx as jsx4 } from "react/jsx-runtime";
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn4(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-header",
      className: cn4(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-title",
      className: cn4(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      ),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-description",
      className: cn4("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-action",
      className: cn4(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-content",
      className: cn4("px-(--card-spacing)", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "card-footer",
      className: cn4(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}

// src/ui/dialog.tsx
import { cn as cn5 } from "cn";
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn5(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx5(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn5(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx5(DialogPrimitive.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsx5(
                  XIcon,
                  {}
                ),
                /* @__PURE__ */ jsx5("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn5("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn5(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx5(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx5(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn5(
        "font-heading text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn5(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}

// src/ui/dropdown-menu.tsx
import { cn as cn6 } from "cn";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn6("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn6(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": inset,
      className: cn6(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx6(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ jsx6(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx6(
              CheckIcon,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn6(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx6(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ jsx6(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx6(
              CheckIcon,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn6(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn6("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn6(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn6(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx6(ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn6("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}

// src/ui/input.tsx
import { cn as cn7 } from "cn";
import { jsx as jsx7 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx7(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn7(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/ui/scroll-area.tsx
import { cn as cn8 } from "cn";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn8("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx8(
          ScrollAreaPrimitive.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx8(ScrollBar, {}),
        /* @__PURE__ */ jsx8(ScrollAreaPrimitive.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn8(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}

// src/ui/separator.tsx
import { cn as cn9 } from "cn";
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx9 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn9(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}

// src/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx10(
    Sonner,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx10(CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ jsx10(InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx10(TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ jsx10(OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx10(Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};

// src/ui/tabs.tsx
import { cva as cva3 } from "class-variance-authority";
import { cn as cn10 } from "cn";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx11 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn10(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = cva3(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn10(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn10(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn10("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/ui/textarea.tsx
import { cn as cn11 } from "cn";
import { jsx as jsx12 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn11(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/ui/tooltip.tsx
import { cn as cn12 } from "cn";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx13(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx13(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx13(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs4(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn12(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx13(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

// src/kit/app-shell.tsx
import * as React from "react";
import { PanelLeft } from "lucide-react";

// src/lib/utils.ts
import { cn as cn13 } from "cn";

// src/kit/app-shell.tsx
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
var Ctx = React.createContext(null);
var useAppShell = () => {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useAppShell must be used inside <AppShell>");
  return c;
};
function SidebarToggle({ className }) {
  const { toggle, collapsed } = useAppShell();
  return /* @__PURE__ */ jsxs5(Tooltip, { children: [
    /* @__PURE__ */ jsx14(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx14(
      "button",
      {
        type: "button",
        onClick: toggle,
        "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
        className: cn13("grid size-7 place-items-center rounded-md text-foreground/80 hover:bg-sidebar-accent hover:text-foreground", className),
        children: /* @__PURE__ */ jsx14(PanelLeft, { className: "size-[17px]", strokeWidth: 1.5 })
      }
    ) }),
    /* @__PURE__ */ jsxs5(TooltipContent, { children: [
      collapsed ? "Expand" : "Collapse",
      " sidebar"
    ] })
  ] });
}
function AppShell({
  sidebarHeader,
  sidebar,
  sidebarFooter,
  children,
  defaultCollapsed = false,
  width = 222,
  className
}) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
  const value = React.useMemo(() => ({ collapsed, setCollapsed, toggle: () => setCollapsed((c) => !c) }), [collapsed]);
  return /* @__PURE__ */ jsx14(Ctx.Provider, { value, children: /* @__PURE__ */ jsxs5("div", { className: cn13("flex h-dvh w-full overflow-hidden bg-background text-foreground", className), children: [
    /* @__PURE__ */ jsx14(
      "aside",
      {
        "aria-hidden": collapsed,
        style: { width: collapsed ? 0 : width },
        className: cn13(
          "flex shrink-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground transition-[width] duration-200 ease-out",
          !collapsed && "border-r border-sidebar-border/60"
        ),
        children: /* @__PURE__ */ jsxs5("div", { style: { width }, className: "flex h-full flex-col", children: [
          sidebarHeader && /* @__PURE__ */ jsx14("div", { className: "shrink-0 px-1.5 pt-2", children: sidebarHeader }),
          /* @__PURE__ */ jsx14("div", { className: "min-h-0 flex-1 overflow-y-auto px-1.5 py-1 [scrollbar-width:thin]", children: sidebar }),
          sidebarFooter && /* @__PURE__ */ jsx14("div", { className: "shrink-0 px-1.5 pb-2", children: sidebarFooter })
        ] })
      }
    ),
    /* @__PURE__ */ jsx14("main", { className: "flex min-w-0 flex-1 flex-col", children })
  ] }) });
}

// src/kit/sidebar.tsx
import { Plus } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
function SidebarSection({
  label,
  action,
  onAction,
  children,
  className,
  size = "sm"
}) {
  return /* @__PURE__ */ jsxs6("div", { className: cn13("flex flex-col gap-px", className), children: [
    label && /* @__PURE__ */ jsxs6("div", { className: "flex h-8 items-center justify-between pr-1.5 pl-2.5", children: [
      /* @__PURE__ */ jsx15("span", { className: cn13("text-muted-foreground", size === "md" ? "text-[13.5px]" : "text-[12.5px]"), children: label }),
      action && /* @__PURE__ */ jsx15("button", { type: "button", onClick: onAction, "aria-label": `Add to ${label}`, className: "grid size-6 place-items-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground", children: action === true ? /* @__PURE__ */ jsx15(Plus, { className: "size-4", strokeWidth: 1.5 }) : action })
    ] }),
    children
  ] });
}
function SidebarItem({
  icon,
  label,
  active,
  unread,
  bold,
  href,
  onClick,
  className
}) {
  const Comp = href ? "a" : "button";
  return /* @__PURE__ */ jsxs6(
    Comp,
    {
      ...href ? { href } : { type: "button" },
      onClick,
      "aria-current": active ? "page" : void 0,
      className: cn13(
        "group/item flex h-9 w-full min-w-0 items-center gap-2.5 rounded-[10px] px-2.5 text-left text-[14px] text-sidebar-foreground transition-colors",
        "hover:bg-sidebar-accent/70 [&_svg]:size-[17px] [&_svg]:shrink-0 [&>svg]:stroke-[1.5]",
        active && "bg-sidebar-accent hover:bg-sidebar-accent",
        (bold ?? unread) && "font-semibold",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsx15("span", { className: "flex w-[22px] shrink-0 items-center justify-center", children: icon }),
        /* @__PURE__ */ jsx15("span", { className: "truncate", children: label }),
        unread && /* @__PURE__ */ jsx15("span", { "aria-label": "unread", className: "ml-auto size-1.5 shrink-0 rounded-full bg-unread" })
      ]
    }
  );
}

// src/kit/top-tab-bar.tsx
import { Plus as Plus2, X } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
function TopTabBar({
  tabs,
  activeId,
  onSelect,
  onClose,
  onAdd,
  actions,
  className
}) {
  return /* @__PURE__ */ jsxs7("div", { className: cn13("flex h-11 shrink-0 items-center gap-1 px-4", className), children: [
    /* @__PURE__ */ jsx16("div", { role: "tablist", className: "flex min-w-0 items-center gap-1", children: tabs.map((t) => {
      const active = t.id === activeId;
      return /* @__PURE__ */ jsxs7(
        "div",
        {
          role: "tab",
          "aria-selected": active,
          tabIndex: 0,
          onClick: () => onSelect?.(t.id),
          onKeyDown: (e) => e.key === "Enter" && onSelect?.(t.id),
          className: cn13(
            "group flex h-8 min-w-0 cursor-default items-center gap-2 rounded-lg px-2.5 text-[13.5px] transition-colors",
            active ? "text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
          ),
          children: [
            t.icon,
            /* @__PURE__ */ jsx16("span", { className: "truncate", children: t.label }),
            onClose && tabs.length > 1 && /* @__PURE__ */ jsx16(
              "button",
              {
                type: "button",
                "aria-label": `Close ${t.label}`,
                onClick: (e) => {
                  e.stopPropagation();
                  onClose(t.id);
                },
                className: "hidden size-4 place-items-center rounded text-muted-foreground hover:text-foreground group-hover:grid",
                children: /* @__PURE__ */ jsx16(X, { className: "size-3" })
              }
            )
          ]
        },
        t.id
      );
    }) }),
    onAdd && /* @__PURE__ */ jsx16("button", { type: "button", "aria-label": "New tab", onClick: onAdd, className: "grid size-7 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsx16(Plus2, { className: "size-4", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsx16("div", { className: "ml-auto flex items-center gap-1", children: actions })
  ] });
}

// src/kit/chat-bubble.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
function ChatBubble({
  from = "them",
  children,
  className
}) {
  const me = from === "me";
  return /* @__PURE__ */ jsx17("div", { className: cn13("flex w-full", me ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn13(
        "max-w-[min(80%,32rem)] rounded-bubble px-3.5 py-2.5 text-[14.5px] leading-[1.45] [&_p+p]:mt-3",
        me ? "bg-brand text-brand-foreground" : "bg-bubble text-bubble-foreground",
        className
      ),
      children
    }
  ) });
}

// src/kit/system-line.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function SystemLine({ children, className }) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      className: cn13(
        "flex items-center justify-center gap-1.5 py-1 text-center text-[12.5px] text-muted-foreground [&_strong]:font-normal [&_strong]:text-foreground [&_svg]:size-3.5",
        className
      ),
      children
    }
  );
}

// src/kit/composer.tsx
import * as React2 from "react";
import { AudioLines, ArrowUp, Mic, Plus as Plus3 } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
function Composer({
  placeholder = "Message\u2026",
  onSend,
  className
}) {
  const [value, setValue] = React2.useState("");
  const ref = React2.useRef(null);
  const hasText = value.trim().length > 0;
  const send = () => {
    if (!hasText) return;
    onSend?.(value.trim());
    setValue("");
  };
  React2.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [value]);
  return /* @__PURE__ */ jsxs8(
    "div",
    {
      className: cn13(
        "rounded-composer border border-border bg-composer shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors focus-within:border-foreground/15 dark:border-transparent",
        className
      ),
      children: [
        /* @__PURE__ */ jsx19(
          "textarea",
          {
            ref,
            rows: 1,
            value,
            onChange: (e) => setValue(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            },
            placeholder,
            "aria-label": placeholder,
            className: "block w-full resize-none bg-transparent px-4 pt-4 pb-1 text-[15px] leading-6 outline-none placeholder:text-muted-foreground"
          }
        ),
        /* @__PURE__ */ jsxs8("div", { className: "flex items-center justify-between px-2.5 pb-2.5", children: [
          /* @__PURE__ */ jsx19("button", { type: "button", "aria-label": "Attach", className: "grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsx19(Plus3, { className: "size-5", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx19("button", { type: "button", "aria-label": "Dictate", className: "grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsx19(Mic, { className: "size-[18px]", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx19(
              "button",
              {
                type: "button",
                onClick: send,
                "aria-label": hasText ? "Send" : "Voice mode",
                className: "grid size-9 place-items-center rounded-full bg-foreground text-background transition-transform active:scale-95",
                children: hasText ? /* @__PURE__ */ jsx19(ArrowUp, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ jsx19(AudioLines, { className: "size-5", strokeWidth: 1.75 })
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// src/lib/accents.ts
var ACCENTS = ["blue", "purple", "green", "red", "cyan", "orange", "pink", "teal"];
var MARK_BG = {
  blue: "bg-mark-blue",
  purple: "bg-mark-purple",
  green: "bg-mark-green",
  red: "bg-mark-red",
  cyan: "bg-mark-cyan",
  orange: "bg-mark-orange",
  pink: "bg-mark-pink",
  teal: "bg-mark-teal",
  neutral: "bg-mark-neutral"
};

// src/kit/accent-avatar.tsx
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var SIZES = { xs: "w-3.5", sm: "w-4", md: "w-5", lg: "w-8" };
function AccentAvatar({
  color = "blue",
  shape = "circle",
  size = "md",
  eyes = true,
  className,
  label
}) {
  const shapeCls = {
    pill: "aspect-[1.65] rounded-full",
    circle: "aspect-square rounded-full",
    hex: "aspect-[0.92] [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]",
    drop: "aspect-square rounded-[50%_0_50%_50%] -rotate-45",
    tri: "aspect-[1.15] rounded-[3px] [clip-path:polygon(50%_0,100%_100%,0_100%)]"
  };
  const eyeColor = color === "neutral" ? "bg-background" : "bg-white";
  return /* @__PURE__ */ jsx20(
    "span",
    {
      role: label ? "img" : void 0,
      "aria-label": label,
      "aria-hidden": label ? void 0 : true,
      className: cn13("relative inline-flex shrink-0 items-center justify-center", SIZES[size], shapeCls[shape], MARK_BG[color], className),
      children: eyes && /* @__PURE__ */ jsxs9("span", { className: cn13("flex h-full items-center justify-center gap-[3px]", (shape === "tri" || shape === "drop") && "pt-[30%]"), children: [
        /* @__PURE__ */ jsx20("span", { className: cn13("h-[32%] w-[1.5px] rounded-full", eyeColor) }),
        /* @__PURE__ */ jsx20("span", { className: cn13("h-[32%] w-[1.5px] rounded-full", eyeColor) })
      ] })
    }
  );
}

// src/theme/providers.tsx
import * as React3 from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProvider as ThemeProvider2, useTheme as useTheme2 } from "next-themes";
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var AccentContext = React3.createContext(null);
var STORAGE_KEY = "splitch-accent";
function AccentProvider({ children, defaultAccent = "blue" }) {
  const [accent, setAccentState] = React3.useState(defaultAccent);
  React3.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ACCENTS.includes(stored)) setAccentState(stored);
  }, []);
  const setAccent = React3.useCallback((a) => {
    setAccentState(a);
    localStorage.setItem(STORAGE_KEY, a);
    document.documentElement.dataset.accent = a;
  }, []);
  React3.useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);
  return /* @__PURE__ */ jsx21(AccentContext.Provider, { value: { accent, setAccent }, children });
}
function useAccent() {
  const ctx = React3.useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used inside <Providers>");
  return ctx;
}
function Providers({ children, defaultAccent = "blue", defaultTheme = "system", toaster = true }) {
  return /* @__PURE__ */ jsx21(ThemeProvider, { attribute: "class", defaultTheme, enableSystem: true, disableTransitionOnChange: true, children: /* @__PURE__ */ jsx21(AccentProvider, { defaultAccent, children: /* @__PURE__ */ jsxs10(TooltipProvider, { delayDuration: 300, children: [
    children,
    toaster && /* @__PURE__ */ jsx21(Toaster, {})
  ] }) }) });
}

// src/theme/theme-toggle.tsx
import * as React4 from "react";
import { useTheme as useTheme3 } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var OPTIONS = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor }
];
function useMounted() {
  const [m, setM] = React4.useState(false);
  React4.useEffect(() => setM(true), []);
  return m;
}
function ThemeToggle({ variant = "segmented", className }) {
  const { theme, setTheme, resolvedTheme } = useTheme3();
  const mounted = useMounted();
  const current = mounted ? theme ?? "system" : "system";
  if (variant === "icon") {
    const dark = mounted && resolvedTheme === "dark";
    return /* @__PURE__ */ jsxs11(DropdownMenu, { children: [
      /* @__PURE__ */ jsx22(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs11(Button, { variant: "ghost", size: "icon-sm", "aria-label": "Change theme", className: cn13("relative text-muted-foreground hover:text-foreground", className), children: [
        /* @__PURE__ */ jsx22(Sun, { strokeWidth: 1.5, className: cn13("transition-all duration-300", dark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100") }),
        /* @__PURE__ */ jsx22(Moon, { strokeWidth: 1.5, className: cn13("absolute transition-all duration-300", dark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0") })
      ] }) }),
      /* @__PURE__ */ jsx22(DropdownMenuContent, { align: "end", className: "w-36", children: /* @__PURE__ */ jsx22(DropdownMenuRadioGroup, { value: current, onValueChange: setTheme, children: OPTIONS.map(({ value, label, Icon }) => /* @__PURE__ */ jsxs11(DropdownMenuRadioItem, { value, children: [
        /* @__PURE__ */ jsx22(Icon, { strokeWidth: 1.5 }),
        " ",
        label
      ] }, value)) }) })
    ] });
  }
  const index = OPTIONS.findIndex((o) => o.value === current);
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      role: "radiogroup",
      "aria-label": "Theme",
      className: cn13("relative inline-flex h-8 items-center rounded-full bg-muted p-0.5", className),
      children: [
        /* @__PURE__ */ jsx22(
          "span",
          {
            "aria-hidden": true,
            className: "absolute top-0.5 left-0.5 size-7 rounded-full bg-background shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-transform duration-200 ease-out dark:bg-secondary",
            style: { transform: `translateX(${Math.max(index, 0) * 28}px)`, opacity: mounted ? 1 : 0 }
          }
        ),
        OPTIONS.map(({ value, label, Icon }) => /* @__PURE__ */ jsx22(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": current === value,
            "aria-label": label,
            title: label,
            onClick: () => setTheme(value),
            className: cn13(
              "relative z-10 grid size-7 place-items-center rounded-full transition-colors",
              current === value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: /* @__PURE__ */ jsx22(Icon, { className: "size-[15px]", strokeWidth: 1.5 })
          },
          value
        ))
      ]
    }
  );
}

// src/theme/accent-picker.tsx
import { Check } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
function AccentPicker({ className }) {
  const { accent, setAccent } = useAccent();
  return /* @__PURE__ */ jsx23("div", { role: "radiogroup", "aria-label": "Accent color", className: cn13("flex items-center gap-1.5", className), children: ACCENTS.map((a) => /* @__PURE__ */ jsxs12(Tooltip, { children: [
    /* @__PURE__ */ jsx23(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx23(
      "button",
      {
        type: "button",
        role: "radio",
        "aria-checked": accent === a,
        "aria-label": a,
        onClick: () => setAccent(a),
        className: cn13(
          "grid size-5 place-items-center rounded-full text-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2",
          MARK_BG[a],
          accent === a && "ring-2 ring-foreground/20 ring-offset-2 ring-offset-background"
        ),
        children: accent === a && /* @__PURE__ */ jsx23(Check, { className: "size-3", strokeWidth: 2.5 })
      }
    ) }),
    /* @__PURE__ */ jsx23(TooltipContent, { className: "capitalize", children: a })
  ] }, a)) });
}

// src/index.ts
import { toast } from "sonner";
export {
  ACCENTS,
  AccentAvatar,
  AccentPicker,
  AccentProvider,
  AppShell,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ChatBubble,
  Composer,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  MARK_BG,
  Providers,
  ScrollArea,
  ScrollBar,
  Separator,
  SidebarItem,
  SidebarSection,
  SidebarToggle,
  SystemLine,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider2 as ThemeProvider,
  ThemeToggle,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TopTabBar,
  badgeVariants,
  buttonVariants,
  cn13 as cn,
  tabsListVariants,
  toast,
  useAccent,
  useAppShell,
  useTheme2 as useTheme
};
