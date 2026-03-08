"use client";

import { type ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

const POSITIONS = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1.5",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1.5",
  left: "right-full top-1/2 -translate-y-1/2 mr-1.5",
  right: "left-full top-1/2 -translate-y-1/2 ml-1.5",
} as const;

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  return (
    <span className="relative group/tip inline-flex items-center cursor-default">
      {children}
      <span
        className={`pointer-events-none absolute z-50 ${POSITIONS[side]} whitespace-nowrap border border-border/60 bg-background/95 px-2 py-1 text-[9px] leading-tight text-muted-foreground/90 shadow-lg backdrop-blur-sm opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150 max-w-[200px] text-wrap`}
      >
        {content}
      </span>
    </span>
  );
}
