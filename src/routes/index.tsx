import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  ChevronsUpDown,
  Code2,
  Fingerprint,
  Globe,
  Key,
  KeyRound,
  Link2,
  Mail,
  MessageSquare,
  Plug,
  Plus,
  Settings,
  Shield,
  ShieldAlert,
  TriangleAlert,
  UserCog,
  Users,
  Webhook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyField } from "@/components/api-keys/CopyField";
import { QuickCopy } from "@/components/api-keys/QuickCopy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "API keys — Instance Configuration Dashboard" },
      {
        name: "description",
        content:
          "Manage publishable and secret API keys for your instance, copy environment variables, and rotate credentials safely.",
      },
      { property: "og:title", content: "API keys — Instance Configuration Dashboard" },
      {
        property: "og:description",
        content: "Manage publishable and secret API keys for your instance in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApiKeysPage,
});

const TABS = ["Overview", "Users", "Organizations", "Billing", "Configure", "Settings"];

const SIDEBAR = [
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
      { label: "Sessions", icon: Users },
      { label: "JWT templates", icon: KeyRound },
      { label: "Webhooks", icon: Webhook },
      { label: "Paths / Routing", icon: Link2 },
      { label: "Domains", icon: Globe },
      { label: "Integrations", icon: Plug },
      { label: "API keys", icon: Code2, active: true },
    ],
  },
];

const RIGHT_LINKS = [
  { label: "Show API URLs", icon: Link2 },
  { label: "Show JWT public key", icon: Key },
  { label: "Configure API Version", icon: Settings },
];

function ApiKeysPage() {
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
            <Button variant="ghost" size="icon" aria-label="Notifications" className="size-8">
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
                    tab === "Configure"
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

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[200px_minmax(0,1fr)_240px]">
        <aside className="space-y-6">
          {SIDEBAR.map((group) => (
            <div key={group.title} className="space-y-1">
              <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">{group.title}</p>
              {group.items.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "sidebarActive" : "sidebar"}
                  size="sm"
                >
                  <item.icon className="size-3.5" />
                  {item.label}
                </Button>
              ))}
            </div>
          ))}
        </aside>

        <main className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">API keys</h1>
            <p className="mt-1 text-sm text-muted-foreground">Manage API keys for this instance</p>
          </div>

          <QuickCopy />

          <section className="rounded-xl border border-border bg-card">
            <div className="px-5 py-4">
              <h2 className="text-sm font-semibold text-foreground">Publishable key</h2>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                This key should be used in your frontend code. It can be safely shared, and does not
                need to be kept secret.
              </p>
            </div>
            <CopyField label="Public key" value="pk_live_Y2xlcmsubZVyZmFkYS5jYSQ" />
          </section>

          <section className="rounded-xl border border-border bg-card">
            <div className="px-5 py-4">
              <h2 className="text-sm font-semibold text-foreground">Secret keys</h2>
              <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-foreground">
                Securely manage these sensitive keys. Do not share them with anyone. If you suspect
                that one of your secret keys has been compromised, you should create a new key,
                update your code, then delete the compromised key.
              </p>
            </div>
            <CopyField label="Default secret key" value="sk_live_Y2xlcmsubZVyZmFkYS5jYSQ" secret />
            <CopyField label="Test" value="sk_live_Y2xlcmsubZVyZmFkYS5jYSQ" secret />
            <CopyField label="Testing token" value="sk_live_Y2xlcmsubZVyZmFkYS5jYSQ" secret deletable />
            <div className="border-t border-border px-5 py-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Plus className="size-3.5" />
                Add new key
              </Button>
            </div>
          </section>

          <div className="flex items-center gap-2 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-xs text-warning-foreground">
            <TriangleAlert className="size-3.5 shrink-0" />
            Clerk support will never ask you to share your secret keys.
          </div>
        </main>

        <aside className="space-y-3">
          {RIGHT_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="size-3.5" />
              {link.label}
            </a>
          ))}
          <div className="space-y-1 border-t border-border pt-4 text-xs text-muted-foreground">
            <p>Configured API version 2022-10-23</p>
            <p>Latest API version 2023-12-09</p>
          </div>
        </aside>
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
