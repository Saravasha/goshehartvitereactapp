import React from "react";
import { useData } from "../api/ApiContext";

export default function GetRandomAsset() {
  const { assets, directApi, isLoading } = useData();

  // Filter to only Image assets
  const imageAssets = assets.filter((asset) => asset.type === "Image");

  if (!imageAssets || imageAssets.length === 0) {
    return <div>No images available</div>;
  }

  const randomIndex = Math.floor(Math.random() * imageAssets.length);
  const randomImage = imageAssets[randomIndex];

  return (
    <>
      {isLoading ? (
        <h1 className="font-thin justify-center flex m-4 p-4 relative">
          Loading...
        </h1>
      ) : (
        <img
          className="w-fit h-full flex rounded-2xl shadow-2xl py-8 object-cover"
          src={directApi + randomImage.fileUrl}
          loading="lazy"
          alt={randomImage.name || "Random Asset"}
        />
      )}
    </>
  );
}
