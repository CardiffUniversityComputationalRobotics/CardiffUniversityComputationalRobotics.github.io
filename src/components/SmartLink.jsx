const isExternalLink = (href = "") =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:");

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

  const external = isExternalLink(href);

  return (
    <a
      aria-current={ariaCurrent}
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
