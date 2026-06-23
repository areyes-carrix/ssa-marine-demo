# Change Proposal: optimize-home-image-loading

## Summary

Optimize homepage hero image loading behavior to reduce initial image downloads and improve resource discovery without altering visual appearance.

## Motivation

Previous optimization work significantly reduced homepage payload through WebP conversion.

Results achieved:

- Homepage payload reduced from approximately 13.8 MB to 3.0 MB.
- Largest Contentful Paint improved from 2.5s to 1.7s.

Despite these improvements, network analysis shows that all hero carousel images are still requested during initial page load.

The current implementation renders every slide immediately, allowing browsers to discover and request all hero assets.

This change focuses on reducing unnecessary image downloads by improving carousel rendering and image-loading behavior.

## Goals

- Reduce initial image requests.
- Reduce unnecessary network downloads.
- Preserve visual parity.
- Preserve accessibility.
- Preserve autoplay behavior.
- Preserve keyboard navigation.

## Non-Goals

- Image format optimization.
- WebP conversion.
- Carousel redesign.
- Visual changes.

## Outcome

The change successfully reduced the number of hero images requested during the initial page load.

Results:

- Initial hero image requests reduced from 6 images to 2 images.
- Only the active slide and next slide are rendered initially.
- Autoplay behavior was preserved.
- Keyboard navigation was preserved.
- Dot navigation was preserved.
- Visual parity was preserved.

Observed Lighthouse results:

Before:
- Performance: 90
- LCP: 1.7s

After:
- Performance: 96
- LCP: 1.4s