import useApi from "../../api/useApi";
import React, { useEffect, useState } from "react";
import Asset from "./Asset";
import ArtGallery from "./ArtGallery";
import Modal from "./Modal";

const Gallery = ({ assets, directApi, isLoading }) => {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();

  const handleClick = (asset) => {
    setCurrentIndex(asset.id);
    setClickedImage(directApi + asset.imageUrl);
  };

  const handleRotationRight = () => {
    const totalLength = assets.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = directApi + assets[0].imageUrl;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = assets.filter((item) => {
      return assets.indexOf(item) === newIndex;
    });
    const newItem = directApi + newUrl[0].imageUrl;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = assets.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = directApi + assets[totalLength - 1].imageUrl;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = assets.filter((item) => {
      return assets.indexOf(item) === newIndex;
    });
    const newItem = directApi + newUrl[0].imageUrl;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="Gallery border-black bg-red-500 border-1 rounded shadow-lg m-4 grid">
      {isLoading ? (
        <h1 className="font-thin align-center justify-center flex mx-auto p-4">
          Loading...
        </h1>
      ) : (
        <div>
          <div className="Gallery sm:align-center sm:justify-center gap-4 m-4 p-4 2xl:columns-5 xl:columns-4 lg:columns-3 md:columns-2 sm:columns-1 ">
            <>
              {assets.map((asset) => (
                // Asset Wrapper abstracted to parent component for easier onClick handling. Asset <div> wrapper uncommented to what change was made.
                <div
                  className="Asset sm:max-w-sm md:max-w-md lg:max-w-lg  rounded shadow-lg bg-inherit  border-black border-4 h-full m-4 break-inside-auto overflow-auto  "
                  key={asset.id}
                  onClick={() => handleClick(asset)}
                >
                  <Asset
                    key={asset.id}
                    image={asset}
                    categories={asset.categories}
                    directApi={directApi}
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      )}
      {clickedImage && (
        <Modal
          clickedImage={clickedImage}
          handleRotationLeft={handleRotationLeft}
          handleRotationRight={handleRotationRight}
          setClickedImage={setClickedImage}
        />
      )}
    </div>
  );
};

export default Gallery;
