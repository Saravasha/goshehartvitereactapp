import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useData } from "../../api/ApiContext";
import Hamburger from "hamburger-react";
import useColors from "../../features/Colors/useColors";

export default function MobileNavbar({ isModalVisible }) {
  const { pages } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const baseClass =
    "italic  sm:text-1xl md:text-xl lg:text-2xl xl:text-3xl block text-white font-thin transition flex transform cursor-pointer hover:animate-pulse text-shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] no-underline";
  const activeClass = "font-thin text-gray-500 !text-gray-500";
  const inactiveClass =
    "text-white !text-white hover:text-gray-700 hover:shadow-2xl";
  const NavbarBgColor = useColors("Navbar Background Color") || {};
  const BurgerMenuBgColor = useColors("Hamburger Menu Background Color") || {};

  const controlNavbar = () => {
    if (isMenuOpen) return; // Ignore scroll events when menu is open

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (!isModalVisible) {
      window.addEventListener("scroll", controlNavbar);
    }

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [isModalVisible, lastScrollY, isMenuOpen]); // Added isMenuOpen here

  return (
    <nav
      style={NavbarBgColor}
      className={` top-0 left-0 w-full z-50 p-4 shadow-md transition-transform duration-1000 ease-in-out transform sticky flex-wrap  ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <div
          className=" italic text-5xl sm:text-5xl md:text-5xl lg:text-2xl xl:text-3xl font-thin cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Gosheh Art
        </div>
        <div
          style={BurgerMenuBgColor}
          aria-expanded
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-sm text-3xl  hover:animate-pulse drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          <Hamburger
            easing="ease-in"
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            hideOutline={true}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-2 flex flex-col max-h-[60vh] overflow-y-auto pr-2">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.title}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setIsMenuOpen(false)}
              onSetActive={() => setActiveSection(page.title)}
              className={`${baseClass} ${
                activeSection === page.title ? activeClass : inactiveClass
              }`}
            >
              {page.title}
            </Link>
          ))}
          {["SocialMedia", "ArtGallery"].map((title) => (
            <Link
              key={title}
              to={title}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onClick={() => setIsMenuOpen(false)}
              onSetActive={() => setActiveSection(title)}
              className={`${baseClass} ${
                activeSection === title ? activeClass : inactiveClass
              }`}
            >
              {title.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
