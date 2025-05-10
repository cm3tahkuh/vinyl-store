import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.join(__dirname, "src/styles"),
      "@pages": path.join(__dirname, "src/pages"),
      "@widgets": path.join(__dirname, "src/widgets"),
      "@shared": path.join(__dirname, "src/shared"),
      "@store": path.join(__dirname, "src/store"),
      "@api": path.join(__dirname, "src/api"),
    },
  },
});
