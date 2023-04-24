import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        pdp: "http://localhost:3001/assets/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/Header.tsx",
        "./Footer": "./src/Footer.tsx",
        "./products": "./src/products.ts",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});