"use client";

import * as React from "react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { Status, ToastData } from "@/lib/types";

export interface ToastProps {
  toast: ToastData;
  onDismiss: (id: string) => void;
}

const statusBorder: Record<Status, string> = {
  success: "border-l-neon",
  warning: "border-l-amber",
  error: "border-l-destructive",
  info: "border-l-cyan",
  neutral: "border-l-border",
};

const statusIcon: Record<Status, string> = {
  success: "✓",
  warning: "⚠",
  error: "✕",
  info: "ℹ",
  neutral: "●",
};

/**
 * Single toast notification.
 */
export function Toast({ toast, onDismiss }: ToastProps) {
  const status = toast.status ?? "info";
  return (
    <div
      className={cn(
        "term-panel border-l-2 px-3 py-2 flex items-start gap-2 animate-in-left min-w-[260px] max-w-[380px]",
        statusBorder[status],
      )}
    >
      <span className="text-xs mt-0.5 shrink-0">{statusIcon[status]}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-foreground">{toast.title}</p>
        {toast.description && (
          <p className="text-[10px] text-muted-foreground mt-0.5">{toast.description}</p>
        )}
      </div>
      <button
        onClick={() => onDismiss(toast.id)}
        className="text-[10px] text-muted-foreground/40 hover:text-foreground transition-colors shrink-0 mt-0.5"
      >
        ✕
      </button>
    </div>
  );
}

export interface ToastContainerProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  className?: string;
}

const positionClass = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
};

/**
 * Toast container for stacking notifications. Use with useToast hook.
 */
export function ToastContainer({ position = "top-right", className }: ToastContainerProps) {
  return (
    <div className={cn("fixed z-[100] flex flex-col gap-2 pointer-events-none", positionClass[position], className)}>
      {/* Toasts are rendered here via portal or context */}
    </div>
  );
}

/**
 * Toast state management hook.
 */
export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((toast: Omit<ToastData, "id">) => {
    const id = crypto.randomUUID();
    const newToast: ToastData = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    const duration = toast.duration ?? 4000;
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
    return id;
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => setToasts([]), []);

  return { toasts, addToast, dismissToast, dismissAll };
}

export interface ToastStackProps {
  toasts: ToastData[];
  onDismiss: (id: string) => void;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  className?: string;
}

/**
 * Render a stack of toasts. Pair with useToast().
 */
export function ToastStack({ toasts, onDismiss, position = "top-right", className }: ToastStackProps) {
  return (
    <div className={cn("fixed z-[100] flex flex-col gap-2", positionClass[position], className)}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
