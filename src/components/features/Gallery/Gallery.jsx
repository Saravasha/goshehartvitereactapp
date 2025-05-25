import React, { useState } from "react";
import Asset from "./Asset";
import Modal from "./Modal";
import ScrollToTopButton from "../ScrollToTopButton";

const Gallery = ({
  assets,
  directApi,
  isLoading,
  isModalVisible,
  setIsModalVisible,
}) => {
  const [currentIndex, setCurrentIndex] = useState();
  const [clickedAsset, setClickedAsset] = useState(null);

  const handleClick = (asset) => {
    const index = assets.findIndex((a) => a.id === asset.id);
    setCurrentIndex(index);
    setClickedAsset(asset);
    setIsModalVisible(true);
  };

  const handleRotationRight = () => {
    const totalLength = assets.length;
    const newIndex = (currentIndex + 1) % totalLength;
    const newAsset = assets[newIndex];
    setCurrentIndex(newIndex);
    setClickedAsset(newAsset);
  };

  const handleRotationLeft = () => {
    const totalLength = assets.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    const newAsset = assets[newIndex];
    setCurrentIndex(newIndex);
    setClickedAsset(newAsset);
  };

  return (
    <>
      {isLoading ? (
        <h1 className="font-thin justify-center flex mx-auto p-4">
          Loading...
        </h1>
      ) : (
        <div className="Gallery justify-center lg:columns-3 gap-4  p-4 rounded shadow-lg">
          {assets.map((asset) => (
            <div
              className="Asset 
                rounded shadow-lg hover:shadow-2xl flex justify-center m-4 break-inside-auto overflow-auto   "
              key={asset.id}
              onClick={() => handleClick(asset)}
            >
              <Asset
                key={asset.id}
                asset={asset}
                categories={asset.categories}
                directApi={directApi}
              />
            </div>
          ))}
        </div>
      )}
      {isModalVisible && clickedAsset && (
        <Modal
          clickedAsset={clickedAsset}
          setClickedAsset={setClickedAsset}
          handleRotationLeft={handleRotationLeft}
          handleRotationRight={handleRotationRight}
        />
      )}
      {!isModalVisible && <ScrollToTopButton isVisible={!isModalVisible} />}
    </>
  );
};

export default Gallery;
