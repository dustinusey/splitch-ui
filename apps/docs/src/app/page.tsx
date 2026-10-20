import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AccentAvatar, AccentPicker, ThemeToggle } from "@splitch/ui";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <div className="flex items-center justify-between">
        <AccentAvatar color="neutral" shape="drop" size="lg" />
        <ThemeToggle />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">@splitch/ui</h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          The design system behind every splitch app and website: warm neutral surfaces, soft large-radius shapes, thin icons
          and a swappable accent. Built on Tailwind and shadcn/ui.
        </p>
      </div>
      <AccentPicker />
      <Link href="/components" className="group rounded-2xl bg-bubble p-5 transition-colors hover:bg-accent">
        <div className="flex items-center justify-between font-medium">
          Components
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Every token, primitive and kit component in light and dark.</p>
      </Link>
    </main>
  );
}
