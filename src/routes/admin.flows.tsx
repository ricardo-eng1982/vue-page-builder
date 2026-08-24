import { createFileRoute } from "@tanstack/react-router";
import { MoreVertical, Plus } from "lucide-react";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/flows")({
  component: FlowsPage,
});

type Meta = "PUBLISHED" | "DEPRECATED" | "Rascunho local";

const FLOWS: { name: string; author: string; ctx: string; ativo: boolean; meta: Meta }[] = [
  {
    name: "Consulta por Placa v4",
    author: "por Claude",
    ctx: "Usuário enviou uma placa de veículo (digitada ou lida de uma foto) sem deixar claro se quer co…",
    ativo: false,
    meta: "PUBLISHED",
  },
  {
    name: "Consulta Histórico Veicular v4",
    author: "por Claude",
    ctx: "Usuário quer consultar o histórico de um veículo (leilão, sinistro, débitos, restrição judicial).",
    ativo: true,
    meta: "PUBLISHED",
  },
  {
    name: "Consulta por Placa v3",
    author: "por Claude",
    ctx: "Usuário enviou uma placa de veículo (digitada ou lida de uma foto) sem deixar claro se quer co…",
    ativo: false,
    meta: "DEPRECATED",
  },
  {
    name: "Consulta Histórico Veicular v3",
    author: "por Claude",
    ctx: "Usuário quer consultar o histórico de um veículo (leilão, sinistro, débitos, restrição judicial).",
    ativo: false,
    meta: "DEPRECATED",
  },
  {
    name: "Consulta FIPE",
    author: "por Claude",
    ctx: "Usuário quer consultar o valor FIPE de um veículo mas ainda não informou a placa.",
    ativo: true,
    meta: "PUBLISHED",
  },
  {
    name: "Iniciar Consulta",
    author: "por silviopoli2020@gmail.com",
    ctx: "—",
    ativo: false,
    meta: "Rascunho local",
  },
  {
    name: "Iniciar Suporte",
    author: "por silviopoli2020@gmail.com",
    ctx: "—",
    ativo: false,
    meta: "Rascunho local",
  },
];

function FlowsPage() {
  return (
    <>
      <PageHeader
        title="Flows (WhatsApp)"
        subtitle="Crie e gerencie fluxos interativos enviados pelo Nei"
        action={
          <button className="flex items-center gap-2 rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90">
            <Plus className="size-4" />
            Criar Flow
          </button>
        }
      />

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-left">
          <thead>
            <tr className="text-[11px] uppercase tracking-wide text-ink/40">
              <th className="pb-3 font-normal">Nome</th>
              <th className="pb-3 font-normal">Contexto IA</th>
              <th className="pb-3 font-normal">Status</th>
              <th className="pb-3 font-normal">Meta</th>
              <th className="pb-3 font-normal text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {FLOWS.map((f) => (
              <tr key={f.name} className="border-t border-ink/8 align-middle">
                <td className="py-3.5 pr-6">
                  <p className="text-[13px] text-ink">{f.name}</p>
                  <p className="text-[11px] text-ink/45">{f.author}</p>
                </td>
                <td className="max-w-[380px] py-3.5 pr-6 text-[12px] text-ink/60">
                  <span className="line-clamp-1">{f.ctx}</span>
                </td>
                <td className="py-3.5 pr-6">
                  <Pill tone={f.ativo ? "ok" : "neutral"}>{f.ativo ? "Ativo" : "Inativo"}</Pill>
                </td>
                <td className="py-3.5 pr-6">
                  {f.meta === "Rascunho local" ? (
                    <span className="text-[12px] text-ink/40">Rascunho local</span>
                  ) : (
                    <Pill tone={f.meta === "PUBLISHED" ? "ok" : "warn"}>{f.meta}</Pill>
                  )}
                </td>
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
      </Card>
    </>
  );
}
