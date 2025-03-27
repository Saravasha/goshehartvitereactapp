import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function useApi() {
  const [assets, setAssets] = useState([]);
  const [pages, setPages] = useState([]);
  const assetUrl = import.meta.env.VITE_DOTNET_ASSET_API_URL_TARGET;
  const pageUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
  const directApi = import.meta.env.VITE_DOTNET_API_TARGET;

  // Assets
  useEffect(() => {
    const assetsGetter = async () => {
      await axios.get(assetUrl).then((result) => {
        setAssets(result.data);
      });
    };
    if (assetUrl) {
      assetsGetter();
    }
  }, [assetUrl]);

  // Pages
  useEffect(() => {
    const pagesGetter = async () => {
      await axios.get(pageUrl).then((result) => {
        setPages(result.data);
      });
    };
    if (pageUrl) {
      pagesGetter();
    }
  }, [pageUrl]);

  return { assets, pages, directApi };
}
