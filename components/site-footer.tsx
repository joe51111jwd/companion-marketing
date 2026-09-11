import Link from "next/link";

import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="site-footer mkt-footer">
      <div className="mkt-section-inner mkt-footer-inner">
        <div className="mkt-footer-top">
          <Wordmark />
          <nav aria-label="Footer" className="mkt-footer-links">
            <Link href="/#product">Product</Link>
            <Link href="/#trust">Trust</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/team">Team</Link>
          </nav>
        </div>
        <p className="mkt-footer-micro">
          Mac app · Screen Recording + Accessibility only · No ads · No training on your data
        </p>
        <p className="mkt-footer-copy">© {year} Companion</p>
      </div>
    </footer>
  );
}
