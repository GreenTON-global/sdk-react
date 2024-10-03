// vite.config.ts
import { defineConfig } from 'vite';

import path, { dirname } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'url';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    dts({ outDir: 'dist/dts', tsconfigPath: './tsconfig.json' }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(dirname(fileURLToPath(import.meta.url)), './src'),
      },
    ],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'greenton.sdkReact',
      entry: 'src/main.ts',
      formats: ['es', 'cjs'],
      fileName: 'main',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@tonconnect/ui-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@tonconnect/ui-react': 'TON_CONNECT_UI_REACT',
        },
      },
    },
  },
});
