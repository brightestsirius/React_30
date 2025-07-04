import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    "babel-plugin-styled-components",
    {
      displayName: true,
      fileName: true,
    },
    tailwindcss(),
  ],
});