export const KPIS = [
  { label: "Volume financeiro", value: "R$ 48.320", delta: "+12,4%", up: true, hint: "vs. período anterior" },
  { label: "Pedidos pagos", value: "1.284", delta: "+8,1%", up: true, hint: "vs. período anterior" },
  { label: "Ticket médio", value: "R$ 37,60", delta: "+2,3%", up: true, hint: "vs. período anterior" },
  { label: "Conversão em pagamento", value: "37,5%", delta: "-1,2%", up: false, hint: "vs. período anterior" },
];

export const SERIES = [
  { label: "18/08", value: 18 },
  { label: "19/08", value: 26 },
  { label: "20/08", value: 22 },
  { label: "21/08", value: 34 },
  { label: "22/08", value: 30 },
  { label: "23/08", value: 42 },
  { label: "24/08", value: 48 },
];

export const FUNNEL = [
  { stage: "Iniciado", count: 3420, pct: 100 },
  { stage: "Pago", count: 1284, pct: 38 },
  { stage: "Concluído", count: 1102, pct: 32 },
];

export const CHANNELS = [
  { label: "Consulta EN2", value: 62 },
  { label: "Consulta FIPE", value: 24 },
  { label: "Leilão", value: 9 },
  { label: "Histórico", value: 5 },
];

export const ORDERS = [
  { id: "#ENG-9241", user: "Marina Alves", type: "Consulta EN2", value: "R$ 39,90", status: "Pago" as const, time: "há 4 min" },
  { id: "#ENG-9240", user: "Rafael Lima", type: "Consulta FIPE", value: "R$ 19,90", status: "Concluído" as const, time: "há 22 min" },
  { id: "#ENG-9239", user: "Juliana Costa", type: "Histórico", value: "R$ 59,90", status: "Pendente" as const, time: "há 1 h" },
  { id: "#ENG-9238", user: "Pedro Henrique", type: "Consulta EN2", value: "R$ 39,90", status: "Expirado" as const, time: "há 3 h" },
  { id: "#ENG-9237", user: "Camila Duarte", type: "Leilão", value: "R$ 89,90", status: "Concluído" as const, time: "há 5 h" },
];
