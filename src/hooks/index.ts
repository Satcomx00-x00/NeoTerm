"use client";

import { useState, useCallback, useEffect } from "react";

/**
 * Track whether a CSS media query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/**
 * Copy text to clipboard with a brief "copied" state.
 */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetMs);
    },
    [resetMs],
  );

  return { copied, copy } as const;
}

/**
 * Listen for a keyboard shortcut (e.g. "Meta+k" or "Ctrl+Shift+p").
 */
export function useHotkey(combo: string, callback: () => void) {
  useEffect(() => {
    const parts = combo.toLowerCase().split("+");
    const key = parts.pop()!;
    const mods = new Set(parts);

    function handler(e: KeyboardEvent) {
      if (e.key.toLowerCase() !== key) return;
      if (mods.has("meta") !== e.metaKey) return;
      if (mods.has("ctrl") !== e.ctrlKey) return;
      if (mods.has("shift") !== e.shiftKey) return;
      if (mods.has("alt") !== e.altKey) return;
      e.preventDefault();
      callback();
    }

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [combo, callback]);
}

/**
 * Boolean toggle helper.
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setOn = useCallback(() => setValue(true), []);
  const setOff = useCallback(() => setValue(false), []);
  return { value, toggle, setOn, setOff, setValue } as const;
}
