import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      // 要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, "src/svg")],
      // 执行 icon name 的格式
      symbolId: "icon-[name]"
    })
  ],
  resolve: {
    alias: {
      "@examples": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".ts", ".vue", ".json"] // 导入时想要省略的扩展名列表
  },
  server: {
    port: 3000,
    cors: true,
    host: "0.0.0.0",
    proxy: {}
  },
  envDir: path.resolve(__dirname, "env"),
  build: {
    outDir: path.resolve(__dirname, "../dist")
  }
});
