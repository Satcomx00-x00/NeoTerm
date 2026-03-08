"use client";

import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

export interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rippleColor?: string;
}

/**
 * Button with a material-design ripple effect on click.
 * Wraps native button — layer composable with Button primitive via asChild.
 */
export function RippleButton({ children, rippleColor, className, onClick, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const nextId = useRef(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = nextId.current++;
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
      onClick?.(e);
    },
    [onClick],
  );

  return (
    <button className={cn("ripple-container relative overflow-hidden", className)} onClick={handleClick} {...props}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-effect"
          style={{
            left: r.x,
            top: r.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
            background: rippleColor ?? "currentColor",
          }}
        />
      ))}
    </button>
  );
}
