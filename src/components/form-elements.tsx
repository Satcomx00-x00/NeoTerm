"use client";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Terminal-styled textarea.
 */
export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full bg-background border border-input px-3 py-2",
        "text-[11px] font-mono text-foreground placeholder:text-muted-foreground/30",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon/50 focus-visible:border-neon/30",
        "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className,
      )}
      {...props}
    />
  );
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Terminal-styled select dropdown.
 */
export function Select({ options, value, onChange, placeholder, disabled, className }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={cn(
        "h-8 w-full bg-background border border-input px-2",
        "text-[11px] font-mono text-foreground appearance-none cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon/50 focus-visible:border-neon/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Terminal-styled checkbox.
 */
export function Checkbox({ checked, onChange, label, disabled, className }: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2 cursor-pointer", disabled && "opacity-40 pointer-events-none", className)}>
      <button
        role="checkbox"
        type="button"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        disabled={disabled}
        className={cn(
          "w-4 h-4 flex items-center justify-center border transition-colors",
          checked
            ? "bg-neon/20 border-neon/50 text-neon"
            : "bg-background border-input hover:border-border/80",
        )}
      >
        {checked && <span className="text-[10px] font-bold">✓</span>}
      </button>
      {label && <span className="text-[10px] text-foreground">{label}</span>}
    </label>
  );
}
