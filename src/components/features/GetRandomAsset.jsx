import React, { Suspense, useEffect, useState } from "react";
import useApi from "../api/useApi";

export default function GetRandomAsset() {
  const { assets, directApi, loading } = useApi();

  if (!assets || assets.length === 0) {
    return <div>No images available</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImage = assets[randomIndex];

  return (
    <>
      <div>
        <img src={directApi + randomImage.imageUrl}></img>
      </div>
    </>
  );
}
