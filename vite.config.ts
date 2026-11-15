import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/data/site';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-metadata',
      transformIndexHtml(html) {
        if (!site.url) return html;
        const origin = new URL(site.url).origin;
        return html
          .replaceAll('content="/images/og-image.png"', `content="${origin}/images/og-image.png"`)
          .replace(
            '</head>',
            `<link rel="canonical" href="${origin}/" /><meta property="og:url" content="${origin}/" /></head>`,
          );
      },
      generateBundle() {
        if (!site.url) return;
        const origin = new URL(site.url).origin;
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`,
        });
        this.emitFile({
          type: 'asset',
          fileName: 'robots.txt',
          source: `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
        });
      },
    },
  ],
});
