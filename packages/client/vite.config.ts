import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  plugins: [
    react(),
    legacy({
      modernPolyfills: [
        "es.global-this",
        "es.object.from-entries",
        "web.queue-microtask",
      ],
    }),
  ],
  build: {
    target: ["es2015"],
  },
  resolve: {
    alias: {
      "@comps": resolve(__dirname, "./src/components"),
      "@libs": resolve(__dirname, "./src/libs"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@path": resolve(__dirname, "./src/router.tsx"),
    },
  },
});
