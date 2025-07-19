import { Link } from "react-scroll";
import { useData } from "../../api/ApiContext";
import { useState, useEffect, useRef } from "react";
import useColors from "../../../components/features/Colors/useColors.jsx";
import retryScrollTo from "./RetryScrollTo.jsx";

export default function DesktopNavbar({ isModalVisible }) {
  const { pages, isLoading } = useData();
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef();
  const lastScrollY = useRef(0); // useRef for last scroll position
  const [navbarOffset, setNavbarOffset] = useState(0);
  const [show, setShow] = useState(true);

  const baseClass =
    "flex mt-4 justify-center cursor-pointer hover:animate-pulse text-shadow-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]";
  const activeClass = "!text-gray-500 font-bold";
  const inactiveClass = "text-white hover:text-gray-700 hover:shadow-2xl";

  const colorInStyle = useColors("Navbar Background Color") || {};
  const colorInStyleText = useColors("Navbar Text Color") || {};
  const dryLinkProps = {
    spy: true,
    style: colorInStyleText,
  };
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down — hide navbar
        setShow(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up — show navbar
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    }
  };

  // Only one scroll listener effect on mount/unmount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, []);

  // Hide/show navbar based on modal visibility
  useEffect(() => {
    setShow(!isModalVisible);
  }, [isModalVisible]);

  // Update offset for react-scroll links
  useEffect(() => {
    const updateOffset = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavbarOffset(-height);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const MappingPages = () => (
    <div className="flex-grow text-center flex-nowrap overflow-x-auto gap-4 px-2 scrollbar-hide flex flex-row max-w-full drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)]">
      {pages.map((page, index) => (
        <div
          key={`page-${page.title}-${page.id}`}
          className="flex-1 text-center text-wrap flex-wrap"
        >
          <Link
            to={`page-${page.title}-${page.id}`}
            {...dryLinkProps}
            onClick={() => {
              setShow(false);
              retryScrollTo(`page-${page.title}-${page.id}`, {
                duration: 500,
                smooth: "easeInOutQuart",
                offset: navbarOffset,
              });
            }}
            onSetActive={() => setActiveSection(page.title)}
            className={`${baseClass} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl !underline block  ${
              activeSection === page.title ? activeClass : inactiveClass
            }`}
          >
            {page.title}
          </Link>
          <div className="flex-grow flex-col flex mt-2 space-y-1 flex-1 text-center text-wrap">
            {page.contents.map((content, subIndex) => (
              <Link
                key={`content-${page.title}-${page.id}-${content.title}${content.id}`}
                to={`content-${page.title}-${page.id}-${content.title}${content.id}`}
                {...dryLinkProps}
                onClick={() => {
                  setShow(false);
                  retryScrollTo(
                    `content-${page.title}-${page.id}-${content.title}${content.id}`,
                    {
                      duration: 500,
                      smooth: "easeInOutQuart",
                      offset: navbarOffset,
                    }
                  );
                }}
                onSetActive={() => setActiveSection(content.title)}
                className={`${baseClass} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl block ${
                  activeSection === content.title ? activeClass : inactiveClass
                }`}
              >
                {content.title}
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Hard coded Features */}
      {["SocialMedia", "ArtGallery"].map((title) => (
        <div key={title} className="flex-1 text-center text-wrap">
          <Link
            to={title}
            {...dryLinkProps}
            onClick={() => {
              setShow(false);
              retryScrollTo(title, {
                duration: 500,
                smooth: "easeInOutQuart",
                offset: navbarOffset,
              });
            }}
            onSetActive={() => setActiveSection(title)}
            className={`${baseClass} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl !underline block ${
              activeSection === title ? activeClass : inactiveClass
            }`}
          >
            {title.replace(/([A-Z])/g, " $1").trim()}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <nav
      ref={navRef}
      style={colorInStyle}
      className={`transition-transform duration-1000 ease-in-out sticky top-0 z-50 flex p-4 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <MappingPages />
    </nav>
  );
}
