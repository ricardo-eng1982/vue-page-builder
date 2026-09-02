import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { NbBox, NbButton, NbHeading, NbSurface, NbTag } from "@/components/user-area/nb";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/entrar/token")({
  head: () => ({
    meta: [
      { title: "Token de verificação — Engrenei" },
      {
        name: "description",
        content: "Digite o token de 6 dígitos enviado por WhatsApp para acessar sua conta Engrenei.",
      },
      { property: "og:title", content: "Token de verificação — Engrenei" },
      { property: "og:description", content: "Confirme o código de 6 dígitos e acesse a área do usuário." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TokenPage,
});

function TokenPage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const complete = digits.every((d) => d !== "");

  function setAt(i: number, v: string) {
    const clean = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[i] = clean;
      return next;
    });
    if (clean && i < 5) refs.current[i + 1]?.focus();
  }

  return (
    <NbSurface>
      <div className="mx-auto flex min-h-screen max-w-[620px] items-center px-4 py-10">
        <NbBox shadow="lg" className="w-full space-y-6">
          <div className="space-y-3">
            <NbTag tone="lime">
              <ShieldCheck className="size-3.5" /> Verificação
            </NbTag>
            <NbHeading level={1}>Token de 6 dígitos</NbHeading>
            <p className="text-[15px] font-medium text-nb-ink/70">
              Enviamos o código para o seu WhatsApp. Ele expira em 5 minutos.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (complete) navigate({ to: "/area" });
            }}
          >
            <div className="grid grid-cols-6 gap-2 sm:gap-3">
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  value={d}
                  inputMode="numeric"
                  aria-label={`Dígito ${i + 1}`}
                  onChange={(e) => setAt(i, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
                  }}
                  className={cn(
                    "nb-border aspect-square w-full rounded-[4px] bg-nb-surface text-center font-[family-name:var(--font-heavy)] text-[clamp(1.1rem,5vw,1.6rem)] outline-none",
                    d && "bg-nb-lime",
                  )}
                />
              ))}
            </div>

            <NbButton type="submit" disabled={!complete} className="w-full">
              Confirmar e entrar
            </NbButton>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] font-bold uppercase tracking-[0.08em]">
            <button type="button" className="text-nb-green underline">
              Reenviar código
            </button>
            <Link to="/entrar" className="text-nb-ink/60 underline">
              Trocar número
            </Link>
          </div>
        </NbBox>
      </div>
    </NbSurface>
  );
}
