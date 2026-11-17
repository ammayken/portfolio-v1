import type { Service } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services">
      <SectionHeading title="Services" />
      <ul className="services">
        {services.map((s) => (
          <li key={s.title}>
            <div className="service">
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
