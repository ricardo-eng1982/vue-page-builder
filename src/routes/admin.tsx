import { createFileRoute } from "@tanstack/react-router";
import { AdminTopNav } from "@/components/admin-panel/AdminTopNav";
import { AdminHeroMetrics } from "@/components/admin-panel/AdminHeroMetrics";
import { AdminAccountCard } from "@/components/admin-panel/AdminAccountCard";
import { UsageCard } from "@/components/admin-panel/UsageCard";
import { PlansCard } from "@/components/admin-panel/PlansCard";
import { IncidentsCard } from "@/components/admin-panel/IncidentsCard";
import { AccountsTable } from "@/components/admin-panel/AccountsTable";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin Engrenei — Contas, consumo e incidentes" },
      {
        name: "description",
        content:
          "Painel administrativo da Engrenei: contas de clientes, consumo de API, planos, faturamento e incidentes da plataforma.",
      },
      { property: "og:title", content: "Painel Admin Engrenei — Contas, consumo e incidentes" },
      {
        property: "og:description",
        content:
          "Gerencie contas, planos, consumo de API e incidentes da plataforma Engrenei em um painel elegante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(125deg,white_0%,var(--cream)_38%,color-mix(in_oklab,var(--eng)_18%,var(--cream))_78%,color-mix(in_oklab,var(--eng)_30%,white)_100%)] p-4 font-sans text-ink sm:p-6">
      <div className="mx-auto max-w-[1240px] space-y-8">
        <AdminTopNav />

        <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-ink">
          Controle da plataforma
        </h1>

        <AdminHeroMetrics />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="lg:row-span-2">
            <AdminAccountCard />
          </div>
          <UsageCard />
          <PlansCard />
          <IncidentsCard />
          <div className="lg:col-span-3">
            <AccountsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
