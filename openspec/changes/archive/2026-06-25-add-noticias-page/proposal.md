# Add Noticias Page

## Why

The current application includes a completed homepage and Nosotros page, but it does not yet provide a Noticias page equivalent to the SSA Marine México website.

Adding the Noticias page improves parity with the source website and provides a centralized location for company news, announcements, sustainability initiatives, corporate communications and community engagement efforts.

The current navigation structure also differs from the source website. This change will align the site navigation with the current information architecture while preserving the existing site shell and responsive behavior.

## What Changes

### Noticias Page

- Add a new `/noticias` route.
- Reuse the existing `PageHero` component.
- Display a grid of news articles matching the source website layout.
- Reuse extracted assets from `public/ssa/noticias`.
- Support responsive layouts for desktop, tablet and mobile devices.
- Follow the existing visual design system and typography conventions.

### Navigation Updates

Update the navigation structure to more closely match the source website.

Current navigation:

- Inicio
- Nosotros
- Servicios
- Terminales
- Noticias
- Contacto

Target navigation:

- Inicio
- Nosotros
- Instalaciones
- Noticias
- Contacto
- Inglés

The navigation update shall be applied consistently to:

- Desktop navigation
- Mobile navigation

### Active Navigation State

- Highlight Noticias when users visit `/noticias`.
- Preserve active state behavior for existing routes.

## Impact

### New Route

- `/noticias`

### New Components

- `NewsGrid`
- `NewsCard`

### New Data Sources

- `noticias.ts`

### Modified Components

- `SiteHeader`
- `MobileNav`

### Existing Components Reused

- `PageHero`
- `SiteFooter`
- Existing design tokens
- Existing typography system

## Success Criteria

- Users can navigate to `/noticias`.
- News articles are displayed in a responsive grid.
- Existing site shell remains unchanged outside navigation updates.
- Navigation reflects the updated site structure.
- Desktop and mobile layouts remain responsive.
- Visual appearance remains consistent with the established design system.

## Non-Goals

- Individual news article pages.
- News search functionality.
- News filtering or categorization.
- Content management functionality.
- Multi-language news support.