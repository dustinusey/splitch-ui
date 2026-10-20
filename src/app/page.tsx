import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { AccentPicker } from "@/components/theme/accent-picker";
import { AccentAvatar } from "@/components/kit";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <div className="flex items-center justify-between">
        <AccentAvatar color="neutral" shape="drop" size="lg" />
        <ThemeToggle />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">splitch ui kit</h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          A starter kit for apps and websites: warm neutral surfaces, soft large-radius shapes, thin icons and a swappable accent.
          Built on Next.js, Tailwind and shadcn/ui.
        </p>
      </div>
      <AccentPicker />
      <nav className="grid gap-2 sm:grid-cols-2">
        {[
          { href: "/showcase", title: "Showcase", body: "Full chat app layout recreated from the references." },
          { href: "/components", title: "Components", body: "Every themed primitive and kit component." },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="group rounded-2xl bg-bubble p-5 transition-colors hover:bg-accent">
            <div className="flex items-center justify-between font-medium">
              {l.title} <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{l.body}</p>
          </Link>
        ))}
      </nav>
    </main>
  );
}
