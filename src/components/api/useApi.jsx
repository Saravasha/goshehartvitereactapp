import { useEffect, useState } from "react";
import axios from "axios";

const useApi = () => {
  const [assets, setAssets] = useState([]);
  const [pages, setPages] = useState([]);
  const [colors, setColors] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const assetUrl = import.meta.env.VITE_DOTNET_ASSET_API_URL_TARGET;
  const pageUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
  const colorUrl = import.meta.env.VITE_DOTNET_COLOR_API_URL_TARGET;
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

  // Colors
  useEffect(() => {
    async function ColorsGetter() {
      await axios
        .get(colorUrl)
        .then((result) => {
          setColors(result.data);
        })
        .catch((error) => {
          console.error("Colors:error fetching data", error);
        });
    }

    ColorsGetter();
    console.log(colors);
  }, [colorUrl]);

  useEffect(() => {
    if (assets.length && pages.length && colors.length) {
      setLoading(false);
    }
  }, [assets, pages, colors]);

  return { assets, pages, colors, directApi, isLoading };
};

export default useApi;
