import { Fragment } from "react";
import type { Profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Hero({ profile }: { profile: Profile }) {
  const { intro, socials } = profile;

  return (
    <header className="hero">
      <div className="hero-top">
        {profile.avatar ? (
          <img className="avatar" src={profile.avatar} alt={profile.name} />
        ) : (
          <div className="avatar avatar-fallback" aria-hidden="true">
            {initials(profile.name)}
          </div>
        )}
        <div>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
        </div>
        <ThemeToggle />
      </div>

      <p className="intro">
        {intro.before}
        <span className="highlight">{intro.highlight}</span>
        {intro.after}
      </p>

      <p className="intro">
        Explore my projects and coding journey on{" "}
        {socials.map((s, i) => (
          <Fragment key={s.label}>
            {i > 0 && (i === socials.length - 1 ? ", and " : ", ")}
            {s.lead}{" "}
            <a className="chip chip-brand" href={s.url} target="_blank" rel="noreferrer" 
            style={{ "--hover-bg": s.hoverBg, "--hover-text": s.hoverText } as React.CSSProperties } >
              {s.label}
            </a>
          </Fragment>
        ))}
        .
      </p>
    </header>
  );
}
