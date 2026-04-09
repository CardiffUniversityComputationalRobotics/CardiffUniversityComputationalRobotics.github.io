import SmartLink from "./SmartLink";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({ member }) {
  return (
    <article className="person-card">
      <div className="person-header">
        <div className="person-avatar" aria-hidden="true">
          {getInitials(member.name)}
        </div>

        <div>
          <h3 className="person-name">{member.name}</h3>
          <p className="person-role">{member.role}</p>
          {member.affiliation ? (
            <p className="person-affiliation">{member.affiliation}</p>
          ) : null}
        </div>
      </div>

      <p className="person-bio">{member.bio}</p>

      {member.researchAreas?.length ? (
        <div className="tag-list" aria-label={`${member.name} research areas`}>
          {member.researchAreas.map((area) => (
            <span className="tag" key={area}>
              {area}
            </span>
          ))}
        </div>
      ) : null}

      {member.links?.length ? (
        <div className="inline-links">
          {member.links.map((link) => (
            <SmartLink
              className="text-link"
              href={link.href}
              key={`${member.name}-${link.label}`}
              label={link.label}
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}
