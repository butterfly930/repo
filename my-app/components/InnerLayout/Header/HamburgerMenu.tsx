import { hamburgerStyles } from "@/constants/HeaderConstants";
import { Dispatch, SetStateAction } from "react";

interface HamburgerMenuProps {
  setIsMenuHamburgerOpen: boolean;
  onMenuToggle: Dispatch<SetStateAction<boolean>>;
}

export const HamburgerMenu = ({
  setIsMenuHamburgerOpen,
  onMenuToggle,
}: HamburgerMenuProps) => (
  <button
    onClick={() => onMenuToggle(true)}
    className="lg:hidden flex flex-col gap-1.5 p-2"
    aria-label="Toggle menu"
  >
    {hamburgerStyles.map((style, i) => (
      <span
        key={i}
        className={`block w-6 h-0.5 bg-white transition-transform group-hover:bg-red-600 cursor-pointer ${
          setIsMenuHamburgerOpen ? style.transform || style.opacity : ""
        }`}
      />
    ))}
  </button>
);
