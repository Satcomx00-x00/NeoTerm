"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { AnimationDirection } from "@/lib/types";

export interface AnimateInProps {
  children: React.ReactNode;
  direction?: AnimationDirection | "scale";
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * Wrap any content to animate it on mount with a fade + slide/scale entrance.
 */
export function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 300,
  className,
  as: Tag = "div",
}: AnimateInProps) {
  const directionClass = {
    up: "animate-in",
    down: "animate-in-down",
    left: "animate-in-left",
    right: "animate-in-right",
    scale: "animate-in-scale",
  }[direction];

  return (
    <Tag
      className={cn(directionClass, className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

export interface StaggerProps {
  children: React.ReactNode;
  stagger?: number;
  direction?: AnimationDirection | "scale";
  duration?: number;
  className?: string;
}

/**
 * Stagger-animate a list of children on mount.
 */
export function Stagger({
  children,
  stagger = 50,
  direction = "up",
  duration = 300,
  className,
}: StaggerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <AnimateIn direction={direction} delay={i * stagger} duration={duration}>
          {child}
        </AnimateIn>
      ))}
    </div>
  );
}
