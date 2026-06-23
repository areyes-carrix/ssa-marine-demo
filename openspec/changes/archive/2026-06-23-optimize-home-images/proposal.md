# Change Proposal: optimize-home-images

## Summary

Optimize homepage image assets to reduce network payload size, improve Largest Contentful Paint (LCP), and increase Lighthouse performance while preserving pixel-faithful visual parity with the original SSA Marine México website.

This change focuses exclusively on homepage image optimization.

## Motivation

Lighthouse analysis identified image delivery as the primary performance bottleneck.

Observed baseline:

- Performance Score: 87
- Largest Contentful Paint (LCP): 2.5s
- Estimated image delivery savings: ~11.6 MB
- Total network payload: ~13.8 MB

Network analysis shows that hero carousel images account for most of the transferred bytes.

The project currently uses:

- Next.js static export
- GitHub Pages deployment
- `images.unoptimized = true`

Because runtime optimization is unavailable, image optimization must occur before deployment.

## Goals

- Reduce homepage image payload.
- Improve LCP.
- Improve Lighthouse performance score.
- Convert homepage photography to WebP.
- Preserve visual parity.
- Maintain static export compatibility.

## Non-Goals

- Visual redesign.
