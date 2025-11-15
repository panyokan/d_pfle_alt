import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/d_pfle_alt/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr({
      prerender: true, // Add this line for static generation
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));