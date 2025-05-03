import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { useData } from "../api/ApiContext";

export default function Navbar({ isModalVisible }) {
  const { pages } = useData();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef();

  const [navbarOffset, setNavbarOffset] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const baseClass =
    "block mt-4 lg:inline-block cursor-pointer lg:mt-0 text-2xl hover:animate-pulse shadow-2xl mr-4 no-underline";
  const activeClass = "!text-gray-500 font-bold";
  const inactiveClass = "!text-white hover:text-gray-700 hover:shadow-2xl";

  const MappingPages = () => {
    const handleLinkClick = () => {
      setShow(false); // Hide navbar when link is clicked
    };
    return (
      <div className="text-sm  lg:flex-grow flex-col flex">
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
            <div>
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

        {/* //Hard coded Features */}
        <Link
          to="ArtGallery"
          onClick={handleLinkClick}
          smooth={true}
          duration={500}
          offset={navbarOffset}
          spy={true}
          onSetActive={() => setActiveSection("ArtGallery")}
          className={`${baseClass} ${
            activeSection === "ArtGallery" ? activeClass : inactiveClass
          }`}
        >
          Art Gallery
        </Link>
        <Link
          to="SocialMedia"
          onClick={handleLinkClick}
          smooth={true}
          duration={500}
          offset={navbarOffset}
          spy={true}
          onSetActive={() => setActiveSection("SocialMedia")}
          className={`${baseClass} ${
            activeSection === "SocialMedia" ? activeClass : inactiveClass
          }`}
        >
          Social Media
        </Link>
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
      behavior: "smooth", // Smooth scroll effect
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
        className={`transition-transform duration-300 ease-in-out transform sticky top-0 z-50 flex items-center justify-between flex-wrap bg-gradient-to-r from-green-950 to-white p-6 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:animate-pulse">
          <span
            className="font-semibold text-xl tracking-tight cursor-pointer "
            onClick={scrollToTop}
          >
            Goshehart.se
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white outline border-black hover:text-white hover:border-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex flex-grow lg:flex text text-8xl lg:items-center lg:w-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <MappingPages />
        </div>

        {/* <div><Link to={pages}></Link></div> */}
      </nav>
    </>
  );
}
