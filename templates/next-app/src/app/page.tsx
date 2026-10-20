import { ArrowRight } from "lucide-react";
import { AccentAvatar, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, ChatBubble, ThemeToggle } from "@splitch/ui";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-2.5 border-b bg-background/80 px-6 backdrop-blur">
        <AccentAvatar color="neutral" shape="drop" size="sm" />
        <span className="font-medium">My App</span>
        <nav className="ml-6 hidden gap-5 text-sm text-muted-foreground sm:flex">
          <a href="#" className="hover:text-foreground">Product</a>
          <a href="#" className="hover:text-foreground">Pricing</a>
          <a href="#" className="hover:text-foreground">About</a>
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-10 px-6 py-20">
        <section className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">Start building.</h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            This project uses <code className="rounded bg-muted px-1.5 py-0.5 text-[13px]">@splitch/ui</code>. Edit{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-[13px]">src/app/page.tsx</code> to get going.
          </p>
          <div className="flex gap-2">
            <Button size="lg" className="rounded-full px-5">Get started <ArrowRight strokeWidth={1.5} /></Button>
            <Button size="lg" variant="ghost" className="rounded-full px-5">Learn more</Button>
          </div>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Looks like the rest of the family</CardTitle>
            <CardDescription>Tokens, components and the accent color come from the shared kit.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ChatBubble>Incoming messages are soft and gray.</ChatBubble>
            <ChatBubble from="me">Outgoing ones use your brand color.</ChatBubble>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
