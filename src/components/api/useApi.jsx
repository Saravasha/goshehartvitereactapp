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
        })
        .catch((error) => {
          console.error("Assets:error fetching data", error);
        });
    }
    AssetsGetter();
  }, [assetUrl]);

  // Pages
  useEffect(() => {
    async function PagesGetter() {
      await axios
        .get(pageUrl)
        .then((result) => {
          setPages(result.data);
        })
        .catch((error) => {
          console.error("Pages:error fetching data", error);
        });
    }

    PagesGetter();
    console.log(pages);
  }, [pageUrl]);

  useEffect(() => {
    if (assets.length && pages.length) {
      setLoading(false);
    }
  }, [assets, pages]);

  return { assets, pages, directApi, isLoading };
};

export default useApi;
