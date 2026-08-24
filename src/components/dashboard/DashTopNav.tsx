import { Bell, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  "Dashboard",
  "Consultas",
  "Pedidos",
  "Clientes",
  "Financeiro",
  "Integrações",
  "Relatórios",
];

export function DashTopNav() {
  return (
    <header className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5">
        <span className="size-2 rounded-full bg-eng" />
        <span className="font-display text-lg font-medium tracking-tight text-ink">
          Engrenei
        </span>
      </div>

      <nav className="hidden items-center gap-1 rounded-full bg-white/60 p-1 backdrop-blur lg:flex">
        {TABS.map((t, i) => (
          <button
            key={t}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] transition-colors",
              i === 0
                ? "bg-ink text-white"
                : "text-ink/60 hover:bg-white hover:text-ink",
            )}
          >
            {t}
          </button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[13px] text-ink/70 backdrop-blur transition-colors hover:text-ink">
          <Settings className="size-4" />
          Ajustes
        </button>
        <button className="grid size-10 place-items-center rounded-full bg-white/70 text-ink/70 backdrop-blur transition-colors hover:text-ink">
          <Bell className="size-4" />
        </button>
        <button className="grid size-10 place-items-center rounded-full bg-ink text-white">
          <User className="size-4" />
        </button>
      </div>
    </header>
  );
}
