# Design: Instalaciones Page

## Overview

This change introduces the first installation page based on Puerto de Cozumel.

The implementation should establish a reusable architecture for future port pages while focusing only on Cozumel for this change.

The page is primarily composed of:

- Hero banner
- Port overview content
- Terminal information tables
- Image gallery

Existing shared components should be reused whenever possible.

## Goals

- Match the structure of the source Cozumel page.
- Reuse existing shared components.
- Reuse extracted image assets.
- Keep content data-driven.
- Maintain responsive behavior.
- Establish reusable patterns for future ports.

## Route

```text
/cozumel
``