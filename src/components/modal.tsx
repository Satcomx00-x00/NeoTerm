"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" };

/**
 * Terminal-styled modal dialog with backdrop.
 */
export function Modal({ open, onClose, title, children, size = "md", className }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      {/* Panel */}
      <div className={cn("relative term-panel w-full mx-4 animate-in-scale", sizeMap[size], className)}>
        {title && (
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive/60" />
                <span className="w-2 h-2 rounded-full bg-amber/60" />
                <span className="w-2 h-2 rounded-full bg-neon/60" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{title}</span>
            </div>
            <button onClick={onClose} className="text-muted-foreground/40 hover:text-foreground text-xs transition-colors">
              ✕
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: "right" | "left";
  title?: string;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

/**
 * Slide-in drawer panel.
 */
export function Drawer({ open, onClose, side = "right", title, children, width = "w-80", className }: DrawerProps) {
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const slideClass = side === "right" ? "right-0 animate-in-left" : "left-0 animate-in-right";

  return (
    <div className="fixed inset-0 z-[200] flex">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("absolute top-0 bottom-0 term-panel border-l border-border", width, slideClass, className)}>
        {title && (
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/40">
            <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{title}</span>
            <button onClick={onClose} className="text-muted-foreground/40 hover:text-foreground text-xs transition-colors">
              ✕
            </button>
          </div>
        )}
        <div className="p-4 h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
