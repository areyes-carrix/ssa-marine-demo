# Tasks: optimize-home-image-loading

## 1. Establish Baseline

- [x] Capture current Lighthouse report.
- [x] Capture current Network waterfall.
- [x] Record current hero image requests.
- [x] Record initial homepage payload.

---

## 2. Audit Current HeroCarousel Behavior

- [x] Review current HeroCarousel rendering strategy.
- [x] Confirm all hero images are rendered during initial load.
- [x] Document current image request behavior.

---

## 3. Implement Deferred Hero Rendering

- [x] Render only the active slide during initial page load.
- [x] Prevent inactive slide images from being rendered immediately.
- [x] Preserve autoplay behavior.
- [x] Preserve keyboard navigation.
- [x] Preserve pointer navigation.
- [x] Preserve reduced-motion behavior.

---

## 4. Validate Functionality

- [x] Verify slide transitions.
- [x] Verify previous button behavior.
- [x] Verify next button behavior.
- [x] Verify dot navigation.
- [x] Verify autoplay.
- [x] Verify reduced-motion support.

---

## 5. Validate Performance

- [x] Capture updated Lighthouse report.
- [x] Capture updated Network waterfall.
- [x] Compare image request counts.
- [x] Compare LCP.
- [x] Compare homepage payload.

---

## 6. Document Results

- [x] Record before/after Lighthouse metrics.
- [x] Record before/after payload size.
- [x] Record before/after image request counts.
- [x] Confirm visual parity.