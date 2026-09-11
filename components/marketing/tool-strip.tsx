import { toolStrip } from "@/lib/copy";

export function ToolStrip() {
  return (
    <section className="tool-strip" aria-label={toolStrip.label}>
      <p className="tool-strip-label">{toolStrip.label}</p>
      <ul className="tool-strip-list">
        {toolStrip.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
