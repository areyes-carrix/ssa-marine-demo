# Design: Remaining Port Pages

## Overview

This change introduces the remaining SSA Marine México port pages while reusing the architecture established for the Cozumel page.

The implementation should maximize component reuse and ensure all ports share a consistent experience while supporting differences in content structure.

The following ports are included:

- Lázaro Cárdenas
- Manzanillo
- Progreso
- Tuxpan
- Veracruz

This change also updates desktop and mobile navigation to expose all available port pages through the Instalaciones menu.

---

## Goals

- Reuse the existing installation page architecture.
- Reuse existing shared components.
- Reuse extracted image assets.
- Maintain responsive behavior.
- Support ports with different information structures.
- Provide desktop dropdown navigation.
- Provide mobile accordion navigation.

---

## Architecture

### Existing Components

The following components will be reused:

```text
PageHero
PortOverviewSection
TerminalInfoSection
PortGallery
SiteHeader
SiteFooter