import FooterTop from "./FooterTop";
import FooterDescription from "./FooterDescription";
import FooterSections from "./FooterSections";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#000000",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div className="footer-content">
       <FooterTop />
        <FooterDescription />
        <FooterSections />
      </div>

      <FooterBottom />
    </footer>
  );
}
