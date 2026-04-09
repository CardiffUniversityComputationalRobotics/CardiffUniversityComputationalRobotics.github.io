import SmartLink from "./SmartLink";

export default function Header({ brand, currentPage, navigation }) {
  return (
    <header className="site-header">
      <SmartLink className="brand-lockup" href="#/">
        <span className="brand-kicker">{brand.kicker}</span>
        <span className="brand-title">{brand.title}</span>
      </SmartLink>

      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <SmartLink
            ariaCurrent={currentPage === item.id ? "page" : undefined}
            className={`nav-link${currentPage === item.id ? " nav-link-active" : ""}`}
            href={item.href}
            key={item.id}
            label={item.label}
          />
        ))}
      </nav>
    </header>
  );
}
