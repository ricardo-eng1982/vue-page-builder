import { createFileRoute } from "@tanstack/react-router";
import { MoreVertical } from "lucide-react";
import { Card, PageHeader } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/consultas")({
  component: ConsultasPage,
});

const ROWS = [
  { n: "EN2-324359019", placa: "ISW8I17", data: "24/08/2026, 15:41:02" },
  { n: "EN2-435388027", placa: "TST1A23", data: "24/08/2026, 12:36:19" },
  { n: "EN2-921526917", placa: "TST2B45", data: "24/08/2026, 11:56:56" },
  { n: "EN2-597574959", placa: "ISW8I17", data: "22/08/2026, 23:59:23" },
  { n: "EN2-630498125", placa: "JPF7809", data: "22/08/2026, 01:26:52" },
  { n: "EN2-142703127", placa: "JPF7809", data: "22/08/2026, 01:26:13" },
  { n: "EN2-107477429", placa: "JPF7809", data: "22/08/2026, 01:25:05" },
  { n: "EN2-659976421", placa: "ISW8I17", data: "22/08/2026, 01:22:31" },
  { n: "EN2-707089545", placa: "ISW8I17", data: "22/08/2026, 01:21:56" },
];

function ConsultasPage() {
  return (
    <>
      <PageHeader title="Consultas" subtitle="Consultas realizadas por todos os clientes" />

      <Card>
        <div className="flex flex-wrap gap-2">
          {["Número da consulta", "Placa", "Telefone do cliente", "Buscar nesta página…"].map((p) => (
            <input
              key={p}
              placeholder={p}
              className="min-w-[180px] flex-1 rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink outline-none placeholder:text-ink/40"
            />
          ))}
          <button className="rounded-full bg-ink px-6 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
            Buscar
          </button>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[780px] text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-ink/40">
                <th className="pb-3 font-normal">Número</th>
                <th className="pb-3 font-normal">Tipo</th>
                <th className="pb-3 font-normal">Placa</th>
                <th className="pb-3 font-normal">Cliente</th>
                <th className="pb-3 font-normal">Data</th>
                <th className="pb-3 font-normal text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.n} className="border-t border-ink/8">
                  <td className="py-3.5">
                    <span className="rounded-full bg-eng-soft px-3 py-1 font-mono text-[11px] text-ink">
                      {r.n}
                    </span>
                  </td>
                  <td className="py-3.5 text-[13px] text-ink/70">Histórico veicular</td>
                  <td className="py-3.5 font-display text-[15px] font-light text-ink">{r.placa}</td>
                  <td className="py-3.5 text-[12px] text-ink/55">+557581314376</td>
                  <td className="py-3.5 text-[12px] text-ink/45">{r.data}</td>
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
