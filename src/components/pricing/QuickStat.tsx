import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
  delta?: string;
  deltaUp?: boolean;
  className?: string;
};

export function QuickStat({ icon: Icon, label, value, hint, delta, deltaUp = true, className }: Props) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-3", className)}>
      <div className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-brand-soft text-brand">
          <Icon className="size-3.5" />
        </span>
        <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="mt-3 rounded-lg bg-muted/60 px-3 py-2">
        <div className="text-lg font-semibold tracking-tight">{value}</div>
        <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground">
          {delta ? (
            <span
              className={cn(
                "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-medium",
                deltaUp ? "bg-success-soft text-success" : "bg-danger-soft text-danger",
              )}
            >
              {deltaUp ? <ArrowUpRight className="size-2.5" /> : <ArrowDownRight className="size-2.5" />}
              {delta}
            </span>
          ) : null}
          <span>{hint}</span>
        </div>
      </div>
    </div>
  );
}
