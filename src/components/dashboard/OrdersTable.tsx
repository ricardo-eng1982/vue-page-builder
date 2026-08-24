import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ORDERS } from "./data";

const STATUS: Record<string, string> = {
  Pago: "border-eng/40 bg-eng-soft text-eng-ink",
  Concluído: "border-border bg-eng-surface text-foreground",
  Pendente: "border-amber/40 bg-amber-soft text-foreground",
  Expirado: "border-destructive/30 bg-danger-soft text-danger",
};

export function OrdersTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-eng">
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight">Pedidos recentes</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Últimas transações da plataforma</p>
        </div>
        <Button variant="soft" size="sm">
          Ver todos
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t border-border bg-eng-surface/60 text-left text-[11px] uppercase tracking-wide text-muted-foreground">
              <th className="px-5 py-2 font-medium">Pedido</th>
              <th className="px-5 py-2 font-medium">Cliente</th>
              <th className="px-5 py-2 font-medium">Tipo</th>
              <th className="px-5 py-2 font-medium">Valor</th>
              <th className="px-5 py-2 font-medium">Status</th>
              <th className="px-5 py-2 text-right font-medium">Quando</th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id} className="border-t border-border hover:bg-eng-surface/50">
                <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{o.id}</td>
                <td className="px-5 py-3">{o.user}</td>
                <td className="px-5 py-3 text-muted-foreground">{o.type}</td>
                <td className="px-5 py-3 tabular-nums">{o.value}</td>
                <td className="px-5 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2 py-0.5 text-[11px]",
                      STATUS[o.status],
                    )}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-right text-xs text-muted-foreground">{o.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
