import Link from "next/link";
import { authLinks } from "@/constants/HeaderConstants";

export default function AuthLinks(props: {
  setIsMenuOpen?: (open: boolean) => void;
}) {
  return (
    <>
      {authLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-red-600"
          onClick={() => props.setIsMenuOpen && props.setIsMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
