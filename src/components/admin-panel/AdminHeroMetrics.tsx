import { Activity, CreditCard, Users } from "lucide-react";

const SEGMENTS = [
  { label: "Uptime API", value: "99,9%", tone: "ink" as const, w: "w-[92%]" },
  { label: "Cache hit", value: "64%", tone: "eng" as const, w: "w-[64%]" },
  { label: "Erros 5xx", value: "0,4%", tone: "plain" as const, w: "w-[14%]" },
];

const BIG = [
  { icon: Users, value: "8.412", label: "Contas ativas" },
  { icon: Activity, value: "312k", label: "Consultas / mês" },
  { icon: CreditCard, value: "R$ 84k", label: "MRR" },
];

export function AdminHeroMetrics() {
  return (
    <section className="flex flex-wrap items-end justify-between gap-10">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-8">
          {SEGMENTS.map((s) => (
            <div key={s.label} className="min-w-[110px]">
              <p className="text-[12px] text-ink/50">{s.label}</p>
              <div className="mt-2 h-9 w-full max-w-[150px] overflow-hidden rounded-full bg-white/70">
                <div
                  className={`flex h-full items-center rounded-full px-3 text-[12px] font-medium ${s.w} ${
                    s.tone === "ink"
                      ? "bg-ink text-white"
                      : s.tone === "eng"
                        ? "bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] text-white"
                        : "bg-ink/10 text-ink"
                  }`}
                >
                  {s.value}
                </div>
              </div>
            </div>
          ))}
          <div className="hidden flex-1 md:block">
            <p className="text-[12px] text-ink/50">Janela de manutenção</p>
            <div className="mt-2 h-9 rounded-full border border-ink/10 bg-[repeating-linear-gradient(115deg,transparent_0_7px,color-mix(in_oklab,var(--ink)_12%,transparent)_7px_8px)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-10">
        {BIG.map(({ icon: Icon, value, label }) => (
          <div key={label}>
            <p className="font-display text-5xl font-light leading-none tracking-tight text-ink">
              {value}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-[12px] text-ink/55">
              <Icon className="size-3.5" />
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
