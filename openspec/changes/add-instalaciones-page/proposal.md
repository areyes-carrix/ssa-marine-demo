# Add Instalaciones Page

## Why

The current application includes the homepage, Nosotros page and Noticias page, but it does not yet provide the installation and port pages available on the SSA Marine México website.

The homepage already references multiple ports operated by SSA Marine México. Users should be able to navigate from those entries into dedicated installation pages that provide operational information, terminal services and image galleries.

This change introduces the first installation page based on the Puerto de Cozumel page while establishing reusable patterns that can be used by other ports in the future.

## What Changes

### Cozumel Installation Page

- Add a dedicated Puerto de Cozumel page.
- Reuse the existing PageHero component.
- Display port overview information.
- Display terminal service information.
- Display terminal infrastructure information.
- Display passenger service information.
- Display cruise line information.
- Display a gallery of installation images.
- Reuse extracted assets from the Cozumel source page.

### Reusable Installation Architecture

Establish a reusable structure that can support future installation pages including:

- Lázaro Cárdenas
- Manzanillo
- Progreso
- Tuxpan
- Veracruz

The implementation should favor reusable components and shared data structures instead of page-specific implementations whenever possible.

### Navigation Integration

The installation page architecture should support future integration with the existing:

- Instalaciones desktop navigation item
- Instalaciones mobile navigation item

This change does not require implementing additional ports.

## Impact

### New Route

- `/cozumel`

### New Components

- `PortOverviewSection`
- `TerminalInfoSection`
- `PortGallery`

### New Data Sources

- `cozumel.ts`

### Existing Components Reused

- `PageHero`
- `SiteHeader`
- `SiteFooter`
- Existing design tokens
- Existing typography system

## Success Criteria

- Users can navigate to `/cozumel`.
- Port information is displayed correctly.
- Gallery images render correctly.
- Layout remains responsive.
- Existing application architecture is reused.
- Future ports can reuse the established implementation pattern.

## Non-Goals

- Implementing additional ports.
- Interactive maps.
- Search functionality.
- Booking systems.
- Dynamic content management.