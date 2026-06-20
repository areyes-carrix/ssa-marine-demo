# add-home-hero Specification

## Purpose
TBD - created by archiving change add-home-hero. Update Purpose after archive.
## Requirements
### Requirement: Hero carousel
The home page SHALL display a full-bleed hero carousel introducing
the six Mexican ports where SSA Marine México operates.

#### Scenario: Six slides render
- **GIVEN** a user visits `/`
- **WHEN** the hero renders
- **THEN** six slides are mounted, one per port
- **AND** exactly one slide is visible at a time

#### Scenario: Slide content
- **GIVEN** any active slide
- **WHEN** it is visible
- **THEN** it displays the port name, the description from
  `content.json`, and a "Más información" CTA
- **AND** the image is full-bleed with a dark gradient overlay
- **AND** text is left-aligned and vertically centered

### Requirement: Autoplay and pause
The carousel SHALL advance automatically and pause on user interaction.

#### Scenario: Autoplay advances
- **GIVEN** the carousel has loaded
- **WHEN** the autoplay interval elapses
- **THEN** the next slide becomes active via fade transition

#### Scenario: Pause on hover
- **GIVEN** autoplay is running
- **WHEN** the user hovers the carousel
- **THEN** autoplay stops
- **AND** resumes when the cursor leaves

#### Scenario: Pause on focus
- **GIVEN** autoplay is running
- **WHEN** a control inside the carousel receives keyboard focus
- **THEN** autoplay stops until focus leaves

### Requirement: Manual navigation
The carousel SHALL expose dots, chevrons, and keyboard arrows.

#### Scenario: Dot navigation
- **GIVEN** the carousel renders
- **WHEN** the user activates a dot
- **THEN** the matching slide becomes active
- **AND** the dot reflects `aria-current="true"`

#### Scenario: Chevron navigation
- **GIVEN** the carousel renders
- **WHEN** the user activates the next chevron
- **THEN** the following slide becomes active
- **AND** activating from the last slide wraps to the first

#### Scenario: Keyboard arrow keys
- **GIVEN** focus is inside the carousel
- **WHEN** the user presses ArrowRight
- **THEN** the next slide becomes active
- **AND** ArrowLeft moves to the previous slide

### Requirement: Accessibility
The carousel SHALL be operable and perceivable by assistive tech.

#### Scenario: ARIA structure
- **GIVEN** the carousel renders
- **WHEN** inspected via the accessibility tree
- **THEN** the outer region has `aria-roledescription="carousel"` and
  a descriptive `aria-label`
- **AND** each slide has `aria-roledescription="slide"` and a label
  like "1 de 6: Puerto COZUMEL"

#### Scenario: Inactive slides removed from tab order
- **GIVEN** the active slide is index 2
- **WHEN** the DOM is inspected
- **THEN** slides 0, 1, 3, 4, 5 have `aria-hidden="true"` and `inert`

### Requirement: Reduced motion
The carousel SHALL respect `prefers-reduced-motion: reduce`.

#### Scenario: Reduced motion disables autoplay
- **GIVEN** the user has set `prefers-reduced-motion: reduce`
- **WHEN** the carousel mounts
- **THEN** autoplay does not start
- **AND** slide transitions are instant

### Requirement: Visual parity with source
The hero SHALL match the source site at 360 / 768 / 1280 / 1920 px.

#### Scenario: Layout matches reference
- **GIVEN** the screenshot
  `openspec/changes/add-home-hero/reference/hero-1280.png`
- **WHEN** compared at 1280 px
- **THEN** image framing, text position, CTA, dots, and chevrons
  match within ±4 px
- **AND** brand colors match exactly

