"use client";

import { cn } from "@/lib/utils";
import type { GlowColor } from "@/lib/types";

export interface HeatCellProps {
  value: number;
  max: number;
  label?: string;
}

export interface HeatMapProps {
  data: number[][];
  rowLabels?: string[];
  colLabels?: string[];
  colorPositive?: string;
  colorNegative?: string;
  className?: string;
}

/**
 * Grid-based heatmap visualization.
 */
export function HeatMap({ data, rowLabels, colLabels, colorPositive = "#39ff14", colorNegative = "#ff3535", className }: HeatMapProps) {
  const allValues = data.flat();
  const maxAbs = Math.max(...allValues.map(Math.abs), 0.01);

  return (
    <div className={cn("inline-block", className)}>
      {colLabels && (
        <div className="flex" style={{ paddingLeft: rowLabels ? 40 : 0 }}>
          {colLabels.map((label, i) => (
            <div key={i} className="flex-1 text-center text-[8px] text-muted-foreground/50 font-mono pb-1 min-w-[28px]">{label}</div>
          ))}
        </div>
      )}
      {data.map((row, ri) => (
        <div key={ri} className="flex items-center">
          {rowLabels && (
            <div className="w-10 text-right pr-2 text-[8px] text-muted-foreground/50 font-mono shrink-0">{rowLabels[ri]}</div>
          )}
          {row.map((val, ci) => {
            const intensity = Math.abs(val) / maxAbs;
            const color = val >= 0 ? colorPositive : colorNegative;
            return (
              <div
                key={ci}
                className="flex-1 min-w-[28px] h-7 flex items-center justify-center text-[8px] font-mono tabular-nums border border-background/50"
                style={{ backgroundColor: `${color}${Math.round(intensity * 180).toString(16).padStart(2, "0")}`, color: intensity > 0.5 ? "#000" : "var(--muted-foreground)" }}
                title={`${val}`}
              >
                {val.toFixed(1)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export interface BarChartItem {
  label: string;
  value: number;
  color?: string;
}

export interface MiniBarChartProps {
  items: BarChartItem[];
  maxHeight?: number;
  className?: string;
}

/**
 * Minimal vertical bar chart — no external deps.
 */
export function MiniBarChart({ items, maxHeight = 80, className }: MiniBarChartProps) {
  const maxVal = Math.max(...items.map((i) => Math.abs(i.value)), 0.01);

  return (
    <div className={cn("flex items-end gap-1", className)} style={{ height: maxHeight }}>
      {items.map((item, i) => {
        const h = (Math.abs(item.value) / maxVal) * maxHeight;
        const isPositive = item.value >= 0;
        return (
          <div key={i} className="flex flex-col items-center gap-1 flex-1" title={`${item.label}: ${item.value}`}>
            <div
              className={cn("w-full min-w-[12px] transition-all duration-500 ease-out", isPositive ? "bg-chart-1/70" : "bg-destructive/70")}
              style={{ height: h, boxShadow: isPositive ? "0 0 4px #39ff1433" : "0 0 4px #ff353533" }}
            />
            <span className="text-[7px] text-muted-foreground/50 font-mono truncate max-w-full">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
