import type { Work } from "../data/content";
import SectionHeading from "./SectionHeading";

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="work">
      <a href={work.url} target="_blank" rel="noreferrer" className="work-preview">
        {work.image ? (
          <img src={work.image} alt={`${work.title} preview`} loading="lazy" />
        ) : (
          <span className="work-placeholder" aria-hidden="true">
            {work.title}
          </span>
        )}
      </a>
      <h3>{work.title}</h3>
      <p className="work-tagline">{work.tagline}</p>
      <a className="chip chip-outline" href={work.url} target="_blank" rel="noreferrer">
        {work.domain}
      </a>
    </article>
  );
}

export default function Works({ works }: { works: Work[] }) {
  return (
    <section id="works">
      <SectionHeading title="Works" seeAllUrl="/works" />
      <div className="works-grid">
        {works.map((w) => (
          <WorkCard key={w.title} work={w} />
        ))}
      </div>
    </section>
  );
}


