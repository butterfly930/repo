import { FooterSection } from "../../../constants/FooterSectionConst";
import { footerLinks } from "../../../constants/FooterConstants";

export default function FooterSections() {
  return (
    <div className="footer-sections">
      <FooterSection
        title="Vodafone Albania"
        links={footerLinks.VodafoneAlbania}
      />
      <FooterSection title="Mëtëkërkuarat" links={footerLinks.Mëtëkërkuarat} />
      <FooterSection title="Suport" links={footerLinks.Suport} />
      <FooterSection title="Nakontaktoni" links={footerLinks.Nakontaktoni} />
    </div>
  );
}
