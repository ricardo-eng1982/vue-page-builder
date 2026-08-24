import { CHANNELS, FUNNEL } from "./data";

export function FunnelPanel() {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-eng">
      <h2 className="text-sm font-semibold tracking-tight">Funil de pedidos</h2>
      <p className="mt-0.5 text-xs text-muted-foreground">Do início ao pedido concluído</p>

      <div className="mt-5 space-y-2">
        {FUNNEL.map((f, i) => (
          <div
            key={f.stage}
            className="mx-auto flex items-center justify-between rounded-xl px-4 py-4 text-xs"
            style={{
              width: `${100 - i * 22}%`,
              background:
                i === 0
                  ? "var(--eng)"
                  : i === 1
                    ? "var(--eng-ink)"
                    : "color-mix(in oklab, var(--eng) 30%, white)",
              color: i === 2 ? "var(--eng-ink)" : "var(--eng-foreground)",
            }}
          >
            <span className="font-medium">{f.stage}</span>
            <span className="tabular-nums opacity-90">
              {f.count.toLocaleString("pt-BR")} · {f.pct}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <h3 className="text-xs font-semibold tracking-tight">Volume por tipo de consulta</h3>
        <ul className="mt-3 space-y-2.5">
          {CHANNELS.map((c) => (
            <li key={c.label} className="flex items-center gap-3 text-[11px]">
              <span className="w-28 shrink-0 text-muted-foreground">{c.label}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-eng-surface">
                <span
                  className="block h-full rounded-full bg-eng"
                  style={{ width: `${c.value}%` }}
                />
              </span>
              <span className="w-9 text-right tabular-nums text-muted-foreground">{c.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
