# Tasks

## 1. Docs & setup
- [x] 1.1 Read `node_modules/next/dist/docs/` for layout, metadata,
      `next/font`, and `next/image` in Next 16.
- [x] 1.2 Drop logo + icon assets into `public/ssa/`.
- [x] 1.3 Capture reference screenshots of ssamarine.mx at 360/768/
      1280/1920 px and store under `openspec/changes/add-site-shell/
      reference/`.
- [x] 1.4 Record the source footer column headings verbatim and update
      task 4.2 to match.
- [x] 1.5 Identify the brand font; if a licensed asset is local, wire
      it via `next/font/local`, else pick the closest Google Font and
      document the substitution in `design.md`.

## 2. Theme tokens
- [x] 2.1 Add SSA brand palette (primary, ink, surface, accent) to
      `app/globals.css` `@theme inline`.
- [x] 2.2 Add container width + section spacing tokens.
- [x] 2.3 Verify dark-mode `prefers-color-scheme` overrides.

## 3. SiteHeader
- [x] 3.1 Create `components/site-shell/SiteHeader.tsx` (server
      component; client island only for the mobile drawer).
- [x] 3.2 Render logo (`next/image`), primary nav links, ES/EN
      placeholder switcher.
- [x] 3.3 Add `MobileNav.tsx` client island with `useState` drawer +
      focus trap + `Escape` to close.
- [x] 3.4 Sticky on scroll, blurred background at y > 8px.
- [x] 3.5 Two-row header on desktop: white top row (logo + ES/EN),
      green bottom row (primary nav).

## 4. SiteFooter
- [x] 4.1 Create `components/site-shell/SiteFooter.tsx`.
- [x] 4.2 Three regions: brand blurb (from content.json), social-icon row (4 icons from /ssa/home/assets/images/misc/), legal row.
- [x] 4.3 Legal row with copyright + privacy/terms links.
- [x] 4.4 "Enlaces externos" column with verified labels + hrefs from
      ssamarine.mx footer.

## 5. Layout integration
- [x] 5.1 Import header + footer in `app/layout.tsx`.
- [x] 5.2 Wrap `{children}` in `<main className="flex-1">`.
- [x] 5.3 Replace `app/page.tsx` body with a temporary
      "shell verified" placeholder.

## 6. Quality gates
- [x] 6.1 `npm run lint` clean.
- [x] 6.2 `npx tsc --noEmit` clean.
- [x] 6.3 `npm run build` succeeds.
- [x] 6.4 Manual check at 360 / 768 / 1280 / 1920 px against the
      reference screenshots from task 1.3.
- [x] 6.5 Keyboard-only nav: Tab order, focus rings, drawer trap.
- [x] 6.6 Lighthouse a11y ≥ 95 on `/`.

## 7. Archive
- [x] 7.1 `openspec archive add-site-shell` once acceptance is met.