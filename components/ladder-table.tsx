import { MarkerList } from "@/components/ui/marker-list";
import { Table, type TableRow } from "@/components/ui/table";
import { ladder } from "@/lib/copy";

const columns = [
  { key: "hop", label: ladder.columns[0] },
  { key: "data", label: ladder.columns[1] },
  { key: "lifetime", label: ladder.columns[2] },
  { key: "where", label: ladder.columns[3] },
];

const rows: TableRow[] = ladder.rows.map((row) => ({
  key: row.hop,
  cells: {
    hop: row.hop,
    data: row.data,
    lifetime: row.lifetime,
    where: <WhereTag where={row.where} />,
  },
}));

function WhereTag({ where }: { where: string }) {
  const onServer = where.includes("server");
  return (
    <span
      className={
        onServer
          ? "font-medium text-fg"
          : "font-medium text-accent"
      }
    >
      {where}
    </span>
  );
}

export function LadderTable() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-card)] sm:p-12">
      <Table columns={columns} rows={rows} caption="What is kept at each hop" />
      <p className="mt-8 max-w-[70ch] text-[0.9375rem] leading-relaxed text-fg-muted">
        {ladder.footnote}
      </p>
    </div>
  );
}

export function FieldLists() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-bg-subtle p-8">
        <p className="eyebrow">{ladder.leavesByDefault.label}</p>
        <FieldGroup
          label={ladder.leavesByDefault.perObservationLabel}
          fields={ladder.leavesByDefault.perObservation}
          className="mt-6"
        />
        <FieldGroup
          label={ladder.leavesByDefault.perDayLabel}
          fields={ladder.leavesByDefault.perDay}
          className="mt-6"
        />
      </div>

      <div className="rounded-2xl border border-border bg-bg-subtle p-8">
        <p className="eyebrow">{ladder.neverLeaves.label}</p>
        <MarkerList items={ladder.neverLeaves.items} className="mt-6" />
        <p className="mt-6 text-[0.8125rem] leading-relaxed text-fg-muted">
          Not &ldquo;we delete it later.&rdquo; It is never in a request body in the first place.
        </p>
      </div>
    </div>
  );
}

function FieldGroup({
  label,
  fields,
  className,
}: {
  label: string;
  fields: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-[0.8125rem] font-semibold text-fg-muted">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {fields.map((field) => (
          <li
            key={field}
            className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[0.75rem] text-fg-muted"
          >
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
}
