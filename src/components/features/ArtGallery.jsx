import React from "react";
import useApi from "../api/useApi";

const ArtGallery = () => {
  const { assets, directApi } = useApi();

  const assetsRendered = assets.map((asset) => (
    <li className="list-item" key={asset.id}>
      <p>{asset.name}</p>
      <img alt={asset.name} src={directApi + asset.imageUrl}></img>
    </li>
  ));

  return (
    <>
      <h1 className="">Art Gallery</h1>
      <ul>{assetsRendered}</ul>
    </>
  );
};
export default ArtGallery;
