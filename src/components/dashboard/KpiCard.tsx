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
    <div className="rounded-2xl border border-border bg-card p-4 shadow-eng transition-shadow hover:shadow-lg">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
            up ? "bg-eng-soft text-eng-ink" : "bg-danger-soft text-danger",
          )}
        >
          <Icon className="size-2.5" />
          {delta}
        </span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{hint}</p>
    </div>
  );
}
