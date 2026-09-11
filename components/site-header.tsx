import Link from "next/link";

import { Wordmark } from "@/components/wordmark";

const LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Trust", href: "/#trust" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" aria-label="Companion home" className="site-nav-brand">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="site-nav-center">
          {LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="site-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-right">
          <Link href="/signup" className="hero-cta-primary site-nav-download">
            Start free trial
          </Link>
        </div>
      </div>
    </header>
  );
}
