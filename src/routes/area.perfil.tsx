import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, LogOut, ShieldCheck } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbInput, NbTag } from "@/components/user-area/nb";

export const Route = createFileRoute("/area/perfil")({
  head: () => ({
    meta: [
      { title: "Perfil — Engrenei" },
      {
        name: "description",
        content:
          "Gerencie seus dados, plano, notificações e segurança da conta Engrenei.",
      },
      { property: "og:title", content: "Perfil — Engrenei" },
      {
        property: "og:description",
        content: "Dados pessoais, plano e segurança da sua conta Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfilPage,
});

function PerfilPage() {
  return (
    <>
      <NbBox tone="green" shadow="lg" className="flex flex-wrap items-center gap-5 p-6">
        <span className="nb-border grid size-20 place-items-center rounded-[4px] bg-nb-lime font-[family-name:var(--font-heavy)] text-[26px] text-nb-ink">
          RS
        </span>
        <div className="min-w-0">
          <NbHeading className="text-white">Ricardo Souza</NbHeading>
          <p className="mt-1.5 text-[13px] font-semibold text-white/80">+55 75 8131-4376</p>
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <NbTag tone="ink">Plano Pro</NbTag>
          <NbTag tone="white">Verificado</NbTag>
        </div>
      </NbBox>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <NbBox>
          <NbHeading level={2}>Dados pessoais</NbHeading>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <NbInput label="Nome completo" defaultValue="Ricardo Souza" />
            <NbInput label="Celular" defaultValue="+55 75 8131-4376" />
            <NbInput label="E-mail" defaultValue="ricardo@engrenei.com" />
            <NbInput label="CPF" defaultValue="123.456.789-00" />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <NbButton tone="green">Salvar alterações</NbButton>
            <NbButton tone="white">Cancelar</NbButton>
          </div>
        </NbBox>

        <div className="space-y-5">
          <NbBox tone="lime">
            <NbHeading level={2}>Assinatura</NbHeading>
            <p className="mt-3 font-[family-name:var(--font-heavy)] text-[30px] leading-none tracking-[-0.03em]">
              R$ 89<span className="text-[15px]">/mês</span>
            </p>
            <p className="mt-2 text-[12px] font-semibold text-nb-ink/65">
              Renova em 02/09 · 12 créditos restantes
            </p>
            <NbButton tone="ink" className="mt-5 w-full">
              Gerenciar plano
            </NbButton>
          </NbBox>

          <NbBox className="space-y-3">
            <NbHeading level={2}>Preferências</NbHeading>
            {[
              { icon: Bell, label: "Notificações no WhatsApp", on: true },
              { icon: ShieldCheck, label: "Login em 2 etapas", on: true },
            ].map((p) => (
              <div
                key={p.label}
                className="nb-border flex items-center gap-3 rounded-[4px] bg-nb-bg px-3.5 py-3"
              >
                <p.icon className="size-4" />
                <span className="flex-1 text-[13px] font-semibold">{p.label}</span>
                <span className="nb-border flex h-6 w-11 items-center rounded-[3px] bg-nb-green p-0.5">
                  <span className="nb-border ml-auto h-full w-4 rounded-[2px] bg-nb-surface" />
                </span>
              </div>
            ))}
            <Link to="/entrar" className="block">
              <NbButton tone="orange" className="w-full">
                <span className="inline-flex items-center justify-center gap-2">
                  <LogOut className="size-4" /> Sair da conta
                </span>
              </NbButton>
            </Link>
          </NbBox>
        </div>
      </div>
    </>
  );
}
