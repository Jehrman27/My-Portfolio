# ehrmantraut.me

My personal site and portfolio, live at **[ehrmantraut.me](https://ehrmantraut.me)**.

A single-page React app: hero, selected work, toolbox, about.

## Stack

|           |                                            |
| --------- | ------------------------------------------ |
| Framework | React 19 + TypeScript                      |
| Build     | Vite                                       |
| Styling   | CSS Modules, custom properties for theming |
| Hosting   | GitHub Pages, custom domain via `CNAME`    |
| Deploy    | GitHub Actions on push to `main`           |

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # type-check + production build to dist/
pnpm preview  # serve the production build
pnpm lint
```

## Editing the content

All copy and project data lives in [`src/data/site.ts`](src/data/site.ts) — adding
a project or changing a bio line means editing that file, not the components.

## Notes on a few decisions

- **Theming.** Dark by default, light available. The initial theme is resolved by
  a small inline script in `index.html` so the page never paints the wrong one
  and then corrects itself. After that `useTheme` owns it, persisting to
  `localStorage` and following the OS preference until you choose a side.
- **Icons are inline SVG.** They inherit `currentColor`, so one set works in both
  themes instead of shipping light and dark image files.
- **Images are pre-processed.** `public/images/` holds a square 720px portrait
  (JPEG + WebP) and a 1200×630 Open Graph card, not camera originals.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds with
pnpm and publishes `dist/` to the `gh-pages` branch.
