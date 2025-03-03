import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  'process.env': {
    DOTNET_API_URL: process.env.DOTNET_API_URL || 'https://admin.goshehart.se/api/react/asset',
  }
})
