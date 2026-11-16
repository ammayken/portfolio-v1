import type { Note } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Notes({ notes }: { notes: Note[] }) {
  return (
    <section id="notes">
      <SectionHeading title="Notes" seeAllUrl="#" />
      <ul className="notes">
        {notes.map((n) => (
          <li key={n.title}>
            <a href={n.url} className="note">
              <div className="note-row">
                <h3>{n.title}</h3>
                <time>{n.date}</time>
              </div>
              <p>{n.summary}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
