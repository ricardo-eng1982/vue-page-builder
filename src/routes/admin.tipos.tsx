import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/tipos")({
  component: TiposPage,
});

const TIPOS = [
  { nome: "Consulta EN1", desc: "Consulta veicular básica.", preco: "R$ 29,90", ativa: false },
  {
    nome: "Consulta EN2",
    desc: "Consulta veicular com cobertura intermediária.",
    preco: "R$ 0,11",
    ativa: true,
  },
  {
    nome: "Consulta Premium",
    desc: "Consulta veicular com cobertura completa.",
    preco: "R$ 129,90",
    ativa: false,
  },
  { nome: "Consulta EN3", desc: "Consulta veicular com cobertura ampliada.", preco: "R$ 79,90", ativa: false },
];

function TiposPage() {
  return (
    <>
      <PageHeader
        title="Tipos de Consulta"
        subtitle="Gerenciar os tipos de consulta veicular comercializados — preço, situação e modelo de demonstração"
      />

      <Card>
        <input
          placeholder="Buscar por nome ou código…"
          className="w-full max-w-sm rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink outline-none placeholder:text-ink/40"
        />

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-ink/40">
                <th className="pb-3 font-normal">Nome</th>
                <th className="pb-3 font-normal">Preço</th>
                <th className="pb-3 font-normal">Situação</th>
                <th className="pb-3 font-normal text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {TIPOS.map((t) => (
                <tr key={t.nome} className="border-t border-ink/8">
                  <td className="py-4">
                    <p className="text-[13px] text-ink">{t.nome}</p>
                    <p className="text-[11px] text-ink/45">{t.desc}</p>
                  </td>
                  <td className="py-4 font-display text-[17px] font-light text-ink">{t.preco}</td>
                  <td className="py-4">
                    <Pill tone={t.ativa ? "ok" : "neutral"}>{t.ativa ? "Ativa" : "Inativa"}</Pill>
                  </td>
                  <td className="py-4 text-right text-[12px]">
                    <div className="flex justify-end gap-4">
                      {t.ativa ? <button className="text-ink/50 hover:text-ink">Ver card</button> : null}
                      <button className="text-ink/50 hover:text-ink">Ver PDF</button>
                      <button className="text-ink/50 hover:text-ink">Alterar preço</button>
                      <button className={t.ativa ? "text-destructive" : "text-eng"}>
                        {t.ativa ? "Inativar" : "Ativar"}
                      </button>
                    </div>
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
