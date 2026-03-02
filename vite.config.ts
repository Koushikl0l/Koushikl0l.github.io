import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// For GitHub Pages: set VITE_BASE_PATH to repo name for project sites (e.g. Portfolio),
// or leave unset for user/org site (username.github.io)
const repoName = process.env.VITE_BASE_PATH || "";
const base =
  repoName && !repoName.includes(".github.io") ? `/${repoName}/` : "/";

export default defineConfig(() => ({
  base,
  assetsInclude: ["**/*.PNG"],
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
