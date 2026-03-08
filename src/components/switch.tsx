"use client";

import { cn } from "@/lib/utils";

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  size?: "sm" | "md";
  disabled?: boolean;
  label?: string;
  className?: string;
}

/**
 * Toggle switch with neon active state.
 */
export function Switch({ checked, onCheckedChange, size = "md", disabled, label, className }: SwitchProps) {
  const trackSize = size === "sm" ? "w-7 h-4" : "w-9 h-5";
  const thumbSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";
  const translate = size === "sm" ? "translate-x-3" : "translate-x-4";

  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer", disabled && "opacity-40 pointer-events-none", className)}>
      <button
        role="switch"
        type="button"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        disabled={disabled}
        className={cn(
          "relative inline-flex shrink-0 items-center rounded-full border transition-colors",
          trackSize,
          checked
            ? "bg-neon/20 border-neon/50 shadow-[0_0_6px_#39ff1433]"
            : "bg-border/30 border-border hover:border-border/80",
        )}
      >
        <span
          className={cn(
            "block rounded-full transition-all duration-200",
            thumbSize,
            checked
              ? `${translate} bg-neon shadow-[0_0_4px_#39ff14]`
              : "translate-x-0.5 bg-muted-foreground/50",
          )}
        />
      </button>
      {label && <span className="text-[10px] font-semibold text-foreground">{label}</span>}
    </label>
  );
}
