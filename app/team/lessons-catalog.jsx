import styles from "./team-dashboard.module.css";

// Catalog fields copied verbatim from lessons/catalog.v1.json (2026-09-11).
// Counts and availability are fictional cohort fixtures, independent of seats.
const ALPHA_LESSONS = [
  {
    lesson_id: "alpha-agenda-v1",
    title: "Make a reusable staff-meeting agenda",
    pattern_id: "repeated-planning",
    pattern_label: "Repeated planning",
    duration_minutes: 4,
    intended_result: "An employee-reviewed agenda template you can reuse for short staff-planning meetings.",
    example: { offers: 6, tries: 5, completions: 4, enabled: true },
  },
  {
    lesson_id: "alpha-checklist-v1",
    title: "Turn fictional notes into a checklist",
    pattern_id: "repeated-formatting",
    pattern_label: "Repeated formatting",
    duration_minutes: 4,
    intended_result: "An edited checklist with owners left blank.",
    example: { offers: 6, tries: 4, completions: 3, enabled: true },
  },
  {
    lesson_id: "alpha-announcement-v1",
    title: "Make a reusable routine announcement",
    pattern_id: "repeated-drafting",
    pattern_label: "Repeated drafting",
    duration_minutes: 3,
    intended_result: "A reviewed announcement template using fictional details.",
    example: { offers: 5, tries: 3, completions: 2, enabled: false },
  },
];

export default function LessonsCatalog() {
  return (
    <section id="lessons" className={styles.catalog} aria-labelledby="lessons-title">
      <header className={styles.catalogHeader}>
        <div>
          <h2 id="lessons-title">Lessons</h2>
          <p className={styles.muted}>Approved Alpha catalog · {ALPHA_LESSONS.length} lessons</p>
        </div>
        <span className={styles.badge}>Example data</span>
      </header>
      <p className={styles.muted}>
        Offers, tries, completions, and availability are fictional.
      </p>
      <div className={styles.tableWrap} tabIndex={0} role="region" aria-label="Lesson catalog, scroll horizontally on small screens">
        <table className={styles.table} aria-describedby="lesson-counts-note lesson-controls-note">
          <caption>Example data · Whole pilot cohort · One example week</caption>
          <thead>
            <tr>
              <th scope="col">Approved lesson / result</th>
              <th scope="col">Duration</th>
              <th scope="col">Offers</th>
              <th scope="col">Tries</th>
              <th scope="col">Completions</th>
              <th scope="col">Example availability</th>
              <th scope="col">Cohort action</th>
            </tr>
          </thead>
          <tbody>
            {ALPHA_LESSONS.map((lesson) => (
              <tr key={lesson.lesson_id} data-lesson-id={lesson.lesson_id} data-pattern-id={lesson.pattern_id}>
                <th scope="row" className={styles.lessonTitle}>
                  {lesson.title}
                  <span className={styles.lessonMeta}>{lesson.pattern_label}</span>
                  <span className={styles.lessonMeta}>{lesson.intended_result}</span>
                </th>
                <td>{lesson.duration_minutes} min</td>
                <td>{lesson.example.offers}</td>
                <td>{lesson.example.tries}</td>
                <td>{lesson.example.completions}</td>
                <td><span className={styles.badge}>{lesson.example.enabled ? "Enabled" : "Paused"}</span></td>
                <td>
                  <button
                    type="button"
                    className={styles.lessonAction}
                    disabled
                    aria-label={(lesson.example.enabled ? "Pause lesson: " : "Enable lesson: ") + lesson.title}
                    aria-describedby="lesson-controls-note"
                  >
                    {lesson.example.enabled ? "Pause lesson" : "Enable lesson"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p id="lesson-counts-note" className={styles.muted}>
        Offers: recommendations shown. Tries: employee-confirmed attempts.
        Completions: employee-confirmed results. Each recommendation counts once
        per stage. Opening a lesson does not count as a try.
      </p>
      <p id="lesson-controls-note" className={styles.muted}>
        Enable and pause apply to the whole pilot cohort. Controls are copy-only
        in this preview and do not change lesson availability.
      </p>
    </section>
  );
}
