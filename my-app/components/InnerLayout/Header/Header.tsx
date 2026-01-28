"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem",
        backgroundColor: "#625d5d",
        position: "relative",
      }}
    >
      <Link href="/">
        <Image
          src="/VodafoneLogo.png"
          alt="Vodafone Logo"
          width={80}
          height={40}
          className="hover:pointer"
        />
      </Link>

      <DesktopNavigation />
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
