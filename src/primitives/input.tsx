import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-7 w-full border border-border bg-background px-2 py-0.5 text-[11px] font-mono tabular-nums text-foreground transition-colors",
          "placeholder:text-muted-foreground/30",
          "focus-visible:outline-none focus-visible:border-chart-1/50 focus-visible:bg-chart-1/[0.03]",
          "disabled:cursor-not-allowed disabled:opacity-40",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
