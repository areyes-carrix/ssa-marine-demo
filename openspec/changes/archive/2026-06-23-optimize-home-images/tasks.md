# Tasks: optimize-home-images

## 1. Establish Baseline Measurements

- [x] Run Lighthouse against the current homepage.
- [x] Record baseline metrics:
  - Performance Score
  - Largest Contentful Paint (LCP)
  - First Contentful Paint (FCP)
  - Total Blocking Time (TBT)
  - Cumulative Layout Shift (CLS)
- [x] Record current homepage network payload size.
- [x] Record current hero image payload size.

---

## 2. Audit Homepage Images

- [x] Inventory all homepage image assets.
- [x] Categorize homepage assets into:
  - Hero photography
  - About photography
  - Services photography
  - Logos
  - Icons
  - Decorative graphics
- [x] Identify duplicated homepage image assets.
- [x] Document current file dimensions and file sizes.

---

## 3. Convert Hero Images to WebP

- [x] Convert `slider-2.jpg` to WebP.
- [x] Convert `slider-3.jpg` to WebP.
- [x] Convert `slider-4.jpg` to WebP.
- [x] Convert `slider-5.jpg` to WebP.
- [x] Convert `slider-6.jpg` to WebP.
- [x] Convert `slider-7.jpg` to WebP.

- [x] Verify optimized assets preserve visual parity.
- [x] Document size reduction achieved for each asset.

---

## 4. Convert Homepage Photography to WebP

### About Section

- [x] Convert `about-1.jpg` to WebP.
- [x] Convert `about-2.jpg` to WebP.
- [x] Convert `about-3.jpg` to WebP.
- [x] Convert `about-4.jpg` to WebP.

### Homepage Service Assets

- [x] Convert homepage service photography to WebP.

### Additional Homepage Photography

- [x] Convert remaining homepage photographic assets to WebP where applicable.

---

## 5. Update Application References

- [x] Update hero image references to use WebP assets.
- [x] Update About section image references to use WebP assets.
- [x] Update Services section image references to use WebP assets.
- [x] Verify all homepage images resolve correctly in development.
- [x] Verify all homepage images resolve correctly after static export.

---

## 6. Review Non-Photographic Assets

- [x] Audit PNG logo assets.
- [x] Audit PNG icon assets.
- [x] Evaluate whether any non-photographic assets benefit from WebP conversion.
- [x] Retain PNG where transparency or image fidelity would be negatively affected.

---

## 7. Validate Static Export Compatibility

- [x] Run a production build.
- [x] Run static export.
- [x] Validate image loading in local exported output.
- [x] Validate image loading in GitHub Pages deployment.

---

## 8. Measure Results

- [x] Run Lighthouse after optimization.
- [x] Record updated metrics:
  - Performance Score
  - LCP
  - FCP
  - TBT
  - CLS
- [x] Record updated homepage network payload.
- [x] Compare before/after results.
- [x] Document achieved payload reduction.
- [x] Document achieved LCP improvement.

---

## 9. Capture Future Improvements

- [x] Document hero carousel loading behavior.
- [x] Document findings from initial image audit.
- [x] Create recommendations for future image-loading optimizations.