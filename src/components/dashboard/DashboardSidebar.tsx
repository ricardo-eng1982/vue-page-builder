import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  ClipboardList,
  Code2,
  FileSearch,
  Images,
  LayoutGrid,
  LogOut,
  Moon,
  Tag,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";

const groups = [
  {
    label: "Principal",
    items: [
      { icon: LayoutGrid, label: "Dashboard" },
      { icon: BarChart3, label: "Analytics", active: true },
      { icon: Users, label: "Usuários" },
      { icon: Images, label: "Ativos Visuais" },
      { icon: Workflow, label: "Flows" },
      { icon: Tag, label: "Gestão FIPE" },
      { icon: FileSearch, label: "Consultas" },
      { icon: ClipboardList, label: "Tipos de Consulta" },
      { icon: Wallet, label: "Financeiro" },
      { icon: Code2, label: "Development" },
    ],
  },
  {
    label: "Sistema",
    items: [
      { icon: Users, label: "Equipe Admin" },
      { icon: ClipboardList, label: "Audit Log" },
    ],
  },
];

export function DashboardSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col justify-between border-r border-border bg-card lg:flex">
      <div>
        <div className="flex items-center gap-2.5 border-b border-border px-5 py-4">
          <span className="flex size-8 items-center justify-center rounded-full bg-eng text-sm font-semibold text-eng-foreground">
            e
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">ENGRENEI</div>
            <div className="text-[10px] text-muted-foreground">Painel Admin</div>
          </div>
        </div>

        <nav className="space-y-5 px-3 py-4">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {group.label}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <button
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors",
                        "active" in item && item.active
                          ? "bg-eng-soft font-medium text-eng-ink"
                          : "text-muted-foreground hover:bg-eng-surface hover:text-foreground",
                      )}
                    >
                      <item.icon className="size-4" />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2.5 border-t border-border px-4 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-eng-soft text-[10px] font-semibold text-eng-ink">
          RI
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-xs font-medium">Ricardo Souza</div>
          <div className="text-[10px] text-muted-foreground">Admin</div>
        </div>
        <Moon className="size-3.5 text-muted-foreground" />
        <Link to="/" aria-label="Sair">
          <LogOut className="size-3.5 text-muted-foreground hover:text-foreground" />
        </Link>
      </div>
    </aside>
  );
}
