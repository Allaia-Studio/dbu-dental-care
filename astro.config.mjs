// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.dbudentalcare.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // These pages carry <meta noindex>, so listing them here would send
      // mixed signals to crawlers.
      filter: (page) => !/\/(privacy-policy|terms)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
