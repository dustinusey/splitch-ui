import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: false,
  external: ["react", "react-dom", "react/jsx-runtime", "next-themes", "sonner", "lucide-react", "radix-ui", "class-variance-authority", "cn"],
  async onSuccess() {
    // Everything here is interactive: mark the bundle as a client module for the App Router.
    const js = readFileSync("dist/index.js", "utf8");
    if (!js.startsWith('"use client"')) writeFileSync("dist/index.js", '"use client";\n' + js);
    mkdirSync("dist", { recursive: true });
    copyFileSync("src/styles.css", "dist/styles.css");
    copyFileSync("src/shadcn.css", "dist/shadcn.css");
  },
});
