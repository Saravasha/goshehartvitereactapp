import React, { useEffect } from "react";

const Modal = ({
  clickedImage,
  handleRotationLeft,
  handleRotationRight,
  setClickedImage,
  clickedAsset,
  setClickedAsset,
  onClose,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    //Close modal on escape key
    function handleEscapeKey(e) {
      if (e.code === "Escape") {
        setClickedImage(null);
        if (onClose) onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto"; // Enable scrolling again when modal is closed
    };
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
      className="ModalContainer overlay  dismiss fixed flex   m-0 p-0  left-0 top-0  w-full z-50 bg-black h-full"
      onClick={handleClick}
    >
      <div className="ModalAsset  absolute top-0 flex  justify-center w-full h-full overflow-auto ">
        <div className="flex relative  flex-col ">
          {/* Modal Title */}
          <div className=" flex relative  justify-center ">
            <h1 className="Modal-Title m-4 flex-col flex relative hover:animate-pulse text-1xl shadow-2xl  font-thin text-white ">
              {clickedAsset.name}
            </h1>
          </div>
          {/* Date */}
          <span className="relative w-full flex  justify-center  text-white pb-4">
            {clickedAsset.dateString}
          </span>
          {/* Image */}
          <div className="relative w-full flex justify-center ">
            <img
              className=" Modal-Image relative"
              src={clickedImage}
              alt="bigger picture"
            ></img>
          </div>

          {/* Description */}
          <div className="Modal-Description  relative flex  justify-center   ">
            <p className="flex text-white  justify-center m-4 font-thin  text-shadow-2xs  text-4xl  px-10">
              {clickedAsset.description}
            </p>
          </div>
          {/* Categories */}
          <div className="Modal-Categories  justify-center pb-4 flex rounded-full bg-transparent font-thin text-black text-sm   ">
            {clickedAsset.categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="  bg-gray-200  inline-block  justify-center rounded-full p-3 text-sm font-semibold  border-black border-1 hover:bg-green-700 text-black m-1 "
                >
                  {category.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cross Button */}
      <svg
        onClick={handleClick}
        className="dismiss cursor-pointer fixed w-[64px] h-[64px] right-0 top-0 font-thin text-8xl  text-white dark:text-white hover:bg-red-700 hover:animate-pulse  m-2 rounded shadow-lg "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="dismiss"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>

      {/* Left Button */}
      <svg
        onClick={handleRotationLeft}
        className="w-[64px] h-[64px] cursor-pointer text-white dark:text-white fixed left-0 bottom-1/2 hover:bg-amber-300 hover:animate-pulse ml-1 rounded shadow-lg"
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
      {/* Right button */}
      <svg
        onClick={handleRotationRight}
        className="w-[64px] h-[64px] cursor-pointer text-white dark:text-white fixed right-0 bottom-1/2 hover:bg-amber-300 hover:animate-pulse mr-1 rounded shadow-lg"
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
