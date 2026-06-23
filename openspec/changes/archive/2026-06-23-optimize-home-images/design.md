# Design: optimize-home-images

## Overview

This change introduces a structured image optimization strategy for the homepage.

The current homepage achieves a Lighthouse Performance score of 87 and shows strong results in First Contentful Paint, Total Blocking Time, and Cumulative Layout Shift. However, Lighthouse identifies image delivery as the dominant performance bottleneck.

The purpose of this change is to reduce homepage image payload, improve Largest Contentful Paint (LCP), and establish an image optimization standard for future homepage development while preserving pixel-faithful visual parity with the original SSA Marine México website.

This design focuses exclusively on homepage image assets.

---

## Background

The project is deployed using Next.js static export:

```ts
output: "export"
```

and:

```ts
images: {
  unoptimized: true
}
```

The deployment target is currently GitHub Pages.

Because GitHub Pages does not provide server-side image optimization, the application cannot rely on:

- Next.js Image Optimization API
- On-demand image resizing
- Runtime WebP generation
- CDN-based image transformation

As a result, image assets must be optimized before deployment.

The repository itself becomes the source of truth for optimized assets.

---

## Current State Analysis

### Lighthouse Analysis

Baseline Lighthouse measurements:

| Metric | Value |
|----------|----------|
| Performance | 87 |
| FCP | 0.4s |
| Speed Index | 0.5s |
| TBT | 50ms |
| CLS | 0.013 |
| LCP | 2.5s |

Lighthouse identifies image delivery as the largest optimization opportunity.

Reported findings include:

- Improve image delivery
- Efficient cache lifetimes
- Large network payload

The estimated savings associated with image delivery are significantly larger than all JavaScript-related opportunities combined.

---

## Homepage Image Inventory

The homepage currently contains imagery in the following sections:

### Hero

Files:

```text
slider-2.jpg
slider-3.jpg
slider-4.jpg
slider-5.jpg
slider-6.jpg
slider-7.jpg
```

Characteristics:

```text
1920 x 1280
```

Total transferred size:

```text
~13.3 MB
```

The hero carousel represents the largest image payload on the homepage.

### About Section

Files:

```text
about-1.jpg
about-2.jpg
about-3.jpg
about-4.jpg
```

The About section currently contributes a comparatively small percentage of transferred bytes.

### Services Section

The Services section contains service photography which may benefit from format optimization but is not expected to have impact comparable to the Hero section.

### Supporting Assets

The homepage also references:

- logos
- iconography
- counters
- decorative imagery

These assets will be audited but are not expected to be primary performance contributors.

---

## Primary Performance Issue

The Hero carousel currently contains six high-resolution photographic assets.

Network analysis indicates that all six hero images are downloaded during initial page load.

Observed payload:

```text
~13.3 MB
```

This payload alone accounts for the majority of homepage image transfer.

Because the carousel appears immediately on page load, these assets are also strong candidates for influencing Largest Contentful Paint.

For this reason the Hero section is considered the highest priority optimization target.

---

## Design Goals

### Goal 1

Reduce homepage image payload.

Success will be measured by comparing network transfer size before and after optimization.

### Goal 2

Improve Largest Contentful Paint.

Success will be measured through repeated Lighthouse analysis.

### Goal 3

Preserve visual parity.

Optimized images must remain visually equivalent to the current implementation.

### Goal 4

Remain compatible with static export.

The final solution must function correctly under:

```ts
output: "export"
```

without requiring infrastructure changes.

---

## Image Optimization Strategy

### WebP Conversion

The primary optimization technique will be conversion of photographic image assets to WebP.

WebP was selected because:

- Excellent browser support
- Superior compression compared to JPEG
- Maintains visual quality at lower file sizes
- Fully compatible with static asset delivery

Photographic assets will be converted to WebP and committed directly to source control.

Runtime image conversion will not be used.

---

### Compression Targets

During conversion each image will be reviewed to balance:

- visual quality
- compression ratio
- rendering fidelity

The objective is to prevent noticeable degradation while meaningfully reducing byte size.

No fixed compression level is mandated.

Images may require different encoding settings depending on content.

---

### Dimension Review

Image dimensions will be reviewed during conversion.

Current Hero dimensions:

```text
1920 × 1280
```

The displayed dimensions of each image will be compared against source dimensions.

If oversized assets are identified, reduced-dimension variants may be generated.

Dimension changes must preserve visual parity.

---

## Asset Categorization

### Category 1 — Photography

Examples:

```text
slider-*.jpg
about-*.jpg
services photography
```

Action:

```text
Convert to WebP
```

### Category 2 — Logos

Examples:

```text
logo.png
logo-med.png
```

Action:

```text
Evaluate individually
```

Logos may remain PNG if transparency or graphical fidelity would be negatively impacted.

### Category 3 — Icons

Examples:

```text
Ico-general.png
Ico-autos.png
Ico-TEUs.png
```

Action:

```text
Evaluate individually
```

Icons are not automatically converted.

---

## Component Impact

### HeroCarousel

Affected:

```ts
HeroSlide[]
HeroCarousel
```

Current image references:

```ts
slider-2.jpg
slider-3.jpg
slider-4.jpg
slider-5.jpg
slider-6.jpg
slider-7.jpg
```

References will be updated to use WebP assets.

---

### AboutSection

Affected:

```ts
about-1.jpg
```

Remaining About imagery will be reviewed and updated where applicable.

---

### ServicesSection

Affected:

Service image references.

Images will be updated after conversion.

---

## Validation Strategy

After implementation:

### Lighthouse Validation

Record:

- Performance
- FCP
- LCP
- TBT
- CLS

before and after optimization.

### Network Validation

Measure:

- Total homepage payload
- Image payload
- Hero payload

before and after optimization.

### Visual Validation

Verify:

- Desktop rendering
- Tablet rendering
- Mobile rendering

Images must remain visually equivalent.

---

## Future Work

This change intentionally does not modify Hero loading behavior.

Current evidence suggests image format and image size are the highest-value optimizations.

A future change may investigate:

```text
optimize-home-image-loading
```

Potential topics:

- deferred carousel image loading
- inactive slide loading
- preload strategy
- responsive source sets
- advanced LCP optimization

Those concerns are intentionally separated from this change to keep scope focused and measurable.