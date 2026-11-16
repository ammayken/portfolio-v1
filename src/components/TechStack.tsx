import type { Tech } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function TechStack({ items }: { items: Tech[] }) {
  return (
    <section id="stack">
      <SectionHeading title="Tech Stack" seeAllUrl="#" />
      <ul className="stack">
        {items.map((t) => (
          <li key={t.name}>
           <span className="stack-badge" style={{ "--brand": t.color ?? `#${t.icon.hex}` } as React.CSSProperties}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={t.icon.path} />
              </svg>
            </span>
            <span className="stack-name">{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
