# Design Notes

## Why no carousel library

A fade-only autoplay carousel with 6 slides is ~40 lines of React.
Pulling `embla`, `swiper`, or `keen-slider` would add 10–30 KB for
behavior we can implement directly. Hand-rolling also keeps the demo
focused on React fundamentals.

## Component split

- `Hero.tsx` — server component, imports slide data, renders the static
  outer layout.
- `HeroCarousel.tsx` — `"use client"`, owns active-index state, autoplay
  timer, and transitions.

## Autoplay interval

5 seconds — enough time to read a slide's description without
forcing the user. Implemented as `const AUTOPLAY_MS = 5000` so a
future change is a one-line edit.

## Accessibility

- Outer container: `role="region"`, `aria-roledescription="carousel"`,
  `aria-label="Puertos donde operamos"`.
- Each slide: `role="group"`, `aria-roledescription="slide"`,
  `aria-label="N de 6: Puerto X"`.
- Inactive slides: `aria-hidden="true"` + `inert`.
- Dots: `aria-label="Ir al puerto X"`, `aria-current="true"` when active.
- Chevrons: `aria-label="Puerto anterior"` / `"Puerto siguiente"`.
- Autoplay pauses on hover, focus-within, and stops entirely when
  `prefers-reduced-motion: reduce` is set (transitions become instant).
  
## Slide data shape

```ts
type HeroSlide = {
  id: string;          // "cozumel", "lazaro-cardenas", ...
  image: string;       // /ssa/home/...
  title: string;       // "Puerto COZUMEL"
  description: string; // from content.json
  href: string;        // CTA target, "#" for now
};

