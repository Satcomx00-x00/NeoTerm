"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { Status } from "@/lib/types";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  status?: Status;
  icon?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const statusDot: Record<Status, string> = {
  success: "bg-neon shadow-[0_0_4px_#39ff14]",
  warning: "bg-amber shadow-[0_0_4px_#ffa629]",
  error: "bg-destructive shadow-[0_0_4px_#ff3535]",
  info: "bg-cyan shadow-[0_0_4px_#00d4ff]",
  neutral: "bg-muted-foreground/40",
};

/**
 * Vertical timeline with neon-styled status dots.
 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative space-y-0", className)}>
      {items.map((item, i) => (
        <div key={item.id} className="relative flex gap-3 pb-6 last:pb-0">
          {/* Vertical line */}
          {i < items.length - 1 && (
            <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border/50" />
          )}
          {/* Dot */}
          <div className="relative shrink-0 mt-1">
            {item.icon ?? (
              <div className={cn("w-[15px] h-[15px] rounded-full border-2 border-card", statusDot[item.status ?? "neutral"])} />
            )}
          </div>
          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-[11px] font-semibold text-foreground">{item.title}</span>
              {item.timestamp && (
                <span className="text-[9px] text-muted-foreground/50 tabular-nums">{item.timestamp}</span>
              )}
            </div>
            {item.description && (
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
