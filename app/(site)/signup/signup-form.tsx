"use client";

import { useActionState, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signup } from "@/lib/copy";

import { startTrial, type SignupState, type TrialPlan } from "./actions";

const INITIAL: SignupState = { status: "idle" };

export function SignupForm({ defaultPlan }: { defaultPlan: TrialPlan }) {
  const [instance, setInstance] = useState(0);
  return (
    <TrialForm
      key={instance}
      defaultPlan={defaultPlan}
      onReset={() => setInstance((value) => value + 1)}
    />
  );
}

function TrialForm({
  defaultPlan,
  onReset,
}: {
  defaultPlan: TrialPlan;
  onReset: () => void;
}) {
  const [state, formAction, isPending] = useActionState(startTrial, INITIAL);

  if (state.status === "started") {
    const planLabel =
      signup.plan.options.find((option) => option.value === state.plan)?.trialName ??
      state.plan;

    return (
      <Card padding="lg" aria-live="polite">
        <p className="eyebrow">{signup.trialNote}</p>
        <h2 className="h2 mt-4 text-fg">{signup.success.title}</h2>
        <p className="mt-4 max-w-[56ch] text-[0.9375rem] leading-relaxed text-fg-muted">
          {signup.success.body(state.name, planLabel.toLowerCase())}
        </p>

        <ol className="mt-8 border-t border-border">
          {signup.success.next.map((step, index) => (
            <li key={step} className="flex gap-4 border-b border-border py-4">
              <span
                aria-hidden="true"
                className="numeral text-[0.8125rem] font-semibold text-fg-subtle"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.9375rem] text-fg">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-[0.8125rem] leading-relaxed text-fg-subtle">
          {signup.success.mockNote}
        </p>

        <Button variant="secondary" size="md" className="mt-8" onClick={onReset}>
          {signup.success.again}
        </Button>
      </Card>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values =
    state.status === "error"
      ? state.values
      : { name: "", email: "", plan: defaultPlan };

  return (
    <Card padding="lg">
      <form action={formAction} noValidate className="space-y-8">
        <Field
          id="name"
          label={signup.fields.name.label}
          placeholder={signup.fields.name.placeholder}
          autoComplete={signup.fields.name.autoComplete}
          type="text"
          defaultValue={values.name}
          error={errors.name}
        />

        <Field
          id="email"
          label={signup.fields.email.label}
          placeholder={signup.fields.email.placeholder}
          autoComplete={signup.fields.email.autoComplete}
          type="email"
          defaultValue={values.email}
          error={errors.email}
        />

        <fieldset>
          <legend className="text-[0.9375rem] font-semibold text-fg">
            {signup.plan.label}
          </legend>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {signup.plan.options.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer gap-4 rounded-xl border border-border bg-surface p-6 transition-colors duration-150 hover:border-border-strong has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
              >
                <input
                  type="radio"
                  name="plan"
                  value={option.value}
                  defaultChecked={values.plan === option.value}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 rounded-full border border-border-strong bg-bg peer-checked:border-[5px] peer-checked:border-accent"
                />
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-fg">
                    {option.label}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-relaxed text-fg-muted">
                    {option.detail}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-4 border-t border-border pt-8">
          <Button type="submit" size="lg" disabled={isPending}>
            {isPending ? signup.submitting : signup.submit}
          </Button>
          <p className="text-[0.8125rem] text-fg-subtle">{signup.trialNote}</p>
        </div>
      </form>
    </Card>
  );
}

function Field({
  id,
  label,
  placeholder,
  autoComplete,
  type,
  defaultValue,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  autoComplete: string;
  type: "text" | "email";
  defaultValue: string;
  error?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-[0.9375rem] font-semibold text-fg">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-12 w-full rounded-xl border border-border bg-bg px-4 text-[0.9375rem] text-fg placeholder:text-fg-subtle transition-colors duration-150 hover:border-border-strong focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-invalid:border-danger"
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-[0.8125rem] font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
