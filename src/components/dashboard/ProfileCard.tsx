import { ChevronDown } from "lucide-react";

const ROWS = ["Planos e assinaturas", "Dispositivos conectados", "Créditos de consulta", "Permissões da equipe"];

export function ProfileCard() {
  return (
    <div className="space-y-4">
      <article className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,color-mix(in_oklab,var(--eng)_28%,white),color-mix(in_oklab,var(--eng)_70%,var(--ink))_100%)] p-6 text-white">
        <div className="flex h-[190px] flex-col justify-end">
          <p className="font-display text-2xl font-light leading-tight">
            Ricardo Souza
          </p>
          <p className="text-[12px] text-white/70">Administrador · Engrenei</p>
        </div>
        <span className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[12px] font-medium backdrop-blur">
          R$ 48.320
        </span>
      </article>

      <article className="rounded-[28px] bg-white/80 p-2 backdrop-blur">
        {ROWS.map((r) => (
          <button
            key={r}
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[13px] text-ink/80 transition-colors hover:bg-ink/5"
          >
            {r}
            <ChevronDown className="size-4 text-ink/35" />
          </button>
        ))}
      </article>
    </div>
  );
}
