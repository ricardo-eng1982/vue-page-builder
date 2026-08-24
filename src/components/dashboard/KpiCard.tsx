import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  hint: string;
};

export function KpiCard({ label, value, delta, up, hint }: Props) {
  const Icon = up ? ArrowUpRight : ArrowDownRight;

  return (
    <div
      className={cn(
        "rounded-2xl border p-4 shadow-eng transition-shadow hover:shadow-lg",
        up
          ? "border-transparent bg-[linear-gradient(135deg,var(--eng)_0%,color-mix(in_oklab,var(--eng)_55%,var(--eng-ink))_100%)] text-eng-foreground"
          : "border-border bg-card",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={cn(
            "text-[11px] font-medium uppercase tracking-wide",
            up ? "text-eng-foreground/80" : "text-muted-foreground",
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
            up
              ? "bg-eng-foreground/15 text-eng-foreground"
              : "bg-danger-soft text-danger",
          )}
        >
          <Icon className="size-2.5" />
          {delta}
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <p
        className={cn(
          "mt-1 text-[11px]",
          up ? "text-eng-foreground/70" : "text-muted-foreground",
        )}
      >
        {hint}
      </p>
    </div>
  );
}
