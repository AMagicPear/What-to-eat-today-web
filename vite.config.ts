/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

const base = process.env.VITE_BASE_PATH || './';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [
    vue(),
    legacy(),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
