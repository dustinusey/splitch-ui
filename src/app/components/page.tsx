import type { Metadata } from "next";
import { Gallery } from "./gallery";

export const metadata: Metadata = { title: "Components · splitch ui kit" };

export default function Page() {
  return <Gallery />;
}
