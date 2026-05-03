import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor: React core + router
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // Vendor: UI library
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
          // Vendor: Charts
          "vendor-charts": ["recharts"],
          // Data layer: all the large data files
          "data-locations": ["./src/data/locations.ts"],
          "data-blog": ["./src/data/blog-posts.ts"],
          "data-services": ["./src/data/services.ts"],
          "data-industries": ["./src/data/industries.ts"],
        },
      },
    },
  },
}));
