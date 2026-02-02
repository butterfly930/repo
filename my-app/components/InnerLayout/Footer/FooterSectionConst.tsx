export const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}): React.ReactElement => (
  <div className="footer-section">
    <h3 className="text-[16px] font-bold mb-[15px]">{title}</h3>
    <ul className="list-none">
      {links.map((link, id) => (
        <li key={id} className="mb-2">
          <a
            href={link.href}
            className="text-[#ccc] no-underline text-[14px] hover:text-[#e60000]"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);