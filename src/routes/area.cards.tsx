import { createFileRoute } from "@tanstack/react-router";
import { Download, Plus, Share2 } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbInput, NbTag } from "@/components/user-area/nb";

export const Route = createFileRoute("/area/cards")({
  head: () => ({
    meta: [
      { title: "Cards Gerados — Engrenei" },
      {
        name: "description",
        content:
          "Todos os cards de anúncio gerados na sua conta Engrenei, prontos para baixar e compartilhar.",
      },
      { property: "og:title", content: "Cards Gerados — Engrenei" },
      {
        property: "og:description",
        content: "Baixe, compartilhe e organize os cards de anúncio gerados pela Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CardsPage,
});

const CARDS = [
  { modelo: "Chevrolet Onix 1.0 Turbo", placa: "BRA2E19", preco: "R$ 78.900", tom: "green" as const, data: "25/08" },
  { modelo: "Toyota Corolla XEi 2.0", placa: "QZR1A23", preco: "R$ 132.500", tom: "lime" as const, data: "24/08" },
  { modelo: "Hyundai HB20 Comfort", placa: "PXK7B88", preco: "R$ 64.200", tom: "orange" as const, data: "24/08" },
  { modelo: "Jeep Compass Longitude", placa: "RTA9C41", preco: "R$ 158.000", tom: "ink" as const, data: "22/08" },
  { modelo: "Fiat Argo Drive 1.3", placa: "MLN4D02", preco: "R$ 69.900", tom: "lime" as const, data: "20/08" },
  { modelo: "VW T-Cross Highline", placa: "KJS8E77", preco: "R$ 141.700", tom: "green" as const, data: "18/08" },
];

function CardsPage() {
  return (
    <>
      <NbBox shadow="lg" className="flex flex-wrap items-center justify-between gap-5 p-6">
        <div>
          <NbHeading>Cards Gerados</NbHeading>
          <p className="mt-2 text-[13px] font-medium text-nb-ink/65">
            34 cards no total · 6 criados nesta semana
          </p>
        </div>
        <NbButton tone="green">
          <span className="inline-flex items-center gap-2">
            <Plus className="size-4" /> Novo card
          </span>
        </NbButton>
      </NbBox>

      <NbBox>
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-[220px] flex-1">
            <NbInput label="Buscar" placeholder="Modelo ou placa" />
          </div>
          <NbButton tone="ink">Filtrar</NbButton>
        </div>
      </NbBox>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <NbBox key={c.placa} className="flex flex-col gap-4 p-0">
            <div
              className={`nb-border m-[-2px] flex h-36 items-end justify-between rounded-t-[4px] p-4 ${
                c.tom === "green"
                  ? "bg-nb-green text-white"
                  : c.tom === "lime"
                    ? "bg-nb-lime"
                    : c.tom === "orange"
                      ? "bg-nb-orange"
                      : "bg-nb-ink text-white"
              }`}
            >
              <span className="font-[family-name:var(--font-heavy)] text-[22px] leading-none tracking-[-0.03em]">
                {c.preco}
              </span>
              <NbTag tone="white">{c.placa}</NbTag>
            </div>
            <div className="px-4 pb-4">
              <NbHeading level={3}>{c.modelo}</NbHeading>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-nb-ink/50">
                gerado em {c.data}
              </p>
              <div className="mt-4 flex gap-2">
                <NbButton tone="white" className="flex-1 px-3 py-2">
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <Download className="size-3.5" /> Baixar
                  </span>
                </NbButton>
                <NbButton tone="lime" className="px-3 py-2">
                  <Share2 className="size-3.5" />
                </NbButton>
              </div>
            </div>
          </NbBox>
        ))}
      </div>
    </>
  );
}
