
const footerLinks = {
    VodafoneAlbania: [
        { href: "/AboutVodafone", label: "About Vodafone" },
        { href: "/Careers", label: "Careers" },
        { href: "/VodafoneAlbaniaFoundation", label: "Vodafone Albania Foundation" },
        { href: "/ForTheMedia", label: "For the Media" },
        { href: "/Announcements", label: "Announcements" },
    ],
    MostWanted: [
        { href: "/Plans", label: "Plans" },
        { href: "/VodafonePrepaidTariffs", label: "Vodafone prepaid tariffs" },
        { href: "/GigaFibra", label: "GigaFibra" },
        { href: "/Roaming", label: "Roaming" },
        { href: "/Internet", label: "Internet" },
    ],
    Support: [
        { href: "/Support", label: "Support" },
        { href: "/AccessForCustomersWithDisabilities", label: "Access for customers with disabilities" },
        { href: "/Configurations", label: "Configurations" },
        { href: "/ServicesAndApps", label: "Services and apps" },
    ],
    ContactUs: [{ href: "/Whatsapp", label: "Whatsapp" }],
};

const FooterSection = ({
    title, 
    links,
}: {
    title: string;
    links: {href:string; label:string}[];
}) => (
    <div className="footer-section">
        <h3>{title}</h3>
       <ul>
        {
            links.map((link, index)=> (
                <li key={index}>
                    <a href={link.href}>{link.label}</a>
                </li>
            ))
        }
       </ul>
    </div>
);

import Image from "next/image";
import FooterLogo from "../public/FooterLogo.png";

export default function Footer() {
    return (
        <footer
        className="footer"
        style={{
            backgroundColor: "#000000", 
            padding: "2rem", 
            display: "flex",
            flexDirection: "column",
            color: "white"
        }}>
             <div className="footer-content">
                    <div className="footer-top">
                        <Image 
                            src={FooterLogo} 
                            alt="Footer Logo"
                            width={200}
                            height={60}
                            className="mb-4"
                        />
                
                    </div>
                <div className="footer-description">
                        <p>Our mission is to be admired as a diverse and ethical 
                            company that acts responsibly by providing services that 
                            enable a more sustainable society for our customers.</p>
                </div>
                <div className="footer-sections">
                    <FooterSection title="Vodafone Albania" links={footerLinks.VodafoneAlbania} />
                    <FooterSection title="Most wanted" links={footerLinks.MostWanted} />
                    <FooterSection title="Support" links={footerLinks.Support} />
                    <FooterSection title="Contact us" links={footerLinks.ContactUs} />

                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-legal">
                    © 2026 Vodafone. All rights reserved.
                </div>
            </div>
        </footer>
    )
}