/**
 * Primitivos Neo-Brutalistas da área do usuário Engrenei.
 * Paleta e tokens definidos em src/styles.css (--nb-*).
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export function NbSurface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-screen bg-nb-bg font-sans text-nb-ink",
        "bg-[radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--nb-ink)_12%,transparent)_1px,transparent_0)] [background-size:22px_22px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NbBox({
  children,
  className,
  tone = "white",
  shadow = "md",
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "lime" | "green" | "ink" | "orange" | "blue" | "bg";
  shadow?: "md" | "lg" | "none";
  as?: "div" | "section" | "article" | "li";
}) {
  const tones = {
    white: "bg-nb-surface text-nb-ink",
    bg: "bg-nb-bg text-nb-ink",
    lime: "bg-nb-lime text-nb-ink",
    green: "bg-nb-green text-white",
    ink: "bg-nb-ink text-white",
    orange: "bg-nb-orange text-nb-ink",
    blue: "bg-nb-blue text-white",
  } as const;
  return (
    <As
      className={cn(
        "nb-border rounded-[4px] p-5",
        shadow === "md" && "nb-shadow",
        shadow === "lg" && "nb-shadow-lg",
        tones[tone],
        className,
      )}
    >
      {children}
    </As>
  );
}

export function NbHeading({
  children,
  className,
  level = 1,
}: {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const Tag = (`h${level}` as const) as "h1";
  const sizes = {
    1: "text-[clamp(1.9rem,4vw,2.9rem)] leading-[0.95]",
    2: "text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.05]",
    3: "text-[15px] leading-tight",
  } as const;
  return (
    <Tag
      className={cn(
        "font-[family-name:var(--font-heavy)] uppercase tracking-[-0.02em]",
        sizes[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function NbTag({
  children,
  tone = "lime",
  className,
}: {
  children: React.ReactNode;
  tone?: "lime" | "green" | "ink" | "orange" | "white" | "blue";
  className?: string;
}) {
  const tones = {
    lime: "bg-nb-lime text-nb-ink",
    green: "bg-nb-green text-white",
    ink: "bg-nb-ink text-white",
    orange: "bg-nb-orange text-nb-ink",
    white: "bg-nb-surface text-nb-ink",
    blue: "bg-nb-blue text-white",
  } as const;
  return (
    <span
      className={cn(
        "nb-border inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function NbButton({
  children,
  tone = "green",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "green" | "ink" | "white" | "orange" | "lime";
}) {
  const tones = {
    green: "bg-nb-green text-white",
    ink: "bg-nb-ink text-white",
    white: "bg-nb-surface text-nb-ink",
    orange: "bg-nb-orange text-nb-ink",
    lime: "bg-nb-lime text-nb-ink",
  } as const;
  return (
    <button
      className={cn(
        "nb-border nb-shadow nb-press rounded-[4px] px-5 py-3 font-[family-name:var(--font-brutal)] text-[13px] font-bold uppercase tracking-[0.06em] disabled:cursor-not-allowed disabled:opacity-50",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function NbInput({
  className,
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <label className="block">
      {label ? (
        <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.1em] text-nb-ink/70">
          {label}
        </span>
      ) : null}
      <input
        className={cn(
          "nb-border w-full rounded-[4px] bg-nb-surface px-4 py-3 font-[family-name:var(--font-brutal)] text-[14px] font-medium text-nb-ink outline-none placeholder:text-nb-ink/35 focus:nb-shadow",
          className,
        )}
        {...rest}
      />
    </label>
  );
}

export function NbStat({
  label,
  value,
  hint,
  tone = "white",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "white" | "lime" | "green" | "ink" | "orange";
}) {
  const dark = tone === "green" || tone === "ink";
  return (
    <NbBox tone={tone} className="flex flex-col justify-between gap-6">
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.12em]",
          dark ? "text-white/75" : "text-nb-ink/60",
        )}
      >
        {label}
      </p>
      <div>
        <p className="font-[family-name:var(--font-heavy)] text-[clamp(1.7rem,3.2vw,2.4rem)] leading-none tracking-[-0.03em]">
          {value}
        </p>
        {hint ? (
          <p
            className={cn(
              "mt-2 text-[12px] font-medium",
              dark ? "text-white/70" : "text-nb-ink/55",
            )}
          >
            {hint}
          </p>
        ) : null}
      </div>
    </NbBox>
  );
}
