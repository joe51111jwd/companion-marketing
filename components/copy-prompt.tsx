"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { tryPage } from "@/lib/copy";

type CopyState = "idle" | "copied" | "failed";

export function CopyPrompt({ prompt }: { prompt: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  const label =
    state === "copied" ? tryPage.copied : state === "failed" ? tryPage.copyFailed : tryPage.copy;

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between gap-4 border-b border-border p-6">
        <div>
          <p className="eyebrow">{tryPage.promptLabel}</p>
          <p className="mt-2 text-[0.8125rem] text-fg-muted">{tryPage.promptNote}</p>
        </div>
        <Button variant="secondary" size="sm" onClick={copy} aria-live="polite">
          {label}
        </Button>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[0.8125rem] leading-relaxed whitespace-pre-wrap text-fg-muted">
        {prompt}
      </pre>
    </div>
  );
}
