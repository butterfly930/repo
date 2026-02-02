import FooterTop from "./FooterTop";
import FooterDescription from "./FooterDescription";
import FooterSections from "./FooterSections";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="bg-black p-8 flex flex-col text-white"
    >
      <div className="max-w-[1200px] mx-auto pt-[40px] pb-[20px] px-[20px]">
       <FooterTop />
        <FooterDescription />
        <FooterSections />
      </div>

      <FooterBottom />
    </footer>
  );
}
