import SmartLink from "./SmartLink";

export default function PaperCard({ compact = false, paper }) {
  return (
    <article className={`paper-card${compact ? " paper-card-compact" : ""}`}>
      <div className="paper-meta">
        <span>{paper.venue}</span>
        <span>{paper.year}</span>
        {paper.tag ? <span className="paper-chip">{paper.tag}</span> : null}
      </div>

      <h3 className="paper-title">
        {paper.href ? (
          <SmartLink className="paper-title-link" href={paper.href}>
            {paper.title}
          </SmartLink>
        ) : (
          paper.title
        )}
      </h3>

      {paper.authors ? <p className="paper-authors">{paper.authors}</p> : null}
      {paper.summary ? <p className="paper-summary">{paper.summary}</p> : null}
    </article>
  );
}
