import { useState } from "react";
import { Check, Copy, FileCode2, Info, WrapText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ENV_LINES = [
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_Z2xlcmsubcvcv2VyAAmFkY55jY5Q7554",
  "CLERK_SECRET_KEY=sk_live_································",
];

export function QuickCopy() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ENV_LINES.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="overflow-hidden rounded-xl bg-panel text-panel-foreground">
      <div className="px-5 pt-5 pb-4">
        <h2 className="text-sm font-semibold">Quick Copy</h2>
        <p className="mt-1 text-xs text-panel-muted">
          Choose your framework and paste the code into your environment file.
        </p>
      </div>

      <div className="mx-5 overflow-hidden rounded-lg border border-panel-border bg-panel-code">
        <div className="flex items-center justify-between border-b border-panel-border px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-panel-muted">
            <FileCode2 className="size-3.5" />
            <span className="font-mono">.env.local</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="panelGhost" size="icon" aria-label="Toggle wrap" className="size-7">
              <WrapText className="size-3.5" />
            </Button>
            <Button variant="panel" size="sm" onClick={copy}>
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              Copy
            </Button>
          </div>
        </div>
        <pre className="overflow-x-auto px-3 py-3 font-mono text-[11px] leading-6">
          {ENV_LINES.map((line, i) => (
            <div key={line} className="flex gap-4">
              <span className="select-none text-panel-muted/60">{i + 1}</span>
              <span className="text-panel-foreground/90">{line}</span>
            </div>
          ))}
        </pre>
      </div>

      <div className="flex items-center gap-2 px-5 py-4 text-xs text-panel-muted">
        <Info className="size-3.5" />
        These are are the same Public and Secret keys as you see below.
      </div>
    </section>
  );
}
