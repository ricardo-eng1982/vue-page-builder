import { useState } from "react";
import { Check, Copy, Eye, EyeOff, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyFieldProps {
  label: string;
  value: string;
  secret?: boolean;
  deletable?: boolean;
}

export function CopyField({ label, value, secret = false, deletable = false }: CopyFieldProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const masked = secret && !revealed ? value.slice(0, 8) + "•".repeat(24) : value;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 border-t border-border px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <div className="flex h-8 items-center gap-2 rounded-md border border-border bg-muted/60 px-3">
          <code
            className={cn(
              "font-mono text-xs text-muted-foreground",
              secret && !revealed && "tracking-tight",
            )}
          >
            {masked}
          </code>
          {secret && (
            <button
              type="button"
              aria-label={revealed ? "Hide key" : "Reveal key"}
              onClick={() => setRevealed((r) => !r)}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {revealed ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
            </button>
          )}
        </div>
        <Button variant="soft" size="sm" onClick={copy}>
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          Copy
        </Button>
        {deletable && (
          <Button variant="ghost" size="icon" aria-label="Delete key" className="size-8">
            <Trash2 className="size-4 text-destructive" />
          </Button>
        )}
      </div>
    </div>
  );
}
