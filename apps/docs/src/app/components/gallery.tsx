"use client";

import Link from "next/link";
import { ArrowLeft, Bell, Inbox, Settings, SquarePen, Star } from "lucide-react";
import {
  AccentAvatar, AccentPicker, ACCENTS, AppShell, Avatar, AvatarFallback, Badge, Button, Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle, ChatBubble, Composer, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, Input, MARK_BG, ScrollArea, Separator, SidebarItem, SidebarSection, SidebarToggle,
  SystemLine, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeToggle, toast, Tooltip, TooltipContent, TooltipTrigger,
  TopTabBar, useAppShell,
} from "@splitch/ui";

function ShellToggle() {
  const { collapsed } = useAppShell();
  return collapsed ? <SidebarToggle /> : <span className="text-[13px] text-muted-foreground">Collapse via the sidebar icon</span>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-[13px] font-medium tracking-wide text-muted-foreground uppercase">{title}</h2>
      <div className="grid gap-3 lg:grid-cols-2">
        {(["light", "dark"] as const).map((mode) => (
          <div key={mode} className={`${mode} relative min-w-0 rounded-2xl border p-6`}>
            <span className="absolute top-3 right-4 text-[11px] tracking-wide text-subtle-foreground uppercase">{mode}</span>
            {children}
          </div>
        ))}
      </div>
    </section>
  );
}

const SWATCHES = [
  ["background", "bg-background"], ["sidebar", "bg-sidebar"], ["bubble", "bg-bubble"], ["composer", "bg-composer"],
  ["accent (hover)", "bg-accent"], ["muted-fg", "bg-muted-foreground"], ["brand", "bg-brand"], ["unread", "bg-unread"],
] as const;

export function Gallery() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/80 px-6 backdrop-blur">
        <Link href="/" className="text-muted-foreground hover:text-foreground" aria-label="Home"><ArrowLeft className="size-4" strokeWidth={1.5} /></Link>
        <span className="font-medium">Components</span>
        <div className="ml-auto flex items-center gap-3"><AccentPicker className="hidden sm:flex" /><ThemeToggle /></div>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-6 py-10">
        <Section title="Tokens">
          <div className="grid grid-cols-4 gap-3">
            {SWATCHES.map(([name, cls]) => (
              <div key={name} className="space-y-1.5">
                <div className={`h-14 rounded-xl border ${cls}`} />
                <div className="text-xs text-muted-foreground">{name}</div>
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="flex flex-wrap gap-3">
            {[...ACCENTS, "neutral" as const].map((a) => (
              <div key={a} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={`size-5 rounded-full ${MARK_BG[a]}`} /> {a}
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="space-y-1">
            <p className="text-3xl font-semibold tracking-tight">Display 30 / semibold</p>
            <p className="text-xl font-medium">Title 20 / medium</p>
            <p className="text-[15px]">Body 15 — roomy line height for long reading.</p>
            <p className="text-[13.5px] text-muted-foreground">Secondary 13.5 / muted</p>
            <p className="text-[12.5px] text-muted-foreground">Caption 12.5 / muted</p>
          </div>
        </Section>

        <Section title="ThemeToggle (controls the page)">
          <div className="flex flex-wrap items-center gap-4">
            <ThemeToggle />
            <ThemeToggle variant="icon" />
            <span className="text-sm text-muted-foreground">Segmented (default) and icon variants. Both include System.</span>
          </div>
        </Section>

        <Section title="Button · Badge · Tooltip">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
            <Button size="lg" className="rounded-full px-5">Pill large</Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Settings"><Settings strokeWidth={1.5} /></Button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="destructive">Error</Badge>
          </div>
        </Section>

        <Section title="Input · Textarea">
          <div className="grid gap-3 sm:grid-cols-2">
            <Input placeholder="Email address" />
            <Input placeholder="Disabled" disabled />
            <Textarea placeholder="Write something…" className="sm:col-span-2" />
          </div>
        </Section>

        <Section title="Card · Avatar">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Project update</CardTitle>
                <CardDescription>Shared with the team</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">Cards use the card surface, soft border and the large radius token.</CardContent>
              <CardFooter className="gap-2"><Button size="sm">Open</Button><Button size="sm" variant="ghost">Later</Button></CardFooter>
            </Card>
            <div className="flex items-center gap-3">
              <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
              <Avatar><AvatarFallback className="bg-brand text-brand-foreground">CD</AvatarFallback></Avatar>
              <AccentAvatar color="purple" shape="hex" size="lg" />
              <AccentAvatar color="green" shape="pill" size="lg" />
              <AccentAvatar color="teal" shape="tri" size="lg" />
              <AccentAvatar color="neutral" shape="drop" size="lg" />
              <AccentAvatar color="blue" shape="circle" size="lg" />
            </div>
          </div>
        </Section>

        <Section title="Dialog · Dropdown · Toast">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename conversation</DialogTitle>
                  <DialogDescription>Give it a short, memorable name.</DialogDescription>
                </DialogHeader>
                <Input defaultValue="Weekly planning" />
                <DialogFooter>
                  <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                  <DialogClose asChild><Button onClick={() => toast.success("Renamed")}>Save</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild><Button variant="outline">Dropdown</Button></DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem><Star strokeWidth={1.5} /> Favorite</DropdownMenuItem>
                <DropdownMenuItem><Bell strokeWidth={1.5} /> Notify me</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="secondary" onClick={() => toast("Saved", { description: "Your changes are live." })}>Show toast</Button>
          </div>
        </Section>

        <Section title="Tabs · Scroll area">
          <Tabs defaultValue="one">
            <TabsList>
              <TabsTrigger value="one">Overview</TabsTrigger>
              <TabsTrigger value="two">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="one" className="pt-3 text-sm text-muted-foreground">Overview content.</TabsContent>
            <TabsContent value="two" className="pt-3">
              <ScrollArea className="h-32 rounded-xl border p-3">
                {Array.from({ length: 20 }, (_, i) => <p key={i} className="py-0.5 text-sm">Activity item {i + 1}</p>)}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </Section>

        <Section title="Kit: TopTabBar · Sidebar">
          <div className="overflow-hidden rounded-xl border">
            <TopTabBar tabs={[{ id: "a", label: "Inbox", icon: <Inbox className="size-4" strokeWidth={1.5} /> }, { id: "b", label: "Drafts" }]} activeId="a" onAdd={() => {}} className="bg-background" />
            <div className="w-60 bg-sidebar p-1.5">
              <SidebarItem label="New chat" icon={<SquarePen />} />
              <SidebarSection label="Team" action>
                <SidebarItem label="Active row" active icon={<AccentAvatar color="blue" />} />
                <SidebarItem label="Unread row" unread icon={<AccentAvatar color="red" shape="pill" />} />
                <SidebarItem label="Normal row" icon={<AccentAvatar color="purple" shape="hex" />} />
              </SidebarSection>
            </div>
          </div>
        </Section>

        <Section title="Kit: AppShell (collapsible sidebar)">
          <div className="h-64 overflow-hidden rounded-xl border">
            <AppShell
              width={180}
              className="h-full"
              sidebarHeader={<div className="flex h-9 items-center justify-between px-1.5 text-sm font-medium">Workspace <SidebarToggle /></div>}
              sidebar={
                <SidebarSection label="Projects">
                  <SidebarItem label="Overview" active icon={<AccentAvatar color="blue" />} />
                  <SidebarItem label="Roadmap" unread icon={<AccentAvatar color="green" shape="pill" />} />
                </SidebarSection>
              }
            >
              <div className="flex h-11 items-center px-3"><ShellToggle /></div>
              <div className="flex-1 px-4"><ChatBubble>Main pane content.</ChatBubble></div>
            </AppShell>
          </div>
        </Section>

        <Section title="Kit: ChatBubble · SystemLine · Composer">
          <div className="flex flex-col gap-3.5 rounded-xl bg-background p-4">
            <ChatBubble>Incoming messages use a soft gray, large-radius bubble.</ChatBubble>
            <SystemLine>Messaged <AccentAvatar color="green" shape="pill" size="xs" /> <strong>Helper</strong></SystemLine>
            <ChatBubble from="me">Outgoing messages fill with the current accent.</ChatBubble>
            <Composer placeholder="Message Helper" />
          </div>
        </Section>
      </main>
    </div>
  );
}
