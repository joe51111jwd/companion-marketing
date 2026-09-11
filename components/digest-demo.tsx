"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";

import { StatusMark, StepMark } from "@/components/status-mark";
import { WarmPainting } from "@/components/marketing/warm-painting";
import { useScrollProgress } from "@/components/marketing/use-scroll-progress";
import { Mark } from "@/components/wordmark";
import { digestDemo, gmailPreview, PRODUCT_NAME, productChrome } from "@/lib/copy";
import { cn } from "@/lib/cn";
import {
  type GrantPhase,
  type MenuBarStatus,
  liveProofChipKind,
  menuBarLabel,
  menuBarStatusForPanel,
  railLabel,
  railStatusForStep,
  tryItStepStatus,
} from "@/lib/status-language";

type Step = (typeof digestDemo.steps)[number];

const SEES = [
  { app: "Gmail", note: "reply email · looks template-like · 5 min", kept: true },
  { app: "Notes", note: "meeting notes · manual formatting · 5 min", kept: true },
  { app: "Numbers", note: "spreadsheet · repeated lookup · 5 min", kept: true },
  { app: "1Password", note: "secure field — skipped", kept: false },
] as const;

const INITIAL_STEP = Math.max(
  0,
  digestDemo.steps.findIndex((item) => item.panel.kind === "item"),
);

export function DigestDemo() {
  const [index, setIndex] = useState(INITIAL_STEP);
  const [grantPhase, setGrantPhase] = useState<GrantPhase>("granted");
  const labelId = useId();
  const total = digestDemo.steps.length;
  const step = digestDemo.steps[index];
  const stage = useScrollProgress<HTMLDivElement>();

  const go = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  const previewTitle = useMemo(() => {
    switch (step.panel.kind) {
      case "access":
        return "Live proof · Access";
      case "notification":
        return "Menu bar · notification";
      case "item":
        return "Gmail · parent update";
      case "walkthrough":
        return "Claude · beside Gmail";
      default:
        return "Today · Wednesday";
    }
  }, [step.panel.kind]);

  const tryItIndex = digestDemo.steps.findIndex((item) => item.panel.kind === "walkthrough");
  const followupIndex = digestDemo.steps.findIndex((item) => item.panel.kind === "followup");
  const menuBarKind = menuBarStatusForPanel(step.panel.kind, grantPhase);
  const chipLabel = menuBarLabel(menuBarKind);

  return (
    <div
      ref={stage.ref}
      style={stage.style}
      className="hero-demo-frame"
      role="region"
      aria-labelledby={labelId}
      aria-label="Interactive Companion desktop demo: morning digest, Try-it steps, and What it sees"
    >
      <WarmPainting className="hero-painting" />
      <MenuBar kind={menuBarKind} label={chipLabel} />

      <div className="hero-os-window">
        <div className="hero-os-titlebar">
          <div className="hero-traffic" aria-hidden="true">
            <span className="hero-traffic-dot hero-traffic-close" />
            <span className="hero-traffic-dot hero-traffic-min" />
            <span className="hero-traffic-dot hero-traffic-max" />
          </div>
          <p className="hero-os-title">{productChrome.desktopTitle}</p>
          <div className="hero-os-title-actions">
            <span className="hero-os-get">{productChrome.getApp}</span>
          </div>
        </div>

        <div className="hero-os-body">
          <aside className="hero-pane hero-pane-sidebar">
            <div className="hero-pane-label">
              <span id={labelId}>This morning · {total}</span>
              <StatusChip kind={menuBarKind} label={chipLabel} />
            </div>
            <ol className="hero-sidebar-list">
              {digestDemo.steps.map((item, i) => {
                const active = i === index;
                const railKind = railStatusForStep(i, index, tryItIndex, followupIndex);
                const pipName = railLabel(railKind);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-current={active ? "step" : undefined}
                      aria-label={`${pipName}. ${item.title}`}
                      data-rail-status={railKind}
                      className={cn("hero-sidebar-row", active && "is-active")}
                    >
                      <span className="hero-sidebar-icon">
                        <StatusMark kind={railKind} />
                      </span>
                      <span className="hero-sidebar-copy">
                        <span className="hero-sidebar-top">
                          <span className="hero-sidebar-title">{item.title}</span>
                          <span className="hero-sidebar-time">{item.label}</span>
                        </span>
                        <span className="hero-sidebar-snippet">{item.body}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="hero-sidebar-foot">
              <span>Menu bar only</span>
              <span>{digestDemo.controls.stepOf(index + 1, total)}</span>
            </div>
          </aside>

          <section className="hero-pane hero-pane-agent">
            <header className="hero-agent-header">
              <span>{step.title}</span>
              <span className="hero-agent-meta">{step.label}</span>
            </header>
            <div key={step.id} className="hero-agent-scroll demo-step-enter">
              <AgentTranscript
                step={step}
                grantPhase={grantPhase}
                onGrantPhase={setGrantPhase}
                tryItComplete={step.panel.kind === "followup"}
              />
            </div>
            <form
              className="hero-composer"
              onSubmit={(event) => {
                event.preventDefault();
                go(index + 1);
              }}
            >
              <p className="hero-composer-input hero-composer-static">
                {productChrome.composerPlaceholder}
              </p>
              <div className="hero-composer-bar">
                <div className="hero-composer-pills">
                  {productChrome.composerPills.map((pill) => (
                    <span key={pill}>{pill}</span>
                  ))}
                </div>
                <button type="submit" className="hero-composer-send" aria-label={productChrome.sendLabel}>
                  ↑
                </button>
              </div>
            </form>
          </section>

          <section className="hero-pane hero-pane-preview">
            <div className="hero-preview-chrome">
              <span className="hero-preview-nav" aria-hidden="true">
                ‹ › ↻
              </span>
              <span className="hero-preview-url">{previewTitle}</span>
              <span className="hero-preview-badge">{digestDemo.exampleBadge}</span>
            </div>
            <div key={`preview-${step.id}`} className="hero-preview-body demo-step-enter">
              <PreviewPanel
                step={step}
                grantPhase={grantPhase}
                onGrantPhase={setGrantPhase}
                tryItComplete={step.panel.kind === "followup"}
              />
            </div>
          </section>
        </div>
      </div>

      <aside className="hero-notif-float" aria-hidden={step.panel.kind !== "notification"}>
        <span className="hero-notif-mark">
          <Mark size={12} />
        </span>
        <div>
          <p className="hero-notif-app">{productChrome.notificationApp}</p>
          <p className="hero-notif-title">{productChrome.notificationTitle}</p>
          <p className="hero-notif-sub">{productChrome.notificationBody}</p>
        </div>
      </aside>
    </div>
  );
}

function StatusChip({ kind, label }: { kind: MenuBarStatus; label: string }) {
  return (
    <span className={cn("hero-menu-pill", `is-${kind}`)} data-status={kind}>
      <StatusMark kind={kind} />
      {label}
    </span>
  );
}

function MenuBar({ kind, label }: { kind: MenuBarStatus; label: string }) {
  return (
    <div className="hero-menubar" aria-hidden="true">
      <div className="hero-menubar-left">
        <Mark size={13} />
        <span className="hero-menubar-app">{productChrome.menuBarApp}</span>
        <span className={cn("hero-menu-pill hero-menubar-pill", `is-${kind}`)} data-status={kind}>
          <StatusMark kind={kind} />
          {label}
        </span>
      </div>
      <span className="hero-menubar-clock">{productChrome.menuBarClock}</span>
    </div>
  );
}

function GrantControls({
  grantPhase,
  onGrantPhase,
}: {
  grantPhase: GrantPhase;
  onGrantPhase: (phase: GrantPhase) => void;
}) {
  const note =
    grantPhase === "granted"
      ? digestDemo.controls.grantedNote
      : grantPhase === "asking"
        ? digestDemo.controls.askingNote
        : digestDemo.controls.setupNote;

  return (
    <div className="hero-grant">
      <p>{note}</p>
      <div className="hero-grant-actions">
        {grantPhase === "setup" ? (
          <button type="button" className="hero-grant-btn" onClick={() => onGrantPhase("asking")}>
            {digestDemo.controls.askPermission}
          </button>
        ) : null}
        {grantPhase !== "granted" ? (
          <button type="button" className="hero-grant-btn is-primary" onClick={() => onGrantPhase("granted")}>
            {digestDemo.controls.grantPermission}
          </button>
        ) : (
          <button type="button" className="hero-grant-btn" onClick={() => onGrantPhase("asking")}>
            {digestDemo.controls.revokePermission}
          </button>
        )}
      </div>
    </div>
  );
}

function AgentTranscript({
  step,
  grantPhase,
  onGrantPhase,
  tryItComplete,
}: {
  step: Step;
  grantPhase: GrantPhase;
  onGrantPhase: (phase: GrantPhase) => void;
  tryItComplete: boolean;
}) {
  const panel = step.panel;
  const proofKind = liveProofChipKind(grantPhase === "granted");
  return (
    <div className="hero-transcript">
      <div className="hero-bubble hero-bubble-user">
        <p>{step.body}</p>
      </div>

      {panel.kind === "access" ? (
        <>
          <div className="hero-thought">{panel.headline}</div>
          <div className="hero-bubble">
            <p className="hero-bubble-strong">{panel.sub}</p>
            <div className="hero-file-chip">
              <StatusChip kind={proofKind} label={menuBarLabel(proofKind)} />
            </div>
            <GrantControls grantPhase={grantPhase} onGrantPhase={onGrantPhase} />
          </div>
        </>
      ) : null}

      {panel.kind === "notification" ? (
        <>
          <div className="hero-thought">Quiet notification · menu bar</div>
          <div className="hero-bubble">
            <p className="hero-bubble-strong">{panel.headline}</p>
            <p>{panel.sub}</p>
          </div>
        </>
      ) : null}

      {panel.kind === "item" ? (
        <>
          <div className="hero-thought">Written from an example week</div>
          <div className="hero-bubble">
            <p className="hero-mono">{panel.evidence}</p>
            <p className="mt-3">{panel.suggestion}</p>
            <div className="hero-file-chip">
              <span>{panel.tool}</span>
              <span className="hero-file-chip-accent">Try it →</span>
            </div>
          </div>
        </>
      ) : null}

      {panel.kind === "walkthrough" || panel.kind === "followup" ? (
        panel.kind === "walkthrough" ? (
          <>
            <div className="hero-thought">{panel.tool}</div>
            <div className="hero-bubble">
              <p className="hero-bubble-strong">Walkthrough opens beside the work.</p>
              <TryItSteps lines={panel.steps ?? []} complete={tryItComplete} />
            </div>
          </>
        ) : (
          <>
            <div className="hero-thought">Next morning</div>
            <div className="hero-bubble">
              <p className="hero-bubble-strong">{panel.headline}</p>
              <p>{panel.note}</p>
              <div className="hero-file-chip">
                <StatusChip kind="done" label={menuBarLabel("done")} />
              </div>
            </div>
          </>
        )
      ) : null}
    </div>
  );
}

function TryItSteps({ lines, complete }: { lines: readonly string[]; complete: boolean }) {
  const filled = complete ? lines.length : 0;
  return (
    <ol className="hero-step-list">
      {lines.map((line, i) => (
        <li key={line}>
          <StepMark index={i} state={tryItStepStatus(i, filled, lines.length)} />
          <span>{line}</span>
        </li>
      ))}
    </ol>
  );
}

function PreviewPanel({
  step,
  grantPhase,
  onGrantPhase,
  tryItComplete,
}: {
  step: Step;
  grantPhase: GrantPhase;
  onGrantPhase: (phase: GrantPhase) => void;
  tryItComplete: boolean;
}) {
  const panel = step.panel;

  if (panel.kind === "access") {
    const proofKind = liveProofChipKind(grantPhase === "granted");
    return (
      <div className="hero-preview-card">
        <p className="hero-preview-kicker">{panel.headline}</p>
        <h3 className="hero-preview-h">{panel.sub}</h3>
        <div className="hero-file-chip">
          <StatusChip kind={proofKind} label={menuBarLabel(proofKind)} />
        </div>
        <GrantControls grantPhase={grantPhase} onGrantPhase={onGrantPhase} />
        <p className="hero-preview-note">{digestDemo.exampleNote}</p>
      </div>
    );
  }

  if (panel.kind === "notification") {
    return (
      <div className="hero-preview-card">
        <div className="hero-notif">
          <span className="hero-notif-mark">
            <Mark size={14} />
          </span>
          <div>
            <p className="hero-notif-app">{PRODUCT_NAME}</p>
            <p className="hero-notif-title">{panel.headline}</p>
            <p className="hero-notif-sub">{panel.sub}</p>
          </div>
        </div>
        <p className="hero-preview-note">{digestDemo.exampleNote}</p>
      </div>
    );
  }

  if (panel.kind === "item") {
    return <GmailPreview />;
  }

  if (panel.kind === "walkthrough") {
    const lines = panel.steps ?? [];
    return (
      <div className="hero-preview-card">
        <p className="hero-preview-kicker">{panel.tool}</p>
        <h3 className="hero-preview-h">Try-it steps</h3>
        <ol className="hero-preview-steps">
          {lines.map((line, i) => (
            <li key={line}>
              <StepMark
                index={i}
                state={tryItStepStatus(i, tryItComplete ? lines.length : 0, lines.length)}
              />
              <span>{line}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (panel.kind === "followup") {
    return (
      <div className="hero-preview-card hero-preview-card-center">
        <p className="hero-preview-kicker">Wednesday</p>
        <h3 className="hero-preview-display">{panel.headline}</h3>
        <div className="hero-file-chip" style={{ justifyContent: "center", marginTop: 12 }}>
          <StatusChip kind="done" label={menuBarLabel("done")} />
        </div>
        <p className="hero-preview-note">{panel.note}</p>
      </div>
    );
  }

  return (
    <div className="hero-preview-card">
      <p className="hero-preview-kicker">What it sees</p>
      <h3 className="hero-preview-h">Local notes only</h3>
      <ul className="hero-sees-list">
        {SEES.map((row) => (
          <li key={row.app} className={cn(!row.kept && "is-skipped")}>
            <StatusMark kind={row.kept ? "observing" : "seen"} />
            <span className="hero-sees-app">{row.app}</span>
            <span className="hero-sees-note">{row.note}</span>
            <span className="hero-sees-flag">{row.kept ? "kept" : "skipped"}</span>
          </li>
        ))}
      </ul>
      <p className="hero-preview-note">
        Screen content is discarded within seconds. These notes stay on this Mac.
      </p>
    </div>
  );
}

function GmailPreview() {
  return (
    <div className="gmail-preview">
      <div className="gmail-preview-row">
        <span>{gmailPreview.toLabel}</span>
        <span>{gmailPreview.toValue}</span>
      </div>
      <div className="gmail-preview-row">
        <span>{gmailPreview.subjectLabel}</span>
        <span>{gmailPreview.subject}</span>
      </div>
      <div className="gmail-preview-body">
        <p>{gmailPreview.greeting}</p>
        <p>{gmailPreview.intro}</p>
        <ul>
          {gmailPreview.bullets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>{gmailPreview.signoff}</p>
      </div>
      <p className="hero-preview-note">{gmailPreview.note}</p>
    </div>
  );
}
