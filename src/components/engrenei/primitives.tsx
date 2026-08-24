/**
 * Engrenei Design Kit — primitivos de UI.
 *
 * Todos os componentes usam apenas tokens semânticos definidos em src/styles.css
 * (--eng, --eng-soft, --ink, --cream, --amber-soft, --destructive...).
 * Nunca use cores hardcoded (text-white é permitido apenas sobre superfícies ink/eng).
 */
import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Surface */

export const GRADIENT_CANVAS =
  "bg-[linear-gradient(125deg,white_0%,var(--cream)_38%,color-mix(in_oklab,var(--eng)_18%,var(--cream))_78%,color-mix(in_oklab,var(--eng)_30%,white)_100%)]";

export const GRADIENT_ENG =
  "bg-[linear-gradient(140deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))]";

export function Surface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen font-sans text-ink", GRADIENT_CANVAS, className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------- Card */

export function Card({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "eng";
}) {
  const tones = {
    light: "bg-white/80 text-ink backdrop-blur",
    dark: "bg-ink text-white",
    eng: cn(GRADIENT_ENG, "text-white"),
  } as const;
  return (
    <section className={cn("rounded-[28px] p-6", tones[tone], className)}>{children}</section>
  );
}

export function CardTitle({
  children,
  hint,
  action,
}: {
  children: React.ReactNode;
  hint?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[13px] font-medium tracking-tight">{children}</h2>
        {hint ? <p className="mt-1 text-[11px] opacity-55">{hint}</p> : null}
      </div>
      {action}
    </div>
  );
}

/* --------------------------------------------------------------- Cabeçalho */

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 pt-2">
      <div>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05] tracking-tight text-ink">
          {title}
        </h1>
        {subtitle ? <p className="mt-2 text-[13px] text-ink/55">{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}

/* ------------------------------------------------------------------- Pill */

export type PillTone = "neutral" | "ok" | "warn" | "danger" | "dark";

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: PillTone;
  className?: string;
}) {
  const tones: Record<PillTone, string> = {
    neutral: "bg-ink/8 text-ink/70",
    ok: "bg-eng-soft text-ink",
    warn: "bg-amber-soft text-ink",
    danger: "bg-destructive/10 text-destructive",
    dark: "bg-ink text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------- Metric ---*/

export function Metric({
  label,
  value,
  delta,
  hint,
  tone = "light",
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  tone?: "light" | "eng" | "dark";
  className?: string;
}) {
  const dark = tone !== "light";
  return (
    <Card tone={tone} className={cn("flex flex-col justify-between gap-6", className)}>
      <p className={cn("text-[11px] uppercase tracking-[0.16em]", dark ? "text-white/55" : "text-ink/45")}>
        {label}
      </p>
      <div>
        <p className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-light leading-none tracking-tight">
          {value}
        </p>
        <div className="mt-2 flex items-center gap-2">
          {delta ? (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px]",
                dark ? "bg-white/15 text-white" : "bg-eng-soft text-ink",
              )}
            >
              {delta}
            </span>
          ) : null}
          {hint ? (
            <span className={cn("text-[11px]", dark ? "text-white/50" : "text-ink/45")}>{hint}</span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------ Progress ---*/

export function ProgressRow({
  label,
  value,
  caption,
}: {
  label: string;
  value: number;
  caption?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[13px] text-ink/70">{label}</p>
        <p className="font-display text-[17px] font-light text-ink">{value}%</p>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/8">
        <div
          className={cn("h-full rounded-full", GRADIENT_ENG)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {caption ? <p className="mt-1.5 text-[11px] text-ink/40">{caption}</p> : null}
    </div>
  );
}

/* --------------------------------------------------------------- Toolbar */

export function Toolbar({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}

export function Field({
  placeholder,
  icon,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-w-[200px] flex-1 items-center gap-2 rounded-full bg-ink/5 px-4 py-3",
        className,
      )}
    >
      {icon}
      <input
        placeholder={placeholder}
        className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-ink/40"
        {...rest}
      />
    </div>
  );
}

export function ActionButton({
  children,
  variant = "solid",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "soft" | "ghost" }) {
  const variants = {
    solid: "bg-ink text-white hover:opacity-90",
    soft: "bg-eng-soft text-ink hover:opacity-80",
    ghost: "text-ink/55 hover:bg-ink/5 hover:text-ink",
  } as const;
  return (
    <button
      className={cn(
        "rounded-full px-5 py-3 text-[13px] font-medium transition-opacity",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------- DataTable */

export type Column<T> = {
  key: string;
  header: string;
  align?: "left" | "right";
  cell: (row: T) => React.ReactNode;
};

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  minWidth = 720,
  tone = "light",
}: {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  minWidth?: number;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left" style={{ minWidth }}>
        <thead>
          <tr
            className={cn(
              "text-[11px] uppercase tracking-wide",
              dark ? "text-white/40" : "text-ink/40",
            )}
          >
            {columns.map((c) => (
              <th
                key={c.key}
                className={cn("pb-3 font-normal", c.align === "right" && "text-right")}
              >
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className={cn("border-t", dark ? "border-white/10" : "border-ink/8")}
            >
              {columns.map((c) => (
                <td
                  key={c.key}
                  className={cn("py-3.5 text-[13px]", c.align === "right" && "text-right")}
                >
                  {c.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------ EmptyState */

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="grid place-items-center rounded-[24px] border border-dashed border-ink/12 px-6 py-14 text-center">
      <p className="font-display text-[19px] font-light text-ink">{title}</p>
      {description ? <p className="mt-2 max-w-sm text-[13px] text-ink/50">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

/* ----------------------------------------------------------- Sparkline --*/

export function Sparkline({
  points,
  className,
}: {
  points: number[];
  className?: string;
}) {
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const span = max - min || 1;
  const d = points
    .map((p, i) => {
      const x = (i / Math.max(points.length - 1, 1)) * 100;
      const y = 100 - ((p - min) / span) * 100;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={cn("h-10 w-full", className)}>
      <path d={d} fill="none" stroke="var(--eng)" strokeWidth={3} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
