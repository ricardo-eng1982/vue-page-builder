const PLANS = [
  { name: "Starter", accounts: 4820, share: 46, price: "R$ 49" },
  { name: "Pro", accounts: 2610, share: 31, price: "R$ 149" },
  { name: "Enterprise", accounts: 982, share: 23, price: "sob consulta" },
];

export function PlansCard() {
  return (
    <article className="rounded-[28px] bg-white/80 p-6 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-medium text-ink">Planos</h2>
        <span className="text-[12px] text-ink/45">distribuição</span>
      </div>

      <ul className="mt-5 space-y-4">
        {PLANS.map((p, i) => (
          <li key={p.name}>
            <div className="flex items-baseline justify-between">
              <p className="text-[13px] text-ink">{p.name}</p>
              <p className="font-display text-lg font-light text-ink">
                {p.accounts.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-ink/8">
              <div
                className={
                  i === 1
                    ? "h-full rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))]"
                    : "h-full rounded-full bg-ink/70"
                }
                style={{ width: `${p.share}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-ink/45">{p.price} / mês</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
