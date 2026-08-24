import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/fipe")({
  component: FipePage,
});

const MESES = [
  { m: "agosto de 2026", v: "R$ 29.773,00" },
  { m: "julho de 2026", v: "R$ 29.239,00" },
  { m: "junho de 2026", v: "R$ 30.260,00" },
  { m: "maio de 2026", v: "R$ 29.237,00" },
  { m: "abril de 2026", v: "R$ 28.681,00" },
  { m: "março de 2026", v: "R$ 29.722,00" },
];

const DETALHES = [
  ["Placa", "ISW8I17"],
  ["Chassi", "9BGRP69X0CG345337"],
  ["Marca", "CHEVROLET"],
  ["Modelo", "PRISMA"],
  ["Versão", "LT 1.4 8V FLEX 97CV 4x2 4P"],
  ["Ano fabricação", "2012"],
];

function FipePage() {
  return (
    <>
      <PageHeader
        title="Gestão FIPE"
        subtitle="Sincronização de marcas/meses e consulta de valor FIPE com card"
        action={
          <div className="flex gap-2">
            <button className="rounded-full bg-ink px-5 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
              Card Studio
            </button>
            <button className="rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90">
              Atualizar tabela vigente
            </button>
          </div>
        }
      />

      <Card>
        <h2 className="font-display text-xl font-medium text-ink">Consultar FIPE</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {["julho/2026", "Montadora", "Modelo", "Ano/Combustível"].map((s) => (
            <select
              key={s}
              className="rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink/70 outline-none"
            >
              <option>{s}</option>
            </select>
          ))}
          <button className="rounded-full bg-ink px-5 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
            Consultar
          </button>
        </div>
      </Card>

      <Card>
        <h2 className="font-display text-xl font-medium text-ink">Buscar por placa</h2>
        <p className="mt-1 text-[12px] text-ink/50">
          Busca a placa na nossa base. Se ainda não tivermos essa placa, consultamos a FIPE na hora
          automaticamente.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <input
            defaultValue="ISW8I17"
            className="w-48 rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink outline-none"
          />
          <button className="rounded-full bg-ink px-5 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
            Buscar
          </button>
          <span className="self-center">
            <Pill tone="ok">Essa placa já constava em nossa base</Pill>
          </span>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-ink/35">
              Meses de referência
            </p>
            <ul className="mt-3 space-y-2">
              {MESES.map((m, i) => (
                <li
                  key={m.m}
                  className={`rounded-2xl px-4 py-3 ${
                    i === 0 ? "bg-ink text-white" : "bg-white text-ink"
                  }`}
                >
                  <p className="text-[13px]">{m.m}</p>
                  <p className={`text-[12px] ${i === 0 ? "text-white/60" : "text-ink/45"}`}>{m.v}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <article className="max-w-[440px] overflow-hidden rounded-3xl bg-white ring-1 ring-eng/40">
              <div className="flex items-end justify-between px-5 py-4">
                <div>
                  <p className="font-display text-3xl font-light leading-none text-ink">PRISMA</p>
                  <p className="text-[12px] text-ink/50">CHEVROLET</p>
                </div>
                <p className="font-display text-2xl font-light text-ink">12/12</p>
              </div>
              <div className="bg-[linear-gradient(110deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] px-5 py-5 text-white">
                <div className="flex items-end justify-between">
                  <p className="text-[13px]">LT 1.4 8V FLEX</p>
                  <div className="text-right">
                    <p className="font-display text-3xl font-light leading-none">R$ 29.773</p>
                    <p className="text-[11px] text-white/70">agosto de 2026 · COD: 004333-8</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <p className="font-display text-xl font-medium tracking-wide text-ink">ISW8I17</p>
                <p className="text-[12px] text-ink/50">Origem: RS</p>
              </div>
            </article>

            <button className="mt-4 rounded-full bg-ink px-5 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
              Baixar card
            </button>

            <dl className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {DETALHES.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-ink/8 py-2">
                  <dt className="text-[12px] text-ink/45">{k}</dt>
                  <dd className="text-[12px] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Card>
    </>
  );
}
