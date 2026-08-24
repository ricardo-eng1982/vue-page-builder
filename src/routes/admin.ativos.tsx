import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Smartphone, Sparkles } from "lucide-react";
import { Card, PageHeader, Pill } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin/ativos")({
  component: AtivosPage,
});

const FUNDOS = [
  { name: "Showroom concessionária", tone: "from-ink to-ink/60" },
  { name: "Estúdio PRO", tone: "from-white to-ink/15" },
  { name: "Pátio externo", tone: "from-eng/60 to-eng/20" },
];

function AtivosPage() {
  return (
    <>
      <PageHeader
        title="Ativos Visuais"
        subtitle="Gerencie fundos e templates de card exibidos nos Flows do WhatsApp"
      />

      <div className="flex gap-1 rounded-full bg-white/60 p-1 backdrop-blur w-fit">
        {["Fundos", "Templates de Card"].map((t, i) => (
          <button
            key={t}
            className={`rounded-full px-5 py-2 text-[13px] ${
              i === 0 ? "bg-ink text-white" : "text-ink/60 hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <Card>
        <h2 className="flex items-center gap-2 font-display text-xl font-medium text-ink">
          <Sparkles className="size-4 text-eng" />
          Studio IA — Gerar fundo com Gemini
        </h2>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_260px]">
          <div>
            <p className="text-[12px] text-ink/50">Orientação</p>
            <div className="mt-2 flex gap-2">
              <button className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] text-white">
                <Smartphone className="size-3.5" /> Portrait
              </button>
              <button className="flex items-center gap-2 rounded-full bg-ink/5 px-4 py-2 text-[12px] text-ink/70 hover:text-ink">
                <Monitor className="size-3.5" /> Landscape
              </button>
            </div>

            <textarea
              rows={4}
              placeholder="Descreva o fundo desejado. Ex: Showroom moderno com piso de mármore branco, iluminação suave e janelas amplas ao fundo…"
              className="mt-4 w-full resize-none rounded-3xl bg-ink/5 p-4 text-[13px] text-ink outline-none placeholder:text-ink/40"
            />

            <button className="mt-4 rounded-full bg-[linear-gradient(100deg,var(--eng),color-mix(in_oklab,var(--eng)_55%,var(--ink)))] px-6 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90">
              Gerar fundo
            </button>
          </div>

          <div className="grid min-h-[220px] place-items-center rounded-3xl border border-dashed border-ink/15 text-[12px] text-ink/40">
            Preview após gerar
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-medium text-ink">Biblioteca de Fundos</h2>
          <span className="text-[12px] text-ink/45">3 fundos</span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNDOS.map((f) => (
            <article key={f.name} className="overflow-hidden rounded-3xl bg-white">
              <div className={`relative h-52 bg-gradient-to-br ${f.tone}`}>
                <span className="absolute left-3 top-3">
                  <Pill tone="ok">Ativo</Pill>
                </span>
              </div>
              <div className="px-4 py-3">
                <p className="text-[13px] text-ink">{f.name}</p>
                <div className="mt-1 flex gap-4 text-[12px]">
                  <button className="text-ink/50 hover:text-ink">Inativar</button>
                  <button className="text-destructive hover:opacity-80">Excluir</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </>
  );
}
