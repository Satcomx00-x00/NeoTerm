"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Kbd ──────────────────────────────────────────────── */

export interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

/** Keyboard key indicator. */
export function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[9px] font-bold font-mono",
        "bg-secondary border border-border/60 text-muted-foreground",
        "shadow-[0_1px_0_1px_var(--border)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

/* ─── Truncate ─────────────────────────────────────────── */

export interface TruncateProps {
  children: React.ReactNode;
  lines?: number;
  className?: string;
}

/** Text truncation — single-line or multi-line clamp. */
export function Truncate({ children, lines = 1, className }: TruncateProps) {
  if (lines === 1) {
    return <span className={cn("block truncate", className)}>{children}</span>;
  }
  return (
    <span
      className={cn("block overflow-hidden", className)}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
      }}
    >
      {children}
    </span>
  );
}

/* ─── Mono ─────────────────────────────────────────────── */

export interface MonoProps {
  children: React.ReactNode;
  className?: string;
}

/** Monospace-styled inline text. */
export function Mono({ children, className }: MonoProps) {
  return <code className={cn("font-mono text-[11px] bg-secondary/50 px-1 py-0.5 border border-border/30", className)}>{children}</code>;
}

/* ─── Empty State ──────────────────────────────────────── */

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

/** Empty state placeholder. */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
      {icon && <div className="text-muted-foreground/20 mb-3">{icon}</div>}
      <h3 className="text-sm font-bold text-foreground tracking-wide">{title}</h3>
      {description && <p className="text-[11px] text-muted-foreground/60 mt-1 max-w-xs">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

/* ─── Divider with label ───────────────────────────────── */

export interface DividerProps {
  label?: string;
  className?: string;
}

/** Horizontal divider with optional centered label. */
export function Divider({ label, className }: DividerProps) {
  if (!label) return <div className={cn("w-full h-px bg-border/40", className)} />;
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1 h-px bg-border/40" />
      <span className="text-[8px] font-bold text-muted-foreground/40 uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-border/40" />
    </div>
  );
}

/* ─── Loading Spinner ──────────────────────────────────── */

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

const spinnerSize = { sm: "w-3 h-3", md: "w-5 h-5", lg: "w-8 h-8" };

/** Neon spinning loader. */
export function Spinner({ size = "md", color, className }: SpinnerProps) {
  return (
    <svg
      className={cn("neo-spin", spinnerSize[size], className)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="var(--border)" strokeWidth="3" opacity="0.3" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke={color ?? "var(--neon)"}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 3px ${color ?? "var(--neon)"})` }}
      />
    </svg>
  );
}
