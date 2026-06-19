# Site Shell Spec Delta

## ADDED Requirements

### Requirement: Global layout chrome
Every route SHALL render inside a shared shell composed of a sticky
header, a `<main>` region, and a footer.

#### Scenario: Header is present on every route
- **GIVEN** any page in the app
- **WHEN** it is rendered
- **THEN** `SiteHeader` appears as the first focusable region
- **AND** `SiteFooter` appears after `<main>`

#### Scenario: Skip link reaches main
- **GIVEN** a keyboard user on any route
- **WHEN** they press Tab once from page load
- **THEN** a visible "Skip to content" link is focused
- **AND** activating it moves focus to `#main`

### Requirement: Brand theme tokens
The app SHALL expose SSA brand tokens as CSS variables consumable by
Tailwind utilities.

#### Scenario: Primary brand color is available
- **GIVEN** a component uses `class="bg-ssa-primary"`
- **WHEN** the page is rendered
- **THEN** the computed background matches the SSA primary hex
- **AND** the token also resolves under `prefers-color-scheme: dark`

### Requirement: Responsive primary navigation
The header SHALL show inline links on viewports ≥ 768px and a drawer
toggle below that breakpoint.

#### Scenario: Mobile drawer uses dark theme
- **GIVEN** the drawer is open at viewport width 375px
- **WHEN** the panel renders
- **THEN** its background is the SSA ink color
- **AND** link text uses the surface (light) color
- **AND** hover state uses the SSA primary color

#### Scenario: Desktop nav bar layout
- **GIVEN** a viewport width ≥ 768px
- **WHEN** the header renders
- **THEN** the top row contains the logo on a white background
- **AND** a single dark nav bar sits below it containing the primary
  nav links and the ES/EN switcher on the same line
- **AND** the active page link has the SSA primary green background
- **AND** the active language button has the SSA primary green
  background
- **AND** all other links and the inactive language are light text on
  the dark bar

#### Scenario: Desktop nav
- **GIVEN** a viewport width of 1280px
- **WHEN** the header renders
- **THEN** primary links are visible inline
- **AND** the drawer toggle button is hidden

#### Scenario: Mobile drawer
- **GIVEN** a viewport width of 375px
- **WHEN** the user activates the drawer toggle
- **THEN** a dialog with `aria-modal="true"` opens
- **AND** focus is trapped inside it
- **AND** pressing Escape closes it and restores focus to the toggle

### Requirement: Footer information architecture
The footer SHALL contain four regions: a brand blurb, an "Enlaces
externos" link column, a social-icon row, and a legal row.

#### Scenario: Brand blurb
- **GIVEN** any route
- **WHEN** the footer renders
- **THEN** the SSA Marine México description from `content.json`
  is shown beside the logo

#### Scenario: Enlaces externos column
- **GIVEN** any route
- **WHEN** the footer renders
- **THEN** a column titled "Enlaces externos" lists the external
  partner / corporate links recorded from the source site

#### Scenario: Social icons
- **GIVEN** any route
- **WHEN** the footer renders
- **THEN** four social icons render from
  `/ssa/home/assets/images/misc/1..4.png`
- **AND** each icon is a link with a descriptive `aria-label`

#### Scenario: Legal row
- **GIVEN** any route
- **WHEN** the footer renders
- **THEN** the row reads
  "© {currentYear}, Derechos reservados. SSA Marine México."
- **AND** an "Aviso de Privacidad" link is present

### Requirement: Sticky header behavior
The header SHALL remain pinned to the top of the viewport while
scrolling and gain a blurred background after the page scrolls
more than 8px.

#### Scenario: Background activates on scroll
- **GIVEN** the user is at scroll position 0
- **WHEN** they scroll past 8px
- **THEN** the header element receives a `data-scrolled="true"`
  attribute
- **AND** a backdrop-blur utility class is applied

### Requirement: Visual parity with source
The rendered shell SHALL visually match ssamarine.mx within agreed
tolerances at 360 / 768 / 1280 / 1920 px.

#### Scenario: Header matches source
- **GIVEN** a side-by-side screenshot of `/` and ssamarine.mx
- **WHEN** compared at 1280px width
- **THEN** logo placement, nav link order, and header height match
  the source within ±4px
- **AND** brand colors match the source palette exactly

#### Scenario: Footer matches source
- **GIVEN** the live ssamarine.mx footer
- **WHEN** our footer renders
- **THEN** the blurb copy, social-icon order, and legal row text
  match the source verbatim
