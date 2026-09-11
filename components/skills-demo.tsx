"use client";

import { useId, useRef, useState } from "react";

import { WarmPainting } from "@/components/marketing/warm-painting";
import { useScrollProgress } from "@/components/marketing/use-scroll-progress";
import { StatusMark } from "@/components/status-mark";
import { Mark } from "@/components/wordmark";
import { productChrome, skillsDemo } from "@/lib/copy";
import { cn } from "@/lib/cn";
import { type RailStatus, railLabel } from "@/lib/status-language";

export function SkillsDemo() {
  const labelId = useId();
  const stage = useScrollProgress<HTMLDivElement>();
  const [running, setRunning] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const timer = useRef<number | null>(null);

  function clearTimer() {
    if (timer.current != null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function onRun() {
    clearTimer();
    setRunning(true);
    setCursor(0);
    let i = 0;
    const advance = () => {
      i += 1;
      if (i >= skillsDemo.steps.length) {
        setRunning(false);
        setCursor(skillsDemo.steps.length);
        return;
      }
      setCursor(i);
      timer.current = window.setTimeout(advance, 420);
    };
    timer.current = window.setTimeout(advance, 420);
  }

  function stepKind(index: number): RailStatus {
    if (cursor > index) return "done";
    if (running && cursor === index) return "selected";
    if (!running && cursor >= skillsDemo.steps.length && index < skillsDemo.steps.length) {
      return "done";
    }
    return "unread";
  }

  return (
    <div
      ref={stage.ref}
      style={stage.style}
      className="hero-demo-frame"
      role="region"
      aria-labelledby={labelId}
      aria-label="Recorded Skills product window: recorded steps and Run skill"
    >
      <WarmPainting className="hero-painting" />

      <div className="hero-menubar" aria-hidden="true">
        <div className="hero-menubar-left">
          <Mark size={13} />
          <span className="hero-menubar-app">{productChrome.menuBarApp}</span>
          <span className="hero-menu-pill hero-menubar-pill">{skillsDemo.localBadge}</span>
        </div>
        <span className="hero-menubar-clock">{productChrome.menuBarClock}</span>
      </div>

      <div className="hero-os-window skills-os-window">
        <div className="hero-os-titlebar">
          <div className="hero-traffic" aria-hidden="true">
            <span className="hero-traffic-dot hero-traffic-close" />
            <span className="hero-traffic-dot hero-traffic-min" />
            <span className="hero-traffic-dot hero-traffic-max" />
          </div>
          <p className="hero-os-title">{skillsDemo.windowTitle}</p>
          <div className="hero-os-title-actions">
            <span className="hero-preview-badge">{skillsDemo.exampleBadge}</span>
          </div>
        </div>

        <div className="hero-os-body skills-os-body">
          <aside className="hero-pane hero-pane-sidebar skills-flow-pane">
            <div className="hero-pane-label">
              <span id={labelId}>{skillsDemo.flowLabel}</span>
            </div>
            <ol className="skills-flow-list">
              {skillsDemo.flow.map((item) => (
                <li key={item.n}>
                  <span className="skills-flow-n">{item.n}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="skills-trust">{skillsDemo.trustLine}</p>
          </aside>

          <div className="hero-pane hero-pane-preview skills-main-pane">
            <header className="skills-main-header">
              <div>
                <p className="feature-card-kicker">{skillsDemo.eyebrow}</p>
                <h3 className="skills-skill-name">{skillsDemo.skillName}</h3>
                <p className="skills-skill-meta">{skillsDemo.skillMeta}</p>
              </div>
              <button
                type="button"
                className={cn("skills-run-btn", running && "is-running")}
                onClick={onRun}
                disabled={running}
              >
                <span className="skills-run-dot" aria-hidden="true" />
                {running ? "Running…" : skillsDemo.runLabel}
              </button>
            </header>

            <p className="skills-run-hint">{skillsDemo.runHint}</p>

            <p className="hero-pane-label skills-steps-label">{skillsDemo.stepsLabel}</p>
            <ol className="skills-step-list">
              {skillsDemo.steps.map((step, index) => {
                const kind = stepKind(index);
                return (
                  <li key={step.id} className={cn(kind === "selected" && "is-active", kind === "done" && "is-done")}>
                    <StatusMark kind={kind} label={railLabel(kind)} />
                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.meta}</span>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="skills-example-note">{skillsDemo.exampleNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
