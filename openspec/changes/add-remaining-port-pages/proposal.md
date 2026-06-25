# Add Remaining Port Pages

## Why

The application currently includes the Cozumel installation page, but the remaining SSA Marine México port pages are not yet available.

The navigation already includes an Instalaciones section and should allow users to access the remaining ports operated by SSA Marine México.

This change adds the remaining port pages while reusing the architecture established for Cozumel.

## What Changes

### Additional Port Pages

Add dedicated pages for:

- Lázaro Cárdenas
- Manzanillo
- Progreso
- Tuxpan
- Veracruz

Each page should:

- Reuse the existing installation architecture
- Reuse the existing PageHero component
- Display port overview content
- Display terminal information when available
- Display image galleries extracted from the source pages
- Remain responsive

### Navigation Improvements

Update the Instalaciones menu item to support navigation to all available ports.

Desktop navigation should display a dropdown menu.

Mobile navigation should display an expandable accordion section.

### Reusable Architecture

Reuse the existing:

- PortOverviewSection
- TerminalInfoSection
- PortGallery

No page-specific components should be introduced unless strictly necessary.

### Port Variations

The implementation must support port-specific content structures.

Examples:

- Cozumel includes cruise terminal information.
- Lázaro Cárdenas includes infrastructure and services.
- Manzanillo includes infrastructure, equipment and shipping lines.
- Progreso includes cruise passenger services.
- Veracruz includes infrastructure and services.
- Tuxpan provides overview information without terminal information tables.

## Impact

### New Routes

- /lazaro-cardenas
- /manzanillo
- /progreso
- /tuxpan
- /veracruz

### Updated Navigation

Desktop:

```text
Instalaciones
 ├─ Cozumel
 ├─ Lázaro Cárdenas
 ├─ Manzanillo
 ├─ Progreso
 ├─ Tuxpan
 └─ Veracruz