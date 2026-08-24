import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/admin-panel/AdminShell";
import { AdminHeroMetrics } from "@/components/admin-panel/AdminHeroMetrics";
import { AdminAccountCard } from "@/components/admin-panel/AdminAccountCard";
import { UsageCard } from "@/components/admin-panel/UsageCard";
import { PlansCard } from "@/components/admin-panel/PlansCard";
import { IncidentsCard } from "@/components/admin-panel/IncidentsCard";
import { AccountsTable } from "@/components/admin-panel/AccountsTable";

export const Route = createFileRoute("/admin/")({
  component: AdminHome,
});

function AdminHome() {
  return (
    <>
      <PageHeader title="Controle da plataforma" subtitle="Visão geral da operação Engrenei" />
      <AdminHeroMetrics />
      <div className="grid gap-4 xl:grid-cols-4">
        <div className="xl:row-span-2">
          <AdminAccountCard />
        </div>
        <UsageCard />
        <PlansCard />
        <IncidentsCard />
        <div className="xl:col-span-3">
          <AccountsTable />
        </div>
      </div>
    </>
  );
}
