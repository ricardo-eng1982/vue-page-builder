import { Link, useRouterState } from "@tanstack/react-router";
import { CreditCard, FileSearch, Home, LogOut, User } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { NbSurface } from "./nb";

const NAV = [
  { to: "/area", label: "Home", icon: Home, exact: true },
  { to: "/area/cards", label: "Cards Gerados", icon: CreditCard },
  { to: "/area/consultas", label: "Consultas", icon: FileSearch },
  { to: "/area/perfil", label: "Perfil", icon: User },
] as const;

export function UserShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <NbSurface>
      <div className="mx-auto max-w-[1240px] px-4 pb-28 pt-5 md:px-8 md:pb-10">
        {/* Header */}
        <header className="nb-border nb-shadow flex flex-wrap items-center gap-3 rounded-[4px] bg-nb-surface px-4 py-3">
          <Link to="/area" className="flex items-center gap-2">
            <span className="nb-border grid size-9 place-items-center rounded-[4px] bg-nb-green font-[family-name:var(--font-heavy)] text-[15px] text-white">
              E
            </span>
            <span className="font-[family-name:var(--font-heavy)] text-[17px] uppercase tracking-[-0.02em]">
              Engrenei
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex md:ml-6">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "nb-border rounded-[4px] px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.06em]",
                    active
                      ? "nb-shadow bg-nb-green text-white"
                      : "bg-nb-surface text-nb-ink hover:bg-nb-lime",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <span className="nb-border hidden rounded-[4px] bg-nb-lime px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] sm:block">
              12 créditos
            </span>
            <Link
              to="/entrar"
              aria-label="Sair"
              className="nb-border nb-press grid size-9 place-items-center rounded-[4px] bg-nb-ink text-white"
            >
              <LogOut className="size-4" />
            </Link>
          </div>
        </header>

        <main className="mt-6 space-y-6">{children}</main>
      </div>

      {/* Bottom nav mobile */}
      <nav className="fixed inset-x-3 bottom-3 z-20 md:hidden">
        <ul className="nb-border nb-shadow grid grid-cols-4 gap-1 rounded-[4px] bg-nb-surface p-1.5">
          {NAV.map((item) => {
            const active = item.exact
              ? pathname === item.to
              : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-[3px] px-1 py-2 text-[9px] font-bold uppercase tracking-[0.04em]",
                    active ? "bg-nb-green text-white" : "text-nb-ink/70",
                  )}
                >
                  <Icon className="size-4" />
                  {item.label.split(" ")[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </NbSurface>
  );
}
