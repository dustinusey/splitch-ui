"use client";

import * as React from "react";
import { AudioLines, ArrowUp, Mic, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Large rounded message composer with a circular primary button. */
export function Composer({
  placeholder = "Message…",
  onSend,
  className,
}: {
  placeholder?: string;
  onSend?: (text: string) => void;
  className?: string;
}) {
  const [value, setValue] = React.useState("");
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const hasText = value.trim().length > 0;

  const send = () => {
    if (!hasText) return;
    onSend?.(value.trim());
    setValue("");
  };

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [value]);

  return (
    <div
      className={cn(
        "rounded-composer border border-border bg-composer shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors focus-within:border-foreground/15 dark:border-transparent",
        className,
      )}
    >
      <textarea
        ref={ref}
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
        placeholder={placeholder}
        aria-label={placeholder}
        className="block w-full resize-none bg-transparent px-4 pt-4 pb-1 text-[15px] leading-6 outline-none placeholder:text-muted-foreground"
      />
      <div className="flex items-center justify-between px-2.5 pb-2.5">
        <button type="button" aria-label="Attach" className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground">
          <Plus className="size-5" strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Dictate" className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground">
            <Mic className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={send}
            aria-label={hasText ? "Send" : "Voice mode"}
            className="grid size-9 place-items-center rounded-full bg-foreground text-background transition-transform active:scale-95"
          >
            {hasText ? <ArrowUp className="size-5" strokeWidth={2} /> : <AudioLines className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>
    </div>
  );
}
