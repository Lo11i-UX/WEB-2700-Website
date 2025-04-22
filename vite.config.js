import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',       // 👈 tells Vite to treat `src` as the root folder
  build: {
    outDir: '../dist',  // 👈 puts build output back in the top-level `dist/`
  },
  server: {
    port: 8080         // keep this if you want port 8080
  }
});
