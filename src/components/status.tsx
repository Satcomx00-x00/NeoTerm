"use client";

import { cn } from "@/lib/utils";
import type { Status } from "@/lib/types";

export interface StatusDotProps {
  status: Status;
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const dotColors: Record<Status, string> = {
  success: "bg-neon shadow-[0_0_4px_#39ff14,0_0_8px_#39ff1466]",
  warning: "bg-amber shadow-[0_0_4px_#ffa629,0_0_8px_#ffa62966]",
  error: "bg-destructive shadow-[0_0_4px_#ff3535,0_0_8px_#ff353566]",
  info: "bg-cyan shadow-[0_0_4px_#00d4ff,0_0_8px_#00d4ff66]",
  neutral: "bg-muted-foreground/40",
};

const sizeMap = { sm: "w-1.5 h-1.5", md: "w-2 h-2", lg: "w-2.5 h-2.5" };

/**
 * Small colored status dot with optional pulse and label.
 */
export function StatusDot({ status, pulse = false, size = "md", label, className }: StatusDotProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className={cn("rounded-full shrink-0", sizeMap[size], dotColors[status], pulse && "animate-pulse")} />
      {label && <span className="text-[10px] font-semibold">{label}</span>}
    </span>
  );
}

export interface StatusBadgeProps {
  status: Status;
  children: React.ReactNode;
  className?: string;
}

const badgeStyles: Record<Status, string> = {
  success: "border-neon/40 bg-neon/10 text-neon",
  warning: "border-amber/40 bg-amber/10 text-amber",
  error: "border-destructive/40 bg-destructive/10 text-destructive",
  info: "border-cyan/40 bg-cyan/10 text-cyan",
  neutral: "border-border bg-muted text-muted-foreground",
};

/**
 * Inline status badge — colored border + tinted background.
 */
export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 border px-1.5 py-0 text-[9px] font-bold tracking-wider uppercase", badgeStyles[status], className)}>
      <span className={cn("w-1 h-1 rounded-full shrink-0", dotColors[status])} />
      {children}
    </span>
  );
}
