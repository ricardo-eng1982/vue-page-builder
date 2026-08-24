import { AlertTriangle, Check, KeyRound, ServerCog, Webhook } from "lucide-react";

const ITEMS = [
  { icon: ServerCog, title: "Deploy v2.14.3 — produção", time: "Hoje, 02:10", done: true },
  { icon: KeyRound, title: "Rotação de chaves sk_live", time: "Hoje, 03:12", done: true },
  { icon: Webhook, title: "Webhook /billing/sync (500)", time: "Hoje, 09:41", done: false },
  { icon: AlertTriangle, title: "Pico de latência — FIPE", time: "Hoje, 11:20", done: false },
  { icon: ServerCog, title: "Backup incremental", time: "Hoje, 23:00", done: false },
];

export function IncidentsCard() {
  return (
    <article className="rounded-[28px] bg-ink p-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-medium">Incidentes & jobs</h2>
        <span className="font-display text-lg font-light text-white/70">2/5</span>
      </div>

      <ul className="mt-5 space-y-3">
        {ITEMS.map(({ icon: Icon, title, time, done }) => (
          <li key={title} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10">
              <Icon className="size-4 text-white/80" />
            </span>
            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-[13px] ${done ? "text-white/45 line-through" : "text-white"}`}
              >
                {title}
              </p>
              <p className="text-[11px] text-white/40">{time}</p>
            </div>
            {done ? (
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-eng">
                <Check className="size-3 text-white" />
              </span>
            ) : (
              <span className="size-5 shrink-0 rounded-full bg-white/12" />
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
