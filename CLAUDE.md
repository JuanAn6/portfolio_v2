# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Dev server at `localhost:4321/` |
| `npm run build` | Static build to `./dist/` |
| `npm run preview` | Serve the built site locally (Astro's preview) |
| `npm run cf:dev` | Build, then serve `dist/` through Wrangler — reproduces Cloudflare's asset serving, `_headers` and the 404 handling |
| `npm run deploy` | Build and `wrangler deploy` by hand (normally unnecessary; see below) |
| `npx astro check` | Typecheck; also runs in CI before the build |

There is no test suite, linter, or formatter. `astro check` is the only automated gate.

## Architecture

Static Astro 5 site (no adapter, no SSR) building a personal portfolio, deployed to **Cloudflare Workers static assets** by Cloudflare's own Workers Builds on every push to `main`. [.github/workflows/ci.yml](.github/workflows/ci.yml) only typechecks and builds — it does not deploy.

### Deploying: no worker, only assets

[wrangler.jsonc](wrangler.jsonc) deliberately has **no `main`**. The site is fully static, so Wrangler uploads `dist/` as assets and Cloudflare serves them directly — no Worker invocation, no compute cost.

This matters because of a failure mode already hit once: if an adapter (`@astrojs/cloudflare`) is ever added, Astro emits a `dist/_worker.js/` directory, and without a `main` entry Wrangler tries to upload that server bundle as *public* assets and aborts with `Uploading a Pages _worker.js directory as an asset`. The fix in that case is to add `"main": "./dist/_worker.js/index.js"` — **never** an empty `.assetsignore`, which merely silences the check and publishes the server code.

`assets.not_found_handling` is `"404-page"`, which serves `dist/404.html` from [src/pages/404.astro](src/pages/404.astro). That page lives outside `[lang]/`, so it has no `Astro.params.lang` and cannot use `BaseLayout`; it is standalone and bilingual by design.

[public/_headers](public/_headers) sets caching (immutable for the hashed `/_astro/*` bundles, revalidate-always for HTML) and a few security headers. Wrangler reads it from the root of `dist/` and does not serve it as an asset.

### The base path

`base` is `/` in [astro.config.mjs](astro.config.mjs) — Cloudflare serves the site at the root of the domain. It was `/portfolio_v2/` while the site lived on a GitHub Pages project subpath; if the deploy target ever moves back, that is the single line to change, and it must stay **identical in dev and production**. An earlier `NODE_ENV` conditional here (`/` in dev, subpath in prod) hid three bugs that only appeared once deployed: a 404 at the site root, a language switcher that silently did nothing, and a 404 favicon. Don't reintroduce it.

That portability only holds because **every internal link is built from `import.meta.env.BASE_URL`**, as [Header.astro](src/components/Header.astro) does. Keep it that way even though `BASE_URL` is currently just `/`. This applies inside client `<script>` blocks too — Vite inlines `BASE_URL` there (see the language switcher in [BaseLayout.astro](src/layouts/BaseLayout.astro)). Relative links (`./technical`) are also wrong: Astro builds directory-style URLs, so they resolve one level too deep.

### Root redirect

`i18n.routing.redirectToDefaultLocale` is explicitly `false`. With `prefixDefaultLocale: true`, Astro's own `/` redirect returns a bodyless response that a **static** build cannot write to disk, so `dist/index.html` silently never gets created and the site root 404s. [src/pages/index.astro](src/pages/index.astro) does the redirect instead with a `<meta http-equiv="refresh">` — no JS, so no blank flash and crawlers follow it. If you ever see `(file not created, response body was empty)` in build output, this is why.

### i18n

Spanish (default) and English, routed under `/es/…` and `/en/…`. Astro's `i18n` config handles routing; the translation layer is hand-rolled but centralized in [src/i18n/index.ts](src/i18n/index.ts), which is the only place that knows the locale list:

- `getTranslations(lang)` returns the dictionary; `getStaticPaths` is shared by every page under `[lang]/` via `export { getStaticPaths } from "…/i18n"`.
- [es.ts](src/i18n/es.ts) is the source of truth. [en.ts](src/i18n/en.ts) is annotated `typeof es`, so a missing or misspelled key is a build error rather than `undefined` rendered to a visitor. Keep that annotation on any new locale.
- `BaseLayout`, `Header`, and `ProjectCard` all derive `lang` from `Astro.params` rather than taking it as a prop — that's the convention, and it's why the `<html lang>` attribute can't be forgotten. `BaseLayout` takes optional `title`/`description` props only.

Adding a locale touches: `locales` in [astro.config.mjs](astro.config.mjs), the `Language` union in [src/types/language.type.ts](src/types/language.type.ts), a new `src/i18n/<lang>.ts`, the `dictionaries` map in [src/i18n/index.ts](src/i18n/index.ts), and a `languageOptions` label in each dictionary. Pages and the switcher derive everything else.

### Styling

Tailwind v4 via the `@tailwindcss/vite` plugin, configured CSS-first in [src/styles/global.css](src/styles/global.css), which `BaseLayout` imports. Dark mode is a **class** strategy defined there by `@custom-variant dark (&:where(.dark, .dark *))`, toggled on `<html>` by an inline script in `BaseLayout`'s `<head>` (reads `localStorage.theme`, falls back to `prefers-color-scheme`) and flipped by [ThemeToggle.astro](src/components/ThemeToggle.astro). The inline script must stay in `<head>` and stay `is:inline` to avoid a flash of the wrong theme.

[tailwind.config.js](tailwind.config.js) is vestigial — Tailwind v4 does not read it in this setup. Change styling config in `global.css`, not there. Any new element with a `bg-*` needs a matching `dark:` variant.

### Content and layouts

Projects are typed `Project[]` arrays in [src/content/projects_es.ts](src/content/projects_es.ts) / [projects_en.ts](src/content/projects_en.ts) — plain TypeScript, **not** Astro content collections, despite living in `src/content/`. Both are intentionally empty; projects aren't published yet (commit `ede4d8b`, "Don't show the projects yet").

Per-project detail pages are hand-built page + component pairs (see [src/pages/\[lang\]/projects/example_project/](src/pages/[lang]/projects/example_project/) with `info`/`technical` tabs and matching components in [src/components/projects/](src/components/projects/)), not generated from the arrays. `example_project` is lorem ipsum scaffolding serving as the template; a project's `link` field points at such a page (e.g. `example_project/info`).

`Box*` components in [src/components/](src/components/) are presentational card wrappers sharing one long Tailwind class string; `BoxComponent` and `BoxComponentFullSize` currently differ only by `h-fit`.
