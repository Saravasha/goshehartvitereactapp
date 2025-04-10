import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ImagesGetter() {
  const [assets, setAssets] = useState([]);
  const apiUrl = import.meta.env.VITE_DOTNET_ASSET_API_URL_TARGET;
  const directApi = import.meta.env.VITE_DOTNET_API_TARGET;

  useEffect(() => {
    // Perform actions here that you want to execute after the component mounts
    console.log("App environment = ", `${import.meta.env.MODE}`);

    axios.get(apiUrl).then((result) => {
      const assets = result.data;
      setAssets(assets);
    });
  }, []);

  // console.log("assets outside useEffect scope = ",assets);
  // console.log(arrayDataItems);
  const assetsRendered = assets.map((asset) => (
    <li key={asset.id}>
      <p>{asset.name}</p>
      <img alt={asset.name} src={directApi + asset.imageUrl}></img>
    </li>
  ));

  console.log("assetsrendered = ", assetsRendered);

  return (
    <div className="container">
      <ul>{assetsRendered}</ul>
      <div className="row">
        <div className="col">{<p>{assets.name}</p>}</div>
        <div className="col">{<p>{assets.imageUrl}</p>}</div>
        <div className="col">{<p>{assets.description}</p>}</div>
        <div className="col">{<p>{assets.author}</p>}</div>
      </div>
    </div>
  );
}
