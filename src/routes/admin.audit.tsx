import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/audit")({
  component: AuditPage,
});

const LOGS = [
  { t: "24/08, 20:26", who: "ricardo@engrenei.com", act: "flow.published", obj: "Consulta por Placa v4" },
  { t: "24/08, 18:41", who: "silvio@engrenei.com", act: "tipo.preco_alterado", obj: "Consulta EN2 → R$ 0,11" },
  { t: "24/08, 15:12", who: "sistema", act: "fipe.tabela_atualizada", obj: "agosto de 2026" },
  { t: "23/08, 22:04", who: "ricardo@engrenei.com", act: "admin.criado", obj: "Silvio (Admin)" },
  { t: "23/08, 09:30", who: "sistema", act: "apikey.rotated", obj: "sk_live_••••7f2a" },
];

function AuditPage() {
  return (
    <>
      <PageHeader title="Audit Log" subtitle="Histórico de ações administrativas" />

      <Card className="bg-ink text-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left font-mono text-[12px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wide text-white/40">
                <th className="pb-3 font-normal">Quando</th>
                <th className="pb-3 font-normal">Quem</th>
                <th className="pb-3 font-normal">Ação</th>
                <th className="pb-3 font-normal">Objeto</th>
              </tr>
            </thead>
            <tbody>
              {LOGS.map((l) => (
                <tr key={l.t + l.act} className="border-t border-white/10">
                  <td className="py-3 text-white/45">{l.t}</td>
                  <td className="py-3 text-white/70">{l.who}</td>
                  <td className="py-3 text-eng">{l.act}</td>
                  <td className="py-3 text-white/85">{l.obj}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
