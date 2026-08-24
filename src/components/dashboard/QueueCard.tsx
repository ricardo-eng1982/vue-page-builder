import { Car, Check, FileSearch, Gavel, History, Receipt } from "lucide-react";

const ITEMS = [
  { icon: Car, title: "Consulta EN2 — placa RQK4E21", time: "Hoje, 08:30", done: true },
  { icon: FileSearch, title: "Consulta FIPE — lote 42", time: "Hoje, 10:30", done: true },
  { icon: History, title: "Histórico veicular — 18 itens", time: "Hoje, 13:00", done: false },
  { icon: Gavel, title: "Checagem de leilão", time: "Hoje, 14:45", done: false },
  { icon: Receipt, title: "Conciliação de pagamentos", time: "Hoje, 16:30", done: false },
];

export function QueueCard() {
  return (
    <article className="rounded-[28px] bg-ink p-6 text-white">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-medium">Fila de processamento</h2>
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
