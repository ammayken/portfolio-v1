import { type Profile } from "../data/content";

export default function Footer({ profile }: { profile: Profile }) {
  const links = [...profile.socials, ...(profile.footerLinks ?? [])];

  return (
    <footer className="footer">
      <nav aria-label="Footer links">
        {links.map((l) => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </nav>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </footer>
  );
}
