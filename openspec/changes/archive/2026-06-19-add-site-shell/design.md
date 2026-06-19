# Design Notes

## Server vs client components

`SiteHeader` and `SiteFooter` are server components. Only the mobile
drawer is a client island (`"use client"`) because it needs state and
event handlers. This keeps the JS payload minimal and aligns with
App Router defaults in Next 16.

## Theme via Tailwind v4 `@theme inline`

Tailwind v4 reads tokens from CSS, not `tailwind.config.*`. Brand
colors are declared once in `app/globals.css` and consumed as
`bg-ssa-primary`, `text-ssa-ink`, etc. This avoids a config file and
keeps the source of truth next to the rest of the CSS variables.

## Typography

The source site uses Kanit for display/headings and Lato for body
(confirmed in `public/ssa/home/assets/css/style.css` lines 168, 180,
921). Both are available on Google Fonts.

- Headings: `Kanit` via `next/font/google`, exposed as `--font-display`
- Body / UI: `Lato` via `next/font/google`, exposed as `--font-sans`

Tailwind utilities `font-sans` and `font-display` resolve to these
variables through `@theme inline` in `app/globals.css`.

Geist (from `create-next-app`) is removed from `app/layout.tsx` in
this change.

## i18n placeholder

The language switcher renders as a non-functional toggle in this
change. The real routing (`app/[locale]/...`) lands in
`add-i18n-es-en` to keep this change small and reviewable.

## Accessibility baseline

- Skip-link to `#main`.
- `<nav aria-label="Primary">` and `<nav aria-label="Footer">`.
- Mobile drawer: `role="dialog"`, `aria-modal="true"`, focus trap,
  `Escape` closes, body scroll locked while open.

## Visual-parity workflow

Reference screenshots captured in task 1.3 live under
`openspec/changes/add-site-shell/reference/` and are the ground truth
for the visual-parity scenarios. During implementation, place a
browser window next to each reference image at the matching width and
verify spacing, colors, and copy before checking a task off.