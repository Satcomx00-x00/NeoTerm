"use client";

import { cn } from "@/lib/utils";

export interface TerminalBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "raised" | "glass";
  className?: string;
  headerExtra?: React.ReactNode;
}

/**
 * Terminal-styled container box with optional title bar.
 */
export function TerminalBox({ title, children, variant = "default", className, headerExtra }: TerminalBoxProps) {
  const variantClass = {
    default: "term-panel",
    raised: "term-panel-raised",
    glass: "glass",
  }[variant];

  return (
    <div className={cn(variantClass, className)}>
      {title && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-destructive/60" />
              <span className="w-2 h-2 rounded-full bg-amber/60" />
              <span className="w-2 h-2 rounded-full bg-neon/60" />
            </div>
            <span className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-wider">{title}</span>
          </div>
          {headerExtra}
        </div>
      )}
      {children}
    </div>
  );
}

export interface CodeBlockProps {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

/**
 * Terminal-styled code block with optional line numbers.
 */
export function CodeBlock({ children, language, showLineNumbers = false, className }: CodeBlockProps) {
  const lines = children.split("\n");
  return (
    <TerminalBox title={language ?? "code"} className={className}>
      <pre className="p-3 overflow-x-auto text-[11px] font-mono leading-relaxed text-foreground/90">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="inline-block w-8 text-right pr-3 text-muted-foreground/30 select-none tabular-nums">
                  {i + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </TerminalBox>
  );
}

export interface CommandLineProps {
  prompt?: string;
  command: string;
  output?: string;
  className?: string;
}

/**
 * Single terminal command line with prompt + optional output.
 */
export function CommandLine({ prompt = "$", command, output, className }: CommandLineProps) {
  return (
    <div className={cn("font-mono text-[11px] leading-relaxed", className)}>
      <div className="flex gap-2">
        <span className="text-neon shrink-0">{prompt}</span>
        <span className="text-foreground">{command}</span>
      </div>
      {output && <div className="text-muted-foreground whitespace-pre-wrap mt-0.5 pl-6">{output}</div>}
    </div>
  );
}
