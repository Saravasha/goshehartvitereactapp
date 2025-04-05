import React, { useEffect } from "react";
import Asset from "./Asset";
const Modal = ({
  clickedImage,
  handleRotationLeft,
  handleRotationRight,
  setClickedImage,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  };

  useEffect(() => {
    //Close modal on escape key
    function handleEscapeKey(e) {
      if (e.code === "Escape") {
        setClickedImage(null);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    if (clickedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [clickedImage]);
  if (!clickedImage) return null;

  return (
    <div
      className="ModalContainer overlay flexbox dismiss fixed left-0 top-0  w-full m-0   p-0 bg-black h-full overflow-hidden"
      onClick={handleClick}
    >
      <div className="align-center justify-center flex w-full h-full ">
        <img
          src={clickedImage}
          alt="bigger picture"
          className=" py-auto px-10 "
        ></img>
      </div>

      {/* <div className="overlay dismiss w-full"> */}
      <span
        className="dismiss fixed right-0 top-0 font-thin text-8xl hover:bg-amber-300 hover:animate-pulse  m-2 rounded shadow-lg "
        onClick={handleClick}
      >
        &#10006;
      </span>
      <svg
        onClick={handleRotationLeft}
        className="w-[64px] h-[64px] text-gray-800 dark:text-white fixed left-0 bottom-1/2 hover:bg-amber-300 hover:animate-pulse ml-1 rounded shadow-lg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 19-7-7 7-7"
        />
      </svg>

      <svg
        onClick={handleRotationRight}
        className="w-[64px] h-[64px] text-gray-800 dark:text-white fixed right-0 bottom-1/2 hover:bg-amber-300 hover:animate-pulse mr-1 rounded shadow-lg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m9 5 7 7-7 7"
        />
      </svg>
    </div>
    // </div>
  );
};

export default Modal;
