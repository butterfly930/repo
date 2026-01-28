import { FooterSection } from "./FooterSectionConst";
import { footerLinks } from "../../../constants/FooterConstants";

export default function FooterSections() {
  return (
    <div className="grid grid-cols-4 gap-[30px]">
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
