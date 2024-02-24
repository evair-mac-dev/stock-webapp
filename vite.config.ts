import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@atoms',
        replacement: path.resolve(__dirname, 'src/components/atoms'),
      },
      {
        find: '@molecules',
        replacement: path.resolve(__dirname, 'src/components/molecules'),
      },
      {
        find: '@organisms',
        replacement: path.resolve(__dirname, 'src/components/organisms'),
      },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, 'src/interfaces'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, 'src/providers'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
    ],
  },
});
