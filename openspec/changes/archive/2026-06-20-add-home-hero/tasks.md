
### `openspec/changes/add-home-hero/tasks.md`

```markdown
# Tasks

## 1. Data
- [x] 1.1 Create `lib/hero-slides.ts` with `HeroSlide` type and the six
      slides (Cozumel, Lázaro Cárdenas, Manzanillo, Progreso, Tuxpan,
      Veracruz) sourced verbatim from `content.json`.

## 2. Server shell
- [x] 2.1 Create `components/home/Hero.tsx` (server component).
- [x] 2.2 Full-bleed `<section>` with `min-h-[600px] md:min-h-screen`.
- [x] 2.3 Pass slide data to `<HeroCarousel>`.

## 3. Carousel island
- [x] 3.1 Create `components/home/HeroCarousel.tsx` with `"use client"`.
- [x] 3.2 Active-index state + autoplay via `useEffect` (`AUTOPLAY_MS = 2000`).
- [x] 3.3 Pause autoplay on hover, focus-within, and reduced motion.
- [x] 3.4 Absolute-positioned slides with `opacity` fade transition.
- [x] 3.5 Dark gradient overlay over each image.
- [x] 3.6 Content layout: left-aligned, vertically centered. Headline
      (font-display, white). Description (white). CTA button
      (`bg-ssa-primary`, white text, label "Más información").
- [x] 3.7 Dot indicators at bottom-center; active dot highlighted.
- [x] 3.8 Prev/next chevron buttons, vertically centered, one per side.

## 4. Accessibility
- [x] 4.1 ARIA roles and labels per design.md.
- [x] 4.2 `aria-hidden` + `inert` on inactive slides.
- [x] 4.3 ArrowLeft / ArrowRight cycle slides when carousel has focus.

## 5. Page integration
- [x] 5.1 Replace `app/page.tsx` body with `<Hero />`.

## 6. Quality gates
- [x] 6.1 `npm run lint` clean.
- [x] 6.2 `npx tsc --noEmit` clean.
- [x] 6.3 `npm run build` succeeds.
- [x] 6.4 Visual parity vs `reference/hero-1280.png` at 360 / 768 /
      1280 / 1920 px.
- [x] 6.5 Keyboard nav: tab reaches chevrons + dots; arrow keys cycle.
- [x] 6.6 DevTools → Rendering → emulate `prefers-reduced-motion: reduce`:
      autoplay stops, transitions are instant.
- [x] 6.7 Lighthouse a11y ≥ 95 on `/`.

## 7. Archive
- [x] 7.1 `openspec archive add-home-hero` once acceptance is met.

## Deferred

- Performance audit deferred to a dedicated `optimize-home-performance`
  change after all home sections land. Initial production-build score
  was 75 (image-heavy hero); to be revisited when the full page is
  complete.