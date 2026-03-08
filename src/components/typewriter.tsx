"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
}

/**
 * Typewriter text animation — types out characters one by one.
 */
export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  cursorChar = "▊",
  className,
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    idx.current = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      idx.current++;
      if (idx.current > text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
        return;
      }
      setDisplayed(text.slice(0, idx.current));
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span className={cn("font-mono", className)}>
      {displayed}
      {cursor && !done && <span className="cursor-blink">{cursorChar}</span>}
    </span>
  );
}
