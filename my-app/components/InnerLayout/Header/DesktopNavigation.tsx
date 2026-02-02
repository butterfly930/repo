import Navigation from "./common/Navigation";
import AuthLinks from "./common/AuthLinks";

export default function DesktopNavigation() {
  return (
    <>
      <nav className="hidden lg:flex items-center gap-2 flex-1 ml-6">
        <Navigation />
      </nav>
      <div className="hidden lg:flex items-center gap-4">
        <AuthLinks />
      </div>
    </>
  );
}
