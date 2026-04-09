import SmartLink from "./SmartLink";

export default function ContactPanel({ contacts }) {
  return (
    <div className="contact-layout">
      <section className="contact-card">
        <h3>Contact The Group</h3>
        <p className="card-summary">{contacts.message}</p>

        <div className="contact-methods">
          {contacts.methods.map((method) => (
            <article className="contact-method" key={method.label}>
              <p className="contact-label">{method.label}</p>
              {method.href ? (
                <SmartLink className="contact-value" href={method.href}>
                  {method.value}
                </SmartLink>
              ) : (
                <p className="contact-value">{method.value}</p>
              )}
              {method.detail ? <p className="contact-detail">{method.detail}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <aside className="contact-card contact-card-accent">
        <h3>Useful Links</h3>
        <p className="card-summary">
          Add external pages, lab resources, social channels, or institutional
          profiles here.
        </p>

        <div className="contact-link-list">
          {contacts.links.map((link) => (
            <SmartLink
              className="contact-link"
              href={link.href}
              key={link.label}
              label={link.label}
            />
          ))}
        </div>

        <p className="contact-note">{contacts.note}</p>
      </aside>
    </div>
  );
}
