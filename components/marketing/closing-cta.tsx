import Link from "next/link";

import { closing } from "@/lib/copy";

export function ClosingCta() {
  return (
    <section className="closing-cta" aria-labelledby="closing-heading">
      <h2 id="closing-heading" className="closing-cta-title">
        {closing.title}
      </h2>
      <Link href={closing.cta.href} className="hero-cta-primary closing-cta-button">
        {closing.cta.label}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 2v7.2M4.2 7.4 7 10.2l2.8-2.8M2.5 12h9"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      {"waitlist" in closing && closing.waitlist ? (
        <p className="closing-waitlist">
          <Link href={closing.waitlist.href}>{closing.waitlist.label} →</Link>
        </p>
      ) : null}
      <p className="closing-cta-note">{closing.body}</p>
    </section>
  );
}
