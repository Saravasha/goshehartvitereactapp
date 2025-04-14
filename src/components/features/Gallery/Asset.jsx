import React, { useState } from "react";

import Gallery from "./Gallery";
import ArtGallery from "./ArtGallery";
import Modal from "./Modal";
import { useData } from "../../api/ApiContext";

const Asset = ({ asset }) => {
  const { directApi } = useData();
  return (
    <>
      {/* <div className="Asset sm:max-w-sm md:max-w-md lg:max-w-lg  rounded shadow-lg bg-inherit  border-black border-4 h-full m-4 break-inside-auto overflow-auto  " */}
      <img
        // className="Asset-Image w-full bg-white border-black border-b-4  shadow-lg p-4 "
        alt={asset.name}
        src={directApi + asset.imageUrl}
        loading="lazy"
      ></img>
      {/* <h2 className="Asset-Title m-4 flex align-center justify-center  font-semibold text-black text-wrap ">
        {image.name}
      </h2>
      <div className="Description flex align-center justify-center border-black border-4 m-4 font-thin text-black text-xl p-4">
        {image.description}
      </div>
      <div>
        <div className="rounded-full m-4  ">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  border-black border-4 hover:bg-inherit text-black m-1 inline-block"
              >
                {category.name}
              </div>
            );
          })}
        </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Asset;
