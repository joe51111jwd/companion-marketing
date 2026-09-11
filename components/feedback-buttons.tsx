"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { StatusMark } from "@/components/status-mark";
import { tryPage } from "@/lib/copy";
import { STATUS } from "@/lib/canonical";

type Feedback = "none" | "done" | "not-useful";

export function FeedbackButtons() {
  const [feedback, setFeedback] = useState<Feedback>("none");

  return (
    <div className="rounded-2xl border border-border bg-bg-subtle p-8">
      <h2 className="h3 text-fg">{tryPage.feedbackTitle}</h2>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button
          variant={feedback === "done" ? "primary" : "secondary"}
          aria-pressed={feedback === "done"}
          onClick={() => setFeedback("done")}
        >
          {feedback === "done" ? (
            <span className="inline-flex items-center gap-2">
              <StatusMark kind="done" />
              {STATUS.tryItDone}
            </span>
          ) : (
            tryPage.done
          )}
        </Button>
        <Button
          variant={feedback === "not-useful" ? "primary" : "secondary"}
          aria-pressed={feedback === "not-useful"}
          onClick={() => setFeedback("not-useful")}
        >
          {tryPage.notUseful}
        </Button>
      </div>

      <p aria-live="polite" className="mt-6 text-[0.9375rem] leading-relaxed text-fg-muted">
        {feedback === "done" && tryPage.feedbackDone}
        {feedback === "not-useful" && tryPage.feedbackNotUseful}
        {feedback === "none" && tryPage.feedbackNote}
      </p>
    </div>
  );
}
