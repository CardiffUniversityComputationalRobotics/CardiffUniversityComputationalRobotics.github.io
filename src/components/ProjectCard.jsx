import SmartLink from "./SmartLink";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className="status-pill">{project.status}</span>
        <span className="card-period">{project.period}</span>
      </div>

      <h3 className="card-title">{project.title}</h3>
      <p className="card-summary">{project.summary}</p>
      <p className="card-supporting">{project.focus}</p>

      {project.tags?.length ? (
        <div className="tag-list" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {project.links?.length ? (
        <div className="inline-links">
          {project.links.map((link) => (
            <SmartLink
              className="text-link"
              href={link.href}
              key={`${project.title}-${link.label}`}
              label={link.label}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
