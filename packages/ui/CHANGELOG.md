# Changelog

All notable changes to `@splitch/ui`. Versions follow [semver](https://semver.org); each release is a git tag `vX.Y.Z`.

## 0.1.0 — 2026-10-19

### Added
- Design tokens (`@splitch/ui/styles.css`): warm light / near-black dark surfaces, bubble, composer, sidebar, unread, radii, Inter font hook (`--font-inter`).
- Swappable accent via `<html data-accent="…">`: blue, purple, green, red, cyan, orange, pink, teal.
- Scoped `.light` / `.dark` wrappers that can be nested (side-by-side previews).
- Themed shadcn/ui components: Button, Input, Textarea, Card, Dialog, DropdownMenu, Tooltip, Tabs, Avatar, Badge, Separator, ScrollArea, Toaster (sonner).
- Kit components: AppShell, SidebarSection, SidebarItem, TopTabBar, ChatBubble, SystemLine, Composer, AccentAvatar.
- `Providers` (next-themes + accent + tooltip + toaster), `ThemeToggle` (segmented or icon), `AccentPicker`, `useAccent`.
