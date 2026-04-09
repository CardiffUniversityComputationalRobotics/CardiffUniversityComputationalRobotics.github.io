import SectionHeading from "./SectionHeading";

export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <SectionHeading
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    </section>
  );
}
