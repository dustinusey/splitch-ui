# splitch ui kit

A reusable starter for every app and website: warm neutral surfaces, soft large-radius shapes, thin icons, roomy type, and a swappable accent color. It's based on a chat-app look.

**Stack:** Next.js 15 (App Router) + TypeScript, Tailwind CSS v4, shadcn/ui (radix, "nova" style), lucide-react, next-themes, sonner. You can deploy it on Vercel as-is, with no config.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run lint
```

| Route | What it is |
|---|---|
| `/` | Landing page with links |
| `/showcase` | Full chat layout recreated from the references, with a theme toggle and accent picker |
| `/components` | Gallery of every token, shadcn primitive, and kit component |

## Design tokens

All tokens are CSS variables in `src/app/globals.css`. There's a `:root` block for light mode and a `.dark` block for dark mode. They're exposed to Tailwind through `@theme inline`, so you use them as normal utilities (`bg-sidebar`, `bg-bubble`, `text-muted-foreground`, `bg-brand`, `rounded-bubble`…).

These colors were sampled from the reference screenshots:

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` | `#f9f8f7` warm off-white | `#131211` near-black | main pane |
| `--sidebar` | `#f6f3f2` | `#181716` | sidebar surface |
| `--sidebar-accent` | `#eceae9` | `#2a2928` | active/hover row |
| `--bubble` | `#f0efed` | `#201f1d` | incoming bubble |
| `--composer` | `#ffffff` | `#201f1d` | composer surface |
| `--muted-foreground` | `#5f5c59` | `#a3a09d` | secondary text, section labels |
| `--unread` | `#0690ff` | `#299fff` | unread dots |
| `--brand` | accent (see below) | accent | outgoing bubble, primary buttons, ring |

Radii: `--radius` is 12px (shadcn scale), `--radius-bubble-token` is 22px, and `--radius-composer-token` is 24px.
Type: Inter. The scale is body 14.5–15px, sidebar 14px, labels 12.5–13.5px, and system lines 12.5px.
Icons: lucide with `strokeWidth={1.5}`.

### Accent palette

`--mark-blue #0d64c1`, `--mark-purple #6e43c1` (both sampled), plus green, red, cyan, orange, pink, teal, and neutral. They're available as `bg-mark-*` utilities and through `MARK_BG` in `src/lib/accents.ts`.

## Changing the accent

- **Default for a project:** in `src/app/layout.tsx`, set `<html data-accent="purple">`. Also change `defaultAccent` in `AccentProvider` (`src/components/theme/providers.tsx`).
- **At runtime:** use `const { setAccent } = useAccent(); setAccent("green")`, or drop in `<AccentPicker />`. The choice is saved in localStorage and applied before paint.
- **New accent color:** add `--mark-<name>` in `:root`, add a `[data-accent="<name>"] { --brand: var(--mark-<name>); }` rule and a `--color-mark-<name>` line in `@theme`, then add the name to `ACCENTS` and `MARK_BG` in `src/lib/accents.ts`.
- **A one-off brand hex:** override `--brand` (and `--brand-foreground` if it needs dark text).

Theme switching (light/dark/system) is handled by next-themes through `<ThemeToggle />`.

## Components

- `src/components/ui/*` contains the shadcn primitives, themed by the tokens: button, input, textarea, card, dialog, dropdown-menu, tooltip, tabs, avatar, badge, separator, scroll-area, and sonner (toast).
- `src/components/kit/*` contains the kit components (import them from `@/components/kit`):
  - `AppShell` is the two-pane shell with a collapsible sidebar (`sidebarHeader`, `sidebar`, `sidebarFooter`). It comes with `SidebarToggle` and `useAppShell()`.
  - `SidebarSection` is a labelled group with an optional `+` action.
  - `SidebarItem` is a row with an icon/avatar, an `active` highlight, and an `unread` dot. Pass `href` to render it as a link.
  - `TopTabBar` is the tab strip with add/close and right-side actions.
  - `ChatBubble` takes `from="them" | "me"` (gray, or filled with the accent).
  - `SystemLine` is a small centered event line. Wrap names in `<strong>`.
  - `Composer` is the large rounded input with a circular send/voice button. Enter sends.
  - `AccentAvatar` is a colored mark (`pill | hex | drop | tri | circle`) with tiny eyes.
- `src/components/theme/*` contains `Providers`, `ThemeToggle`, `AccentPicker`, and `useAccent`.

## Starting a new project from the kit

1. Copy the folder (or use it as a GitHub template), then run `rm -rf .git && git init`.
2. Change `name` in `package.json` and `metadata` in `src/app/layout.tsx`.
3. Choose the default accent (see above).
4. Delete `/showcase` and `/components` if you don't need them. They make good references, so you may want to keep them around until launch.
5. Add more shadcn components with `npx shadcn@latest add <name>`. They pick up the tokens automatically.
6. Push to GitHub and import the repo in Vercel. No settings are needed.
