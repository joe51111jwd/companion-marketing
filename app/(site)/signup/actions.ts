"use server";

import { signup } from "@/lib/copy";

export type TrialPlan = "individual" | "team";

export type SignupState =
  | { status: "idle" }
  | {
      status: "error";
      errors: { name?: string; email?: string };
      values: { name: string; email: string; plan: TrialPlan };
    }
  | { status: "started"; name: string; plan: TrialPlan };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readPlan(value: FormDataEntryValue | null): TrialPlan {
  return value === "team" ? "team" : "individual";
}

/**
 * STUB. Real accounts, consent records, Stripe trials and email land with the server
 * (SPEC §6). Until then this validates the form and returns a mock "trial started"
 * state so the screen can be designed, reviewed and tested end to end. It stores
 * nothing and sends nothing.
 */
export async function startTrial(
  _previous: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const plan = readPlan(formData.get("plan"));

  const errors: { name?: string; email?: string } = {};
  if (name.length < 2) errors.name = signup.errors.name;
  if (!EMAIL.test(email)) errors.email = signup.errors.email;

  if (errors.name || errors.email) {
    return { status: "error", errors, values: { name, email, plan } };
  }

  return { status: "started", name, plan };
}
