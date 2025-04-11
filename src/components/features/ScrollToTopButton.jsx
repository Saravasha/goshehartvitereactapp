import ScrollToTop from "react-scroll-to-top";
import ScrollButton2 from "../../assets/scroll-to-top2.svg";
import React from "react";

const ScrollToTopButton = ({ isVisible }) => {
  if (!isVisible) return null; // Don't render anything if modal is open

  return (
    <ScrollToTop
      smooth
      component={<img src={ScrollButton2} />}
      style={{
        background: "transparent",
        boxShadow: "2xl",
        padding: 0,
        width: "5rem",
        height: "5rem",
      }}
      className={"hover:animate-pulse"}
    />
  );
};

export default ScrollToTopButton;
