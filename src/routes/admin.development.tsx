import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/development")({
  component: DevelopmentPage,
});

const ENDPOINTS = [
  { m: "POST", p: "/v1/consultas", d: "Cria uma consulta veicular" },
  { m: "GET", p: "/v1/consultas/:id", d: "Consulta status e resultado" },
  { m: "POST", p: "/v1/pix/cobranca", d: "Gera cobrança Pix (Banco Inter)" },
  { m: "POST", p: "/webhooks/whatsapp", d: "Recebe eventos do Nei" },
];

function DevelopmentPage() {
  return (
    <>
      <PageHeader title="Development" subtitle="Chaves, webhooks e ambiente de integração" />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-xl font-medium text-ink">Chaves de API</h2>
          <ul className="mt-5 space-y-3">
            {[
              { l: "Publishable", v: "pk_live_••••••••4d21" },
              { l: "Secret", v: "sk_live_••••••••7f2a" },
              { l: "Webhook secret", v: "whsec_••••••••91bc" },
            ].map((k) => (
              <li key={k.l} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                <div>
                  <p className="text-[13px] text-ink">{k.l}</p>
                  <p className="font-mono text-[11px] text-ink/45">{k.v}</p>
                </div>
                <button className="rounded-full bg-ink/5 px-4 py-2 text-[12px] text-ink/70 hover:text-ink">
                  Copiar
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-ink text-white">
          <h2 className="font-display text-xl font-medium">Ambiente</h2>
          <ul className="mt-5 space-y-3 font-mono text-[12px] text-white/75">
            <li>ENGRENEI_ENV=production</li>
            <li>REGION=sa-east-1</li>
            <li>API_VERSION=v2.14.3</li>
            <li>WHATSAPP_PROVIDER=meta-cloud</li>
          </ul>
          <div className="mt-5">
            <Pill tone="ok">Saudável</Pill>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="font-display text-xl font-medium text-ink">Endpoints</h2>
        <ul className="mt-5 space-y-2">
          {ENDPOINTS.map((e) => (
            <li key={e.p} className="flex flex-wrap items-center gap-3 rounded-2xl bg-white px-4 py-3">
              <Pill tone={e.m === "GET" ? "neutral" : "dark"}>{e.m}</Pill>
              <span className="font-mono text-[12px] text-ink">{e.p}</span>
              <span className="text-[12px] text-ink/45">{e.d}</span>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
