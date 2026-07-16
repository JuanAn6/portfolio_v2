// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss({})]
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      // Astro's own redirect for `/` yields a bodyless response that a static
      // build cannot write, leaving no dist/index.html. src/pages/index.astro
      // handles the redirect instead.
      redirectToDefaultLocale: false,
    }
  },
  site: 'https://JuanAn6.github.io',
  // Kept identical in dev so local URLs match GitHub Pages' project subpath.
  base: '/portfolio_v2/',
});