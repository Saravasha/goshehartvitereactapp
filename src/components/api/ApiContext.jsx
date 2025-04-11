import React, { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);
  const [pages, setPages] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const assetUrl = import.meta.env.VITE_DOTNET_ASSET_API_URL_TARGET;
  const pageUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
  const directApi = import.meta.env.VITE_DOTNET_API_TARGET;

  // Assets
  useEffect(() => {
    async function AssetsGetter() {
      await axios
        .get(assetUrl)
        .then((result) => {
          setAssets(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Assets:error fetching data", error);
          setLoading(false);
        });
    }
    if (!assets) {
      AssetsGetter();
    }
  }, [assets]);

  // Pages
  useEffect(() => {
    async function PagesGetter() {
      await axios
        .get(pageUrl)
        .then((result) => {
          setPages(result.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Pages:error fetching data", error);
          setLoading(false);
        });
    }

    if (!pages) {
      PagesGetter();
    }
  }, [pages]);

  return (
    <ApiContext.Provider value={{ assets, pages, directApi, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useData = () => useContext(ApiContext);
