import { Link } from "react-router";
import { WorkCard } from "../components/Works";
import { works } from "../data/content";

export default function WorksPage() {
  return (
    <main className="container">
      <Link to="/" className="see-all">
        ← Back
      </Link>
      <h1>Works</h1>
      <div className="works-grid">
        {works.map((w) => (
          <WorkCard key={w.title} work={w} showTech />
        ))}
      </div>
    </main>
  );
}
