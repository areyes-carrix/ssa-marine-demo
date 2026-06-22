# Design Notes

## Goal

Preserve desktop visual parity while improving the mobile experience.

Mobile should be faithful to the source site but should not reproduce obvious usability problems found in the original implementation.

## Supported breakpoints

### Phone

360px–430px

Primary optimization target.

### Large phone / small tablet

640px–767px

New intermediate responsive target.

### Tablet and desktop

768px+

Existing layouts remain largely unchanged.

## Section headers

The ship icon remains aligned horizontally with the section title.

Layout pattern:

[icon] [title block]

This pattern should be consistently applied across:

- About
- Services
- Why Choose Us
- Stats
- News

## Mobile spacing strategy

Goals:

- Increase information density.
- Reduce unnecessary scrolling.
- Preserve readability.

Techniques:

- Smaller icon sizes.
- Smaller card padding.
- Reduced vertical gaps.
- Reduced image heights.
- Tighter section spacing.

## Desktop preservation

Desktop parity is already considered complete.

Any responsive changes must avoid altering desktop layouts unless necessary.