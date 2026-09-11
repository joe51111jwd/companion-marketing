import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import { pricing, signup } from "@/lib/copy";

import type { TrialPlan } from "./actions";
import { SignupForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Start a trial",
  description: signup.description,
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const defaultPlan: TrialPlan = plan === "team" ? "team" : "individual";

  return (
    <section aria-labelledby="signup-heading" className="py-16 sm:py-24">
      <div className="container-page grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <p className="eyebrow">{signup.eyebrow}</p>
          <h1 id="signup-heading" className="display mt-6 text-fg">
            {signup.title}
          </h1>
          <p className="lede mt-6 max-w-[46ch]">{signup.description}</p>

          <ul className="mt-12 border-t border-border">
            {signup.assurances.map((assurance) => (
              <li
                key={assurance}
                className="border-b border-border py-4 text-[0.9375rem] leading-relaxed text-fg-muted"
              >
                {assurance}
              </li>
            ))}
          </ul>

          <Card tone="subtle" padding="sm" className="mt-8">
            <p className="eyebrow">{pricing.guarantee.title}</p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-muted">
              {pricing.guarantee.body}
            </p>
          </Card>
        </div>

        <SignupForm defaultPlan={defaultPlan} />
      </div>
    </section>
  );
}
