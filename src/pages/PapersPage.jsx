import PageIntro from "../components/PageIntro";
import PaperCard from "../components/PaperCard";

export default function PapersPage({ pages, papers }) {
  return (
    <>
      <PageIntro {...pages.papers} />

      <section className="page-section">
        <div className="paper-grid">
          {papers.map((paper) => (
            <PaperCard key={`${paper.title}-${paper.year}`} paper={paper} />
          ))}
        </div>
      </section>
    </>
  );
}
