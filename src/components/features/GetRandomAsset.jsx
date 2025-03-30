import React, { useEffect, useState } from "react";
import useApi from "../api/useApi";

export default function GetRandomAsset() {
  const { assets, directApi } = useApi();
  const [randomImage, setRandomImage] = useState();

  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImageFromArray = assets[randomIndex];

  useEffect(() => {
    setRandomImage(randomImageFromArray);
  }, []);

  return (
    <div>
      <img
        className="RandomAsset"
        alt={randomImage.name}
        src={directApi + randomImage.imageUrl}
      ></img>
    </div>
  );
}
