"use client";

import { cn } from "@/lib/utils";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const alertStyles = {
  info: "border-l-cyan bg-cyan/5 text-cyan",
  success: "border-l-neon bg-neon/5 text-neon",
  warning: "border-l-amber bg-amber/5 text-amber",
  error: "border-l-destructive bg-destructive/5 text-destructive",
};

const alertIcons = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

/**
 * Alert banner with severity variants.
 */
export function Alert({ variant = "info", title, children, icon, dismissible, onDismiss, className }: AlertProps) {
  return (
    <div className={cn("term-panel border-l-2 px-3 py-2", alertStyles[variant], className)} role="alert">
      <div className="flex items-start gap-2">
        <span className="text-xs mt-0.5 shrink-0">{icon ?? alertIcons[variant]}</span>
        <div className="flex-1 min-w-0">
          {title && <p className="text-[11px] font-bold">{title}</p>}
          <div className="text-[10px] text-foreground/80 mt-0.5">{children}</div>
        </div>
        {dismissible && (
          <button onClick={onDismiss} className="text-[10px] opacity-40 hover:opacity-100 transition-opacity shrink-0">✕</button>
        )}
      </div>
    </div>
  );
}

export interface CalloutProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
}

/**
 * Highlighted callout block.
 */
export function Callout({ children, icon, color, className }: CalloutProps) {
  return (
    <div className={cn("flex gap-2 p-3 border border-border/40 bg-accent/20", className)}>
      {icon && <span className="shrink-0 mt-0.5">{icon}</span>}
      <div className={cn("text-[11px] leading-relaxed", color ?? "text-foreground")}>{children}</div>
    </div>
  );
}
