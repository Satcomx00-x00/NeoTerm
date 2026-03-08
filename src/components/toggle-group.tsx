"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleGroupItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ToggleGroupProps {
  items: ToggleGroupItem[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md";
  variant?: "default" | "neon" | "ghost";
  className?: string;
}

/**
 * Segmented toggle group — single selection from N options.
 */
export function ToggleGroup({ items, value, onChange, size = "md", variant = "default", className }: ToggleGroupProps) {
  const sizeClass = size === "sm" ? "h-6 px-2 text-[9px]" : "h-7 px-3 text-[10px]";

  const activeClass = {
    default: "border-foreground/20 bg-secondary text-foreground",
    neon: "border-neon/50 bg-neon/10 text-neon glow-border-green",
    ghost: "bg-accent text-foreground",
  }[variant];

  const inactiveClass = {
    default: "border-transparent text-muted-foreground/50 hover:text-muted-foreground",
    neon: "border-transparent text-muted-foreground/50 hover:text-muted-foreground",
    ghost: "text-muted-foreground/50 hover:text-muted-foreground hover:bg-accent/50",
  }[variant];

  return (
    <div className={cn("inline-flex border border-border bg-background p-0.5 gap-0.5", className)}>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          className={cn(
            "inline-flex items-center justify-center gap-1 font-semibold uppercase tracking-wider border transition-all",
            sizeClass,
            value === item.value ? activeClass : inactiveClass,
          )}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}
