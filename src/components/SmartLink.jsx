const opensInNewTab = (href = "") =>
  href.startsWith("http://") ||
  href.startsWith("https://");

export default function SmartLink({
  ariaCurrent,
  children,
  className,
  href,
  label,
}) {
  const content = children ?? label;

  if (!href || !content) {
    return null;
  }

  const newTab = opensInNewTab(href);

  return (
    <a
      aria-current={ariaCurrent}
      className={className}
      href={href}
      {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
