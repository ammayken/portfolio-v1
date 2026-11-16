interface SectionHeadingProps {
  title: string;
  seeAllUrl?: string;
}

export default function SectionHeading({ title, seeAllUrl }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {seeAllUrl && (
        <a href={seeAllUrl} className="see-all">
          See all ↗
        </a>
      )}
    </div>
  );
}
