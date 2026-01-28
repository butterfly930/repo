export const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}): React.ReactElement => (
  <div className="footer-section">
    <h3>{title}</h3>
    <ul>
      {links.map((link, id) => (
        <li key={id}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);