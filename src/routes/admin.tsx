import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  ChevronsUpDown,
  Code2,
  CreditCard,
  Fingerprint,
  Gauge,
  Globe,
  KeyRound,
  Link2,
  Mail,
  MessageSquare,
  Plug,
  Settings,
  Shield,
  ShieldAlert,
  TrendingUp,
  UserCog,
  Users,
  Webhook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/admin/StatCard";
import { UsersTable } from "@/components/admin/UsersTable";
import { ActivityPanel } from "@/components/admin/ActivityPanel";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel admin — Instance Configuration Dashboard" },
      {
        name: "description",
        content:
          "Painel administrativo com métricas de usuários, sessões, receita e atividade recente da instância.",
      },
      { property: "og:title", content: "Painel admin — Instance Configuration Dashboard" },
      {
        property: "og:description",
        content: "Métricas, membros e eventos recentes da sua instância em um só painel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

const TABS = ["Overview", "Users", "Organizations", "Billing", "Configure", "Settings"];

const SIDEBAR = [
  {
    title: "Visão geral",
    items: [
      { label: "Dashboard", icon: Gauge, active: true },
      { label: "Usuários", icon: Users },
      { label: "Faturamento", icon: CreditCard },
    ],
  },
  {
    title: "General",
    items: [
      { label: "Authentication", icon: Fingerprint },
      { label: "SMS template", icon: MessageSquare },
      { label: "Email templates", icon: Mail },
    ],
  },
  {
    title: "Organization",
    items: [
      { label: "Settings", icon: Settings },
      { label: "Roles and permissions", icon: UserCog },
    ],
  },
  {
    title: "Security",
    items: [
      { label: "Restrictions", icon: Shield },
      { label: "Fraud detection", icon: ShieldAlert },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "JWT templates", icon: KeyRound },
      { label: "Webhooks", icon: Webhook },
      { label: "Domains", icon: Globe },
      { label: "Integrations", icon: Plug },
      { label: "API keys", icon: Code2, to: "/" as const },
    ],
  },
];

const STATS = [
  { label: "Usuários ativos", value: "12.480", delta: "+8,2%", trend: "up" as const, icon: Users },
  { label: "Sessões hoje", value: "3.192", delta: "+2,4%", trend: "up" as const, icon: Gauge },
  { label: "Receita (MRR)", value: "R$ 84.300", delta: "+11,7%", trend: "up" as const, icon: CreditCard },
  { label: "Churn", value: "1,9%", delta: "-0,4%", trend: "down" as const, icon: TrendingUp },
];

const BARS = [42, 58, 35, 71, 64, 88, 52, 76, 61, 94, 70, 83];

function AdminPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
              C
            </div>
            <Crumb label="Louis Vuitton" />
            <span className="text-muted-foreground/50">/</span>
            <Crumb label="Summer 24' Campaign" />
            <span className="text-muted-foreground/50">/</span>
            <Crumb label="Production" dot />
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="soft" size="sm">
              Add teammates
              <ChevronRight className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notificações" className="size-8">
              <Bell className="size-4 text-muted-foreground" />
            </Button>
            <div className="size-7 rounded-full bg-gradient-to-br from-chart-1 to-chart-5" />
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6">
          <ul className="flex items-center gap-1 pb-2 text-sm">
            {TABS.map((tab) => (
              <li key={tab}>
                <a
                  href="#"
                  className={
                    tab === "Overview"
                      ? "inline-flex rounded-md bg-muted px-3 py-1.5 font-medium text-foreground"
                      : "inline-flex rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="space-y-6">
          {SIDEBAR.map((group) => (
            <div key={group.title} className="space-y-1">
              <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">{group.title}</p>
              {group.items.map((item) =>
                "to" in item && item.to ? (
                  <Button key={item.label} variant="sidebar" size="sm" asChild>
                    <Link to={item.to}>
                      <item.icon className="size-3.5" />
                      {item.label}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    key={item.label}
                    variant={"active" in item && item.active ? "sidebarActive" : "sidebar"}
                    size="sm"
                  >
                    <item.icon className="size-3.5" />
                    {item.label}
                  </Button>
                ),
              )}
            </div>
          ))}
        </aside>

        <main className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground">Dashboard</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Resumo da atividade desta instância
              </p>
            </div>
            <Button variant="soft" size="sm">
              Últimos 30 dias
              <ChevronsUpDown className="size-3.5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <section className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-foreground">Cadastros por mês</h2>
                <p className="mt-1 text-xs text-muted-foreground">Novos usuários em 12 meses</p>
              </div>
              <span className="text-xs text-muted-foreground">Total 24.918</span>
            </div>
            <div className="mt-6 flex h-40 items-end gap-2">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-primary/80 transition-colors hover:bg-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </section>

          <ActivityPanel />

          <UsersTable />
        </main>
      </div>
    </div>
  );
}

function Crumb({ label, dot = false }: { label: string; dot?: boolean }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-foreground transition-colors hover:bg-muted">
      {dot && <span className="size-2 rounded-full bg-chart-2" />}
      {label}
      <ChevronsUpDown className="size-3 text-muted-foreground" />
    </button>
  );
}
