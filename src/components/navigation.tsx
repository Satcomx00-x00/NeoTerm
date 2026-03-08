"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NotificationBellProps {
  count?: number;
  className?: string;
  onClick?: () => void;
}

/**
 * Bell icon with animated notification count badge.
 */
export function NotificationBell({ count = 0, className, onClick }: NotificationBellProps) {
  return (
    <button onClick={onClick} className={cn("relative inline-flex items-center justify-center w-8 h-8 hover:bg-accent/50 transition-colors", className)}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground">
        <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5v2.5l-1 2h11l-1-2V6A4.5 4.5 0 0 0 8 1.5Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 12.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[14px] h-[14px] px-1 text-[7px] font-bold bg-destructive text-destructive-foreground rounded-full animate-in-scale shadow-[0_0_4px_#ff3535]">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

/**
 * Breadcrumb navigation trail.
 */
export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center gap-1 text-[10px]", className)}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <span className="text-muted-foreground/30 mx-0.5">{separator}</span>}
          {item.href || item.onClick ? (
            <button onClick={item.onClick} className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              {item.label}
            </button>
          ) : (
            <span className={i === items.length - 1 ? "text-foreground font-semibold" : "text-muted-foreground/50"}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export interface StepperProps {
  steps: string[];
  current: number;
  className?: string;
}

/**
 * Horizontal step indicator.
 */
export function Stepper({ steps, current, className }: StepperProps) {
  return (
    <div className={cn("flex items-center gap-0", className)}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          {i > 0 && (
            <div className={cn("flex-1 h-px mx-1", i <= current ? "bg-neon shadow-[0_0_3px_#39ff14]" : "bg-border/40")} />
          )}
          <div className="flex flex-col items-center gap-1">
            <div
              className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold border transition-all",
                i < current
                  ? "bg-neon/20 border-neon text-neon shadow-[0_0_4px_#39ff14]"
                  : i === current
                    ? "bg-neon border-neon text-black shadow-[0_0_6px_#39ff14]"
                    : "bg-transparent border-border/40 text-muted-foreground/40",
              )}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span className={cn("text-[8px] uppercase tracking-wider font-semibold", i <= current ? "text-foreground" : "text-muted-foreground/40")}>
              {step}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
