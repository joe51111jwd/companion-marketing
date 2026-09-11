import Link from "next/link";

import { StatusMark } from "@/components/status-mark";
import {
  allowlistPreview,
  digestPreview,
  features,
  skillsDemo,
  ladder,
  managerPreview,
  optInExceptions,
  outboundPreview,
} from "@/lib/copy";
import { cn } from "@/lib/cn";
import { railLabel } from "@/lib/status-language";

export function FeatureRows() {
  return (
    <div className="feature-stack">
      {features.items.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          className={cn("feature-row", index % 2 === 1 && "is-reverse")}
          aria-labelledby={`${item.id}-heading`}
        >
          <div className="feature-copy">
            <p className="feature-kicker">{item.kicker}</p>
            <h2 id={`${item.id}-heading`} className="feature-title">
              {item.title}
            </h2>
            <p className="feature-body">{item.body}</p>
            {item.id === "screen" ? (
              <p className="feature-optin">
                {optInExceptions.title} {optInExceptions.note}
              </p>
            ) : null}
            {"aside" in item && item.aside ? (
              <blockquote className="feature-aside">{item.aside}</blockquote>
            ) : null}
            <Link href={item.href} className="feature-link">
              {item.link} →
            </Link>
          </div>
          <div className="feature-ui">
            <FeaturePreview id={item.id} />
          </div>
        </section>
      ))}
    </div>
  );
}

function FeaturePreview({ id }: { id: string }) {
  if (id === "skills") return <SkillsCard />;
  if (id === "allowlist") return <AllowlistCard />;
  if (id === "screen") return <OutboundCard />;
  if (id === "teams") return <ManagerCard />;
  return <DigestCard />;
}

function SkillsCard() {
  return (
    <article className="os-window feature-card">
      <div className="hero-os-titlebar">
        <div className="hero-traffic" aria-hidden="true">
          <span className="hero-traffic-dot hero-traffic-close" />
          <span className="hero-traffic-dot hero-traffic-min" />
          <span className="hero-traffic-dot hero-traffic-max" />
        </div>
        <p className="hero-os-title">{skillsDemo.windowTitle}</p>
        <div className="hero-os-title-spacer" />
      </div>
      <div className="feature-card-body">
        <p className="feature-card-kicker">{skillsDemo.skillName}</p>
        <ol className="feature-digest">
          {skillsDemo.steps.map((item, index) => (
            <li key={item.id}>
              <StatusMark
                kind={index === 0 ? "selected" : "unread"}
                label={railLabel(index === 0 ? "selected" : "unread")}
              />
              <div>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="skills-feature-run" aria-hidden="true">
          <span className="skills-run-dot" />
          {skillsDemo.runLabel}
        </div>
        <p className="feature-card-note">{skillsDemo.trustLine}</p>
      </div>
    </article>
  );
}

function DigestCard() {
  return (
    <article className="os-window feature-card">
      <div className="hero-os-titlebar">
        <div className="hero-traffic" aria-hidden="true">
          <span className="hero-traffic-dot hero-traffic-close" />
          <span className="hero-traffic-dot hero-traffic-min" />
          <span className="hero-traffic-dot hero-traffic-max" />
        </div>
        <p className="hero-os-title">{digestPreview.windowTitle}</p>
        <div className="hero-os-title-spacer" />
      </div>
      <div className="feature-card-body">
        <p className="feature-card-kicker">{digestPreview.headline}</p>
        <ol className="feature-digest">
          {digestPreview.items.map((item, index) => (
            <li key={item.title}>
              <StatusMark
                kind={index === 0 ? "selected" : "unread"}
                label={railLabel(index === 0 ? "selected" : "unread")}
              />
              <div>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

function AllowlistCard() {
  return (
    <article className="os-window feature-card">
      <div className="hero-os-titlebar">
        <div className="hero-traffic" aria-hidden="true">
          <span className="hero-traffic-dot hero-traffic-close" />
          <span className="hero-traffic-dot hero-traffic-min" />
          <span className="hero-traffic-dot hero-traffic-max" />
        </div>
        <p className="hero-os-title">{allowlistPreview.title}</p>
        <div className="hero-os-title-spacer" />
      </div>
      <ul className="allow-list">
        {allowlistPreview.rows.map((row) => (
          <li key={row.name} className={cn(row.locked && "is-locked")}>
            <span>{row.name}</span>
            {row.locked ? (
              <span className="allow-lock">{row.note}</span>
            ) : (
              <span className={cn("allow-toggle", row.on && "is-on")} aria-hidden="true" />
            )}
          </li>
        ))}
      </ul>
      <p className="feature-card-note">{allowlistPreview.footnote}</p>
    </article>
  );
}

function OutboundCard() {
  return (
    <article className="os-window feature-card">
      <div className="hero-os-titlebar">
        <div className="hero-traffic" aria-hidden="true">
          <span className="hero-traffic-dot hero-traffic-close" />
          <span className="hero-traffic-dot hero-traffic-min" />
          <span className="hero-traffic-dot hero-traffic-max" />
        </div>
        <p className="hero-os-title">{outboundPreview.title}</p>
        <div className="hero-os-title-spacer" />
      </div>
      <div className="feature-card-body">
        <p className="feature-card-kicker">{outboundPreview.subtitle}</p>
        <ul className="outbound-chips">
          {ladder.leavesByDefault.perObservation.map((field) => (
            <li key={field}>{field}</li>
          ))}
        </ul>
        <p className="feature-card-note">{outboundPreview.explanation}</p>
      </div>
    </article>
  );
}

function ManagerCard() {
  return (
    <article className="os-window feature-card">
      <div className="hero-os-titlebar">
        <div className="hero-traffic" aria-hidden="true">
          <span className="hero-traffic-dot hero-traffic-close" />
          <span className="hero-traffic-dot hero-traffic-min" />
          <span className="hero-traffic-dot hero-traffic-max" />
        </div>
        <p className="hero-os-title">{managerPreview.title}</p>
        <span className="hero-preview-badge">{managerPreview.badge}</span>
      </div>
      <dl className="manager-stats">
        {managerPreview.rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="feature-card-note">{managerPreview.note}</p>
    </article>
  );
}
