import type { LedColor } from "@/lib/types";
import { cn } from "@/lib/utils";

const LED_CLASSES: Record<LedColor, string> = {
  green: "led-green",
  red: "led-red",
  amber: "led-amber",
  cyan: "led-cyan",
  magenta: "led-magenta",
  off: "led-off",
};

export function Led({ color = "off", pulse = false, className }: { color?: LedColor; pulse?: boolean; className?: string }) {
  return <div className={cn("led", LED_CLASSES[color], pulse && "pulse-neon", className)} />;
}
