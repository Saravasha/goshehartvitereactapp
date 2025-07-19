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
  const environment = import.meta.env.MODE || "development"; // dev, production, etc.

  // 🧠 Reusable fetcher with logging + type checks
  const safeFetch = async (url, name) => {
    if (!url) {
      console.warn(`⚠️ ${name} API URL is not defined`);
      return [];
    }

    try {
      const res = await axios.get(url);
      if (typeof res.data !== "object") {
        console.error(`❌ ${name}: Invalid JSON format`, res.data);
        return [];
      }
      console.log(
        `✅ ${name} loaded (${
          Array.isArray(res.data) ? res.data.length : "object"
        })`
      );
      return res.data;
    } catch (err) {
      if (environment !== "production") {
        console.error(`❌ ${name} fetch failed:`, err.message || err);
      }
      return [];
    }
  };

  // Load all data
  useEffect(() => {
    const fetchAll = async () => {
      const [fetchedAssets, fetchedPages, fetchedColors] = await Promise.all([
        safeFetch(assetUrl, "Assets"),
        safeFetch(pageUrl, "Pages"),
        safeFetch(colorUrl, "Colors"),
      ]);

      setAssets(fetchedAssets);
      setPages(fetchedPages);
      setColors(fetchedColors);
      setLoading(false);
    };

    fetchAll();
  }, [assetUrl, pageUrl, colorUrl]);

  return {
    assets,
    pages,
    colors,
    directApi,
    isLoading,
    environment,
  };
};

export default useApi;
