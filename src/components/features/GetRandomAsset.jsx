import React, { Suspense, useEffect, useState } from "react";
import useApi from "../api/useApi";

export default function GetRandomAsset() {
  const { assets, directApi, loading } = useApi();
  // console.log(assets);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!assets || assets.length === 0) {
    return <div>No images available</div>;
  }
  // const [randomImage, setRandomImage] = useState();
  const randomIndex = Math.floor(Math.random() * assets.length);
  const randomImage = assets[randomIndex];

  // useEffect(() => {
  //   // assets = assets.map((asset) => asset.imageUrl);
  //   // setRandomImage(randomImageFromArray);
  //   // GetImage();
  // }, []);

  return (
    <>
      <div>
        <Suspense fallback="Loading...">
          <img src={directApi + randomImage.imageUrl}></img>
        </Suspense>
      </div>
    </>
  );
}
