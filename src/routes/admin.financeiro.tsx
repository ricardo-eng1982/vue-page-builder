import { createFileRoute } from "@tanstack/react-router";
import { MoreVertical } from "lucide-react";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/financeiro")({
  component: FinanceiroPage,
});

const PEDIDOS = [
  { id: "PED-733748379", cli: "7581314376", placa: "ISW8I17", v: "R$ 0,05", st: "Concluído", data: "24/08/2026, 15:38:37" },
  { id: "PED-382117463", cli: "7581314376", placa: "TST2B45", v: "R$ 0,05", st: "Concluído", data: "24/08/2026, 11:23:12" },
  { id: "PED-607386853", cli: "7581314376", placa: "TST1A23", v: "R$ 0,05", st: "Concluído", data: "24/08/2026, 10:54:10" },
  { id: "PED-708558690", cli: "7581314376", placa: "JPF7809", v: "R$ 0,11", st: "Expirado", data: "24/08/2026, 18:41:41" },
  { id: "PED-101620517", cli: "7581314376", placa: "ISW8I17", v: "R$ 0,05", st: "Expirado", data: "24/08/2026, 14:03:03" },
  { id: "PED-980246492", cli: "11999999999", placa: "ABC1D23", v: "R$ 0,05", st: "Expirado", data: "22/08/2026, 00:12:07" },
];

const RESUMO = [
  { l: "Recebido no mês", v: "R$ 0,15", hi: true },
  { l: "Pedidos pagos", v: "3" },
  { l: "Pedidos expirados", v: "3" },
  { l: "Ticket médio", v: "R$ 0,05" },
];

function FinanceiroPage() {
  return (
    <>
      <PageHeader
        title="Financeiro"
        subtitle="Pedidos e cobranças Pix (Banco Inter), independente de canal"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {RESUMO.map((r) => (
          <article
            key={r.l}
            className={
              r.hi
                ? "rounded-[24px] bg-[linear-gradient(150deg,color-mix(in_oklab,var(--eng)_30%,white),color-mix(in_oklab,var(--eng)_72%,var(--ink)))] p-5 text-white"
                : "rounded-[24px] bg-white/80 p-5 backdrop-blur"
            }
          >
            <p className={`text-[12px] ${r.hi ? "text-white/70" : "text-ink/50"}`}>{r.l}</p>
            <p
              className={`mt-3 font-display text-3xl font-light leading-none ${r.hi ? "text-white" : "text-ink"}`}
            >
              {r.v}
            </p>
          </article>
        ))}
      </div>

      <Card>
        <div className="flex flex-wrap gap-2">
          <input
            placeholder="Buscar por pedido, telefone, placa…"
            className="min-w-[240px] flex-1 rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink outline-none placeholder:text-ink/40"
          />
          <select className="rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink/70 outline-none">
            <option>Todos os status</option>
            <option>Concluído</option>
            <option>Expirado</option>
          </select>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-ink/40">
                <th className="pb-3 font-normal">Pedido</th>
                <th className="pb-3 font-normal">Cliente</th>
                <th className="pb-3 font-normal">Canal</th>
                <th className="pb-3 font-normal">Placa</th>
                <th className="pb-3 font-normal">Consulta</th>
                <th className="pb-3 font-normal">Valor</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal">Criado em</th>
                <th className="pb-3 font-normal text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {PEDIDOS.map((p) => (
                <tr key={p.id} className="border-t border-ink/8">
                  <td className="py-3.5 font-mono text-[12px] text-ink">{p.id}</td>
                  <td className="py-3.5 text-[12px] text-ink/60">{p.cli}</td>
                  <td className="py-3.5 text-[13px] text-ink/70">Whatsapp</td>
                  <td className="py-3.5 text-[13px] text-ink">{p.placa}</td>
                  <td className="py-3.5 text-[13px] text-ink/70">Consulta EN2</td>
                  <td className="py-3.5 font-display text-[15px] font-light text-ink">{p.v}</td>
                  <td className="py-3.5">
                    <Pill tone={p.st === "Concluído" ? "ok" : "neutral"}>{p.st}</Pill>
                  </td>
                  <td className="py-3.5 text-[12px] text-ink/45">{p.data}</td>
                  <td className="py-3.5 text-right">
                    <button
                      aria-label="Ações"
                      className="grid size-8 place-items-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
                    >
                      <MoreVertical className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
