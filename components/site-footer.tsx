import Link from "next/link";

import { Wordmark } from "@/components/wordmark";
import { footer, site } from "@/lib/copy";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="site-footer">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-fg-muted">
              {site.description}
            </p>
          </div>

          {footer.groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="eyebrow mb-4">{group.title}</h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="rounded-md text-[0.9375rem] text-fg-muted transition-colors duration-150 hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-16 border-t border-border pt-8 text-[0.9375rem] font-semibold text-fg">
          {footer.statement}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-[0.8125rem] text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legalNote}</p>
          <p className="numeral">{footer.copyright(year)}</p>
        </div>
      </div>
    </footer>
  );
}
