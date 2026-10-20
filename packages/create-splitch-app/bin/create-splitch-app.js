#!/usr/bin/env node
import { cpSync, existsSync, readdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { COLORS, SWATCH } from "../src/palette.js";
import { select } from "../src/select.js";

// ⚠️ Replace OWNER with the GitHub user/org that hosts the splitch-ui repo.
const DEFAULT_UI_SPEC = "github:OWNER/splitch-ui#semver:^0.1.0";

const here = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE = path.resolve(here, "../../../templates/next-app");

const HELP = `
Usage: create-splitch-app <project-dir> [options]

Options:
  -c, --color <name>   Brand color: ${COLORS.join(", ")}
      --ui <spec>      npm spec for @splitch/ui (default: ${DEFAULT_UI_SPEC})
  -h, --help           Show this help
`;

const fail = (msg) => {
  console.error(`\x1b[31m✖\x1b[0m ${msg}`);
  process.exit(1);
};

const dot = (c) => {
  const [r, g, b] = SWATCH[c];
  return `\x1b[38;2;${r};${g};${b}m●\x1b[0m ${c}`;
};

async function main() {
  let args;
  try {
    args = parseArgs({
      allowPositionals: true,
      options: {
        color: { type: "string", short: "c" },
        ui: { type: "string" },
        help: { type: "boolean", short: "h" },
      },
    });
  } catch (e) {
    fail(`${e.message}\n${HELP}`);
  }
  const { values, positionals } = args;
  if (values.help) {
    console.log(HELP);
    return;
  }

  const dirArg = positionals[0];
  if (!dirArg) fail(`Missing <project-dir>.\n${HELP}`);
  const target = path.resolve(process.cwd(), dirArg);
  const name = path.basename(target).toLowerCase().replace(/[^a-z0-9-_.]/g, "-");
  if (existsSync(target) && readdirSync(target).length > 0) fail(`${target} already exists and is not empty.`);

  let color = values.color?.toLowerCase();
  if (color !== undefined && !COLORS.includes(color)) {
    fail(`Invalid --color "${values.color}". Choose one of: ${COLORS.join(", ")}.`);
  }
  if (!color) {
    try {
      color = await select({ message: "Brand color", choices: COLORS, render: (c) => dot(c) });
    } catch (e) {
      fail(e.message);
    }
  }

  if (!existsSync(TEMPLATE)) fail(`Template not found at ${TEMPLATE}`);
  cpSync(TEMPLATE, target, {
    recursive: true,
    filter: (src) => !/[\\/](node_modules|\.next)([\\/]|$)/.test(src),
  });
  if (existsSync(path.join(target, "_gitignore"))) renameSync(path.join(target, "_gitignore"), path.join(target, ".gitignore"));

  // package.json: name + @splitch/ui spec
  const pkgPath = path.join(target, "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  pkg.name = name;
  pkg.dependencies["@splitch/ui"] = values.ui ?? DEFAULT_UI_SPEC;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

  // layout.tsx: default accent
  const layoutPath = path.join(target, "src/app/layout.tsx");
  let layout = readFileSync(layoutPath, "utf8");
  layout = layout.replace(/data-accent="[a-z]+"/, `data-accent="${color}"`).replace(/defaultAccent="[a-z]+"/, `defaultAccent="${color}"`);
  writeFileSync(layoutPath, layout);

  const rel = path.relative(process.cwd(), target) || ".";
  console.log(`\n\x1b[32m✔\x1b[0m Created ${name} with brand color ${dot(color)}\n\nNext steps:\n  cd ${rel}\n  npm install\n  npm run dev\n`);
}

main();
