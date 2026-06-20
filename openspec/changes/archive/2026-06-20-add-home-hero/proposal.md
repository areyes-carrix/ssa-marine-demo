# Add Home Hero

## Why

The shell currently renders a "shell verified" placeholder where the
hero should be. The hero is the home page's most prominent section —
a full-bleed image carousel introducing SSA Marine México's six
Mexican ports. Building it now establishes the page content rhythm
and exercises the brand tokens laid down in `add-site-shell`.

## What Changes

- Add `components/home/Hero.tsx` (server component shell).
- Add `components/home/HeroCarousel.tsx` (client island) with fade
  transitions, autoplay, pause on hover/focus, dot navigation,
  chevron arrows, and keyboard support.
- Add `lib/hero-slides.ts` with the six typed slides sourced from
  `public/ssa/home/content.json` paired with
  `slider-2..7.jpg`.
- Replace the "shell verified" block in `app/page.tsx` with `<Hero />`.

## Impact

- Affected specs: **home-hero** (new capability).
- Affected code: `app/page.tsx`, new `components/home/*`,
  new `lib/hero-slides.ts`.
- Depends on the `site-shell` capability (theme tokens, fonts).
- No new runtime dependencies — fade carousel is hand-rolled React.