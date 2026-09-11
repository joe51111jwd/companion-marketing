import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type TableColumn = { key: string; label: string };
export type TableRow = { key: string; cells: Record<string, ReactNode> };

type TableProps = {
  columns: TableColumn[];
  rows: TableRow[];
  caption?: string;
  captionVisible?: boolean;
  empty?: ReactNode;
  className?: string;
};

/**
 * One semantic <table>. Below 720px the .ladder rules in globals.css turn each row
 * into a labelled block (via data-label), so nothing scrolls sideways at 400px.
 */
export function Table({
  columns,
  rows,
  caption,
  captionVisible = false,
  empty,
  className,
}: TableProps) {
  if (rows.length === 0 && empty) {
    return <>{empty}</>;
  }

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="ladder">
        {caption && (
          <caption
            className={cn(
              "text-start",
              captionVisible ? "mb-6 text-[0.9375rem] text-fg-muted" : "sr-only",
            )}
          >
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {columns.map((column) => (
                <td key={column.key} data-label={column.label}>
                  {row.cells[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border-strong px-6 py-16 text-center">
      <p className="h3 text-fg">{title}</p>
      <p className="mx-auto mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-fg-muted">
        {body}
      </p>
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}
