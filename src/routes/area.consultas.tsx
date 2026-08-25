import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbInput, NbStat, NbTag } from "@/components/user-area/nb";

export const Route = createFileRoute("/area/consultas")({
  head: () => ({
    meta: [
      { title: "Consultas — Engrenei" },
      {
        name: "description",
        content:
          "Histórico de consultas de veículos por placa na Engrenei: status, tipo e valor de cada consulta.",
      },
      { property: "og:title", content: "Consultas — Engrenei" },
      {
        property: "og:description",
        content: "Consulte placas e acompanhe o histórico completo das suas consultas Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsultasPage,
});

const CONSULTAS = [
  { placa: "BRA2E19", tipo: "Completa", veiculo: "Onix 1.0 Turbo", status: "Concluída", tom: "green" as const, data: "25/08 14:02", valor: "R$ 19,90" },
  { placa: "QZR1A23", tipo: "FIPE", veiculo: "Corolla XEi 2.0", status: "Concluída", tom: "green" as const, data: "24/08 19:15", valor: "R$ 7,90" },
  { placa: "PXK7B88", tipo: "Leilão", veiculo: "HB20 Comfort", status: "Processando", tom: "orange" as const, data: "24/08 09:28", valor: "R$ 14,90" },
  { placa: "RTA9C41", tipo: "Completa", veiculo: "Compass Longitude", status: "Concluída", tom: "green" as const, data: "22/08 16:44", valor: "R$ 19,90" },
  { placa: "MLN4D02", tipo: "Débitos", veiculo: "Argo Drive 1.3", status: "Falhou", tom: "ink" as const, data: "20/08 11:07", valor: "—" },
];

function ConsultasPage() {
  return (
    <>
      <NbBox tone="lime" shadow="lg" className="p-6">
        <NbHeading>Consultas</NbHeading>
        <p className="mt-2 text-[13px] font-medium text-nb-ink/70">
          Digite a placa e receba os dados do veículo na hora.
        </p>
        <div className="mt-5 flex flex-wrap items-end gap-3">
          <div className="min-w-[200px] flex-1">
            <NbInput label="Placa" placeholder="ABC1D23" className="uppercase" />
          </div>
          <NbButton tone="ink">
            <span className="inline-flex items-center gap-2">
              <Search className="size-4" /> Consultar
            </span>
          </NbButton>
        </div>
      </NbBox>

      <div className="grid gap-5 sm:grid-cols-3">
        <NbStat label="Consultas totais" value="128" tone="white" />
        <NbStat label="Este mês" value="24" tone="green" />
        <NbStat label="Gasto no mês" value="R$ 318" tone="ink" />
      </div>

      <NbBox>
        <div className="mb-4 flex items-center justify-between gap-3">
          <NbHeading level={2}>Histórico</NbHeading>
          <NbTag>últimas 5</NbTag>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left" style={{ minWidth: 720 }}>
            <thead>
              <tr className="text-[11px] font-bold uppercase tracking-[0.1em] text-nb-ink/50">
                <th className="pb-3">Placa</th>
                <th className="pb-3">Veículo</th>
                <th className="pb-3">Tipo</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Data</th>
                <th className="pb-3 text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {CONSULTAS.map((c) => (
                <tr key={c.placa} className="border-t-2 border-nb-ink/15">
                  <td className="py-3.5 font-[family-name:var(--font-mono)] text-[13px] font-medium">
                    {c.placa}
                  </td>
                  <td className="py-3.5 text-[13px] font-semibold">{c.veiculo}</td>
                  <td className="py-3.5">
                    <NbTag tone="white">{c.tipo}</NbTag>
                  </td>
                  <td className="py-3.5">
                    <NbTag tone={c.tom}>{c.status}</NbTag>
                  </td>
                  <td className="py-3.5 text-[12px] font-medium text-nb-ink/60">{c.data}</td>
                  <td className="py-3.5 text-right text-[13px] font-bold">{c.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </NbBox>
    </>
  );
}
