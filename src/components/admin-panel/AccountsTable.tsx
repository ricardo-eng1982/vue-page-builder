type Status = "Ativo" | "Trial" | "Suspenso";

const ROWS: { name: string; email: string; plan: string; usage: string; status: Status }[] = [
  { name: "Auto Prime", email: "ops@autoprime.com.br", plan: "Enterprise", usage: "48.210", status: "Ativo" },
  { name: "Garagem 55", email: "contato@garagem55.com", plan: "Pro", usage: "12.904", status: "Ativo" },
  { name: "Leilões MG", email: "adm@leiloesmg.com.br", plan: "Pro", usage: "9.331", status: "Trial" },
  { name: "Rota Veicular", email: "suporte@rotaveicular.com", plan: "Starter", usage: "3.128", status: "Ativo" },
  { name: "Check Motors", email: "financeiro@checkmotors.com", plan: "Starter", usage: "812", status: "Suspenso" },
];

const STATUS: Record<Status, string> = {
  Ativo: "bg-eng-soft text-ink",
  Trial: "bg-ink/8 text-ink/70",
  Suspenso: "bg-ink text-white",
};

export function AccountsTable() {
  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-medium text-ink">Contas</h2>
        <button className="rounded-full bg-ink px-4 py-2 text-[12px] text-white transition-opacity hover:opacity-90">
          Nova conta
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left">
          <thead>
            <tr className="text-[11px] uppercase tracking-wide text-ink/40">
              <th className="pb-3 font-normal">Cliente</th>
              <th className="pb-3 font-normal">Plano</th>
              <th className="pb-3 font-normal">Consultas</th>
              <th className="pb-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.email} className="border-t border-ink/8">
                <td className="py-3.5">
                  <p className="text-[13px] text-ink">{r.name}</p>
                  <p className="text-[11px] text-ink/45">{r.email}</p>
                </td>
                <td className="py-3.5 text-[13px] text-ink/70">{r.plan}</td>
                <td className="py-3.5 font-display text-[15px] font-light text-ink">{r.usage}</td>
                <td className="py-3.5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-medium ${STATUS[r.status]}`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
