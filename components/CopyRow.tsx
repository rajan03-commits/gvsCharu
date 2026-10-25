"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyStatus = "idle" | "copied" | "failed";

export default function CopyRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  // Placeholders like "[UPI ID]" are not worth copying
  const isPlaceholder = value.startsWith("[");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-3 last:border-b-0">
      <div>
        <p className="text-sm text-foreground">{label}</p>
        <p className="break-all font-semibold text-foreground">{value}</p>
      </div>

      {!isPlaceholder && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="inline-flex items-center gap-2 rounded-md border border-primary px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {status === "copied" ? (
            <Check size={16} aria-hidden="true" />
          ) : (
            <Copy size={16} aria-hidden="true" />
          )}
          {status === "copied" ? "Copied" : "Copy"}
        </button>
      )}

      <span className="sr-only" aria-live="polite">
        {status === "copied" && `${label} copied`}
        {status === "failed" && `Could not copy ${label}. Please select the text instead.`}
      </span>
    </div>
  );
}