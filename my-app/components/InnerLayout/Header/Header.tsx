"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuHamburgerOpen, setIsMenuHamburgerOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-3 bg-[#625d5d] relative">
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
      <HamburgerMenu
        setIsMenuHamburgerOpen={isMenuHamburgerOpen}
        onMenuToggle={setIsMenuHamburgerOpen}
      />
      <MobileNavigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
