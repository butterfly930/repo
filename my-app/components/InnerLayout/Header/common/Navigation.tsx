import Link from "next/link";
import { mobileMenuLinks } from "@/constants/HeaderConstants";

export default function Navigation() {
  return (
    <>
      {mobileMenuLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="p-4 hover:text-red-600"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
