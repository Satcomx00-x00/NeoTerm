"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { AvatarSize } from "@/lib/types";

const sizeMap: Record<AvatarSize, string> = {
  xs: "w-5 h-5 text-[8px]",
  sm: "w-7 h-7 text-[10px]",
  md: "w-9 h-9 text-xs",
  lg: "w-12 h-12 text-sm",
  xl: "w-16 h-16 text-base",
};

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  status?: "online" | "offline" | "away" | "busy" | null;
  className?: string;
}

const statusColors: Record<string, string> = {
  online: "bg-neon shadow-[0_0_4px_#39ff14]",
  offline: "bg-muted-foreground/40",
  away: "bg-amber shadow-[0_0_4px_#ffa629]",
  busy: "bg-destructive shadow-[0_0_4px_#ff3535]",
};

/**
 * Terminal-styled avatar with optional status indicator.
 */
export function Avatar({ src, alt, fallback, size = "md", status, className }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const initials = fallback ?? alt?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <div className={cn("relative inline-flex shrink-0", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full border border-border bg-secondary font-mono font-bold text-muted-foreground overflow-hidden",
          sizeMap[size],
        )}
      >
        {src && !imgError ? (
          <img src={src} alt={alt ?? ""} className="w-full h-full object-cover" onError={() => setImgError(true)} />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block rounded-full border-2 border-card",
            size === "xs" || size === "sm" ? "w-2 h-2" : "w-2.5 h-2.5",
            statusColors[status],
          )}
        />
      )}
    </div>
  );
}

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
  className?: string;
}

/**
 * Overlapping avatar group.
 */
export function AvatarGroup({ children, max, size = "md", className }: AvatarGroupProps) {
  const items = React.Children.toArray(children);
  const visible = max ? items.slice(0, max) : items;
  const remainder = max ? items.length - max : 0;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((child, i) => (
        <div key={i} className="ring-2 ring-card rounded-full">
          {child}
        </div>
      ))}
      {remainder > 0 && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full border border-border bg-muted font-mono font-bold text-muted-foreground ring-2 ring-card",
            sizeMap[size],
          )}
        >
          +{remainder}
        </div>
      )}
    </div>
  );
}
