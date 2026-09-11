"use client";

import { StatusMark } from "@/components/status-mark";
import { WarmPainting } from "@/components/marketing/warm-painting";
import { useScrollProgress } from "@/components/marketing/use-scroll-progress";
import { layered, ladder, layeredUi, digestDemo } from "@/lib/copy";
import { railLabel } from "@/lib/status-language";

const ITEM = digestDemo.steps.find((step) => step.panel.kind === "item");
const suggestion =
  ITEM && ITEM.panel.kind === "item" ? ITEM.panel.suggestion : "";

const PAYLOAD = `{\n  \"task_type\": \"reply_email\",\n  \"manual_signals\": [\"template_like\"],\n  \"repetition_key\": \"hk_8f3a\u2026\",\n  \"est_minutes\": 5,\n  \"ai_tool_in_use\": false,\n  \"app_category\": \"email\",\n  \"ts\": \"2026-09-08T14:35:00Z\"\n}`;

export function LayeredWindows() {
  const stage = useScrollProgress<HTMLElement>();

  return (
    <section
      ref={stage.ref}
      style={stage.style}
      className="layered"
      aria-labelledby="layered-heading"
    >
      <div className="layered-copy">
        <p className="feature-kicker">{layered.kicker}</p>
        <h2 id="layered-heading" className="feature-title">
          {layered.title}
        </h2>
        <p className="feature-body">{layered.body}</p>
      </div>

      <div className="layered-stage">
        <WarmPainting className="layered-painting" />

        <article className="os-window layered-window layered-window-main">
          <WindowChrome title={layeredUi.todayTitle} />
          <div className="layered-today">
            <p className="layered-today-kicker">{layeredUi.time}</p>
            <h3 className="layered-today-title">{layeredUi.headline}</h3>
            <ol className="layered-today-list">
              {layeredUi.items.map((item, index) => (
                <li key={item.index} className={index === 0 ? "is-active" : undefined}>
                  <StatusMark
                    kind={index === 0 ? "selected" : "unread"}
                    label={railLabel(index === 0 ? "selected" : "unread")}
                  />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.meta}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="layered-today-quote">{suggestion}</p>
          </div>
        </article>

        <article className="os-window layered-window layered-window-sees">
          <WindowChrome title={layeredUi.seesTitle} />
          <ul className="layered-sees">
            {layeredUi.sees.map((row) => (
              <li key={row.time}>
                <StatusMark kind={row.line.startsWith("skipped") ? "seen" : "observing"} />
                <span className="layered-sees-time">{row.time}</span>
                <span>{row.line}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="os-window layered-window layered-window-cli">
          <WindowChrome title={layeredUi.leavesTitle} />
          <pre className="layered-cli">
            <code>{PAYLOAD}</code>
          </pre>
          <p className="layered-cli-note">{ladder.neverLeaves.label}: {ladder.neverLeaves.items.join(" \u00b7 ")}</p>
        </article>
      </div>
    </section>
  );
}

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="hero-os-titlebar">
      <div className="hero-traffic" aria-hidden="true">
        <span className="hero-traffic-dot hero-traffic-close" />
        <span className="hero-traffic-dot hero-traffic-min" />
        <span className="hero-traffic-dot hero-traffic-max" />
      </div>
      <p className="hero-os-title">{title}</p>
      <div className="hero-os-title-spacer" aria-hidden="true" />
    </div>
  );
}
