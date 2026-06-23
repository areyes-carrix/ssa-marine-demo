# Design: optimize-home-image-loading

## Overview

This change optimizes homepage hero image loading behavior by reducing initial image discovery and network requests.

The previous change (`optimize-home-images`) focused on image asset optimization through WebP conversion and significantly reduced image transfer size.

Results achieved:

- Homepage payload reduced from ~13.8 MB to ~3.0 MB.
- Largest Contentful Paint improved from 2.5s to 1.7s.

Despite these improvements, network analysis shows that all hero carousel images are still requested during the initial page load.

This change addresses image loading strategy rather than image file optimization.

---

## Background

The homepage hero section uses a client-side carousel component.

Current implementation:

```tsx
{slides.map((slide, i) => (
  <Image ... />
))}
```

All slides are rendered immediately.

Although only the active slide is visible:

```tsx
opacity-100
opacity-0
```

all images are present in the DOM and can be discovered by the browser.

Network analysis confirms that all hero images are requested during initial page load.

---

## Current State

### Hero Carousel

Current behavior:

- Render all slides immediately.
- Render all image components immediately.
- Browser discovers all hero assets during page load.

Observed requests:

```text
slider-2.webp
slider-3.webp
slider-4.webp
slider-5.webp
slider-6.webp
slider-7.webp
```

This occurs even though users initially see only the first slide.

---

## Problem Statement

The homepage requests hero images that are not immediately visible.

This behavior increases:

- Initial network activity.
- Resource discovery cost.
- Total transferred bytes.
- Competition for bandwidth.

The current implementation favors simplicity but loads more image resources than are required for initial rendering.

---

## Implementation Results

The implemented solution renders only:

- Active slide
- Next slide

during initial page load.

Inactive slides are not rendered until required through:

- Autoplay
- Previous navigation
- Next navigation
- Dot navigation

Network validation confirmed that the browser initially requests only two hero images instead of requesting all six carousel images.

No regressions were observed in:

- Visual appearance
- Carousel navigation
- Accessibility behavior
- Reduced-motion support
``