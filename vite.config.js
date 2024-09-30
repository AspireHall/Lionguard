import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Customize this if needed
    rollupOptions: {
      input: "./app/root.tsx", // Your Remix entry point (adjust as needed)
    },
  },
});
