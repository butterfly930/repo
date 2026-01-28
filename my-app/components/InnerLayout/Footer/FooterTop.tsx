import Image from "next/image";
import FooterLogo from "../../../public/FooterLogo.png";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <Image
        src={FooterLogo}
        alt="Footer Logo"
        width={200}
        height={60}
        className="mb-4"
      />
    </div>
  );
}
