"use client";

import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  color?: string;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

/**
 * Small colored tag / chip with optional remove button.
 */
export function Tag({ children, color, removable, onRemove, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-1.5 py-0 text-[9px] font-bold tracking-wider uppercase border",
        color ?? "border-border bg-secondary text-foreground",
        className,
      )}
    >
      {children}
      {removable && (
        <button onClick={onRemove} className="text-current opacity-40 hover:opacity-100 transition-opacity ml-0.5">✕</button>
      )}
    </span>
  );
}

export interface TagGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function TagGroup({ children, className }: TagGroupProps) {
  return <div className={cn("flex flex-wrap gap-1", className)}>{children}</div>;
}

export interface DotGridProps {
  className?: string;
}

/**
 * Decorative dot-grid background.
 */
export function DotGrid({ className }: DotGridProps) {
  return <div className={cn("absolute inset-0 dot-grid opacity-50 pointer-events-none", className)} />;
}

export interface ScanlineOverlayProps {
  className?: string;
}

/**
 * CRT scanline overlay effect.
 */
export function ScanlineOverlay({ className }: ScanlineOverlayProps) {
  return <div className={cn("scanlines pointer-events-none", className)} />;
}

export interface NoiseOverlayProps {
  className?: string;
}

/**
 * Subtle noise/grain texture overlay.
 */
export function NoiseOverlay({ className }: NoiseOverlayProps) {
  return <div className={cn("noise pointer-events-none", className)} />;
}

export interface GradientTextProps {
  children: React.ReactNode;
  variant?: "neon" | "fire" | "ice";
  className?: string;
  as?: React.ElementType;
}

/**
 * Gradient-colored text with preset palettes.
 */
export function GradientText({ children, variant = "neon", className, as: Tag = "span" }: GradientTextProps) {
  const variantClass = {
    neon: "gradient-text-neon",
    fire: "gradient-text-fire",
    ice: "gradient-text-ice",
  }[variant];
  return <Tag className={cn(variantClass, className)}>{children}</Tag>;
}

export interface PulseRingProps {
  color?: string;
  size?: number;
  className?: string;
}

/**
 * Animated concentric pulse ring — useful for live indicators.
 */
export function PulseRing({ color = "var(--neon)", size = 24, className }: PulseRingProps) {
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative rounded-full"
        style={{ width: size / 3, height: size / 3, backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      />
    </span>
  );
}
