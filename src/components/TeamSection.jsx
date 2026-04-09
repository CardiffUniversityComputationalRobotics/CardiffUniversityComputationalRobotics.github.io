import PersonCard from "./PersonCard";

export default function TeamSection({ section }) {
  return (
    <section className="team-section">
      <div className="subsection-heading">
        <p className="subsection-kicker">Group Roles</p>
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>

      <div className="team-grid">
        {section.members.map((member) => (
          <PersonCard key={`${section.title}-${member.name}`} member={member} />
        ))}
      </div>
    </section>
  );
}
