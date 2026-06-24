## ADDED Requirements

### Requirement: Noticias Page Route

The system SHALL provide a dedicated Noticias page route.

#### Scenario: Navigate to Noticias

Given the user navigates to `/noticias`

When the page loads

Then the Noticias page is displayed.

---

### Requirement: Noticias Hero

The system SHALL display a hero section for the Noticias page.

#### Scenario: Render hero

Given the user visits the Noticias page

When the page renders

Then the title "Noticias" is displayed

And breadcrumb navigation is displayed.

---

### Requirement: News Grid

The system SHALL display a grid of news articles.

#### Scenario: Render news cards

Given the Noticias page is loaded

When the news section renders

Then article cards are displayed

And each card contains an image

And each card contains a title

And each card contains a publication date.

---

### Requirement: Navigation Structure

The system SHALL provide navigation consistent with the source website.

#### Scenario: Desktop navigation

Given the desktop navigation is rendered

When the header displays menu items

Then Inicio is displayed

And Nosotros is displayed

And Instalaciones is displayed

And Noticias is displayed

And Contacto is displayed

And Inglés is displayed.

#### Scenario: Mobile navigation

Given the mobile navigation is rendered

When users open the navigation menu

Then Inicio is displayed

And Nosotros is displayed

And Instalaciones is displayed

And Noticias is displayed

And Contacto is displayed

And Inglés is displayed.

---

### Requirement: Navigation Data Source

The system SHALL use a single navigation source for desktop and mobile navigation.

#### Scenario: Navigation update

Given navigation items are modified

When navigation is rendered

Then desktop navigation reflects the same items as mobile navigation.

---

### Requirement: Active Navigation State

The system SHALL identify the active route.

#### Scenario: Viewing Noticias

Given the user is on `/noticias`

When navigation is rendered

Then Noticias is visually identified as the current page.

#### Scenario: Viewing Nosotros

Given the user is on `/nosotros`

When navigation is rendered

Then Nosotros is visually identified as the current page.

---

### Requirement: Responsive Layout

The system SHALL support responsive layouts.

#### Scenario: View on mobile

Given the user accesses the Noticias page on a mobile device

When the page renders

Then content remains accessible

And cards stack appropriately

And horizontal scrolling is not required.

---

### Requirement: Design System Consistency

The system SHALL reuse the existing application design system.

#### Scenario: Render page styling

Given the Noticias page is loaded

When components render

Then existing typography styles are reused

And existing spacing conventions are reused

And existing brand colors are reused.