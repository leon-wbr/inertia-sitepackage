import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    cors: {
      origin: "https://typo3-inertia-example.ddev.site/",
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "/src/main.tsx",
    },
    outDir: "../../Public/Dist",
    emptyOutDir: true,
  },
});
