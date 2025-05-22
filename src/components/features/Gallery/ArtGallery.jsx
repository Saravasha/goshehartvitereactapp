import React from "react";
import AssetSearch from "./AssetSearch";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import { useData } from "../../api/ApiContext";

const ArtGallery = ({ isModalVisible, setIsModalVisible }) => {
  const { assets, directApi, isLoading } = useData();
  const [searchTerm, setSearchTerm] = useState(() => {
    return "";
  });
  const [foundAssets, setFoundAssets] = useState(() => {
    return [];
  });

  const searchAsset = (value) => {
    setSearchTerm(value);

    // setSearchTerm((prevState) => console.log(e.target.value));
  };

  const resetSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    setFoundAssets(
      assets.filter(
        (asset) =>
          asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asset.categories.some((category) =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    );
  }, [searchTerm, assets]);

  return (
    <div className="ArtGallery flex flex-col justify-center dark:text-white  text-black font-thin m-4 rounded-2xl shadow-2xl relative">
      {isLoading ? (
        <h1 className="font-thin justify-center flex mx-auto p-4">
          Loading...
        </h1>
      ) : (
        <>
          <h1 className="text-6xl font-thin m-4 mx-auto flex justify-center border-transparent border-b-1 p-4 ">
            Art Gallery
          </h1>
          <AssetSearch
            searchAsset={searchAsset}
            resetSearch={resetSearch}
            searchTerm={searchTerm}
          />

          {foundAssets.length !== 0 ? (
            <Gallery
              assets={foundAssets}
              directApi={directApi}
              isLoading={isLoading}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          ) : foundAssets.length === 0 ? (
            <h1 className=" font-thin  justify-center flex mx-auto p-4">
              Could not find what you were looking for
            </h1>
          ) : (
            <Gallery
              assets={assets}
              directApi={directApi}
              isLoading={isLoading}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ArtGallery;
