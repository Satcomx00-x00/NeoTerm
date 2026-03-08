// ── NeoTerm UI Types ─────────────────────────────────────────

/** LED indicator color variants */
export type LedColor = "green" | "red" | "amber" | "cyan" | "magenta" | "off";

/** Neon glow color names */
export type GlowColor = "green" | "cyan" | "red" | "amber" | "magenta";

/** Animation direction */
export type AnimationDirection = "up" | "down" | "left" | "right";

/** Status severity */
export type Status = "success" | "warning" | "error" | "info" | "neutral";

/** Stat cell data for stat bars */
export interface StatCellData {
  label: string;
  value: string;
  color?: string;
  tooltip?: string;
}

/** Timeline entry */
export interface TimelineEntry {
  id: string;
  timestamp: number;
  title: string;
  description?: string;
  status?: Status;
  icon?: React.ReactNode;
}

/** KPI metric */
export interface KpiData {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "flat";
  unit?: string;
}

/** Command palette item */
export interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  group?: string;
  onSelect: () => void;
}

/** Toast / notification */
export interface ToastData {
  id: string;
  title: string;
  description?: string;
  status?: Status;
  duration?: number;
}

/** Avatar variant */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/** Progress variant */
export type ProgressVariant = "default" | "neon" | "gradient" | "striped";

/** Data point for sparkline */
export interface SparklinePoint {
  value: number;
  label?: string;
}

import type React from "react";
