#!/usr/bin/env node
// Usage: npm run release -- 0.2.0
// Bumps every package version, rebuilds dist, commits and tags vX.Y.Z (does not push).
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const version = process.argv[2];
if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version ?? "")) {
  console.error("Usage: npm run release -- <x.y.z>");
  process.exit(1);
}
const run = (cmd) => execSync(cmd, { stdio: "inherit" });

if (execSync("git status --porcelain").toString().trim()) {
  console.error("Working tree not clean. Commit first (and add a CHANGELOG entry).");
  process.exit(1);
}
const changelog = readFileSync("packages/ui/CHANGELOG.md", "utf8");
if (!changelog.includes(`## ${version}`)) {
  console.error(`packages/ui/CHANGELOG.md has no "## ${version}" section. Add one first.`);
  process.exit(1);
}

for (const file of ["package.json", "packages/ui/package.json", "packages/create-splitch-app/package.json", "apps/docs/package.json"]) {
  const pkg = JSON.parse(readFileSync(file, "utf8"));
  pkg.version = file.startsWith("apps/") ? pkg.version : version;
  if (pkg.dependencies?.["@splitch/ui"]) pkg.dependencies["@splitch/ui"] = version;
  writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
}
run("npm install --package-lock-only --ignore-scripts");
run("npm run build:ui");
run("git add -A");
run(`git commit -m "release: v${version}"`);
run(`git tag -a v${version} -m "v${version}"`);
console.log(`\nTagged v${version}. Publish with:\n  git push && git push origin v${version}`);
