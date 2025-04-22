import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { useData } from "../api/ApiContext";

export default function Navbar({ isModalVisible }) {
  const { pages } = useData();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef();

  const [navbarOffset, setNavbarOffset] = useState(0);

  const MappingPages = () => {
    const handleLinkClick = () => {
      setShow(false); // Hide navbar when link is clicked
      // console.log(this.page.title);
    };
    return (
      <div className="text-sm lg:flex-grow">
        {pages.map((page, index) => (
          <Link
            to={page.title}
            onClick={handleLinkClick}
            key={index}
            smooth={true}
            duration={500}
            offset={navbarOffset}
          >
            <span className="block focus:bg-green-300 mt-4 lg:inline-block cursor-pointer lg:mt-0 text-2xl dark:text-white text-green-700 hover:animate-pulse shadow-2xl hover:text-gray-700 hover:shadow-2xl mr-4  ">
              {page.title}
            </span>
          </Link>
        ))}
        {/* //Hard coded Features */}
        <Link
          to="ArtGallery"
          onClick={handleLinkClick}
          smooth={true}
          duration={500}
          offset={navbarOffset}
        >
          <span className="block focus:bg-green-300 mt-4 lg:inline-block cursor-pointer lg:mt-0 text-2xl dark:text-white text-green-700 hover:animate-pulse shadow-2xl hover:text-gray-700 hover:shadow-2xl mr-4 ">
            Art Gallery
          </span>
        </Link>
        <Link
          to="SocialMedia"
          onClick={handleLinkClick}
          smooth={true}
          duration={500}
          offset={navbarOffset}
        >
          <span className="block focus:bg-green-300 mt-4 lg:inline-block cursor-pointer lg:mt-0 text-2xl dark:text-white text-green-700 hover:animate-pulse shadow-2xl hover:text-gray-700 hover:shadow-2xl mr-4 ">
            Social Media
          </span>
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
        <div className="w-full block flex-grow lg:flex text text-8xl lg:items-center lg:w-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <MappingPages />
        </div>

        {/* <div><Link to={pages}></Link></div> */}
      </nav>
    </>
  );
}
