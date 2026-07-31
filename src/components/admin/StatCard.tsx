import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export function StatCard({ label, value, delta, trend, icon: Icon }: StatCardProps) {
  const TrendIcon = trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <Icon className="size-3.5 text-muted-foreground" />
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <div className="mt-1.5 flex items-center gap-1 text-xs">
        <TrendIcon
          className={cn("size-3.5", trend === "up" ? "text-chart-2" : "text-destructive")}
        />
        <span className={cn(trend === "up" ? "text-chart-2" : "text-destructive")}>{delta}</span>
        <span className="text-muted-foreground">vs. mês anterior</span>
      </div>
    </div>
  );
}
