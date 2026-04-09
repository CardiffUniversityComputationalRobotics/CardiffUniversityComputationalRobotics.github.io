import HeroSection from "../components/HeroSection";
import PaperCard from "../components/PaperCard";
import SectionHeading from "../components/SectionHeading";

export default function HomePage({ hero, home, papers }) {
  return (
    <>
      <HeroSection hero={hero} />

      <section className="page-section">
        <SectionHeading
          description={home.papersDescription}
          eyebrow={home.papersEyebrow}
          title={home.papersTitle}
        />

        <div className="paper-grid">
          {papers.map((paper) => (
            <PaperCard compact key={`${paper.title}-${paper.year}`} paper={paper} />
          ))}
        </div>
      </section>
    </>
  );
}
