import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { FunnelPanel } from "@/components/dashboard/FunnelPanel";
import { OrdersTable } from "@/components/dashboard/OrdersTable";
import { KPIS } from "@/components/dashboard/data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Analytics — Painel Admin Engrenei" },
      {
        name: "description",
        content:
          "Dashboard Engrenei com visão financeira, funil de pedidos, volume por tipo de consulta e pedidos recentes.",
      },
      { property: "og:title", content: "Analytics — Painel Admin Engrenei" },
      {
        property: "og:description",
        content:
          "Visão geral financeira, de pedidos e de usuários da plataforma Engrenei em um painel moderno.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

const RANGES = ["Hoje", "7 dias", "30 dias", "Este mês", "Mês passado"];

function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full text-foreground [background:linear-gradient(135deg,var(--eng-surface)_0%,color-mix(in_oklab,var(--eng-soft)_70%,white)_55%,color-mix(in_oklab,var(--eng)_12%,white)_100%)]">
      <DashboardSidebar />

      <main className="min-w-0 flex-1">
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border bg-card px-6 py-5">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Analytics</h1>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Visão geral financeira, de pedidos e de usuários
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span>Atualizado às 18:00</span>
            <Button variant="soft" size="sm">
              <RefreshCw className="size-3.5" />
              Atualizar
            </Button>
          </div>
        </header>

        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-eng">
            {RANGES.map((r, i) => (
              <button
                key={r}
                className={
                  i === 1
                    ? "rounded-lg bg-eng-soft px-3 py-1.5 text-xs font-medium text-eng-ink"
                    : "rounded-lg px-3 py-1.5 text-xs text-muted-foreground hover:bg-eng-surface hover:text-foreground"
                }
              >
                {r}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground">
              <CalendarDays className="size-3.5" />
              18/08/2026 — 24/08/2026
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {KPIS.map((k) => (
              <KpiCard key={k.label} {...k} />
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
            <TrendChart />
            <FunnelPanel />
          </div>

          <OrdersTable />
        </div>
      </main>
    </div>
  );
}
