/**
 * Engrenei Design System (DS) — kit de componentes.
 *
 * Regras:
 *  - Nenhuma cor hardcoded: use os tokens `ds-*` (definidos em src/styles.css).
 *  - Tipografia: `font-ds-display` (Space Grotesk) para títulos/números,
 *    `font-ds-body` (DM Sans) para texto e UI.
 *  - Espaçamento: escala de 4px. Padding de card = 20px (mobile) / 24px (>=md).
 *  - Tudo responsivo por padrão (mobile-first).
 */
import * as React from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ Layout */

export function DsPage({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("ds-canvas min-h-screen font-ds-body text-ds-ink antialiased", className)}>
      {children}
    </div>
  );
}

export function DsPageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 space-y-1.5">
        {eyebrow ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ds-muted">{eyebrow}</p>
        ) : null}
        <h1 className="font-ds-display text-[clamp(1.5rem,3.6vw,2.15rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
          {title}
        </h1>
        {subtitle ? <p className="max-w-[62ch] text-[14px] leading-relaxed text-ds-muted">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export function DsSection({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("space-y-4", className)}>
      {title ? (
        <div className="space-y-1">
          <h2 className="font-ds-display text-[17px] font-semibold tracking-[-0.015em]">{title}</h2>
          {description ? <p className="text-[13px] text-ds-muted">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

/** Grid bento responsiva padrão. */
export function DsGrid({
  cols = 3,
  children,
  className,
}: {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}) {
  const map = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return <div className={cn("grid grid-cols-1 gap-4", map[cols], className)}>{children}</div>;
}

/* -------------------------------------------------------------------- Card */

export function DsCard({
  children,
  className,
  tone = "surface",
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "surface" | "dark" | "brand" | "ghost";
  padded?: boolean;
}) {
  const tones = {
    surface: "ds-card",
    ghost: "rounded-[20px] border border-dashed border-ds-line bg-transparent",
    dark: "rounded-[20px] border border-ds-elevated bg-ds-elevated text-ds-surface ds-elevate",
    brand: "rounded-[20px] border border-transparent bg-ds-brand text-ds-surface ds-elevate",
  } as const;
  return <div className={cn(tones[tone], padded && "p-5 md:p-6", className)}>{children}</div>;
}

export function DsCardHeader({
  title,
  hint,
  action,
  inverted,
}: {
  title: string;
  hint?: string;
  action?: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h3 className={cn("font-ds-display text-[15px] font-semibold tracking-[-0.01em]")}>{title}</h3>
        {hint ? (
          <p className={cn("mt-0.5 text-[12.5px]", inverted ? "text-ds-surface/65" : "text-ds-muted")}>{hint}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

/* ------------------------------------------------------------------ Button */

type ButtonTone = "primary" | "neutral" | "ghost" | "dark" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export function DsButton({
  tone = "primary",
  size = "md",
  className,
  icon,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ButtonTone;
  size?: ButtonSize;
  icon?: React.ReactNode;
}) {
  const tones: Record<ButtonTone, string> = {
    primary: "bg-ds-brand text-ds-surface hover:brightness-[1.06] shadow-[0_8px_20px_-12px_var(--ds-brand)]",
    neutral: "bg-ds-surface text-ds-ink border border-ds-line hover:bg-ds-brand-soft",
    ghost: "bg-transparent text-ds-muted hover:bg-ds-brand-soft hover:text-ds-ink",
    dark: "bg-ds-elevated text-ds-surface hover:brightness-125",
    danger: "bg-ds-danger-soft text-ds-danger border border-transparent hover:brightness-[0.97]",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-[12.5px] gap-1.5",
    md: "h-10 px-4 text-[13.5px] gap-2",
    lg: "h-12 px-5 text-[15px] gap-2",
  };
  return (
    <button
      className={cn(
        "ds-focus inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 active:translate-y-px disabled:pointer-events-none disabled:opacity-45",
        tones[tone],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------- Badge */

export function DsBadge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "warn" | "danger" | "info" | "dark";
  className?: string;
}) {
  const tones = {
    neutral: "bg-ds-bg text-ds-muted",
    brand: "bg-ds-brand-soft text-ds-brand-ink",
    warn: "bg-ds-warn-soft text-ds-warn",
    danger: "bg-ds-danger-soft text-ds-danger",
    info: "bg-ds-info-soft text-ds-info",
    dark: "bg-ds-elevated text-ds-surface",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-medium leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ Metric */

export function DsMetric({
  label,
  value,
  delta,
  hint,
  icon,
  tone = "surface",
}: {
  label: string;
  value: string;
  delta?: { value: string; positive?: boolean };
  hint?: string;
  icon?: React.ReactNode;
  tone?: "surface" | "dark" | "brand";
}) {
  const inverted = tone !== "surface";
  return (
    <DsCard tone={tone} className="flex flex-col justify-between gap-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "text-[12px] font-medium uppercase tracking-[0.1em]",
            inverted ? "text-ds-surface/70" : "text-ds-muted",
          )}
        >
          {label}
        </span>
        {icon ? (
          <span
            className={cn(
              "grid size-8 place-items-center rounded-full",
              inverted ? "bg-ds-surface/15 text-ds-surface" : "bg-ds-brand-soft text-ds-brand-ink",
            )}
          >
            {icon}
          </span>
        ) : null}
      </div>
      <div>
        <p className="font-ds-display text-[clamp(1.6rem,3.4vw,2.3rem)] font-semibold leading-none tracking-[-0.03em]">
          {value}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {delta ? (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11.5px] font-medium",
                inverted
                  ? "bg-ds-surface/15 text-ds-surface"
                  : delta.positive === false
                    ? "bg-ds-danger-soft text-ds-danger"
                    : "bg-ds-brand-soft text-ds-brand-ink",
              )}
            >
              {delta.value}
            </span>
          ) : null}
          {hint ? (
            <span className={cn("text-[12px]", inverted ? "text-ds-surface/65" : "text-ds-muted")}>{hint}</span>
          ) : null}
        </div>
      </div>
    </DsCard>
  );
}

/* ---------------------------------------------------------------- Progress */

export function DsProgress({
  label,
  value,
  caption,
  tone = "brand",
}: {
  label?: string;
  value: number;
  caption?: string;
  tone?: "brand" | "warn" | "danger";
}) {
  const bar = { brand: "bg-ds-brand", warn: "bg-ds-warn", danger: "bg-ds-danger" } as const;
  return (
    <div className="space-y-2">
      {(label || caption) && (
        <div className="flex items-baseline justify-between gap-3 text-[13px]">
          <span className="font-medium">{label}</span>
          <span className="text-ds-muted">{caption ?? `${value}%`}</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-ds-bg">
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", bar[tone])}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- Input */

export function DsInput({
  label,
  hint,
  icon,
  className,
  id,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  icon?: React.ReactNode;
}) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label htmlFor={inputId} className="block text-[12.5px] font-medium text-ds-ink">
          {label}
        </label>
      ) : null}
      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ds-muted">{icon}</span>
        ) : null}
        <input
          id={inputId}
          className={cn(
            "ds-focus h-11 w-full rounded-full border border-ds-line bg-ds-surface px-4 text-[14px] text-ds-ink transition-colors placeholder:text-ds-muted/70 hover:border-ds-brand/40",
            icon && "pl-10",
            className,
          )}
          {...rest}
        />
      </div>
      {hint ? <p className="text-[12px] text-ds-muted">{hint}</p> : null}
    </div>
  );
}

/* -------------------------------------------------------------------- Tabs */

export function DsTabs({
  items,
  value,
  onChange,
  className,
}: {
  items: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-ds-line bg-ds-surface p-1",
        className,
      )}
    >
      {items.map((it) => (
        <button
          key={it.id}
          role="tab"
          aria-selected={value === it.id}
          onClick={() => onChange(it.id)}
          className={cn(
            "ds-focus whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
            value === it.id ? "bg-ds-ink text-ds-surface" : "text-ds-muted hover:text-ds-ink",
          )}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------- Table */

export type DsColumn<T> = {
  key: string;
  header: string;
  align?: "left" | "right";
  cell: (row: T) => React.ReactNode;
  className?: string;
};

export function DsTable<T>({
  columns,
  rows,
  rowKey,
  empty,
}: {
  columns: DsColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  empty?: React.ReactNode;
}) {
  if (rows.length === 0 && empty) return <>{empty}</>;
  return (
    <div className="-mx-5 overflow-x-auto px-5 md:-mx-6 md:px-6">
      <table className="w-full min-w-[620px] border-collapse text-[13.5px]">
        <thead>
          <tr className="border-b border-ds-line">
            {columns.map((c) => (
              <th
                key={c.key}
                className={cn(
                  "pb-3 text-[11.5px] font-medium uppercase tracking-[0.1em] text-ds-muted",
                  c.align === "right" ? "text-right" : "text-left",
                )}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={rowKey(r)} className="border-b border-ds-line/70 transition-colors last:border-0 hover:bg-ds-bg/60">
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={cn("py-3.5 align-middle", c.align === "right" ? "text-right" : "text-left", c.className)}
                >
                  {c.cell(r)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------------------- EmptyState */

export function DsEmptyState({
  title,
  description,
  icon,
  action,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[20px] border border-dashed border-ds-line px-6 py-12 text-center">
      {icon ? <span className="grid size-11 place-items-center rounded-full bg-ds-brand-soft text-ds-brand-ink">{icon}</span> : null}
      <h3 className="font-ds-display text-[16px] font-semibold">{title}</h3>
      {description ? <p className="max-w-[42ch] text-[13px] text-ds-muted">{description}</p> : null}
      {action}
    </div>
  );
}

/* ------------------------------------------------------------------ Avatar */

export function DsAvatar({
  name,
  src,
  size = 40,
}: {
  name: string;
  src?: string;
  size?: number;
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center overflow-hidden rounded-full bg-ds-brand-soft font-ds-display text-[13px] font-semibold text-ds-brand-ink"
    >
      {src ? <img src={src} alt={name} className="size-full object-cover" loading="lazy" /> : initials}
    </span>
  );
}

/* --------------------------------------------------------------- Sparkline */

export function DsSparkline({ points, className }: { points: number[]; className?: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const d = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${28 - ((p - min) / span) * 26}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={cn("h-8 w-full", className)} aria-hidden="true">
      <polyline points={d} fill="none" stroke="var(--ds-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
