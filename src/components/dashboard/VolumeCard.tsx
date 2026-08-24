import { ArrowUpRight } from "lucide-react";
import { SERIES } from "@/components/dashboard/data";

export function VolumeCard() {
  const max = Math.max(...SERIES.map((s) => s.value));
  const days = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <div className="flex items-start justify-between">
        <h2 className="font-display text-xl font-medium text-ink">Consultas</h2>
        <button className="grid size-9 place-items-center rounded-full border border-ink/12 text-ink/60 transition-colors hover:bg-ink hover:text-white">
          <ArrowUpRight className="size-4" />
        </button>
      </div>

      <div className="mt-5 flex items-end gap-3">
        <p className="font-display text-4xl font-light leading-none text-ink">
          1.284
        </p>
        <p className="pb-1 text-[12px] leading-tight text-ink/50">
          nesta
          <br />
          semana
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between gap-2">
        {SERIES.map((s, i) => {
          const h = Math.round((s.value / max) * 96) + 12;
          const peak = i === SERIES.length - 2;
          return (
            <div key={s.label} className="flex flex-1 flex-col items-center gap-2">
              {peak && (
                <span className="rounded-md bg-eng px-2 py-0.5 text-[10px] font-medium text-white">
                  {s.value * 10}
                </span>
              )}
              <div
                className={`w-[6px] rounded-full ${peak ? "bg-eng" : "bg-ink"}`}
                style={{ height: `${h}px` }}
              />
              <span
                className={`size-1.5 rounded-full ${peak ? "bg-eng" : "bg-ink/25"}`}
              />
              <span className="text-[11px] text-ink/45">{days[i]}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}
