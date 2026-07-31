import { Activity, Terminal } from "lucide-react";

const EVENTS = [
  { time: "03:12", text: "user.created — amanda@vuitton.co" },
  { time: "02:54", text: "session.revoked — bruno@vuitton.co" },
  { time: "02:31", text: "apikey.rotated — sk_live_••••7f2a" },
  { time: "01:08", text: "webhook.failed — /billing/sync (500)" },
  { time: "00:42", text: "org.updated — Summer 24' Campaign" },
];

export function ActivityPanel() {
  return (
    <section className="overflow-hidden rounded-xl bg-panel text-panel-foreground">
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div>
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <Activity className="size-3.5" />
            Atividade recente
          </h2>
          <p className="mt-1 text-xs text-panel-muted">Últimos eventos do sistema</p>
        </div>
      </div>

      <div className="mx-5 mb-5 overflow-hidden rounded-lg border border-panel-border bg-panel-code">
        <div className="flex items-center gap-2 border-b border-panel-border px-3 py-2 text-xs text-panel-muted">
          <Terminal className="size-3.5" />
          <span className="font-mono">events.log</span>
        </div>
        <ul className="px-3 py-3 font-mono text-[11px] leading-6">
          {EVENTS.map((e) => (
            <li key={e.text} className="flex gap-4">
              <span className="select-none text-panel-muted/60">{e.time}</span>
              <span className="text-panel-foreground/90">{e.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
