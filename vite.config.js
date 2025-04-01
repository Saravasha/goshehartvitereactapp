import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  "process.env": {
    DOTNET_ASSET_API_URL:
      process.env.VITE_DOTNET_ASSET_API_URL ||
      "https://admin.goshehart.se/api/react/asset",
    DOTNET_ASSET_API_URL_DEV:
      process.env.VITE_DOTNET_ASSET_API_URL ||
      "http://localhost:5283/api/react/asset",
    DOTNET_PAGE_API_URL:
      process.env.VITE_DOTNET_PAGE_API_URL ||
      "https://admin.goshehart.se/api/react/page",
    DOTNET_PAGE_API_URL_DEV:
      process.env.VITE_DOTNET_PAGE_API_URL ||
      "http://localhost:5283/api/react/page",
    DOTNET_API_URL:
      process.env.VITE_DOTNET_API_TARGET || "https://admin.goshehart.se/",
  },
});
