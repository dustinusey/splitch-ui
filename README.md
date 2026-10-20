# splitch-ui

This is the design system for every splitch app and website. It has warm neutral surfaces, soft large-radius shapes, thin icons, roomy type and a swappable brand color. It's built on Tailwind v4 and shadcn/ui.


## Repo layout

```
.
├── package.json                 # workspace root. Also the installable package (exports packages/ui/dist + the CLI bin)
├── packages/
│   ├── ui/                      # @splitch/ui: source, tsup build, committed dist/, CHANGELOG.md
│   │   ├── src/{ui,kit,theme,lib}/  styles.css  shadcn.css  index.ts
│   │   └── dist/                # committed build output (index.js, index.d.ts, styles.css, shadcn.css)
│   └── create-splitch-app/      # zero-dependency CLI (bin: create-splitch-app)
├── apps/docs/                   # component gallery (/components), consumes @splitch/ui through the workspace
├── templates/next-app/          # minimal Next.js starter the CLI copies
└── scripts/release.mjs          # bump + build + commit + tag
```

**Why the root is the installable package:** npm can't install a subfolder of a git repo. When a project depends on `github:dustinusey/splitch-ui`, npm installs the repo root. The root `package.json` maps `@splitch/ui` and `@splitch/ui/styles.css` to the committed `packages/ui/dist`. It has no `prepare` script, so installing it from git is fast and doesn't build anything.

## Make a new project

```bash
npx github:dustinusey/splitch-ui my-app             # asks for the brand color (arrow keys, palette only)
npx github:dustinusey/splitch-ui my-app --color purple
npx github:dustinusey/splitch-ui#v0.1.0 my-app      # pin a CLI/template version
cd my-app && npm install && npm run dev
```

- **Colors:** `blue, purple, green, red, cyan, orange, pink, teal`. There's no free text and no `neutral`. Any other `--color` value exits with an error. Without a TTY you must pass `--color`.
- **What gets written:** the CLI writes the color as `<html data-accent="…">` and `<Providers defaultAccent="…">` in `src/app/layout.tsx`. It also adds `"@splitch/ui": "github:dustinusey/splitch-ui#semver:^0.1.0"` to `package.json`. Use `--ui <spec>` to override that spec (for example a fork, a tag, or `git+file:///path/to/repo` for local testing).
- **The bin:** the bin is also `create-splitch-app`, so `npx -p github:dustinusey/splitch-ui create-splitch-app my-app` works too.

### Using it in an existing Next.js + Tailwind v4 app

```bash
npm install "@splitch/ui@github:dustinusey/splitch-ui#semver:^0.1.0"
```

```css
/* app/globals.css */
@import "tailwindcss";
@import "@splitch/ui/styles.css"; /* tokens + theme + an @source so Tailwind scans the package */
```

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";
import { Providers } from "@splitch/ui";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// <html lang="en" data-accent="blue" className={inter.variable} suppressHydrationWarning>
//   <body><Providers defaultAccent="blue">{children}</Providers></body>
```

```tsx
import { Button, ChatBubble, Composer, ThemeToggle, toast } from "@splitch/ui";
```

`styles.css` includes `@source "./"`, so Tailwind scans the package's compiled JS automatically. If your setup ignores it, add `@source "../node_modules/@splitch/ui/packages/ui/dist";` (adjust the path to your file).

## Update a project to a newer kit

```bash
npm update @splitch/ui      # picks the highest vX.Y.Z tag that satisfies the range in package.json (^0.1.0)
npm ls @splitch/ui          # check the installed version
# move to a new major/minor range:
npm install "@splitch/ui@github:dustinusey/splitch-ui#semver:^0.2.0"
```

The lockfile pins the exact commit, so builds are reproducible until you run `npm update`. I tested this with a local git remote: `npm update` moved from 0.1.0 to 0.1.1 after a `v0.1.1` tag was added.

## Release a new version

1. Make your changes in `packages/ui/src`, then run `npm run build:ui`. `dist/` is committed, so the release script rebuilds it anyway.
2. Add a `## X.Y.Z` section to `packages/ui/CHANGELOG.md` and commit.
3. Run the release script. It bumps the root, `packages/ui`, `create-splitch-app` and the docs dependency, rebuilds dist, commits `release: vX.Y.Z` and tags `vX.Y.Z`:
   ```bash
   npm run release -- 0.2.0
   ```
4. Push the commit and the tag:
   ```bash
   git push && git push origin v0.2.0
   ```
5. If it's a new minor or major on 0.x, update the range in `templates/next-app/package.json` and in `DEFAULT_UI_SPEC` in the CLI. For example, `^0.1.0` → `^0.2.0`.

`#semver:` ranges only see **tags**, and they must look like `v0.2.0` or `0.2.0`.

## Develop

```bash
npm install                 # installs all workspaces
npm run build               # build @splitch/ui then the docs app
npm run dev                 # docs at http://localhost:3000/components
npm run lint                # lint docs
npm run typecheck           # typecheck the ui package
npm run dev -w @splitch/ui  # tsup --watch (rebuilds dist on change)
```

The docs app deploys on Vercel. Set the Root Directory to `apps/docs`; Vercel detects the npm workspace. Template projects deploy with no config.

## Design tokens

Tokens are CSS variables in `packages/ui/src/styles.css`, defined for light (`:root, .light`) and dark (`.dark`). They're exposed to Tailwind through `@theme inline`, so you use them as utilities like `bg-sidebar`, `bg-bubble`, `text-muted-foreground`, `bg-brand` and `rounded-bubble`.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `#f9f8f7` | `#131211` | main surface |
| `--sidebar` | `#f6f3f2` | `#181716` | sidebar |
| `--sidebar-accent` | `#eceae9` | `#2a2928` | active/hover row |
| `--bubble` | `#f0efed` | `#201f1d` | incoming bubble, soft fills |
| `--composer` | `#ffffff` | `#201f1d` | composer |
| `--muted-foreground` | `#5f5c59` | `#a3a09d` | secondary text |
| `--unread` | `#0690ff` | `#299fff` | unread dot |
| `--brand` | accent | accent | outgoing bubble, primary button, ring |

- **Radii:** `--radius` is 12px. Bubbles are 22px and the composer is 24px.
- **Font:** Inter via `--font-inter`, which the app sets with `next/font`.
- **Scoped themes:** `.light` and `.dark` can wrap any subtree, and they nest. The `dark:` variant respects the nearest scope. The docs gallery uses this to render each component in both modes side by side.

## Brand color (accent)

- **Default:** set `<html data-accent="purple">` and `<Providers defaultAccent="purple">`.
- **At runtime:** `const { setAccent } = useAccent(); setAccent("green")`, or render `<AccentPicker />`. The choice is saved in `localStorage["splitch-accent"]`. The inline script in the template's `layout.tsx` applies it before the first paint.
- **Add a color:** add `--mark-x` in `:root, .light`, `--color-mark-x` in `@theme` and `[data-accent="x"] { --brand: var(--mark-x); }`. Add `"x"` to `ACCENTS` and `MARK_BG` in `src/lib/accents.ts` and to `COLORS` in `packages/create-splitch-app/src/palette.js`. Then release.

## Components (all exported from `@splitch/ui`)

- **shadcn, themed:** Button, Input, Textarea, Card, Dialog, DropdownMenu, Tooltip, Tabs, Avatar, Badge, Separator, ScrollArea, Toaster and `toast` (sonner).
- **Kit:** AppShell (collapsible sidebar, with `SidebarToggle` and `useAppShell`), SidebarSection, SidebarItem, TopTabBar, ChatBubble, SystemLine, Composer, AccentAvatar.
- **Theme:** `Providers` (next-themes + accent + tooltip + toaster), `ThemeToggle` (`variant="segmented"` sun/moon/system pill, or `variant="icon"` animated sun↔moon with a System menu), `AccentPicker`, `useAccent`, `useTheme`, plus `ACCENTS` and `MARK_BG`.
