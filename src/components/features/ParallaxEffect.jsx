import React from "react";
import GetRandomAsset from "./GetRandomAsset";
import useApi from "../api/useApi";

const ParallaxEffect = () => {
  return (
    <div className="bg-red-500">
      <GetRandomAsset />
    </div>
  );
};

export default ParallaxEffect;
