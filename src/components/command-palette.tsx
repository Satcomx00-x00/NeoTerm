"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HotkeysItem {
  keys: string[];
  label: string;
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: Array<{
    id: string;
    label: string;
    shortcut?: string;
    icon?: React.ReactNode;
    group?: string;
    onSelect: () => void;
  }>;
  placeholder?: string;
  className?: string;
}

/**
 * Terminal-styled command palette (Ctrl+K style).
 */
export function CommandPalette({ open, onClose, items, placeholder = "Type a command…", className }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  const groups = new Map<string, typeof filtered>();
  for (const item of filtered) {
    const group = item.group ?? "";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(item);
  }

  return (
    <div className="fixed inset-0 z-[300] flex items-start justify-center pt-[20vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative term-panel w-full max-w-md animate-in-scale shadow-2xl", className)}>
        {/* Search input */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40">
          <span className="text-muted-foreground/40 text-xs">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-[11px] font-mono text-foreground placeholder:text-muted-foreground/30 outline-none"
          />
          <kbd className="text-[8px] px-1 py-0.5 border border-border/40 text-muted-foreground/40 font-mono">ESC</kbd>
        </div>
        {/* Results */}
        <div className="max-h-[300px] overflow-y-auto py-1">
          {filtered.length === 0 && (
            <div className="px-3 py-4 text-center text-[10px] text-muted-foreground/40">No commands found</div>
          )}
          {[...groups.entries()].map(([group, groupItems]) => (
            <div key={group}>
              {group && (
                <div className="px-3 pt-2 pb-1 text-[8px] font-bold text-muted-foreground/40 uppercase tracking-widest">{group}</div>
              )}
              {groupItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { item.onSelect(); onClose(); }}
                  className="flex items-center gap-2 w-full px-3 py-1.5 text-left hover:bg-accent/50 transition-colors"
                >
                  {item.icon && <span className="text-muted-foreground/50 w-4 flex justify-center">{item.icon}</span>}
                  <span className="flex-1 text-[11px] text-foreground">{item.label}</span>
                  {item.shortcut && (
                    <span className="text-[8px] text-muted-foreground/40 font-mono">{item.shortcut}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
