import React, { useEffect, useState } from "react";
import AssetSearch from "./AssetSearch";
import Gallery from "./Gallery";
import { useData } from "../../api/ApiContext";

const ArtGallery = ({ isModalVisible, setIsModalVisible }) => {
  const { assets, directApi, isLoading } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  const [foundAssets, setFoundAssets] = useState([]);

  const searchAsset = (value) => {
    setSearchTerm(value);
  };

  const resetSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      // Show all assets if searchTerm is empty
      setFoundAssets(assets);
      return;
    }

    const lowerSearch = searchTerm.toLowerCase();

    setFoundAssets(
      assets.filter((asset) => {
        const nameMatch = asset.name?.toLowerCase().includes(lowerSearch);
        const descriptionMatch = asset.description
          ? asset.description.toLowerCase().includes(lowerSearch)
          : false;
        const authorMatch = asset.author
          ? asset.author.toLowerCase().includes(lowerSearch)
          : false;
        const locationMatch = asset.location
          ? asset.location.toLowerCase().includes(lowerSearch)
          : false;
        const categoriesMatch = asset.categories
          ? asset.categories.some((cat) =>
              cat.name.toLowerCase().includes(lowerSearch)
            )
          : false;

        return (
          nameMatch ||
          descriptionMatch ||
          authorMatch ||
          locationMatch ||
          categoriesMatch
        );
      })
    );
  }, [searchTerm, assets]);

  return (
    <div className="ArtGallery flex flex-col justify-center dark:text-white text-black font-thin m-4 rounded-2xl shadow-2xl relative">
      {isLoading ? (
        <h1 className="font-thin justify-center flex mx-auto p-4">
          Loading...
        </h1>
      ) : (
        <>
          <h1 className="text-6xl font-thin m-4 mx-auto flex justify-center border-transparent border-b p-4">
            Art Gallery
          </h1>
          <AssetSearch
            searchAsset={searchAsset}
            resetSearch={resetSearch}
            searchTerm={searchTerm}
          />

          {foundAssets.length > 0 ? (
            <Gallery
              assets={foundAssets}
              directApi={directApi}
              isLoading={isLoading}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          ) : (
            <h1 className="font-thin justify-center flex mx-auto p-4">
              Could not find what you were looking for
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default ArtGallery;
