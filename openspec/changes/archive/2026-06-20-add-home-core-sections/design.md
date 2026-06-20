# Design Notes

## Homepage composition

The homepage will render:

1. Hero
2. AboutSection
3. ServicesSection
4. WhyChooseUsSection
5. StatsSection
6. NewsSection

## Component ownership

components/home/

- Hero (existing)
- AboutSection
- ServicesSection
- WhyChooseUsSection
- StatsSection
- NewsSection

## Data strategy

Structured content should remain separate from UI.

Create:

lib/

- services.ts
- stats.ts
- news.ts

Services will use typed data objects similar to hero-slides.ts.

## Layout

All sections use:

- max-w-ssa container
- existing spacing tokens
- existing typography tokens

## Accessibility

Each section must:

- Use semantic section elements
- Contain a visible heading
- Maintain keyboard accessibility
- Preserve color contrast requirements

## Visual parity strategy

Match:

- section ordering
- content hierarchy
- spacing relationships
- image placement

Fine-grained pixel tuning is deferred until all homepage sections exist.