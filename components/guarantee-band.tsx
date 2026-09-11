import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";
import { riskReversal } from "@/lib/copy";

export function GuaranteeBand({
  ctaHref = "/signup",
  ctaLabel = "Start the 7-day trial",
}: {
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section
      aria-labelledby="guarantee-heading"
      className="guarantee-band py-16 sm:py-20"
    >
      <div className="container-page max-w-[720px] text-center">
        <p className="eyebrow">Risk reversal</p>
        <h2
          id="guarantee-heading"
          className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08] font-semibold [letter-spacing:-0.03em] text-balance"
        >
          {riskReversal.headline}
        </h2>
        <p className="mt-6 text-[1.0625rem] leading-relaxed opacity-80">{riskReversal.body}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Link href={ctaHref} className={buttonStyles("primary", "lg")}>
            {ctaLabel}
          </Link>
          <p className="max-w-[52ch] text-[0.8125rem] leading-relaxed opacity-65">
            {riskReversal.individual} {riskReversal.team}
          </p>
        </div>
      </div>
    </section>
  );
}
