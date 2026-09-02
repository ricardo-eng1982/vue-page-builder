/**
 * DsShell — layout "sidebar + conteúdo" do Engrenei DS.
 * Sidebar fixa em >=lg, drawer em mobile, topbar com busca e perfil.
 */
import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { Menu, Search, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DsAvatar, DsBadge, DsPage } from "./index";

export type DsNavItem = {
  to: LinkProps["to"];
  label: string;
  icon: LucideIcon;
  exact?: boolean;
  badge?: string;
};

export type DsNavGroup = { title: string; items: DsNavItem[] };

export function DsShell({
  groups,
  brand = "Engrenei",
  brandHint = "Plataforma automotiva",
  user,
  topRight,
  children,
}: {
  groups: DsNavGroup[];
  brand?: string;
  brandHint?: string;
  user?: { name: string; detail?: string };
  topRight?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const nav = (
    <div className="flex h-full flex-col gap-6 overflow-y-auto p-4">
      <div className="flex items-center gap-2.5 px-2 pt-1">
        <span className="grid size-9 place-items-center rounded-[12px] bg-ds-brand font-ds-display text-[15px] font-bold text-ds-surface">
          E
        </span>
        <span className="min-w-0">
          <span className="block truncate font-ds-display text-[15px] font-semibold tracking-[-0.01em]">{brand}</span>
          <span className="block truncate text-[11.5px] text-ds-muted">{brandHint}</span>
        </span>
      </div>

      <nav className="flex-1 space-y-6">
        {groups.map((g) => (
          <div key={g.title} className="space-y-1">
            <p className="px-3 pb-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-ds-muted/80">
              {g.title}
            </p>
            {g.items.map((item) => {
              const active = item.exact ? pathname === item.to : pathname.startsWith(String(item.to));
              const Icon = item.icon;
              return (
                <Link
                  key={String(item.to)}
                  to={item.to}
                  className={cn(
                    "ds-focus flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[13.5px] font-medium transition-colors",
                    active ? "bg-ds-ink text-ds-surface" : "text-ds-muted hover:bg-ds-brand-soft hover:text-ds-ink",
                  )}
                >
                  <Icon className={cn("size-[18px] shrink-0", active ? "text-ds-surface" : "text-ds-muted")} />
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <span className="ml-auto">
                      <DsBadge tone={active ? "dark" : "brand"}>{item.badge}</DsBadge>
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {user ? (
        <div className="flex items-center gap-3 rounded-[14px] border border-ds-line bg-ds-bg/60 p-3">
          <DsAvatar name={user.name} size={36} />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium">{user.name}</p>
            {user.detail ? <p className="truncate text-[11.5px] text-ds-muted">{user.detail}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <DsPage>
      <div className="flex min-h-screen">
        {/* Sidebar desktop */}
        <aside className="sticky top-0 hidden h-screen w-[260px] shrink-0 border-r border-ds-line bg-ds-surface/80 backdrop-blur lg:block">
          {nav}
        </aside>

        {/* Drawer mobile */}
        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              aria-label="Fechar menu"
              className="absolute inset-0 bg-ds-ink/40"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-[268px] max-w-[85vw] bg-ds-surface shadow-[var(--ds-shadow-lg)]">
              <button
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-4 grid size-8 place-items-center rounded-full text-ds-muted hover:bg-ds-bg"
              >
                <X className="size-4" />
              </button>
              {nav}
            </div>
          </div>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-ds-line bg-ds-surface/75 px-4 py-3 backdrop-blur md:px-6">
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="ds-focus grid size-9 place-items-center rounded-full border border-ds-line text-ds-muted lg:hidden"
            >
              <Menu className="size-4" />
            </button>

            <label className="relative hidden min-w-0 flex-1 max-w-[420px] sm:block">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ds-muted" />
              <input
                placeholder="Buscar placa, cliente, consulta…"
                className="ds-focus h-10 w-full rounded-full border border-ds-line bg-ds-bg/70 pl-10 pr-4 text-[13.5px] placeholder:text-ds-muted/80"
              />
            </label>

            <div className="ml-auto flex items-center gap-2">{topRight}</div>
          </header>

          <main className="flex-1 px-4 py-5 md:px-6 md:py-7">
            <div className="mx-auto w-full max-w-[1280px] space-y-5 md:space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </DsPage>
  );
}
