import React from "react";
import { useData } from "../api/ApiContext";

export default function GetRandomAsset() {
  const { assets, directApi, isLoading } = useData();
  if (!assets || assets.length === 0) {
    return <div>No images available</div>;
  }

  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImage = assets[randomIndex];

  return (
    <>
      {isLoading ? (
        <h1 className="font-thin align-center justify-center flex m-4 p-4 relative">
          Loading...
        </h1>
      ) : (
        <img
          className="ParallaxContainer"
          src={directApi + randomImage.imageUrl}
          loading="lazy"
        ></img>
      )}
    </>
  );
}
