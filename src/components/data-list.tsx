"use client";

import { cn } from "@/lib/utils";

export interface DataListItem {
  label: string;
  value: React.ReactNode;
  color?: string;
}

export interface DataListProps {
  items: DataListItem[];
  variant?: "inline" | "stacked";
  separator?: boolean;
  className?: string;
}

/**
 * Key-value data list — useful for detail panes and info panels.
 */
export function DataList({ items, variant = "stacked", separator = true, className }: DataListProps) {
  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-1", separator && "divide-x divide-border/40", className)}>
        {items.map((item) => (
          <div key={item.label} className="flex items-baseline gap-1.5 px-2 first:pl-0">
            <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider font-semibold">{item.label}</span>
            <span className={cn("text-[11px] font-bold tabular-nums", item.color ?? "text-foreground")}>{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-1.5", className)}>
      {items.map((item) => (
        <div key={item.label} className={cn("flex justify-between items-baseline", separator && "pb-1.5 border-b border-border/20 last:border-0 last:pb-0")}>
          <span className="text-[10px] text-muted-foreground/60">{item.label}</span>
          <span className={cn("text-[11px] font-bold tabular-nums", item.color ?? "text-foreground")}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
