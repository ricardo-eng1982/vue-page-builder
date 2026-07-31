import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, MoreHorizontal, Package, Search, Zap } from "lucide-react";
import { products } from "./data";

export function ProductPriceTable() {
  return (
    <section className="rounded-2xl border border-border bg-card">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h2 className="text-sm font-semibold">Product Price Table</h2>
        <div className="flex items-center gap-2">
          <label className="flex w-48 items-center gap-2 rounded-lg border border-border px-2.5 py-1.5">
            <Search className="size-3.5 text-muted-foreground" />
            <input
              placeholder="Search products, SKUs..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
            />
          </label>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90">
            <Zap className="size-3.5" />
            Publish Changes
          </button>
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[840px] text-left">
          <thead>
            <tr className="text-[11px] text-muted-foreground">
              <th className="px-4 py-2.5 font-medium">Product</th>
              <th className="px-3 py-2.5 font-medium">Category</th>
              <th className="px-3 py-2.5 font-medium">Cost</th>
              <th className="px-3 py-2.5 font-medium">Price</th>
              <th className="px-3 py-2.5 font-medium">vs Suggested</th>
              <th className="px-3 py-2.5 font-medium">Margin</th>
              <th className="px-3 py-2.5 font-medium">7D Trend</th>
              <th className="px-4 py-2.5 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sku} className="border-t border-border/70">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Package className="size-3.5" />
                    </span>
                    <div>
                      <div className="text-xs font-medium">{p.name}</div>
                      <div className="text-[10px] text-muted-foreground">{p.sku}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-[11px] text-muted-foreground">{p.category}</td>
                <td className="px-3 py-3 text-xs">{p.cost}</td>
                <td className="px-3 py-3 text-xs font-medium">{p.price}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-muted-foreground">{p.suggested}</span>
                    {p.delta ? (
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                          p.deltaUp ? "bg-success-soft text-success" : "bg-danger-soft text-danger",
                        )}
                      >
                        {p.deltaUp ? <ArrowUpRight className="size-2.5" /> : <ArrowDownRight className="size-2.5" />}
                        {p.delta}
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-14 overflow-hidden rounded-full bg-muted">
                      <span
                        className={cn("block h-full rounded-full", p.margin >= 62 ? "bg-success" : "bg-amber")}
                        style={{ width: `${p.margin}%` }}
                      />
                    </span>
                    <span className="text-[11px] text-muted-foreground">{p.margin}%</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 text-[11px] font-medium",
                      p.trendUp ? "text-success" : "text-danger",
                    )}
                  >
                    {p.trendUp ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                    {p.trend}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-muted-foreground transition-colors hover:text-foreground">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
        <span className="text-[11px] text-muted-foreground">Showing 1–08 of 64 Catalog</span>
        <div className="flex items-center gap-1">
          {["‹", "1", "2", "3", "4", "…", "8", "›"].map((n, i) => (
            <button
              key={`${n}-${i}`}
              className={cn(
                "flex size-6 items-center justify-center rounded-md text-[11px] transition-colors",
                n === "1"
                  ? "bg-brand text-brand-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </footer>
    </section>
  );
}
