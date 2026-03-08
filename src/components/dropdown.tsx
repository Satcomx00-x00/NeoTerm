"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  onSelect: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: (DropdownItem | "separator")[];
  align?: "start" | "end";
  className?: string;
}

/**
 * Simple dropdown menu.
 */
export function Dropdown({ trigger, items, align = "start", className }: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-1 min-w-[160px] term-panel py-1 animate-in-scale shadow-xl",
            align === "end" ? "right-0" : "left-0",
          )}
        >
          {items.map((item, i) =>
            item === "separator" ? (
              <div key={`sep-${i}`} className="h-px bg-border/30 my-1" />
            ) : (
              <button
                key={item.id}
                onClick={() => { item.onSelect(); setOpen(false); }}
                disabled={item.disabled}
                className={cn(
                  "flex items-center gap-2 w-full px-3 py-1.5 text-[10px] text-left transition-colors",
                  item.disabled
                    ? "opacity-30 pointer-events-none"
                    : item.danger
                      ? "text-destructive hover:bg-destructive/10"
                      : "text-foreground hover:bg-accent/50",
                )}
              >
                {item.icon && <span className="w-3.5 flex justify-center shrink-0">{item.icon}</span>}
                <span className="flex-1">{item.label}</span>
                {item.shortcut && <span className="text-[8px] text-muted-foreground/40 font-mono">{item.shortcut}</span>}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
