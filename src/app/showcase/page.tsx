import type { Metadata } from "next";
import { ShowcaseApp } from "./showcase-app";

export const metadata: Metadata = { title: "Showcase · splitch ui kit" };

export default function Page() {
  return <ShowcaseApp />;
}
