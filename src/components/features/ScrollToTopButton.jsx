import ScrollToTop from "react-scroll-to-top";
import useColors from "./Colors/useColors";
import { useData } from "../api/ApiContext";
import React, { useEffect, useState, useRef } from "react";

const ScrollToTopButton = ({ isVisible }) => {
  if (!isVisible) return null;

  const [buttonVisibility, setButtonVisibility] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null); // ⬅️ Replaces useState

  const colorInStyle = useColors("ScrollToTop Background Color") || {};

  useEffect(() => {
    const handleScroll = () => {
      setButtonVisibility(true);

      // Clear existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Set new timer to hide after 3 seconds
      timerRef.current = setTimeout(() => {
        if (!isHovered) {
          setButtonVisibility(false);
        }
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isHovered]); //

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timerRef.current = setTimeout(() => {
      setButtonVisibility(false);
    }, 3000);
  };

  return (
    <ScrollToTop
      smooth
      top={100} // Button becomes visible after scrolling 100px
      component={
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <svg
            className="w-[4rem] h-[4rem] text-slate-50 relative justify-end dark:text-white hover:animate-pulse rounded drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={colorInStyle}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v13m0-13 4 4m-4-4-4 4"
            />
          </svg>
        </div>
      }
      style={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        display: buttonVisibility ? "" : "none",
      }}
    />
  );
};

export default ScrollToTopButton;
