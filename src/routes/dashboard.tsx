import { createFileRoute } from "@tanstack/react-router";
import { DashTopNav } from "@/components/dashboard/DashTopNav";
import { HeroMetrics } from "@/components/dashboard/HeroMetrics";
import { VolumeCard } from "@/components/dashboard/VolumeCard";
import { ConversionCard } from "@/components/dashboard/ConversionCard";
import { QueueCard } from "@/components/dashboard/QueueCard";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { AgendaCard } from "@/components/dashboard/AgendaCard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Painel Engrenei — Consultas, pedidos e receita" },
      {
        name: "description",
        content:
          "Painel moderno da Engrenei: volume de consultas, conversão em pagamento, fila de processamento e agenda da operação.",
      },
      { property: "og:title", content: "Painel Engrenei — Consultas, pedidos e receita" },
      {
        property: "og:description",
        content:
          "Acompanhe consultas, conversão, faturamento e a fila de processamento da Engrenei em um painel elegante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(125deg,white_0%,var(--cream)_38%,color-mix(in_oklab,var(--eng)_18%,var(--cream))_78%,color-mix(in_oklab,var(--eng)_30%,white)_100%)] p-4 font-sans text-ink sm:p-6">
      <div className="mx-auto max-w-[1240px] space-y-8">
        <DashTopNav />

        <h1 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-ink">
          Bem-vindo de volta, Ricardo
        </h1>

        <HeroMetrics />

        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="lg:row-span-2">
            <ProfileCard />
          </div>
          <VolumeCard />
          <ConversionCard />
          <QueueCard />
          <div className="lg:col-span-3">
            <AgendaCard />
          </div>
        </div>
      </div>
    </div>
  );
}
