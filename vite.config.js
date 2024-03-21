import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createHtmlPlugin } from 'vite-plugin-html'
import styleImport from 'vite-plugin-style-import'
const path = require('path')

export default () => {
  return defineConfig({
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/styles/variables.scss";@import "@/styles/element-variables.scss";'
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    },
    plugins: [
      createVuePlugin({
        jsx: true
      }),
      createHtmlPlugin({
        minify: true
      }),
      styleImport({
        libs: [
          {
            libraryName: 'element-ui',
            esModule: true,
            resolveStyle: name => {
              return `theme-chalk/${name}.css`
            }
          }
        ]
      })
    ]
  })
}
