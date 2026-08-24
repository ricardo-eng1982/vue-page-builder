import { createFileRoute } from "@tanstack/react-router";
import { RefreshCw } from "lucide-react";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/analytics")({
  component: AnalyticsPage,
});

const RANGES = ["Hoje", "7 dias", "30 dias", "Este mês", "Mês passado"];

const METRICS = [
  { label: "Pedidos iniciados", value: "9", highlight: true },
  { label: "Pedidos pagos", value: "3" },
  { label: "Pedidos concluídos", value: "3" },
  { label: "Conversão em pagamento", value: "33,3%", highlight: true },
  { label: "Taxa de conclusão", value: "100,0%" },
  { label: "Volume financeiro", value: "R$ 0,15", highlight: true },
  { label: "Ticket médio", value: "R$ 0,05" },
  { label: "Pedidos expirados", value: "6" },
  { label: "Usuários ativos", value: "4" },
  { label: "Usuários novos", value: "4" },
];

const SERIES = [8, 22, 15, 34, 28, 46, 41, 58, 52, 71, 66, 92];

export function AnalyticsPage() {
  const max = Math.max(...SERIES);
  const pts = SERIES.map((v, i) => `${(i / (SERIES.length - 1)) * 100},${100 - (v / max) * 92}`).join(" ");

  return (
    <>
      <PageHeader
        title="Analytics"
        subtitle="Visão geral financeira, de pedidos e de usuários"
        action={
          <button className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2.5 text-[13px] text-ink/70 backdrop-blur transition-colors hover:text-ink">
            <RefreshCw className="size-4" />
            Atualizado às 20:26
          </button>
        }
      />

      <Card className="flex flex-wrap items-center gap-2">
        {RANGES.map((r, i) => (
          <button
            key={r}
            className={`rounded-full px-4 py-2 text-[13px] transition-colors ${
              i === 2 ? "bg-ink text-white" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {r}
          </button>
        ))}
        <span className="ml-auto text-[12px] text-ink/45">
          07/26/2026 &middot; até &middot; 08/24/2026
        </span>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {METRICS.map((m) => (
          <article
            key={m.label}
            className={
              m.highlight
                ? "rounded-[24px] bg-[linear-gradient(150deg,color-mix(in_oklab,var(--eng)_30%,white),color-mix(in_oklab,var(--eng)_72%,var(--ink)))] p-5 text-white"
                : "rounded-[24px] bg-white/80 p-5 backdrop-blur"
            }
          >
            <p className={`text-[12px] ${m.highlight ? "text-white/70" : "text-ink/50"}`}>
              {m.label}
            </p>
            <p
              className={`mt-3 font-display text-3xl font-light leading-none ${
                m.highlight ? "text-white" : "text-ink"
              }`}
            >
              {m.value}
            </p>
            <p className={`mt-2 text-[11px] ${m.highlight ? "text-white/55" : "text-ink/40"}`}>
              vs. período anterior
            </p>
          </article>
        ))}
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-medium text-ink">Evolução no período</h2>
          <div className="flex flex-wrap gap-1 rounded-full bg-ink/5 p-1">
            {["Volume", "Iniciados", "Pagos", "Concluídos", "Usuários"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-3.5 py-1.5 text-[12px] ${
                  i === 0 ? "bg-white text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 h-56 w-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="an-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--eng)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--eng)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,100 ${pts} 100,100`} fill="url(#an-fill)" />
            <polyline
              points={pts}
              fill="none"
              stroke="var(--eng)"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-ink/40">
          <span>22/08</span>
          <span>24/08</span>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-xl font-medium text-ink">Funil de pedidos</h2>
          <ul className="mt-5 space-y-4">
            {[
              { l: "Iniciados", v: 9, w: 100 },
              { l: "Pagos", v: 3, w: 34 },
              { l: "Concluídos", v: 3, w: 34 },
              { l: "Expirados", v: 6, w: 66 },
            ].map((s, i) => (
              <li key={s.l}>
                <div className="flex items-baseline justify-between">
                  <p className="text-[13px] text-ink/70">{s.l}</p>
                  <p className="font-display text-lg font-light text-ink">{s.v}</p>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-ink/8">
                  <div
                    className={
                      i === 1
                        ? "h-full rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))]"
                        : "h-full rounded-full bg-ink/70"
                    }
                    style={{ width: `${s.w}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-ink text-white">
          <h2 className="font-display text-xl font-medium">Volume por tipo de consulta</h2>
          <ul className="mt-5 space-y-3">
            {[
              { l: "Histórico veicular", v: "68%" },
              { l: "Consulta por placa", v: "21%" },
              { l: "FIPE", v: "9%" },
              { l: "Outros", v: "2%" },
            ].map((t) => (
              <li key={t.l} className="flex items-center justify-between border-t border-white/10 pt-3 first:border-0 first:pt-0">
                <span className="text-[13px] text-white/80">{t.l}</span>
                <span className="font-display text-lg font-light">{t.v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Pill tone="ok">Período: 30 dias</Pill>
          </div>
        </Card>
      </div>
    </>
  );
}
