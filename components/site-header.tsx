import Link from "next/link";

import { Wordmark } from "@/components/wordmark";
import { nav } from "@/lib/copy";

export function SiteHeader() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" aria-label={nav.brandHome} className="site-nav-brand">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="site-nav-center">
          {nav.links.map((link) => (
            <Link key={link.label} href={link.href} className="site-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-right">
          <Link href={nav.signIn.href} className="site-nav-link site-nav-signin">
            {nav.signIn.label}
          </Link>
          <Link href={nav.primaryCta.href} className="hero-cta-primary site-nav-download">
            {nav.primaryCta.label}
            <DownloadGlyph />
          </Link>
        </div>
      </div>
    </header>
  );
}

function DownloadGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 2v7.2M4.2 7.4 7 10.2l2.8-2.8M2.5 12h9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
