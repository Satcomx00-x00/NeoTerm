"use client";

import { cn } from "@/lib/utils";
import type { ProgressVariant } from "@/lib/types";

export interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  className?: string;
}

const sizeMap = { sm: "h-1", md: "h-2", lg: "h-3" };

const variantMap: Record<ProgressVariant, string> = {
  default: "bg-chart-1",
  neon: "bg-neon shadow-[0_0_6px_#39ff14,0_0_12px_#39ff1444]",
  gradient: "bg-gradient-to-r from-cyan to-neon",
  striped: "bg-chart-1 progress-striped",
};

/**
 * Horizontal progress bar with variants: default, neon, gradient, striped.
 */
export function ProgressBar({
  value,
  max = 100,
  variant = "default",
  size = "md",
  label,
  showValue,
  className,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">{label}</span>}
          {showValue && <span className="text-[9px] tabular-nums text-muted-foreground">{pct.toFixed(0)}%</span>}
        </div>
      )}
      <div className={cn("w-full bg-border/50 overflow-hidden", sizeMap[size])}>
        <div
          className={cn("h-full transition-all duration-500 ease-out", variantMap[variant])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
