import { ORDERS } from "@/components/dashboard/data";

const HOURS = ["08:00", "09:00", "10:00", "11:00"];
const DAYS = [
  { d: "Seg", n: 22 },
  { d: "Ter", n: 23 },
  { d: "Qua", n: 24 },
  { d: "Qui", n: 25 },
  { d: "Sex", n: 26 },
  { d: "Sáb", n: 27 },
];

export function AgendaCard() {
  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-ink/6 px-3 py-1 text-[12px] text-ink/55">
          Julho
        </span>
        <h2 className="font-display text-xl font-medium text-ink">Agosto 2026</h2>
        <span className="rounded-full bg-ink/6 px-3 py-1 text-[12px] text-ink/55">
          Setembro
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[64px_repeat(6,minmax(0,1fr))] gap-x-2 text-center">
        <span />
        {DAYS.map((d) => (
          <div key={d.d} className="pb-3">
            <p className="text-[11px] text-ink/45">{d.d}</p>
            <p className="font-display text-lg font-light text-ink/70">{d.n}</p>
          </div>
        ))}

        {HOURS.map((h, row) => (
          <div key={h} className="col-span-7 grid grid-cols-subgrid border-t border-ink/8 py-3">
            <span className="text-left text-[11px] text-ink/40">{h}</span>
            {row === 1 && (
              <div className="col-span-3 flex items-center gap-3 rounded-2xl bg-ink px-4 py-2.5 text-left text-white">
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-medium">
                    Revisão de créditos de API
                  </p>
                  <p className="truncate text-[11px] text-white/50">
                    Equipe de produto
                  </p>
                </div>
              </div>
            )}
            {row === 3 && (
              <div className="col-span-4 col-start-4 flex items-center gap-3 rounded-2xl bg-eng-soft px-4 py-2.5 text-left">
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-medium text-ink">
                    {ORDERS[0].type} · {ORDERS[0].user}
                  </p>
                  <p className="truncate text-[11px] text-ink/50">
                    {ORDERS[0].value} · {ORDERS[0].time}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
