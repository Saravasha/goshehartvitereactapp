import React, { useState } from "react";
import Asset from "./Asset";
import Modal from "./Modal";
import ScrollToTopButton from "../ScrollToTopButton";
import { useData } from "../../api/ApiContext";

const Gallery = ({
  assets,
  directApi,
  isLoading,
  isModalVisible,
  setIsModalVisible,
}) => {
  // const { assets, directApi, isLoading } = useData();
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [clickedAsset, setClickedAsset] = useState(null);

  const handleClick = (asset) => {
    setCurrentIndex(asset.id);
    setClickedImage(directApi + asset.imageUrl);
    setClickedAsset(asset);

    setIsModalVisible(true); // Open modal when image is clicked
  };

  const handleCloseModal = () => {
    setClickedImage(null);
    setClickedAsset(null);
    setIsModalVisible(false); // Close modal
  };

  const handleRotationRight = () => {
    const totalLength = assets.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = directApi + assets[0].imageUrl;
      setClickedImage(newUrl);
      setClickedAsset(assets[0]);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = assets.filter((item) => {
      return assets.indexOf(item) === newIndex;
    });
    const newItem = directApi + newUrl[0].imageUrl;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
    setClickedAsset(newUrl[0]);
  };

  const handleRotationLeft = () => {
    const totalLength = assets.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = directApi + assets[totalLength - 1].imageUrl;
      setClickedImage(newUrl);
      setClickedAsset(assets[totalLength - 1]);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = assets.filter((item) => {
      return assets.indexOf(item) === newIndex;
    });
    const newItem = directApi + newUrl[0].imageUrl;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
    setClickedAsset(newUrl[0]);
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
      {clickedImage && (
        <Modal
          clickedImage={clickedImage}
          handleRotationLeft={handleRotationLeft}
          handleRotationRight={handleRotationRight}
          setClickedImage={setClickedImage}
          clickedAsset={clickedAsset}
          onClose={handleCloseModal} // Pass close handler to modal
        />
      )}

      {!isModalVisible && <ScrollToTopButton isVisible={!isModalVisible} />}
    </>
  );
};

export default Gallery;
