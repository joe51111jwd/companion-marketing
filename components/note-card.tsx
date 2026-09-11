import { Mark } from "@/components/wordmark";
import { PRODUCT_NAME, hero } from "@/lib/copy";

const BAR_WIDTHS = ["72%", "94%", "58%"];

export function NoteCard() {
  const note = hero.noteCard;

  return (
    <figure className="rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-lift)]">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <span className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-fg">
          <Mark size={16} />
          {PRODUCT_NAME}
        </span>
        <span className="text-[0.75rem] text-fg-subtle">on your Mac</span>
      </div>

      <div className="pt-6">
        <p className="eyebrow">Read from screen</p>
        <div className="mt-4 space-y-2" aria-hidden="true">
          {BAR_WIDTHS.map((width, index) => (
            <div
              key={width}
              className="h-2 rounded-full bg-fg"
              style={{ width, opacity: 0.16 - index * 0.04 }}
            />
          ))}
        </div>
        <p className="mt-4 text-[0.8125rem] text-fg-subtle">
          Discarded within 10 seconds. Never written to disk.
        </p>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="eyebrow">{note.label}</p>
        <p className="mt-4 text-[1.0625rem] leading-snug font-semibold text-fg tight">
          {note.app} <span className="text-fg-subtle">·</span> {note.task}{" "}
          <span className="text-fg-subtle">·</span> {note.signal}{" "}
          <span className="text-fg-subtle">·</span>{" "}
          <span className="numeral">{note.minutes}</span>
        </p>
        <figcaption className="mt-4 text-[0.8125rem] leading-relaxed text-fg-muted">
          {note.footnote}
        </figcaption>
      </div>
    </figure>
  );
}
