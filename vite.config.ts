import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr(), UnpluginInjectPreload({
    files: [
        {
          outputMatch: /background-[1-3](-.*)?\.svg$/,
          attributes: {
            fetchpriority: 'high',
            as: 'image',
            type: 'image/svg+xml',
          },
        },
      ],
  })],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
});