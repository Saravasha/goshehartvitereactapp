import React, { Suspense, useEffect, useState } from "react";
import useApi from "../api/useApi";

export default function GetRandomAsset() {
  const { assets, directApi, isLoading } = useApi();

  // if (!assets || assets.length === 0) {
  //   return <div>No images available</div>;
  // }

  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImage = assets[randomIndex];

  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <img src={directApi + randomImage.imageUrl}></img>
        )}
      </div>
    </>
  );
}
