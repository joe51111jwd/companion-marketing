import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MarkerList } from "@/components/ui/marker-list";
import { EmptyState, Table } from "@/components/ui/table";
import { dashboard } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Adoption",
  description: dashboard.subtitle,
};

const seatColumns = dashboard.seats.columns.map((label, index) => ({
  key: `col-${index}`,
  label,
}));

export default function DashboardPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="h2 text-fg">{dashboard.title}</h1>
        <p className="mt-2 max-w-[68ch] text-[0.9375rem] leading-relaxed text-fg-muted">
          {dashboard.subtitle}
        </p>
      </header>

      <section aria-labelledby="parity-heading">
        <Card tone="subtle" padding="md">
          <h2 id="parity-heading" className="eyebrow">
            What every seat can see
          </h2>
          <p className="mt-4 max-w-[72ch] text-[1.0625rem] leading-relaxed text-fg tight">
            {dashboard.parityLine}
          </p>
          <p className="mt-4 max-w-[72ch] text-[0.8125rem] leading-relaxed text-fg-muted">
            {dashboard.parityNote}
          </p>
        </Card>
      </section>

      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="eyebrow">
          This week
        </h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dashboard.stats.map((stat) => (
            <Card key={stat.label} padding="sm">
              <dt className="text-[0.8125rem] font-semibold text-fg-muted">{stat.label}</dt>
              <dd className="numeral mt-4 text-[2rem] leading-none font-semibold text-fg">
                {stat.value}
              </dd>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-fg-subtle">{stat.note}</p>
            </Card>
          ))}
        </dl>
      </section>

      <section aria-labelledby="seats-heading">
        <h2 id="seats-heading" className="h3 text-fg">
          {dashboard.seats.title}
        </h2>
        <p className="mt-2 max-w-[68ch] text-[0.9375rem] leading-relaxed text-fg-muted">
          {dashboard.seats.description}
        </p>
        <div className="mt-6">
          <Table
            columns={seatColumns}
            rows={[]}
            caption={dashboard.seats.title}
            empty={
              <EmptyState
                title={dashboard.seats.empty.title}
                body={dashboard.seats.empty.body}
              />
            }
          />
        </div>
      </section>

      <section aria-labelledby="boundaries-heading">
        <h2 id="boundaries-heading" className="h3 text-fg">
          Where the line is
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[dashboard.canSee, dashboard.cannotSee, dashboard.cannotDo].map((group) => (
            <Card key={group.title} padding="sm">
              <h3 className="text-[0.9375rem] font-semibold text-fg">{group.title}</h3>
              <MarkerList items={group.items} className="mt-4" />
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="export-heading">
        <Card padding="md">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 id="export-heading" className="h3 text-fg">
                {dashboard.export.title}
              </h2>
              <p className="mt-2 max-w-[56ch] text-[0.9375rem] leading-relaxed text-fg-muted">
                {dashboard.export.body}
              </p>
            </div>
            <Button variant="secondary" disabled>
              {dashboard.export.action}
            </Button>
          </div>
          <p className="mt-6 border-t border-border pt-6 text-[0.8125rem] text-fg-subtle">
            {dashboard.export.empty}
          </p>
        </Card>
      </section>

      <p className="max-w-[72ch] text-[0.8125rem] leading-relaxed text-fg-subtle">
        {dashboard.controller}
      </p>
    </div>
  );
}
