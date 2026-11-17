import { Link } from "react-router";
import { skillGroups } from "../data/content";

export default function SkillsPage() {
  return (
    <main className="container">
      <Link to="/" className="see-all">
        ← Back
      </Link>
      <h1>Tech Stack</h1>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <section key={group.title} className="skill-group">
            <div className="skill-group-head">
              <h2>{group.title}</h2>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {group.iconPaths.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
