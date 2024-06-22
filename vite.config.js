import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  server: {
    host: "0.0.0.0", // This allows Vite to be accessed over the local network
    port: 5173, // Default port (optional, change if needed)
  },
});
