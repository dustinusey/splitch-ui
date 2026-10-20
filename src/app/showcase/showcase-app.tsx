"use client";

import * as React from "react";
import {
  Archive, ArrowDown, Blocks, CircleSlash2, Clock, History, ImagePlus, MonitorSmartphone, MoreHorizontal, Search, SquarePen, Zap,
} from "lucide-react";
import { toast } from "sonner";
import {
  AccentAvatar, AppShell, ChatBubble, Composer, SidebarItem, SidebarSection, SidebarToggle, SystemLine, TopTabBar, useAppShell,
} from "@/components/kit";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { AccentPicker } from "@/components/theme/accent-picker";
import type { MarkColor } from "@/lib/accents";

type Bot = { id: string; name: string; color: MarkColor; shape: "pill" | "hex" | "drop" | "tri" | "circle"; unread?: boolean };

const TEAM: Bot[] = [
  { id: "atlas", name: "Atlas (Dev)", color: "purple", shape: "hex" },
  { id: "fern", name: "Fern (Revenue)", color: "green", shape: "pill" },
  { id: "kite", name: "Kite (Analytics)", color: "red", shape: "pill" },
  { id: "moss", name: "Moss (Content)", color: "red", shape: "pill", unread: true },
  { id: "pebble", name: "Pebble (Social)", color: "blue", shape: "circle" },
  { id: "quill", name: "Quill (Docs)", color: "teal", shape: "tri" },
];

type Msg = { id: number; from: "me" | "them"; body: React.ReactNode } | { id: number; system: React.ReactNode };

const INITIAL: Msg[] = [
  {
    id: 1,
    from: "them",
    body: (
      <>
        <p>Here’s the first draft of the launch post. I kept the tone light and left a short teaser at the end so readers stick around.</p>
        <p className="text-muted-foreground">&lt;link&gt;</p>
        <p>Do you like keeping the teaser as a surprise, or would you rather say it outright?</p>
      </>
    ),
  },
  { id: 2, system: <>Messaged <AccentAvatar color="red" shape="pill" size="xs" /> <strong>Moss (Content)</strong></> },
  { id: 3, from: "them", body: <>I’ve let the team know so the brief gets updated.</> },
  { id: 4, from: "me", body: <>Not sure, I’m not a fan of the teaser. Let’s just say it plainly — it’s a small milestone anyway.</> },
  {
    id: 5,
    from: "them",
    body: (
      <>
        <p>Makes sense, I’ll keep it low-key. Here’s the revised post:</p>
        <p className="font-semibold"><Zap className="mb-0.5 inline size-4 fill-amber-400 text-amber-400" /> New update: faster sync and a fresh look (#25)</p>
        <p>We shipped a round of improvements to sync, polished the settings screens and cleaned up a handful of small bugs reported last week.</p>
        <p className="text-muted-foreground">&lt;link&gt;</p>
        <p>If this works for you, I’ll publish it once the release goes live on Friday and add the link then.</p>
      </>
    ),
  },
  { id: 6, system: <>Message from <AccentAvatar color="neutral" shape="drop" size="xs" /> <strong>Assistant</strong></> },
  { id: 7, system: <>Deleted routine <Clock strokeWidth={1.5} /> <strong>Weekly check-in</strong></> },
  { id: 8, system: <>3 messages with <AccentAvatar color="neutral" shape="drop" size="xs" /> <strong>Assistant</strong></> },
];

function Brand() {
  const { collapsed } = useAppShell();
  return (
    <div className="flex h-9 items-center justify-between px-1.5">
      <CircleSlash2 className="size-[18px]" strokeWidth={1.5} aria-label="Logo" />
      <div className="flex items-center gap-0.5">
        <button type="button" aria-label="Search" className="grid size-7 place-items-center rounded-md hover:bg-sidebar-accent">
          <Search className="size-[17px]" strokeWidth={1.5} />
        </button>
        {!collapsed && <SidebarToggle />}
      </div>
    </div>
  );
}

function MainHeader({ active }: { active: Bot }) {
  const { collapsed } = useAppShell();
  const [tabs, setTabs] = React.useState([{ id: "t1", label: active.name }]);
  React.useEffect(() => setTabs([{ id: "t1", label: active.name }]), [active.name]);
  return (
    <TopTabBar
      className={collapsed ? "pl-2" : "pl-6"}
      tabs={tabs.map((t) => ({ ...t, icon: <AccentAvatar color={active.color} shape={active.shape} size="sm" /> }))}
      activeId="t1"
      onAdd={() => toast("New tab", { description: "Hook this up to your router." })}
      actions={
        <>
          {collapsed && <SidebarToggle className="order-first" />}
          <AccentPicker className="mr-2 hidden md:flex" />
          <ThemeToggle />
          <Button variant="ghost" size="icon-sm" aria-label="Devices" className="text-foreground/80">
            <MonitorSmartphone strokeWidth={1.5} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="More" className="text-foreground/80">
                <MoreHorizontal strokeWidth={1.5} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Conversation</DropdownMenuLabel>
              <DropdownMenuItem>Rename</DropdownMenuItem>
              <DropdownMenuItem>Pin</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      }
    />
  );
}

export function ShowcaseApp() {
  const [activeId, setActiveId] = React.useState("pebble");
  const [nav, setNav] = React.useState<string | null>(null);
  const [messages, setMessages] = React.useState<Msg[]>(INITIAL);
  const active = TEAM.find((b) => b.id === activeId) ?? TEAM[4];
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  return (
    <AppShell
      sidebarHeader={
        <>
          <Brand />
          <nav className="mt-3 flex flex-col gap-px">
            {[
              { id: "chat", label: "Chat", icon: <SquarePen /> },
              { id: "create", label: "Create", icon: <ImagePlus /> },
              { id: "library", label: "Library", icon: <Archive /> },
              { id: "automations", label: "Automations", icon: <History /> },
            ].map((n) => (
              <SidebarItem key={n.id} {...n} active={nav === n.id} onClick={() => setNav(n.id)} />
            ))}
          </nav>
        </>
      }
      sidebar={
        <div className="flex flex-col gap-2 pt-3">
          <SidebarSection label="Bots" size="md" action onAction={() => toast.success("Bot created")}>
            <SidebarSection label="Pinned">
              <SidebarItem label="Assistant" icon={<AccentAvatar color="neutral" shape="drop" />} />
            </SidebarSection>
          </SidebarSection>
          <SidebarSection label="Work Team">
            {TEAM.map((b) => (
              <SidebarItem
                key={b.id}
                label={b.name}
                icon={<AccentAvatar color={b.color} shape={b.shape} />}
                active={b.id === activeId}
                unread={b.unread && b.id !== activeId}
                onClick={() => { setActiveId(b.id); setNav(null); }}
              />
            ))}
          </SidebarSection>
          <SidebarSection label="Personal">
            <SidebarItem label="Show less" icon={<span />} className="text-sidebar-foreground/90" />
          </SidebarSection>
          <SidebarSection label="Chats" size="md">
            <SidebarItem label="Planning the spring launch campaign" />
            <SidebarItem label="See all" className="font-medium" />
          </SidebarSection>
        </div>
      }
      sidebarFooter={
        <div className="flex flex-col gap-px pt-2">
          <SidebarItem label="Plugins" icon={<Blocks />} />
          <SidebarItem
            label="Your Name"
            bold
            icon={
              <Avatar className="size-6">
                <AvatarFallback className="bg-mark-orange text-[10px] font-semibold text-white">YN</AvatarFallback>
              </Avatar>
            }
          />
        </div>
      }
    >
      <MainHeader active={active} />
      <div className="relative min-h-0 flex-1">
        <div ref={scrollRef} className="h-full overflow-y-auto">
          <div className="mx-auto flex max-w-[41rem] flex-col gap-3.5 px-6 pt-2 pb-8">
            {messages.map((m) =>
              "system" in m ? (
                <SystemLine key={m.id}>{m.system}</SystemLine>
              ) : (
                <ChatBubble key={m.id} from={m.from}>{m.body}</ChatBubble>
              ),
            )}
          </div>
        </div>
        <button
          type="button"
          aria-label="Scroll to bottom"
          onClick={() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })}
          className="absolute right-[max(1.5rem,calc(50%-21.5rem))] bottom-2 grid size-7 place-items-center rounded-full bg-bubble text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="size-3.5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="mx-auto w-full max-w-[42.5rem] px-4 pb-2">
        <Composer
          placeholder={`Message ${active.name}`}
          onSend={(text) => setMessages((ms) => [...ms, { id: Date.now(), from: "me", body: text }])}
        />
      </div>
    </AppShell>
  );
}
