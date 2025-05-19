// components/Navbar/DesktopNavbar.js
import { Link } from "react-scroll";
import { useData } from "../../api/ApiContext";
import { useState, useEffect, useRef } from "react";

export default function DesktopNavbar({ isModalVisible }) {
  const { pages } = useData();
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef();
  const [navbarOffset, setNavbarOffset] = useState(0);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseClass =
    "flex mt-4 justify-start cursor-pointer mt-0 hover:animate-pulse text-shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mr-4";
  const activeClass = "!text-gray-500 font-bold";
  const inactiveClass = "!text-white hover:text-gray-700 hover:shadow-2xl";

  const MappingPages = () => {
    const handleLinkClick = () => {
      setShow(false); // Hide navbar when link is clicked
    };
    return (
      <div className="text-4xl flex-grow justify-start flex flex-row">
        {pages.map((page, index) => (
          <div key={index}>
            <Link
              to={page.title}
              onClick={handleLinkClick}
              smooth={true}
              duration={500}
              offset={navbarOffset}
              spy={true}
              onSetActive={() => setActiveSection(page.title)}
              className={`${baseClass} ${
                activeSection === page.title ? activeClass : inactiveClass
              }`}
            >
              {page.title}
            </Link>
            <div className="text-2xl flex-grow flex-col flex ">
              {page.contents.map((content, subIndex) => (
                <Link
                  to={content.title}
                  onClick={handleLinkClick}
                  key={subIndex}
                  smooth={true}
                  duration={500}
                  offset={navbarOffset}
                  spy={true}
                  onSetActive={() => setActiveSection(content.title)}
                  className={`${baseClass} ${
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
        <div>
          {["ArtGallery", "SocialMedia"].map((title) => (
            <Link
              key={title}
              to={title}
              onClick={handleLinkClick}
              smooth={true}
              duration={500}
              offset={navbarOffset}
              spy={true}
              onSetActive={() => setActiveSection(title)}
              className={`${baseClass} block ${
                activeSection === title ? activeClass : inactiveClass
              }`}
            >
              {title.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          ))}
        </div>
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
        className={`transition-transform duration-1000 ease-in-out sticky top-0 z-50 flex  bg-gradient-to-r from-green-950 to-white p-4 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MappingPages />
      </nav>
    </>
  );
}
