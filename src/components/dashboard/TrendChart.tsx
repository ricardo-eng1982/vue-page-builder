import { SERIES } from "./data";

const W = 720;
const H = 220;
const PAD = 8;

export function TrendChart() {
  const max = Math.max(...SERIES.map((d) => d.value)) * 1.15;
  const step = (W - PAD * 2) / (SERIES.length - 1);
  const points = SERIES.map((d, i) => {
    const x = PAD + i * step;
    const y = H - PAD - (d.value / max) * (H - PAD * 2);
    return `${x},${y}`;
  });

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-eng">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold tracking-tight">Evolução no período</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Volume financeiro diário</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-eng-surface p-1 text-[11px]">
          {["Volume", "Iniciados", "Pagos", "Concluídos"].map((t, i) => (
            <button
              key={t}
              className={
                i === 0
                  ? "rounded-md bg-card px-2.5 py-1 font-medium shadow-sm"
                  : "rounded-md px-2.5 py-1 text-muted-foreground hover:text-foreground"
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-5 h-56 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="engFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--eng)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--eng)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={0}
            x2={W}
            y1={PAD + (i * (H - PAD * 2)) / 4}
            y2={PAD + (i * (H - PAD * 2)) / 4}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
        <polygon
          points={`${PAD},${H - PAD} ${points.join(" ")} ${W - PAD},${H - PAD}`}
          fill="url(#engFill)"
        />
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke="var(--eng)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        {SERIES.map((d) => (
          <span key={d.label}>{d.label}</span>
        ))}
      </div>
    </section>
  );
}
