import {createEntryFiles} from './scripts/createEntryFiles'
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
    lib: {
      name: 'UIExtensionsServerKit',
      entry: path.join(process.cwd(), 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (type) => `index.${type}.js`,
    },
    rollupOptions: {
      external: ['react'],
      input: {
        index: path.join(process.cwd(), 'src/index.ts'),
        testing: path.join(process.cwd(), 'src/testing/index.ts'),
      },
      output: {
        globals: {
          react: 'React',
        },
        preserveModules: true,
        assetFileNames: `[name].[ext]`,
        entryFileNames: ({facadeModuleId}) => {
          return facadeModuleId.endsWith('testing/index.ts') ? 'index.[format].js' : '[name].[format].js'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, './tests/setup.ts')],
    deps: {
      inline: ['@shopify/react-testing'],
    },
  },
  resolve: {
    alias: {
      '@shopify/ui-extensions-test-utils': path.resolve(__dirname, '../ui-extensions-test-utils/src'),
    },
  },
  plugins: [
    reactRefresh(),
    createEntryFiles({
      files: {
        index: './dist/index',
        testing: './dist/testing/index',
      },
    }),
  ],
})
