import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin-panel/AdminShell";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin Engrenei — Operação, consultas e financeiro" },
      {
        name: "description",
        content:
          "Painel administrativo da Engrenei: analytics, usuários, flows do WhatsApp, gestão FIPE, consultas e financeiro.",
      },
      { property: "og:title", content: "Painel Admin Engrenei" },
      {
        property: "og:description",
        content: "Administre analytics, usuários, flows, FIPE, consultas e financeiro da Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AdminShell>
      <Outlet />
    </AdminShell>
  ),
});
