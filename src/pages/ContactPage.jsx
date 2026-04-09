import ContactPanel from "../components/ContactPanel";
import PageIntro from "../components/PageIntro";

export default function ContactPage({ contacts, pages }) {
  return (
    <>
      <PageIntro {...pages.contact} />
      <ContactPanel contacts={contacts} />
    </>
  );
}
