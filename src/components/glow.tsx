"use client";

import { cn } from "@/lib/utils";
import type { GlowColor } from "@/lib/types";

const GLOW_COLORS: Record<GlowColor, { text: string; border: string; pulse: string }> = {
  green:   { text: "glow-green",   border: "glow-border-green",   pulse: "glow-pulse-green" },
  cyan:    { text: "glow-cyan",    border: "glow-border-cyan",    pulse: "glow-pulse-cyan" },
  red:     { text: "glow-red",     border: "",                     pulse: "" },
  amber:   { text: "glow-amber",   border: "",                     pulse: "" },
  magenta: { text: "glow-magenta", border: "",                     pulse: "glow-pulse-magenta" },
};

export interface GlowTextProps {
  children: React.ReactNode;
  color?: GlowColor;
  className?: string;
  as?: React.ElementType;
}

/** Text with neon glow effect. */
export function GlowText({ children, color = "green", className, as: Tag = "span" }: GlowTextProps) {
  return <Tag className={cn(GLOW_COLORS[color].text, className)}>{children}</Tag>;
}

export interface GlowBoxProps {
  children: React.ReactNode;
  color?: GlowColor;
  pulse?: boolean;
  className?: string;
}

/** Container with glowing border + optional pulse. */
export function GlowBox({ children, color = "green", pulse = false, className }: GlowBoxProps) {
  const colors = GLOW_COLORS[color];
  return (
    <div className={cn("term-panel", colors.border, pulse && colors.pulse, className)}>
      {children}
    </div>
  );
}

export interface NeonLineProps {
  color?: GlowColor;
  className?: string;
}

/** Horizontal neon line separator. */
export function NeonLine({ color = "green", className }: NeonLineProps) {
  const colorMap: Record<GlowColor, string> = {
    green: "bg-neon shadow-[0_0_6px_#39ff14,0_0_12px_#39ff1444]",
    cyan: "bg-cyan shadow-[0_0_6px_#00d4ff,0_0_12px_#00d4ff44]",
    red: "bg-destructive shadow-[0_0_6px_#ff3535,0_0_12px_#ff353544]",
    amber: "bg-amber shadow-[0_0_6px_#ffa629,0_0_12px_#ffa62944]",
    magenta: "bg-magenta shadow-[0_0_6px_#ff2d95,0_0_12px_#ff2d9544]",
  };
  return <div className={cn("h-px w-full", colorMap[color], className)} />;
}
