// components/Navbar/DesktopNavbar.js
import { Link } from "react-scroll";
import { useData } from "../../api/ApiContext";
import { useState, useEffect, useRef } from "react";
import useColors from "../../../components/features/color/useColors.jsx";

export default function DesktopNavbar({ isModalVisible }) {
  const { colors, pages, isLoading } = useData();
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef();
  const [navbarOffset, setNavbarOffset] = useState(0);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const baseClass =
    "flex mt-4 justify-center cursor-pointer hover:animate-pulse text-shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
  const activeClass = "!text-gray-500 font-bold";
  const inactiveClass = "text-white hover:text-gray-700 hover:shadow-2xl";

  const colorInStyle =
    useColors(colors, "Navbar Background Color", isLoading) || {};
  const colorInStyleText =
    useColors(colors, "Navbar Text Color", isLoading) || {};

  const MappingPages = () => {
    const handleLinkClick = () => {
      setShow(false); // Hide navbar when link is clicked
    };
    return (
      <div className="flex-grow text-center flex-row flex w-full gap-4">
        {pages.map((page, index) => (
          <div key={index} className="flex-1 text-center text-wrap">
            <Link
              to={page.title}
              onClick={handleLinkClick}
              smooth={true}
              duration={500}
              offset={navbarOffset}
              spy={true}
              style={colorInStyleText}
              onSetActive={() => setActiveSection(page.title)}
              className={`${baseClass} text-4xl  ${
                activeSection === page.title ? activeClass : inactiveClass
              }`}
            >
              {page.title}
            </Link>
            <div className="flex-grow flex-col flex mt-2 space-y-1 ">
              {page.contents.map((content, subIndex) => (
                <Link
                  to={content.title}
                  onClick={handleLinkClick}
                  key={subIndex}
                  smooth={true}
                  duration={500}
                  offset={navbarOffset}
                  spy={true}
                  style={colorInStyleText}
                  onSetActive={() => setActiveSection(content.title)}
                  className={`${baseClass} text-2xl ${
                    activeSection === content.title
                      ? activeClass
                      : inactiveClass
                  }`}
                >
                  {content.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* //Hard coded Features in the Navbar */}
        {["ArtGallery", "SocialMedia"].map((title) => (
          <div key={title} className="flex-1 text-center ">
            <Link
              to={title}
              onClick={handleLinkClick}
              smooth={true}
              duration={500}
              offset={navbarOffset}
              spy={true}
              style={colorInStyleText}
              onSetActive={() => setActiveSection(title)}
              className={`${baseClass} text-4xl block ${
                activeSection === title ? activeClass : inactiveClass
              }`}
            >
              {title.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isModalVisible) {
      setShow(true); // Ensure navbar is shown when modal is closed
    } else {
      setShow(false); // Hide navbar when modal is open
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const updateOffset = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavbarOffset(-height);
      }
    };

    updateOffset(); // initial set
    window.addEventListener("resize", updateOffset);

    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        style={colorInStyle}
        className={`transition-transform duration-1000 ease-in-out sticky top-0 z-50 flex p-4 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MappingPages />
      </nav>
    </>
  );
}
