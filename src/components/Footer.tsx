import type { Profile } from "../data/content";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="footer">
      <nav aria-label="Footer links">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </nav>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </footer>
  );
}
