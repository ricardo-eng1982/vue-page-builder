import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { rules } from "./data";

const scopeStyles: Record<string, string> = {
  Storewide: "bg-brand-soft text-brand",
  Customer: "bg-muted text-muted-foreground",
  Collection: "bg-amber-soft text-warning-foreground",
  Product: "bg-success-soft text-success",
};

const dotStyles = ["bg-brand", "bg-muted-foreground/50", "bg-amber", "bg-danger"];

export function PricingRules() {
  return (
    <section className="rounded-2xl border border-border bg-card">
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold">Pricing Rules</h2>
        <label className="flex w-52 items-center gap-2 rounded-lg border border-border px-2.5 py-1.5">
          <Search className="size-3.5 text-muted-foreground" />
          <input
            placeholder="Search..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
          />
        </label>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] text-muted-foreground">
              <th className="px-4 py-2.5 font-medium">Name / Target</th>
              <th className="px-3 py-2.5 font-medium">Scope</th>
              <th className="px-2 py-2.5 font-medium">Value</th>
              <th className="hidden px-3 py-2.5 font-medium 2xl:table-cell">Schedule</th>
              <th className="px-3 py-2.5 font-medium">Impact/wk</th>
              <th className="px-4 py-2.5 font-medium">Active</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((rule, i) => (
              <tr key={rule.name} className="border-t border-border/70">
                <td className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", dotStyles[i % 4])} />
                    <div>
                      <div className="text-xs font-medium">{rule.name}</div>
                      <div className="text-[10px] text-muted-foreground">{rule.target}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className={cn("rounded-md px-2 py-1 text-[10px] font-medium", scopeStyles[rule.scope])}>
                    {rule.scope}
                  </span>
                </td>
                <td className="px-2 py-3 text-xs">{rule.value}</td>
                <td className="hidden px-3 py-3 text-[11px] text-muted-foreground 2xl:table-cell">{rule.schedule}</td>
                <td className="px-3 py-3">
                  <div className="text-xs font-medium">{rule.impact}</div>
                  <div className="text-[10px] text-muted-foreground">per week</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "flex h-4 w-8 items-center rounded-full p-0.5 transition-colors",
                      rule.active ? "bg-brand" : "bg-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "size-3 rounded-full bg-background shadow-sm transition-transform",
                        rule.active && "translate-x-4",
                      )}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
