# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Dev server at `localhost:4321/portfolio_v2/` (note the base path) |
| `npm run build` | Static build to `./dist/` |
| `npm run preview` | Serve the built site locally |
| `npx astro check` | Typecheck; also runs in CI before the build |

There is no test suite, linter, or formatter. `astro check` is the only automated gate.

## Architecture

Static Astro 5 site (no adapter, no SSR) building a personal portfolio, deployed to GitHub Pages by [.github/workflows/deploy.yml](.github/workflows/deploy.yml) on every push to `main`.

### The base path is the thing to get right

The site is served from a GitHub Pages project subpath, so `base` is `/portfolio_v2/` in [astro.config.mjs](astro.config.mjs) — **constant across dev and production, deliberately**. It was previously `/` in dev and `/portfolio_v2/` in production, and that divergence hid three bugs that only manifested once deployed (a 404 at the site root, a language switcher that silently did nothing, a 404 favicon). Keeping dev on the base path means local browsing reproduces production. Don't reintroduce a `NODE_ENV` conditional here.

Consequently, **every internal link must be built from `import.meta.env.BASE_URL`**, as [Header.astro](src/components/Header.astro) does. A hardcoded `/es/projects` resolves against the domain root and 404s in production only. This applies inside client `<script>` blocks too — Vite inlines `BASE_URL` there (see the language switcher in [BaseLayout.astro](src/layouts/BaseLayout.astro)). Relative links (`./technical`) are also wrong: Astro builds directory-style URLs, so they resolve one level too deep.

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
