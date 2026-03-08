"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Animated count-up number. Smoothly interpolates from `from` to `to`.
 */
export function CountUp({
  from = 0,
  to,
  duration = 1000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const startTime = performance.now();
    const diff = to - from;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(from + diff * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [from, to, duration]);

  return (
    <span className={cn("tabular-nums number-reveal", className)}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
