import Navigation from "./common/Navigation";
import AuthLinks from "./common/AuthLinks";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileNavigation({
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavigationProps): React.ReactElement {
  return (
    <>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#625d5d] lg:hidden z-50 shadow-lg">
          <div className="flex flex-col py-4">
            <Navigation />
            <div className="  mt-2 pt-2 flex flex-col gap-8 pl-4">
              <AuthLinks setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
