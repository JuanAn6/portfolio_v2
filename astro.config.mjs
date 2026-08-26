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
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: true,
      // Astro's own redirect for `/` yields a bodyless response that a static
      // build cannot write, leaving no dist/index.html. src/pages/index.astro
      // handles the redirect instead.
      redirectToDefaultLocale: false,
    }
  },
  site: 'https://juanangarcia.net',
  // Cloudflare serves the site at the domain root, not at a subpath.
  // All internal links are built using import.meta.env.BASE_URL, so
  // this is the only place where that is determined. Keep it identical in dev.
  base: '/',
});
