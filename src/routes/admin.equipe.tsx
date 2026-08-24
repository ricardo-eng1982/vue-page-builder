import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/equipe")({
  component: EquipePage,
});

const TEAM = [
  { nome: "Ricardo", email: "ican.atende@gmail.com", papel: "Supervisor" },
  { nome: "Ricardo Souza", email: "ricardo.engenheiro.sistemas@gmail.com", papel: "Admin" },
  { nome: "Silvio", email: "silviopoli2020@gmail.com", papel: "Admin" },
];

function EquipePage() {
  return (
    <>
      <PageHeader
        title="Equipe Admin"
        subtitle="Gerenciar acessos administrativos"
        action={
          <button className="rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90">
            Novo admin
          </button>
        }
      />

      <Card>
        <input
          placeholder="Buscar por nome ou e-mail…"
          className="w-full max-w-sm rounded-full bg-ink/5 px-4 py-3 text-[13px] text-ink outline-none placeholder:text-ink/40"
        />

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-wide text-ink/40">
                <th className="pb-3 font-normal">Nome</th>
                <th className="pb-3 font-normal">E-mail</th>
                <th className="pb-3 font-normal">Papel</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {TEAM.map((t) => (
                <tr key={t.email} className="border-t border-ink/8">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full bg-eng-soft text-[12px] text-ink">
                        {t.nome.slice(0, 2).toUpperCase()}
                      </span>
                      <p className="text-[13px] text-ink">{t.nome}</p>
                    </div>
                  </td>
                  <td className="py-4 text-[12px] text-ink/60">{t.email}</td>
                  <td className="py-4">
                    <Pill tone={t.papel === "Admin" ? "dark" : "neutral"}>{t.papel}</Pill>
                  </td>
                  <td className="py-4">
                    <Pill tone="ok">Ativo</Pill>
                  </td>
                  <td className="py-4 text-right text-[12px]">
                    <div className="flex justify-end gap-4">
                      <button className="text-ink/50 hover:text-ink">Editar</button>
                      <button className="text-destructive hover:opacity-80">Inativar</button>
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
