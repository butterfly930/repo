import { hamburgerStyles } from "@/constants/HeaderConstants";

export const HamburgerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}): React.ReactElement => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="lg:hidden flex flex-col gap-1.5 p-2"
    aria-label="Toggle menu"
  >
    {hamburgerStyles.map((style, i) => (
      <span
        key={i}
        className={`block w-6 h-0.5 bg-white transition-transform group-hover:bg-red-600 cursor-pointer ${
          isMenuOpen ? style.transform || style.opacity : ""
        }`}
      />
    ))}
  </button>
);
