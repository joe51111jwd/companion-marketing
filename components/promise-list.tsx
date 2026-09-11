import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { optInExceptions, promises } from "@/lib/copy";

export function PromiseList() {
  return (
    <div className="space-y-6">
      <ol className="grid gap-6 md:grid-cols-2">
        {promises.items.map((promise, index) => (
          <Card
            as="li"
            key={promise.title}
            className={index === promises.items.length - 1 ? "md:col-span-2" : undefined}
          >
            <span
              aria-hidden="true"
              className="numeral inline-flex size-8 items-center justify-center rounded-full bg-accent-soft text-[0.8125rem] font-semibold text-accent"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <CardTitle className="mt-6">{promise.title}</CardTitle>
            <CardBody className="mt-2 max-w-[70ch]">{promise.line}</CardBody>
          </Card>
        ))}
      </ol>

      <div className="rounded-2xl border border-border bg-bg-subtle p-8">
        <h3 className="h3 text-fg">{optInExceptions.title}</h3>
        <dl className="mt-6 grid gap-6 md:grid-cols-2">
          {optInExceptions.items.map((item) => (
            <div key={item.title}>
              <dt className="text-[0.9375rem] font-semibold text-fg">{item.title}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.8125rem] text-fg-subtle">{optInExceptions.note}</p>
      </div>
    </div>
  );
}
