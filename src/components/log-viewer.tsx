"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LogLine {
  timestamp?: string;
  level?: "info" | "warn" | "error" | "debug" | "success";
  message: string;
}

const levelStyles: Record<string, string> = {
  info: "text-cyan",
  warn: "text-amber",
  error: "text-destructive",
  debug: "text-muted-foreground/50",
  success: "text-neon",
};

const levelLabels: Record<string, string> = {
  info: "INF",
  warn: "WRN",
  error: "ERR",
  debug: "DBG",
  success: "OK ",
};

export interface LogViewerProps {
  lines: LogLine[];
  maxHeight?: number;
  autoScroll?: boolean;
  showTimestamp?: boolean;
  className?: string;
}

/**
 * Terminal log viewer with colored severity levels and auto-scroll.
 */
export function LogViewer({ lines, maxHeight = 300, autoScroll = true, showTimestamp = true, className }: LogViewerProps) {
  const endRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (autoScroll) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines.length, autoScroll]);

  return (
    <div
      className={cn("term-panel font-mono text-[10px] leading-relaxed overflow-y-auto p-2", className)}
      style={{ maxHeight }}
    >
      {lines.map((line, i) => (
        <div key={i} className="flex gap-2 hover:bg-accent/20 px-1">
          {showTimestamp && line.timestamp && (
            <span className="text-muted-foreground/30 tabular-nums shrink-0">{line.timestamp}</span>
          )}
          {line.level && (
            <span className={cn("font-bold shrink-0", levelStyles[line.level])}>
              [{levelLabels[line.level]}]
            </span>
          )}
          <span className="text-foreground/80 break-all">{line.message}</span>
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
}
