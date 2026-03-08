"use client";

import { cn } from "@/lib/utils";

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Range slider with neon thumb and track fill.
 */
export function Slider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  label,
  showValue = true,
  disabled,
  className,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("w-full", disabled && "opacity-40 pointer-events-none", className)}>
      {(label || showValue) && (
        <div className="flex justify-between mb-1.5">
          {label && <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider">{label}</span>}
          {showValue && <span className="text-[10px] tabular-nums text-foreground font-semibold">{value}</span>}
        </div>
      )}
      <div className="relative h-5 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-1 bg-border/50" />
        {/* Track fill */}
        <div
          className="absolute left-0 h-1 bg-neon shadow-[0_0_4px_#39ff14]"
          style={{ width: `${pct}%` }}
        />
        {/* Native input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {/* Custom thumb */}
        <div
          className="absolute w-3 h-3 bg-neon border-2 border-card rounded-full shadow-[0_0_6px_#39ff14] pointer-events-none"
          style={{ left: `calc(${pct}% - 6px)` }}
        />
      </div>
    </div>
  );
}
