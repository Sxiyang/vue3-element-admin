import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // vite 代理
  server: {
    port: 9527,
    host: true,
  },
  plugins: [vue()],
});
