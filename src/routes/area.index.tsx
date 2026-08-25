import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Car, Sparkles, Zap } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbStat, NbTag } from "@/components/user-area/nb";

export const Route = createFileRoute("/area/")({
  head: () => ({
    meta: [
      { title: "Home — Área do Usuário Engrenei" },
      {
        name: "description",
        content:
          "Resumo da sua conta Engrenei: créditos, cards gerados, consultas recentes e ações rápidas.",
      },
      { property: "og:title", content: "Home — Área do Usuário Engrenei" },
      {
        property: "og:description",
        content: "Créditos, cards gerados e consultas recentes da sua conta Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const ATIVIDADE = [
  { titulo: "Consulta completa · BRA2E19", tag: "Concluída", tom: "green" as const, quando: "hoje, 14:02" },
  { titulo: "Card gerado · Onix 1.0 Turbo", tag: "Novo", tom: "orange" as const, quando: "hoje, 11:40" },
  { titulo: "Consulta FIPE · Corolla XEi", tag: "Concluída", tom: "green" as const, quando: "ontem, 19:15" },
  { titulo: "Card gerado · HB20 Comfort", tag: "Novo", tom: "orange" as const, quando: "ontem, 09:28" },
];

function HomePage() {
  return (
    <>
      <NbBox tone="lime" shadow="lg" className="flex flex-wrap items-end justify-between gap-6 p-6 md:p-8">
        <div>
          <NbTag tone="ink">
            <Zap className="size-3" /> Plano Pro
          </NbTag>
          <NbHeading className="mt-3">Bem-vindo, Ricardo</NbHeading>
          <p className="mt-2 max-w-md text-[13px] font-medium text-nb-ink/70">
            Você tem 12 créditos disponíveis. Gere cards de anúncio e consulte veículos em segundos.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/area/consultas">
            <NbButton tone="green">
              <span className="inline-flex items-center gap-2">
                <Car className="size-4" /> Nova consulta
              </span>
            </NbButton>
          </Link>
          <Link to="/area/cards">
            <NbButton tone="white">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4" /> Gerar card
              </span>
            </NbButton>
          </Link>
        </div>
      </NbBox>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <NbStat label="Créditos" value="12" hint="renovam em 8 dias" tone="green" />
        <NbStat label="Cards gerados" value="34" hint="+6 nesta semana" />
        <NbStat label="Consultas" value="128" hint="+12 nesta semana" tone="lime" />
        <NbStat label="Economia estimada" value="R$ 1.240" hint="vs. consultas avulsas" tone="ink" />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <NbBox>
          <div className="mb-4 flex items-center justify-between gap-3">
            <NbHeading level={2}>Atividade recente</NbHeading>
            <NbTag>últimos 7 dias</NbTag>
          </div>
          <ul className="space-y-3">
            {ATIVIDADE.map((a) => (
              <NbBox as="li" key={a.titulo} tone="bg" shadow="none" className="flex flex-wrap items-center gap-3 p-3.5">
                <NbTag tone={a.tom}>{a.tag}</NbTag>
                <p className="min-w-0 flex-1 truncate font-[family-name:var(--font-brutal)] text-[13px] font-semibold">
                  {a.titulo}
                </p>
                <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-nb-ink/50">
                  {a.quando}
                </span>
              </NbBox>
            ))}
          </ul>
        </NbBox>

        <div className="space-y-5">
          <NbBox tone="ink">
            <NbHeading level={2}>Uso do mês</NbHeading>
            <div className="mt-5 space-y-4">
              {[
                { l: "Consultas", v: 72 },
                { l: "Cards", v: 48 },
                { l: "FIPE", v: 31 },
              ].map((b) => (
                <div key={b.l}>
                  <div className="flex items-baseline justify-between text-[12px] font-bold uppercase tracking-[0.08em]">
                    <span className="text-white/70">{b.l}</span>
                    <span>{b.v}%</span>
                  </div>
                  <div className="mt-1.5 h-4 border-2 border-white/80 bg-white/10">
                    <div className="h-full bg-nb-green" style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </NbBox>

          <NbBox tone="orange" className="flex items-center justify-between gap-4">
            <div>
              <NbHeading level={3}>Comprar créditos</NbHeading>
              <p className="mt-1 text-[12px] font-semibold text-nb-ink/70">Pacotes a partir de R$ 29</p>
            </div>
            <span className="nb-border grid size-11 shrink-0 place-items-center rounded-[4px] bg-nb-surface">
              <ArrowUpRight className="size-5" />
            </span>
          </NbBox>
        </div>
      </div>
    </>
  );
}
