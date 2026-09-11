"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { cn } from "@/lib/cn";

type Step = "notice" | "teach" | "record" | "run";

const STEPS: { id: Step; label: string }[] = [
  { id: "notice", label: "Notice" },
  { id: "teach", label: "Teach" },
  { id: "record", label: "Record" },
  { id: "run", label: "Run" },
];

const WALKTHROUGH = [
  "Open Gmail compose for Friday parents",
  "Paste three bullets from Notes",
  "Ask Claude for a calm draft",
  "Review tone · send",
];

const RECORD_STEPS = [
  { title: "App focus", meta: "Gmail compose" },
  { title: "Clipboard local", meta: "Bullets stay on Mac" },
  { title: "Claude draft", meta: "Tool already installed" },
  { title: "Review / send", meta: "You stay in control" },
];

const JSON_PEEK = `{\n  "category": "email",\n  "task": "parent_update",\n  "signals": ["template_like", "repeat_9"],\n  "ai_tool_minutes": 6,\n  "seat_consented": true\n}`;

export function SkillsDemo() {
  const labelId = useId();
  const [step, setStep] = useState<Step>("notice");
  const [recording, setRecording] = useState(false);
  const [recordProgress, setRecordProgress] = useState(0);
  const [ran, setRan] = useState(false);

  const go = useCallback((next: Step) => {
    setStep(next);
    if (next !== "record") {
      setRecording(false);
      setRecordProgress(0);
    }
    if (next !== "run") setRan(false);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;
      }
      const map: Record<string, Step> = {
        "1": "notice",
        "2": "teach",
        "3": "record",
        "4": "run",
      };
      const next = map[event.key];
      if (next) go(next);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (!recording || step !== "record") return;
    if (recordProgress >= RECORD_STEPS.length) return;
    const t = window.setTimeout(() => setRecordProgress((n) => n + 1), 520);
    return () => window.clearTimeout(t);
  }, [recording, recordProgress, step]);

  function startRecord() {
    setRecording(true);
    setRecordProgress(0);
  }

  function runSkill() {
    setRan(true);
  }

  return (
    <div
      className="rs-frame"
      role="region"
      aria-labelledby={labelId}
      aria-label="Interactive Recorded Skills product window"
    >
      <div className="rs-titlebar">
        <div className="rs-traffic" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p id={labelId} className="rs-title">
          Companion · Recorded Skills
        </p>
        <span className="rs-title-spacer" aria-hidden="true" />
      </div>

      <div className="rs-tabs" role="tablist" aria-label="Recorded Skills steps">
        {STEPS.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={step === item.id}
            className={cn("rs-tab", step === item.id && "is-active")}
            onClick={() => go(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="rs-body">
        <aside className="rs-timeline" aria-live="polite">
          <p className="rs-kicker">Skill timeline</p>

          {step === "notice" && (
            <>
              <div className="rs-chip">Gmail · parent update · ~9× last week</div>
              <p className="rs-muted">
                Same reply shape keeps showing up. Companion offers a walkthrough — nothing recorded yet.
              </p>
              <button type="button" className="rs-action" onClick={() => go("teach")}>
                Open walkthrough
              </button>
            </>
          )}

          {step === "teach" && (
            <>
              <ol className="rs-steps">
                {WALKTHROUGH.map((line, index) => (
                  <li key={line}>
                    <span className="rs-step-n">{index + 1}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
              <p className="rs-muted">Walkthrough opens beside the work — Claude, ChatGPT, Copilot…</p>
              <button type="button" className="rs-action" onClick={() => go("record")}>
                Continue
              </button>
            </>
          )}

          {step === "record" && (
            <>
              <label className="rs-toggle">
                <input
                  type="checkbox"
                  checked={recording}
                  onChange={(event) => {
                    if (event.target.checked) startRecord();
                    else {
                      setRecording(false);
                      setRecordProgress(0);
                    }
                  }}
                />
                <span>Record this as a skill</span>
              </label>
              <ol className="rs-steps">
                {RECORD_STEPS.map((item, index) => {
                  const done = recording && index < recordProgress;
                  const active = recording && index === recordProgress;
                  return (
                    <li key={item.title} className={cn(done && "is-done", active && "is-active")}>
                      <span className="rs-step-n">{done ? "✓" : index + 1}</span>
                      <span>
                        <strong>{item.title}</strong>
                        <em>{item.meta}</em>
                      </span>
                    </li>
                  );
                })}
              </ol>
              <p className="rs-muted">You opt in. Steps stay on this Mac. Accessibility-first.</p>
              {recording && recordProgress >= RECORD_STEPS.length && (
                <button type="button" className="rs-action" onClick={() => go("run")}>
                  Save skill
                </button>
              )}
            </>
          )}

          {step === "run" && (
            <>
              <div className="rs-skill-card">
                <p className="rs-kicker">Saved skill</p>
                <h3>Friday parent update</h3>
                <p className="rs-muted">Gmail · 4 steps · local</p>
                <button type="button" className="rs-action" onClick={runSkill} disabled={ran}>
                  {ran ? "Running…" : "Run"}
                </button>
              </div>
              {ran && (
                <p className="rs-success" role="status">
                  One-button · 4 steps · ~6 min
                </p>
              )}
            </>
          )}

          <details className="rs-json">
            <summary>Content-free payload peek</summary>
            <pre>{JSON_PEEK}</pre>
          </details>
        </aside>

        <div className="rs-work" aria-hidden={false}>
          <div className="rs-work-chrome">
            <div className="rs-work-tabs">
              <span className="is-active">Gmail</span>
              <span>Claude</span>
            </div>
            <div className="rs-compose">
              <div className="rs-compose-row">
                <span>To</span>
                <span>[PERSON]</span>
              </div>
              <div className="rs-compose-row">
                <span>Subject</span>
                <span>Friday update — three notes</span>
              </div>
              <div className="rs-compose-body">
                <p>Hi [PERSON] —</p>
                <p>Three notes from this week, same shape as last Friday:</p>
                <ul>
                  <li>Reading group finished chapter four</li>
                  <li>Field trip permission still out</li>
                  <li>Early pickup on Thursday</li>
                </ul>
                <p>Thank you,</p>
              </div>
            </div>

            {(step === "teach" || step === "record") && (
              <div className="rs-overlay-card">
                <p className="rs-kicker">Walkthrough · beside the work</p>
                <ol>
                  {WALKTHROUGH.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ol>
              </div>
            )}

            {step === "notice" && (
              <div className="rs-overlay-card rs-overlay-soft">
                <p className="rs-kicker">Suggestion</p>
                <p>Parent update looks template-like (~9×). Teach a walkthrough?</p>
              </div>
            )}

            {step === "run" && ran && (
              <div className="rs-overlay-card">
                <p className="rs-kicker">Skill running</p>
                <p>Friday parent update · streamline complete</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
