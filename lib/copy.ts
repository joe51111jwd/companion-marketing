/**
 * Every user-facing string on the web surface lives here.
 *
 * Rules that bind this file (SPEC §8.10):
 *  - The product name is only ever PRODUCT_NAME.
 *  - Sentences that must be identical across the Mac app, the notice and this site are NOT
 *    written here: they are imported from `./canonical`, which `scripts/copy/gen.mjs`
 *    generates from `copy/canonical.json`. Reword them there or nowhere.
 *  - Never use the four banned words. The single exception in the whole app is
 *    `faq.notThat.answer`, which quotes §1.2's own negation — and it, too, is canonical.
 */

import {
  D13_FOOTER,
  NOT_A_MONITORING_TOOL,
  PRICING,
  PROMISE_1_EXCEPTION_ITEMS,
  PROMISES,
  PRODUCT_NAME as CANONICAL_PRODUCT_NAME,
  RISK_REVERSAL,
  STATUS,
  TAGLINE,
  TAGLINE_SENTENCES,
} from "./canonical";

export const PRODUCT_NAME = CANONICAL_PRODUCT_NAME;
