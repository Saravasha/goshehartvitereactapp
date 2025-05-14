// components/Navbar/MobileNavbar.js
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useData } from "../../api/ApiContext";
import Hamburger from "hamburger-react";

export default function MobileNavbar({ isModalVisible }) {
  const { pages } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const baseClass =
    "text-2xl block text-white font-thin transition flex transform cursor-pointer  hover:animate-pulse text-shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] no-underline text-2xl ";
  const activeClass = "font-thin text-gray-500 !text-gray-500";
  const inactiveClass =
    "text-white !text-white hover:text-gray-700 hover:shadow-2xl";

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (!isModalVisible) {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY, isModalVisible]);

  return (
    <nav
      className={` top-0 left-0 w-full z-50 bg-gradient-to-r from-green-950 to-white p-4 shadow-md transition-transform duration-1000 ease-in-out transform sticky  flex-wrap  ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center text-white">
        <div
          className="text-4xl font-thin cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Gosheh Art
        </div>
        <button
          aria-expanded
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="  text-3xl hover:animate-pulse"
        >
          <Hamburger
            easing="ease-in"
            color="#ffffff"
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-2 flex flex-col">
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
          {["ArtGallery", "SocialMedia"].map((title) => (
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
