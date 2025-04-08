import React, { useEffect } from "react";
import Asset from "./Asset";
const Modal = ({
  clickedImage,
  handleRotationLeft,
  handleRotationRight,
  setClickedImage,
  clickedAsset,
  setClickedAsset,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
      // setClickedAsset(null);
    }
  };

  useEffect(() => {
    //Close modal on escape key
    function handleEscapeKey(e) {
      if (e.code === "Escape") {
        setClickedImage(null);
        // setClickedAsset(null);
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
      className="ModalContainer overlay  dismiss fixed flex   m-0 p-0  left-0 top-0  w-full   bg-black h-full"
      onClick={handleClick}
    >
      <div className="ModalAsset  absolute top-0 flex align-center justify-center w-full h-full ">
        <div className="flex relative  flex-col ">
          {/* modal title */}
          <div className=" flex relative  justify-center align-center">
            <h1 className="Modal-Title m-4 flex-col flex relative    hover:animate-pulse text-1xl shadow-2xl rounded font-thin text-white">
              {clickedAsset.name}
            </h1>
          </div>

          <div className="    relative h-1/2   flex justify-center align-center  ">
            <img
              className=" Modal-Image   relative     "
              src={clickedImage}
              alt="bigger picture"
            ></img>
          </div>

          <div className="Modal-Description  relative flex align-center justify-center   ">
            <p className="   flex  align-center justify-center m-4 font-thin text-inherit text-shadow-2xs hover:animate-pulse text-4xl  px-10  ">
              {clickedAsset.description}
            </p>
          </div>

          <div className="Modal-Categories    align-center justify-center flex  rounded-full bg-transparent   font-thin text-black text-sm   ">
            {/* {console.log("clickedAsset = ", clickedAsset)} */}
            {clickedAsset.categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="  bg-gray-200  inline-block align-center justify-center rounded-full p-3 text-sm font-semibold  border-black  border-1 hover:bg-red-500 text-black m-1 "
                >
                  {/* {console.log(category.id)} */}
                  {category.name}
                </div>
              );
            })}
          </div>
        </div>
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
  );
};

export default Modal;
