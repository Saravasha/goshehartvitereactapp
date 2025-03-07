import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', 
  plugins: [react()],
  'process.env': {
    DOTNET_API_URL: process.env.VITE_DOTNET_API_URL || 'https://admin.goshehart.se/api/react/asset',
    DOTNET_API_URL_DEV: process.env.VITE_DOTNET_API_URL_DEV || 'http://localhost:5283/api/react/asset',
  }
})
