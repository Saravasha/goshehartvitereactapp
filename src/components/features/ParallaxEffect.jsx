import React from "react";
import GetRandomAsset from "./GetRandomAsset";

const ParallaxEffect = ({ assets, directApi, isLoading }) => {
  return (
    <div className="ParallaxBackgroundImage">
      <GetRandomAsset
        assets={assets}
        directApi={directApi}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ParallaxEffect;
