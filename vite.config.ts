import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'lib', 'index.ts'),
      name: 'template-landing-page-ui-library',
      formats: ['es', 'umd'],
      fileName: (ext) => `template-landing-page-ui-library.${ext}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-hook-form', '@heroicons/react', '@headlessui/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@headlessui/react': '@headlessui/react'
        }
      }
    },
    target: 'esnext'
  }
});
