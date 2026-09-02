import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbInput, NbSurface, NbTag } from "@/components/user-area/nb";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Entrar — Engrenei" },
      {
        name: "description",
        content: "Acesse a área do usuário Engrenei com seu número de celular e receba um token de verificação.",
      },
      { property: "og:title", content: "Entrar — Engrenei" },
      { property: "og:description", content: "Login por celular na área do usuário Engrenei." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EntrarPage,
});

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function EntrarPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const valid = phone.replace(/\D/g, "").length >= 10;

  return (
    <NbSurface>
      <div className="mx-auto flex min-h-screen max-w-[980px] items-center px-4 py-10">
        <div className="grid w-full items-center gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <NbTag tone="green">Área do usuário</NbTag>
            <NbHeading level={1}>Entre com seu celular</NbHeading>
            <p className="max-w-[38ch] text-[15px] font-medium text-nb-ink/70">
              Sem senha. Enviamos um token de 6 dígitos por WhatsApp para confirmar que é você.
            </p>
          </div>

          <NbBox shadow="lg" className="space-y-5">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                if (valid) navigate({ to: "/entrar/token" });
              }}
            >
              <NbInput
                label="Celular"
                inputMode="tel"
                placeholder="(11) 90000-0000"
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
              />
              <NbButton type="submit" disabled={!valid} className="flex w-full items-center justify-center gap-2">
                Receber token <ArrowRight className="size-4" />
              </NbButton>
              <p className="flex items-center gap-2 text-[12px] font-medium text-nb-ink/55">
                <Phone className="size-3.5" /> Você recebe o código no WhatsApp em segundos.
              </p>
            </form>

            <Link
              to="/area"
              className="block text-center text-[12px] font-bold uppercase tracking-[0.08em] text-nb-ink/60 underline"
            >
              Ver a área do usuário
            </Link>
          </NbBox>
        </div>
      </div>
    </NbSurface>
  );
}
