import React, { useState } from "react";

import Gallery from "./Gallery";
import ArtGallery from "./ArtGallery";
import Modal from "./Modal";
import { useData } from "../../api/ApiContext";

const Asset = ({ asset }) => {
  const { directApi } = useData();
  return (
    <>
      <img
        alt={asset.name}
        src={directApi + asset.imageUrl}
        loading="lazy"
      ></img>
    </>
  );
};
export default Asset;
