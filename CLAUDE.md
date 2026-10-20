# Portfolio

Personal portfolio for a Japanese university student (2nd year, software engineering) who is job hunting. The audience is recruiters. Japanese first, English later.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4, MDX, npm. Hosting target: Vercel (not set up yet). Light mode only.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier write
- `npm run format:check` — Prettier check

## Structure

- `src/app/` — routes, layout, global CSS
- `src/components/` — React components
- `src/content/articles/ja/` — article MDX files (frontmatter: title, date, tags, description)
- `src/content/projects/ja/` — project MDX files, one per project
- `src/data/` — typed data (e.g. `certifications.ts`)
- `src/lib/` — helpers (content loading, etc.)
- `src/types/` — shared TypeScript types

Content is organized by locale folder (`ja/`) so `en/` can be added later. No i18n library.

## Content workflow

Articles and projects are MDX files with frontmatter in `src/content/...`. Certifications live in `src/data/certifications.ts`. Publishing = add or edit a file, then the owner commits and pushes.

## Git rules

Never run `git add`, `git commit`, or `git push`. The owner does those personally.
