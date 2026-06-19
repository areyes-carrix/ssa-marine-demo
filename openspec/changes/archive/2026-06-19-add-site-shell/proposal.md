# Add Site Shell

## Why

The repo currently ships the `create-next-app` starter page. To clone
ssamarine.mx we need a reusable shell — header, footer, theme tokens,
and a base layout — that every route renders inside. Building this
first unblocks all subsequent home-page sections (`add-home-hero`,
`add-home-services`, …) and locks in brand styling early.

## What Changes

- Add SSA brand color + spacing tokens to `app/globals.css` via
  Tailwind v4's `@theme inline` block.
- Replace Geist with the SSA brand font (or closest Google substitute)
  via `next/font` in `app/layout.tsx`.
- Extend `app/layout.tsx` to render a `<SiteHeader />` and
  `<SiteFooter />` around `{children}`.
- Add `components/site-shell/SiteHeader.tsx` with logo, primary nav,
  language switcher placeholder, and a mobile drawer.
- Add `components/site-shell/SiteFooter.tsx` with brand blurb,
  social icons, and legal row.
- Replace placeholder copy in `app/page.tsx` with a minimal
  "shell verified" landing block (real sections come in later changes).
- Reuse existing assets under `public/ssa/home/assets/images/`
  (logo, partner icons, social icons). No new asset files in this change.

## Impact

- Affected specs: **site-shell** (new capability).
- Affected code: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`,
  new `components/site-shell/*`, new assets under `public/ssa/`.
- No new runtime dependencies. No backend. No breaking changes —
  this is the first real feature.
- Verify against `node_modules/next/dist/docs/` that `next/font`
  usage and `metadata` export remain current for Next 16.2.9.