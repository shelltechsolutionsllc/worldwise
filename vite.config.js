import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    viteStaticCopy({
      targets: [
        {
          src: "data/cities.json", // path to your JSON file
          dest: "data/cities.json", // destination folder within dist, '' means root of dist
        },
      ],
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:9000",
    },
  },
});
