import ScrollToTop from "react-scroll-to-top";

import React, { useEffect, useState } from "react";

const ScrollToTopButton = ({ isVisible }) => {
  if (!isVisible) return null; // Don't render anything if modal is open
  const [timer, setTimer] = useState(null);
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setButtonVisibility(true);

      // Clear any existing timer
      if (timer) clearTimeout(timer);

      // Set a new timer to hide after 3 seconds
      const newTimer = setTimeout(() => {
        if (!isHovered) {
          setButtonVisibility(false);
        }
      }, 3000);
      setTimer(newTimer);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, [timer, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timer) clearTimeout(timer); // Stop hiding while hovered
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Restart timer when user stops hovering
    const newTimer = setTimeout(() => {
      setButtonVisibility(false);
    }, 3000);
    setTimer(newTimer);
  };

  const UpArrow = (
    <svg
      className="w-[64px] h-[64px] text-gray-800 dark:text-white hover:animate-pulse bg-green-700 rounded"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v13m0-13 4 4m-4-4-4 4"
      />
    </svg>
  );

  return (
    <ScrollToTop
      smooth
      showunder={100}
      component={
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <svg
            className="w-[64px] h-[64px] text-gray-800 dark:text-white hover:animate-pulse bg-green-700 rounded"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
