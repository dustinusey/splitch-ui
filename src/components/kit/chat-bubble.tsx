import { cn } from "@/lib/utils";

/** Incoming = soft gray bubble; outgoing = filled accent bubble aligned right. */
export function ChatBubble({
  from = "them",
  children,
  className,
}: {
  from?: "me" | "them";
  children: React.ReactNode;
  className?: string;
}) {
  const me = from === "me";
  return (
    <div className={cn("flex w-full", me ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[min(80%,32rem)] rounded-bubble px-3.5 py-2.5 text-[14.5px] leading-[1.45] [&_p+p]:mt-3",
          me ? "bg-brand text-brand-foreground" : "bg-bubble text-bubble-foreground",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
