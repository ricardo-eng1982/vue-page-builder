# Engrenei Admin — Design Kit & Guia de Implementação

Documento de referência para implementar novas telas do painel Engrenei
(estilo "Crextio adaptado": degradê creme→verde, tipografia display leve,
cards bento arredondados, cartões escuros de destaque).

Stack: **TanStack Start (React 19) + Tailwind CSS v4 + lucide-react**.
Não use Vue, Next.js, react-router-dom nem CSS-in-JS.

---

## 1. Tokens de design

Definidos em `src/styles.css` (`:root` + `@theme inline`). **Nunca** use cores
hardcoded (`bg-[#22c55e]`, `text-gray-500`). Use sempre as utilitárias abaixo.

| Token | Utilitária | Uso |
| --- | --- | --- |
| `--ink` | `text-ink`, `bg-ink` | texto principal / superfícies escuras |
| `--eng` | `text-eng`, `bg-eng` | verde da marca (acentos, links ativos) |
| `--eng-soft` | `bg-eng-soft` | badges e chips positivos |
| `--cream` | `bg-cream` | base do degradê de fundo |
| `--amber-soft` | `bg-amber-soft` | avisos |
| `--destructive` | `text-destructive` | erro / ação destrutiva |

Opacidades do ink formam a escala tipográfica:
`text-ink` (títulos) → `text-ink/70` (corpo) → `text-ink/55` (secundário) →
`text-ink/45` (legendas) → `text-ink/35` (labels de grupo).

Fontes: `font-display` (Outfit — títulos e números), `font-sans` (Inter — UI),
`font-mono` (JetBrains Mono — IDs, logs, chaves).

Raio padrão: `rounded-[28px]` para cards, `rounded-2xl` para itens de lista,
`rounded-full` para inputs, botões e pills.

---

## 2. Primitivos disponíveis

Arquivo: `src/components/engrenei/primitives.tsx`

| Componente | Props principais | Descrição |
| --- | --- | --- |
| `Surface` | `className` | wrapper de página com o degradê diagonal |
| `Card` | `tone: light \| dark \| eng` | card bento arredondado |
| `CardTitle` | `hint`, `action` | cabeçalho interno de card |
| `PageHeader` | `title`, `subtitle`, `action` | título display da tela |
| `Pill` | `tone: neutral \| ok \| warn \| danger \| dark` | badge de status |
| `Metric` | `label`, `value`, `delta`, `hint`, `tone` | KPI de número grande |
| `ProgressRow` | `label`, `value` (0–100), `caption` | barra de progresso inline |
| `Toolbar` / `Field` / `ActionButton` | — | filtros e ações de topo de card |
| `DataTable<T>` | `columns`, `rows`, `rowKey`, `tone` | tabela padrão do admin |
| `EmptyState` | `title`, `description`, `action` | estado vazio |
| `Sparkline` | `points: number[]` | mini gráfico de linha SVG |

Constantes exportadas: `GRADIENT_CANVAS` (fundo da página) e `GRADIENT_ENG`
(degradê verde→ink para cards de destaque e barras).

O shell (sidebar + navegação) fica em
`src/components/admin-panel/AdminShell.tsx` e já é aplicado pela rota-layout
`src/routes/admin.tsx`; telas novas **não** repetem o shell.

---

## 3. Como criar uma nova tela do admin

1. Criar `src/routes/admin.<slug>.tsx` com
   `createFileRoute("/admin/<slug>")` (o caminho usa barras, o arquivo usa pontos).
2. Adicionar o item ao array `PRINCIPAL` ou `SISTEMA` em `AdminShell.tsx`
   com um ícone do `lucide-react`.
3. Compor a tela: `PageHeader` → cards. Não redeclarar layout/sidebar.

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import {
  ActionButton, Card, DataTable, Field, PageHeader, Pill, Toolbar,
} from "@/components/engrenei/primitives";

export const Route = createFileRoute("/admin/exemplo")({
  component: ExemploPage,
});

type Row = { id: string; placa: string; status: "ok" | "pendente" };

const ROWS: Row[] = [
  { id: "EN2-324359019", placa: "ISW8I17", status: "ok" },
];

function ExemploPage() {
  return (
    <>
      <PageHeader title="Exemplo" subtitle="Descrição curta da tela" />

      <Card>
        <Toolbar>
          <Field placeholder="Buscar…" icon={<Search className="size-4 text-ink/40" />} />
          <ActionButton>Buscar</ActionButton>
        </Toolbar>

        <div className="mt-5">
          <DataTable
            rows={ROWS}
            rowKey={(r) => r.id}
            columns={[
              {
                key: "id",
                header: "Número",
                cell: (r) => (
                  <span className="rounded-full bg-eng-soft px-3 py-1 font-mono text-[11px]">
                    {r.id}
                  </span>
                ),
              },
              { key: "placa", header: "Placa", cell: (r) => r.placa },
              {
                key: "status",
                header: "Status",
                align: "right",
                cell: (r) => (
                  <Pill tone={r.status === "ok" ? "ok" : "warn"}>{r.status}</Pill>
                ),
              },
            ]}
          />
        </div>
      </Card>
    </>
  );
}
```

---

## 4. Regras de layout

- Grid bento: `grid gap-4 xl:grid-cols-4`; cards de destaque usam
  `xl:col-span-2` / `xl:row-span-2`.
- No máximo **um** card escuro (`tone="dark"`) por tela — é o ponto focal.
- Números grandes sempre em `font-display font-light` com
  `text-[clamp(1.8rem,3.4vw,2.6rem)]`.
- Espaçamento vertical entre blocos: `space-y-6` (o `<main>` do shell já aplica).
- Responsivo: sidebar some abaixo de `lg`; tabelas dentro de `overflow-x-auto`
  com `min-width` (o `DataTable` já cuida disso).

## 5. SEO / metadados

O `head()` fica na rota-layout `src/routes/admin.tsx`. Telas públicas novas
(fora de `/admin`) devem declarar `head()` próprio com `title`, `description`,
`og:title`, `og:description`, `og:type` e `twitter:card` únicos.

## 6. Dados

Todas as telas hoje usam mocks locais (arrays no topo do arquivo da rota).
Ao ligar dados reais, usar Lovable Cloud + TanStack Query
(`context.queryClient.ensureQueryData` no loader + `useSuspenseQuery` no
componente) — nunca `useEffect` + `fetch`.

## 7. Checklist antes de finalizar

- [ ] Nenhuma cor hardcoded (exceto `text-white` sobre `bg-ink`/`GRADIENT_ENG`).
- [ ] `createFileRoute` bate exatamente com o nome do arquivo.
- [ ] Item adicionado à navegação do `AdminShell`.
- [ ] Tabelas roláveis no mobile; sidebar oculta em telas pequenas.
- [ ] Textos em pt-BR, moeda em `R$ 0,00`, datas em `DD/MM/AAAA`.
