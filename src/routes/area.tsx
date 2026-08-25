import { createFileRoute, Outlet } from "@tanstack/react-router";
import { UserShell } from "@/components/user-area/UserShell";

export const Route = createFileRoute("/area")({
  head: () => ({
    meta: [
      { title: "Área do Usuário — Engrenei" },
      {
        name: "description",
        content:
          "Área do usuário Engrenei: acompanhe seus cards gerados, consultas de veículos e dados do perfil.",
      },
      { property: "og:title", content: "Área do Usuário — Engrenei" },
      {
        property: "og:description",
        content: "Cards gerados, consultas e perfil no painel do cliente Engrenei.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <UserShell>
      <Outlet />
    </UserShell>
  ),
});
