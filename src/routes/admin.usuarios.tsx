import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Card, PageHeader } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/usuarios")({
  component: UsuariosPage,
});

const USERS = [
  { name: "Ricardo de Souza Santos", phone: "+557581314376", last: "24/08, 18:41" },
  { name: "Marina Alves", phone: "+5511998877665", last: "24/08, 17:02" },
  { name: "Paulo Henrique Lima", phone: "+5531991234567", last: "23/08, 21:15" },
  { name: "Camila Duarte", phone: "+5541988112233", last: "22/08, 09:47" },
];

function UsuariosPage() {
  return (
    <>
      <PageHeader title="Usuários" subtitle="Todos os usuários que conversaram com o Nei" />

      <Card>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex min-w-[240px] flex-1 items-center gap-2 rounded-full bg-ink/5 px-4 py-3">
            <Search className="size-4 text-ink/40" />
            <input
              placeholder="Filtrar por número (DDD + número)"
              className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-ink/40"
            />
          </div>
          <button className="rounded-full bg-ink px-5 py-3 text-[13px] text-white transition-opacity hover:opacity-90">
            Buscar
          </button>
        </div>

        <ul className="mt-5 space-y-2">
          {USERS.map((u) => (
            <li
              key={u.phone}
              className="flex flex-wrap items-center gap-4 rounded-2xl bg-white px-4 py-3.5"
            >
              <span className="grid size-10 place-items-center rounded-full bg-eng-soft text-[12px] font-medium text-ink">
                {u.name.slice(0, 2).toUpperCase()}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] text-ink">{u.name}</p>
                <p className="text-[11px] text-ink/45">{u.phone}</p>
              </div>
              <span className="text-[11px] text-ink/40">{u.last}</span>
              <button className="rounded-full bg-eng-soft px-4 py-2 text-[12px] font-medium text-ink transition-opacity hover:opacity-80">
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
