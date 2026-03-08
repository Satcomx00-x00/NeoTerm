"use client";

import { cn } from "@/lib/utils";

export interface MatrixRainProps {
  columns?: number;
  chars?: string;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const speedMap = { slow: 6, normal: 4, fast: 2.5 };

/**
 * Decorative Matrix-style digital rain background.
 * Purely visual — overlay on any container.
 */
export function MatrixRain({ columns = 20, chars = "01", speed = "normal", className }: MatrixRainProps) {
  const charArray = chars.split("");
  const duration = speedMap[speed];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-10", className)}>
      {Array.from({ length: columns }).map((_, i) => {
        const x = (i / columns) * 100;
        const delay = Math.random() * duration;
        const dur = duration + Math.random() * 2;
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        return (
          <span
            key={i}
            className="absolute top-0 text-neon font-mono text-[10px] matrix-fall"
            style={{
              left: `${x}%`,
              ["--fall-duration" as string]: `${dur}s`,
              ["--fall-delay" as string]: `${delay}s`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

export interface GridPatternProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * SVG grid pattern background.
 */
export function GridPattern({ size = 32, color = "var(--border)", className }: GridPatternProps) {
  const id = `grid-${size}`;
  return (
    <svg className={cn("absolute inset-0 w-full h-full pointer-events-none", className)} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
