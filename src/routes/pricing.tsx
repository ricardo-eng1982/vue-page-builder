import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  MoreHorizontal,
  RefreshCw,
  Tag,
  TrendingDown,
  TriangleAlert,
  Zap,
} from "lucide-react";
import { PricingSidebar } from "@/components/pricing/PricingSidebar";
import { QuickStat } from "@/components/pricing/QuickStat";
import { PricingRules } from "@/components/pricing/PricingRules";
import { ProductPriceTable } from "@/components/pricing/ProductPriceTable";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing Engine — Confidency OS Admin" },
      {
        name: "description",
        content:
          "Painel de precificação dinâmica: regras de preço, margens, alertas de concorrência e tabela de produtos em um só workspace.",
      },
      { property: "og:title", content: "Pricing Engine — Confidency OS Admin" },
      {
        property: "og:description",
        content:
          "Crie, monitore e otimize estratégias de preço com regras, métricas de margem e insights por produto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-canvas p-4 sm:p-8">
      <div className="mx-auto flex max-w-[1200px] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
        <div className="hidden lg:block">
          <PricingSidebar />
        </div>

        <main className="min-w-0 flex-1 bg-muted/40 p-4">
          <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <Tag className="size-3" />
                Pricing Engine
              </div>
              <h1 className="mt-1 text-xl font-semibold tracking-tight">Pricing Engine</h1>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] text-muted-foreground">Auto-refreshing every 2s</span>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted">
                  <RefreshCw className="size-3.5" />
                  Sync
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted">
                  <BarChart3 className="size-3.5" />
                  Report
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90">
                  <Zap className="size-3.5" />
                  New Rule
                </button>
              </div>
            </div>
          </header>

          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <section className="rounded-2xl border border-border bg-card">
              <header className="flex items-center justify-between border-b border-border px-4 py-3">
                <h2 className="text-sm font-semibold">Quick Stats</h2>
                <MoreHorizontal className="size-4 text-muted-foreground" />
              </header>
              <div className="grid grid-cols-2 gap-3 p-4">
                <QuickStat icon={Zap} label="Active Rules" value="05" hint="this week" delta="+1" />
                <QuickStat icon={BarChart3} label="Avg Gross Margin" value="65%" hint="vs last mo" delta="+2.1%" />
                <QuickStat icon={TrendingDown} label="Net Price Impact" value="$3,270/wk" hint="from active rules" />
                <QuickStat icon={TriangleAlert} label="Competitor Alerts" value="01" hint="review needed" />
              </div>
            </section>

            <PricingRules />
          </div>

          <div className="mt-4">
            <ProductPriceTable />
          </div>
        </main>
      </div>
    </div>
  );
}
