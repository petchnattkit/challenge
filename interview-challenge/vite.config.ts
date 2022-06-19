import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// fix TS warning
const path = require('path')
const dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => {
            if (name === 'row' || name === 'col') return `antd/lib/grid/style/index.less`
            return `antd/lib/${name}/style/index.less`
          },
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/components/"),
    },
  },
  build: {
    rollupOptions: {

    }
  }
})
