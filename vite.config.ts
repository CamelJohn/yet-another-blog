import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginReactMarkdown from 'vite-plugin-react-markdown';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginReactMarkdown(),
    Pages({
      onRoutesGenerated: (routes) =>
        generateSitemap({
          routes,
          dest: 'public/sitemaps',
          filename: 'sitemap.xml',
          changefreq: 'daily',
          priority: 0.9,
          allowRobots: true,
          // exclude: ['/admin/*', '/login'],
        }),
    }),
  ],
  server: {
    open: true,
  },
});
