import { Mark } from "@/components/wordmark";
import { quotes } from "@/lib/copy";

export function QuoteGrid() {
  return (
    <section className="quote-section" aria-labelledby="quotes-heading">
      <h2 id="quotes-heading" className="quote-section-title">
        {quotes.title}
      </h2>
      <ul className="quote-grid">
        {quotes.items.map((item) => (
          <li key={item.quote} className="quote-card">
            <p className="quote-card-text">“{item.quote}”</p>
            <div className="quote-card-who">
              <span className="quote-card-mark">
                <Mark size={18} />
              </span>
              <span>{item.attribution}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
