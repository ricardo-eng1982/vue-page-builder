const BARS = [42, 58, 35, 71, 64, 88, 52, 76, 61, 94, 70, 83];

export function UsageCard() {
  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-xl font-medium text-ink">Consumo de API</h2>
        <span className="text-[12px] text-ink/45">12 meses</span>
      </div>

      <p className="mt-4 font-display text-4xl font-light leading-none text-ink">312.480</p>
      <p className="mt-1 text-[12px] text-ink/50">requisições no mês corrente</p>

      <div className="mt-6 flex h-28 items-end gap-1.5">
        {BARS.map((h, i) => (
          <div
            key={i}
            className={
              i === BARS.length - 1
                ? "flex-1 rounded-full bg-[linear-gradient(180deg,var(--eng),color-mix(in_oklab,var(--eng)_50%,var(--ink)))]"
                : "flex-1 rounded-full bg-ink/12"
            }
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </article>
  );
}
