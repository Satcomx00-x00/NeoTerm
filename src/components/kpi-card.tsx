"use client";

import { cn } from "@/lib/utils";
import type { KpiData } from "@/lib/types";
import { Sparkline } from "./sparkline";

export interface KpiCardProps extends KpiData {
  sparkData?: number[];
  sparkColor?: string;
  className?: string;
}

const trendIcons = {
  up: "↑",
  down: "↓",
  flat: "→",
};

const trendColors = {
  up: "text-chart-1",
  down: "text-destructive",
  flat: "text-muted-foreground",
};

/**
 * Key Performance Indicator card with optional sparkline & trend.
 */
export function KpiCard({ label, value, change, trend, unit, sparkData, sparkColor, className }: KpiCardProps) {
  return (
    <div className={cn("term-panel p-3 space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider">{label}</span>
        {sparkData && sparkData.length > 1 && (
          <Sparkline data={sparkData} width={56} height={18} color={sparkColor ?? "var(--chart-1)"} />
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold tabular-nums tracking-tight text-foreground">
          {value}
        </span>
        {unit && <span className="text-[10px] text-muted-foreground">{unit}</span>}
      </div>
      {(change !== undefined || trend) && (
        <div className={cn("flex items-center gap-1 text-[10px] font-semibold", trend ? trendColors[trend] : "text-muted-foreground")}>
          {trend && <span>{trendIcons[trend]}</span>}
          {change !== undefined && (
            <span className="tabular-nums">
              {change >= 0 ? "+" : ""}{change.toFixed(2)}%
            </span>
          )}
        </div>
      )}
    </div>
  );
}
