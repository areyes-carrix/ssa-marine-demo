# Add Nosotros Page

## Why

The current application includes a completed homepage that closely matches the SSA Marine México website. However, the site does not yet provide an About (Nosotros) page.

Adding the Nosotros page improves parity with the source website and provides visitors with company information, business area overviews, corporate resources and supporting media.

This change should reuse the existing site shell, design system, typography, assets and responsive conventions established by the homepage.

## What Changes

- Add a new `/nosotros` route.
- Add an internal page hero with title and breadcrumb navigation.
- Add company overview cards for Carrix, SSA Marine and SSA Marine México.
- Add a welcome section containing company information and an image carousel.
- Add business area cards for:
  - Autos
  - Carga General
  - Contenedores
  - Cruceros
- Add a digital tools section.
- Reuse existing styling conventions and responsive behavior.
- Reuse existing extracted assets under `public/ssa/about`.
- Introduce a reusable page hero component for future internal pages.

## Impact

### New Route

- `/nosotros`

### New Components

- `PageHero`
- `CompanyCards`
- `WelcomeSection`
- `AboutCarousel`
- `BusinessAreasSection`
- `DigitalToolsSection`

### New Data Sources

- `about-company-cards.ts`
- `about-carousel-slides.ts`
- `business-areas.ts`
- `digital-tools.ts`

### Existing Components Reused

- `SiteHeader`
- `SiteFooter`
- Existing design tokens
- Existing typography system

## Outcome

Implemented successfully.

The Nosotros page is now available at:

```text
/nosotros