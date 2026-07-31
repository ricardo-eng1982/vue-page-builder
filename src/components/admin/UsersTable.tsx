import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "Ativo" | "Convidado" | "Suspenso";

const USERS: { name: string; email: string; role: string; status: Status; last: string }[] = [
  { name: "Amanda Reis", email: "amanda@vuitton.co", role: "Owner", status: "Ativo", last: "há 2 min" },
  { name: "Bruno Tavares", email: "bruno@vuitton.co", role: "Admin", status: "Ativo", last: "há 1 h" },
  { name: "Carla Nunes", email: "carla@vuitton.co", role: "Developer", status: "Convidado", last: "—" },
  { name: "Diego Matos", email: "diego@vuitton.co", role: "Support", status: "Ativo", last: "há 3 h" },
  { name: "Elisa Prado", email: "elisa@vuitton.co", role: "Billing", status: "Suspenso", last: "há 12 d" },
];

const STATUS_STYLES: Record<Status, string> = {
  Ativo: "border-chart-2/40 bg-chart-2/10 text-chart-2",
  Convidado: "border-border bg-muted text-muted-foreground",
  Suspenso: "border-destructive/40 bg-destructive/10 text-destructive",
};

export function UsersTable() {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Membros</h2>
          <p className="mt-1 text-xs text-muted-foreground">Usuários com acesso a esta instância</p>
        </div>
        <Button variant="soft" size="sm">
          Convidar
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-t border-border text-left text-xs text-muted-foreground">
              <th className="px-5 py-2 font-medium">Usuário</th>
              <th className="px-5 py-2 font-medium">Função</th>
              <th className="px-5 py-2 font-medium">Status</th>
              <th className="px-5 py-2 font-medium">Última atividade</th>
              <th className="px-5 py-2" />
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.email} className="border-t border-border">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-7 rounded-full bg-gradient-to-br from-chart-1 to-chart-5" />
                    <div className="leading-tight">
                      <p className="text-foreground">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{u.role}</td>
                <td className="px-5 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-2 py-0.5 text-xs",
                      STATUS_STYLES[u.status],
                    )}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-muted-foreground">{u.last}</td>
                <td className="px-5 py-3 text-right">
                  <Button variant="ghost" size="icon" aria-label="Ações" className="size-8">
                    <MoreHorizontal className="size-4 text-muted-foreground" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
