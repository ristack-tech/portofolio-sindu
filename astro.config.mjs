// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.glb'],
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [react()],
});
