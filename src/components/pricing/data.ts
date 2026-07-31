export type Rule = {
  name: string;
  target: string;
  scope: "Storewide" | "Customer" | "Collection" | "Product";
  value: string;
  schedule: string;
  impact: string;
  active: boolean;
};

export const rules: Rule[] = [
  {
    name: "Summer Sale",
    target: "All Products · 16 SKUs",
    scope: "Storewide",
    value: "-15%",
    schedule: "Jul 1–31 2026",
    impact: "$2,840",
    active: true,
  },
  {
    name: "VIP Member Discount",
    target: "Tag: VIP · 3 SKUs",
    scope: "Customer",
    value: "-10%",
    schedule: "Always on",
    impact: "$620",
    active: false,
  },
  {
    name: "Bundle Deal (3+ qty)",
    target: "Accessories · 5 SKUs",
    scope: "Collection",
    value: "-$15",
    schedule: "Always on",
    impact: "$180",
    active: true,
  },
  {
    name: "Flash Sale — Boots",
    target: "Loyalty: Gold · 16 SKUs",
    scope: "Product",
    value: "-20%",
    schedule: "Jul 4, 12h only",
    impact: "$440",
    active: true,
  },
];

export type Product = {
  name: string;
  sku: string;
  category: string;
  cost: string;
  price: string;
  suggested: string;
  delta: string | null;
  deltaUp: boolean;
  margin: number;
  trend: string;
  trendUp: boolean;
};

export const products: Product[] = [
  { name: "Alpaca Blend Coat", sku: "ABC-002", category: "Outerwear", cost: "$130", price: "$390", suggested: "$130", delta: "$22", deltaUp: true, margin: 72, trend: "+4.2%", trendUp: true },
  { name: "Silk Lined Blazer", sku: "SLB-003", category: "Formal Wear", cost: "$210", price: "$630", suggested: "$210", delta: "$45", deltaUp: true, margin: 75, trend: "+1.8%", trendUp: true },
  { name: "Cashmere Sweater", sku: "CSW-004", category: "Knitwear", cost: "$95", price: "$285", suggested: "$199", delta: "$20", deltaUp: false, margin: 65, trend: "-2.1%", trendUp: false },
  { name: "Linen Summer Shirt", sku: "LSS-005", category: "Casual Wear", cost: "$48", price: "$144", suggested: "$48", delta: null, deltaUp: true, margin: 60, trend: "$8", trendUp: true },
  { name: "Denim Trucker Jacket", sku: "DTJ-006", category: "Outerwear", cost: "$85", price: "$255", suggested: "$85", delta: "$13", deltaUp: true, margin: 62, trend: "$13", trendUp: true },
  { name: "Cotton Twill Pants", sku: "CTP-007", category: "Bottoms", cost: "$72", price: "$216", suggested: "$72", delta: "$15", deltaUp: false, margin: 61, trend: "-1.2%", trendUp: false },
  { name: "Wool Fedora Hat", sku: "WFH-008", category: "Accessories", cost: "$45", price: "$135", suggested: "$45", delta: null, deltaUp: true, margin: 63, trend: "$7", trendUp: true },
  { name: "Leather Gloves", sku: "LGV-009", category: "Accessories", cost: "$60", price: "$180", suggested: "$60", delta: "$12", deltaUp: true, margin: 66, trend: "$12", trendUp: true },
];
