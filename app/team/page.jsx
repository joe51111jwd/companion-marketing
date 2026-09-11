"use client";

import styles from "./team-dashboard.module.css";
import LessonsCatalog from "./lessons-catalog";

// Fictional cohort fixtures only. No live metrics API or outbound keys.
const REPORT = {
  weekLabel: "Sep 1 – Sep 7, 2026",
  updated: "Sep 9, 2026",
  instancesShown: 17,
  tried: 12,
  done: 9,
  minutesBack: 142,
  minutesResponses: 7,
  minutesEligible: 9,
  aiToolLift: { value: 11, baselineLabel: "prior 5 workdays", matched: 6, suppressed: false },
  stuckHelp: { stuckRate: null, helpRate: null, suppressed: true },
};

const WORKING_THEMES = [
  { theme: "Weekly update drafts", count: 4 },
  { theme: "First drafts of routine replies", count: 3 },
  { theme: "Turning notes into an outline", count: 2 },
];

const NEEDS_HELP_THEMES = [
  { theme: "Spreadsheet output format", count: 3 },
  { theme: "Requests with too many steps", count: 2 },
  { theme: "Keeping the right tone", count: 1 },
];

function pct(numerator, denominator) {
  if (!denominator) return null;
  return Math.round((100 * numerator) / denominator);
}

function MetricCard({ title, value, unit, definition, note, suppressed, suppressedMessage }) {
  return (
    <article className={styles.metricCard}>
      <h3 className={styles.metricTitle}>{title}</h3>
      {suppressed ? (
        <p className={styles.suppressed}>{suppressedMessage ?? "Not enough shared activity to show this result."}</p>
      ) : (
        <>
          <p className={styles.metricValue}>
            {value}
            {unit ? <span className={styles.metricUnit}>{unit}</span> : null}
          </p>
          {definition ? <p className={styles.metricDef}>{definition}</p> : null}
          {note ? <p className={styles.metricNote}>{note}</p> : null}
        </>
      )}
    </article>
  );
}

function ThemeList({ themes, emptyLabel }) {
  if (!themes.length) {
    return <p className={styles.muted}>{emptyLabel}</p>;
  }
  return (
    <ul className={styles.themes}>
      {themes.map(({ theme, count }) => (
        <li key={theme}>
          <span>{theme}</span>
          <small>{count} {count === 1 ? "confirmation" : "confirmations"} · broad category</small>
        </li>
      ))}
    </ul>
  );
}

export default function TeamDashboard() {
  const tryRate = pct(REPORT.tried, REPORT.instancesShown);
  const doneRate = pct(REPORT.done, REPORT.instancesShown);
  const doneAfterTry = pct(REPORT.done, REPORT.tried);

  return (
    <main className={styles.dashboard}>
      <header id="overview" className={styles.header}>
        <div>
          <p className={styles.brand}>Companion <span>/ Team</span></p>
          <h1>Team learning</h1>
          <p className={styles.muted}>
            Content-free team summaries · Reporting week {REPORT.weekLabel} · Updated {REPORT.updated}
          </p>
        </div>
        <span className={styles.badge}>Example data</span>
      </header>

      <nav className={styles.teamNav} aria-label="Team sections">
        <a href="#overview">Overview</a>
        <a href="#lessons">Lessons</a>
      </nav>

      <p className={styles.disclosure}>
        Team summaries contain counts and broad categories. Work content and help conversations are not included.
      </p>

      <section className={styles.cardRow} aria-label="Adoption and time estimates">
        <MetricCard
          title="Tried a suggestion"
          value={`${tryRate}%`}
          definition={`${REPORT.tried} of ${REPORT.instancesShown} suggestions shown this week had a confirmed try.`}
          note="Opening a guide alone does not count."
        />
        <MetricCard
          title="Completed a Try-it"
          value={`${doneRate}%`}
          definition={`${REPORT.done} of ${REPORT.instancesShown} suggestions ended with employee-confirmed completion.`}
          note={doneAfterTry != null ? `${doneAfterTry}% of tries completed (${REPORT.done} ÷ ${REPORT.tried}).` : undefined}
        />
        <MetricCard
          title="Estimated minutes back"
          value={REPORT.minutesBack}
          unit="min"
          definition="Employee-reported estimate · sum of optional time feedback on completed Try-its."
          note={`${REPORT.minutesResponses} of ${REPORT.minutesEligible} eligible completions included an estimate.`}
        />
      </section>

      <section className={styles.cardRowTwo} aria-label="Baseline change and help demand">
        <MetricCard
          title="Change in AI-tool use"
          value={REPORT.aiToolLift.suppressed ? null : `+${REPORT.aiToolLift.value}`}
          unit={REPORT.aiToolLift.suppressed ? null : "pp"}
          definition={
            REPORT.aiToolLift.suppressed
              ? undefined
              : `Change from baseline · percentage points vs ${REPORT.aiToolLift.baselineLabel}.`
          }
          note={
            REPORT.aiToolLift.suppressed
              ? undefined
              : `${REPORT.aiToolLift.matched} matched contributors in this example week.`
          }
          suppressed={REPORT.aiToolLift.suppressed}
          suppressedMessage="A comparable baseline is needed."
        />
        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>Where the team wants help</h3>
          {REPORT.stuckHelp.suppressed ? (
            <p className={styles.suppressed}>Not enough shared activity to show this result.</p>
          ) : (
            <p className={styles.metricDef}>Aggregate stuck and help-request rates appear in the weekly release when eligible.</p>
          )}
        </article>
      </section>

      <section className={styles.cardRowTwo} aria-label="What is working">
        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>What&apos;s working</h3>
          <p className={styles.metricDef}>Cohort-level themes from employee-confirmed useful outcomes · no individual detail.</p>
          <ThemeList themes={WORKING_THEMES} emptyLabel="Not enough shared activity to show this result." />
        </article>
        <article className={styles.metricCard}>
          <h3 className={styles.metricTitle}>Common friction themes</h3>
          <p className={styles.metricDef}>Broad categories where Try-its needed more guidance this week.</p>
          <ThemeList themes={NEEDS_HELP_THEMES} emptyLabel="Not enough shared activity to show this result." />
        </article>
      </section>

      <section className={styles.howItWorks} aria-labelledby="how-title">
        <h2 id="how-title">How these numbers work</h2>
        <ul>
          <li>Fixed weekly release after outcome windows close; not a live counter.</li>
          <li>Rates use suggestions shown to consenting contributors, not seat roster size.</li>
          <li>Small cohorts may withhold metrics so one person cannot be inferred from totals.</li>
          <li>Lesson-level cohort summaries are in <a href="#lessons">Lessons</a>.</li>
        </ul>
      </section>

      <LessonsCatalog />

      <aside className={styles.upcoming} aria-label="Upcoming features">
        <div>
          <strong>Help needs</strong>
          <span className={styles.badge}>Upcoming</span>
          <p>Aggregate help demand by category — no named queue or individual history.</p>
        </div>
      </aside>

      <footer className={styles.footer}>
        Example data only · Gate RED / not accept-m0 · No screen content, journals, or per-person drilldown.
      </footer>
    </main>
  );
}
