import Link from "next/link";
import type { ReactNode } from "react";

import { Badge, Dot } from "@/components/ui/badge";
import { Wordmark } from "@/components/wordmark";
import { dashboard, footer, nav } from "@/lib/copy";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        {nav.skipToContent}
      </a>

      <header className="header-surface sticky top-0 z-50 border-b border-border">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label={nav.brandHome} className="rounded-md">
              <Wordmark />
            </Link>
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
            <span className="text-[0.9375rem] text-fg-muted">{dashboard.orgLabel}</span>
          </div>
          <Badge tone="quiet">
            <Dot />
            {dashboard.statusBadge}
          </Badge>
        </div>
      </header>

      <div className="container-page w-full flex-1 py-12 lg:grid lg:grid-cols-[184px_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Dashboard" className="mb-8 lg:mb-0">
          <ul className="flex gap-2 overflow-x-auto lg:sticky lg:top-28 lg:flex-col lg:gap-1">
            {dashboard.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={
                    item.current
                      ? "block rounded-lg bg-bg-subtle px-4 py-2 text-[0.9375rem] font-semibold whitespace-nowrap text-fg"
                      : "block rounded-lg px-4 py-2 text-[0.9375rem] whitespace-nowrap text-fg-muted transition-colors duration-150 hover:bg-bg-subtle hover:text-fg"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main id="main-content">{children}</main>
      </div>

      <footer className="border-t border-border bg-bg-subtle">
        <div className="container-page flex flex-col gap-2 py-8 text-[0.8125rem] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-fg">{footer.statement}</p>
          <p className="text-fg-subtle">{footer.legalNote}</p>
        </div>
      </footer>
    </div>
  );
}
