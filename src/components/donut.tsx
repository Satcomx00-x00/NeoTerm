"use client";

import { cn } from "@/lib/utils";

export interface DonutProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  className?: string;
}

/**
 * Circular donut / ring progress indicator.
 */
export function Donut({
  value,
  max = 100,
  size = 64,
  strokeWidth = 4,
  color = "var(--chart-1)",
  trackColor = "var(--border)",
  label,
  className,
}: DonutProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(1, Math.max(0, value / max));
  const dashOffset = circumference * (1 - pct);

  return (
    <div className={cn("inline-flex flex-col items-center gap-1", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={trackColor} strokeWidth={strokeWidth} opacity={0.3} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.6s ease-out", filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      {label && <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider">{label}</span>}
    </div>
  );
}

export interface GaugeProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  showValue?: boolean;
  className?: string;
}

/**
 * Semi-circular gauge meter.
 */
export function Gauge({
  value,
  max = 100,
  size = 80,
  strokeWidth = 5,
  color = "var(--chart-1)",
  label,
  showValue = true,
  className,
}: GaugeProps) {
  const radius = (size - strokeWidth) / 2;
  const halfCirc = Math.PI * radius;
  const pct = Math.min(1, Math.max(0, value / max));
  const dashOffset = halfCirc * (1 - pct);

  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <svg width={size} height={size / 2 + strokeWidth} viewBox={`0 0 ${size} ${size / 2 + strokeWidth}`}>
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
          opacity={0.3}
        />
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={halfCirc}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.6s ease-out", filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      {showValue && (
        <span className="text-sm font-bold tabular-nums -mt-3" style={{ color }}>
          {Math.round(pct * 100)}%
        </span>
      )}
      {label && <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider mt-0.5">{label}</span>}
    </div>
  );
}
