import { cn } from "@/lib/utils";

/** Small centered event line, e.g. "Messaged ● Name". */
export function SystemLine({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5 py-1 text-center text-[12.5px] text-muted-foreground [&_strong]:font-normal [&_strong]:text-foreground [&_svg]:size-3.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
