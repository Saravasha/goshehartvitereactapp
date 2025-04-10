import React, { Suspense, useEffect, useState } from "react";
import useApi from "../api/useApi";

export default function GetRandomAsset() {
  const { assets, directApi, isLoading } = useApi();

  if (!assets || assets.length === 0) {
    return <div>No images available</div>;
  }

  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImage = assets[randomIndex];

  return (
    <>
      {isLoading ? (
        <h1 className="font-thin align-center justify-center flex mx-auto p-4">
          Loading...
        </h1>
      ) : (
        <img
          className="bg-fixed bg-parallax bg-cover"
          src={directApi + randomImage.imageUrl}
          loading="lazy"
        ></img>
      )}
    </>
  );
}
