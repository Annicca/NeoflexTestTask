import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    })
  ],
  resolve: {
    alias: {
      src: "/src",
      components: '/src/components',
      icons: '/src/assets/icons',
      images: '/src/assets/images',
      utils: '/src/utils'
    }
  }
})
