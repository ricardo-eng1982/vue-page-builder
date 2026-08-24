import { Pause, Play, RotateCcw } from "lucide-react";

export function ConversionCard() {
  const pct = 37.5;
  const r = 62;
  const c = 2 * Math.PI * r;

  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <h2 className="font-display text-xl font-medium text-ink">Conversão</h2>

      <div className="mt-4 grid place-items-center">
        <div className="relative grid size-[168px] place-items-center">
          <svg viewBox="0 0 160 160" className="absolute inset-0 -rotate-90">
            <circle
              cx="80"
              cy="80"
              r={r}
              fill="none"
              stroke="color-mix(in oklab, var(--ink) 10%, transparent)"
              strokeWidth="10"
            />
            <circle
              cx="80"
              cy="80"
              r={r}
              fill="none"
              stroke="var(--eng)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(pct / 100) * c} ${c}`}
            />
          </svg>
          <div className="text-center">
            <p className="font-display text-3xl font-light text-ink">
              {pct.toString().replace(".", ",")}%
            </p>
            <p className="text-[11px] text-ink/50">pedidos pagos</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="grid size-10 place-items-center rounded-full border border-ink/12 text-ink/70 transition-colors hover:bg-ink hover:text-white">
            <Play className="size-4" />
          </button>
          <button className="grid size-10 place-items-center rounded-full border border-ink/12 text-ink/70 transition-colors hover:bg-ink hover:text-white">
            <Pause className="size-4" />
          </button>
        </div>
        <button className="grid size-10 place-items-center rounded-full bg-ink text-white">
          <RotateCcw className="size-4" />
        </button>
      </div>
    </article>
  );
}
