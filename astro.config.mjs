// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "static",
  site: "https://sinduaditya.ristack.tech",
  integrations: [sitemap()],
});
