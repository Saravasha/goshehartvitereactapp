import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const useApi = () => {
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
          console.log(assets);
          console.log(isLoading);
        })
        .catch((error) => {
          console.error("Assets:error fetching data", error);
          setLoading(false);
        });
    }
    AssetsGetter();
  }, []);

  // Pages
  useEffect(() => {
    async function PagesGetter() {
      await axios
        .get(pageUrl)
        .then((result) => {
          setPages(result.data);
          console.log(pages);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Pages:error fetching data", error);
          setLoading(false);
        });
    }
    PagesGetter();
  }, []);

  return { assets, pages, directApi, isLoading };
};

export default useApi;
