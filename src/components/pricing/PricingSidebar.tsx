import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  Bell,
  Gauge,
  LayoutGrid,
  MessageSquare,
  Package,
  Radio,
  Receipt,
  Search,
  Settings,
  Share2,
  ShoppingCart,
  Store,
  Tag,
  Users,
  Wallet,
} from "lucide-react";

const groups = [
  {
    label: "Command",
    items: [
      { icon: LayoutGrid, label: "Overview" },
      { icon: Radio, label: "Live Monitor" },
      { icon: Bell, label: "Alerts" },
    ],
  },
  {
    label: "Commerce",
    items: [
      { icon: ShoppingCart, label: "Order Queue" },
      { icon: Package, label: "Catalog" },
      { icon: Tag, label: "Pricing Engine", active: true },
      { icon: Users, label: "Customers" },
      { icon: MessageSquare, label: "Reviews" },
    ],
  },
  {
    label: "Finance",
    items: [
      { icon: Gauge, label: "Revenue Desk" },
      { icon: Wallet, label: "Payouts" },
      { icon: Receipt, label: "Tax Engine" },
    ],
  },
  {
    label: "Platform",
    items: [
      { icon: Store, label: "Marketplace" },
      { icon: Receipt, label: "POS" },
      { icon: Share2, label: "Social Channels" },
      { icon: Settings, label: "Settings" },
    ],
  },
];

export function PricingSidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-2.5 px-4 py-4">
        <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-sm font-semibold text-brand-foreground">
          C
        </span>
        <div>
          <div className="text-sm font-semibold leading-tight">Confidency OS</div>
          <div className="text-[10px] text-muted-foreground">Business Operations Platform</div>
        </div>
      </div>

      <label className="mx-3 mb-3 flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5">
        <Search className="size-3.5 text-muted-foreground" />
        <input
          placeholder="Search..."
          className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground"
        />
        <span className="text-[10px] text-muted-foreground">⌘K</span>
      </label>

      <nav className="flex-1 space-y-4 overflow-y-auto px-3 pb-4">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="px-2 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {group.label}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <button
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs transition-colors",
                      "active" in item && item.active
                        ? "bg-background font-medium text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
                    )}
                  >
                    <item.icon className="size-3.5" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-2.5 border-t border-border px-4 py-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
          JD
        </span>
        <div className="min-w-0">
          <div className="truncate text-xs font-medium">Jhon Doe</div>
          <div className="truncate text-[10px] text-muted-foreground">john.example@gmail.com</div>
        </div>
      </div>

      <Link to="/" className="px-4 pb-3 text-[10px] text-muted-foreground hover:text-foreground">
        ← Voltar para API keys
      </Link>
    </aside>
  );
}
