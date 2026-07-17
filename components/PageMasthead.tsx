export function PageMasthead({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary: string;
}) {
  return (
    <header className="page-masthead">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-summary">{summary}</p>
    </header>
  );
}
