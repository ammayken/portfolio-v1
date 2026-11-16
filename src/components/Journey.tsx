import type { JourneyItem } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Journey({ items }: { items: JourneyItem[] }) {
  return (
    <section id="journey">
      <SectionHeading title="Work Experience" />
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.org}-${item.period}`} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-body">
              <p className="timeline-role">{item.role}</p>
              <p className="timeline-org">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.org} ↗
                  </a>
                ) : (
                  item.org
                )}
              </p>
            </div>
            <span className="pill">{item.period}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
