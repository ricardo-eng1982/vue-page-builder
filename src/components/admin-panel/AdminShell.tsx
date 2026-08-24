import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  ClipboardCheck,
  CreditCard,
  Image as ImageIcon,
  LayoutGrid,
  LogOut,
  MessageSquare,
  Search,
  ShieldCheck,
  SquarePen,
  Tag,
  Tags,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { label: string; to: string; icon: LucideIcon };

const PRINCIPAL: Item[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutGrid },
  { label: "Analytics", to: "/admin/analytics", icon: Activity },
  { label: "Usuários", to: "/admin/usuarios", icon: Users },
  { label: "Ativos Visuais", to: "/admin/ativos", icon: ImageIcon },
  { label: "Flows", to: "/admin/flows", icon: MessageSquare },
  { label: "Gestão FIPE", to: "/admin/fipe", icon: Tag },
  { label: "Consultas", to: "/admin/consultas", icon: Search },
  { label: "Tipos de Consulta", to: "/admin/tipos", icon: Tags },
  { label: "Financeiro", to: "/admin/financeiro", icon: CreditCard },
  { label: "Development", to: "/admin/development", icon: SquarePen },
];

const SISTEMA: Item[] = [
  { label: "Equipe Admin", to: "/admin/equipe", icon: ShieldCheck },
  { label: "Audit Log", to: "/admin/audit", icon: ClipboardCheck },
];

function NavGroup({ title, items, path }: { title: string; items: Item[]; path: string }) {
  return (
    <div>
      <p className="px-4 pb-2 text-[10px] uppercase tracking-[0.18em] text-ink/35">{title}</p>
      <ul className="space-y-1">
        {items.map(({ label, to, icon: Icon }) => {
          const active = to === "/admin" ? path === "/admin" : path.startsWith(to);
          return (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[13px] transition-colors",
                  active
                    ? "bg-ink text-white"
                    : "text-ink/65 hover:bg-white hover:text-ink",
                )}
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-[linear-gradient(125deg,white_0%,var(--cream)_38%,color-mix(in_oklab,var(--eng)_18%,var(--cream))_78%,color-mix(in_oklab,var(--eng)_30%,white)_100%)] p-4 font-sans text-ink sm:p-6">
      <div className="mx-auto flex max-w-[1440px] gap-6">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-[248px] shrink-0 flex-col rounded-[28px] bg-white/70 p-3 backdrop-blur lg:flex">
          <div className="flex items-center gap-3 px-3 py-4">
            <span className="grid size-9 place-items-center rounded-full bg-[linear-gradient(140deg,var(--eng),color-mix(in_oklab,var(--eng)_50%,var(--ink)))] font-display text-[15px] text-white">
              e
            </span>
            <div className="leading-tight">
              <p className="font-display text-[15px] font-medium tracking-tight text-ink">
                ENGRENEI
              </p>
              <p className="text-[11px] text-ink/45">Painel Admin</p>
            </div>
          </div>

          <nav className="mt-2 flex-1 space-y-6 overflow-y-auto pb-4">
            <NavGroup title="Principal" items={PRINCIPAL} path={path} />
            <NavGroup title="Sistema" items={SISTEMA} path={path} />
          </nav>

          <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-3 py-3">
            <span className="grid size-9 place-items-center rounded-full bg-ink text-[12px] text-white">
              RS
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[13px] text-ink">Ricardo</p>
              <p className="text-[11px] text-eng">Admin</p>
            </div>
            <button
              aria-label="Sair"
              className="grid size-8 place-items-center rounded-full text-ink/45 transition-colors hover:text-ink"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-6 pb-10">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 pt-2">
      <div>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-[1.05] tracking-tight text-ink">
          {title}
        </h1>
        {subtitle ? <p className="mt-2 text-[13px] text-ink/55">{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-[28px] bg-white/80 p-6 backdrop-blur", className)}>
      {children}
    </section>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "ok" | "warn" | "dark";
}) {
  const tones = {
    neutral: "bg-ink/8 text-ink/70",
    ok: "bg-eng-soft text-ink",
    warn: "bg-amber-soft text-ink",
    dark: "bg-ink text-white",
  } as const;
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-[11px] font-medium", tones[tone])}>
      {children}
    </span>
  );
}
