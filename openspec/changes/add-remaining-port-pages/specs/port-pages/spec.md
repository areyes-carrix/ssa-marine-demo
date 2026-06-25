## ADDED Requirements

### Requirement: Remaining Port Routes

The system SHALL provide dedicated routes for the remaining SSA Marine México ports.

#### Scenario: Navigate to Lázaro Cárdenas

Given the user navigates to `/lazaro-cardenas`

When the page loads

Then the Lázaro Cárdenas port page is displayed.

#### Scenario: Navigate to Manzanillo

Given the user navigates to `/manzanillo`

When the page loads

Then the Manzanillo port page is displayed.

#### Scenario: Navigate to Progreso

Given the user navigates to `/progreso`

When the page loads

Then the Progreso port page is displayed.

#### Scenario: Navigate to Tuxpan

Given the user navigates to `/tuxpan`

When the page loads

Then the Tuxpan port page is displayed.

#### Scenario: Navigate to Veracruz

Given the user navigates to `/veracruz`

When the page loads

Then the Veracruz port page is displayed.

---

### Requirement: Port Overview Content

The system SHALL display overview content for every port page.

#### Scenario: Render overview section

Given a port page is loaded

When the page renders

Then overview information about the port is displayed

And users can understand the purpose of the installation.

---

### Requirement: Port Information Sections

The system SHALL support optional terminal information sections.

#### Scenario: Render terminal information

Given a port provides infrastructure or service information

When the page renders

Then the terminal information section is displayed.

#### Scenario: Port without terminal information

Given a port does not provide terminal information

When the page renders

Then the page renders successfully

And no empty information section is displayed.

---

### Requirement: Port Galleries

The system SHALL display image galleries for all supported ports.

#### Scenario: Render gallery

Given a port page is loaded

When the gallery section renders

Then gallery images are displayed

And the images use the extracted port assets.

---

### Requirement: Responsive Galleries

The system SHALL support responsive gallery layouts.

#### Scenario: Desktop gallery

Given the user accesses a port page from a desktop device

When the gallery renders

Then gallery images are displayed in multiple columns.

#### Scenario: Mobile gallery

Given the user accesses a port page from a mobile device

When the gallery renders

Then gallery images stack vertically

And horizontal scrolling is not required.

---

### Requirement: Desktop Instalaciones Navigation

The system SHALL provide dropdown navigation for the Instalaciones menu.

#### Scenario: Open desktop dropdown

Given the user is viewing the desktop navigation

When the user hovers over Instalaciones

Then a dropdown menu is displayed

And all available port links are visible.

#### Scenario: Navigate from dropdown

Given the dropdown menu is displayed

When the user selects a port

Then the corresponding port page is opened.

---

### Requirement: Mobile Instalaciones Navigation

The system SHALL provide accordion navigation for the Instalaciones menu.

#### Scenario: Expand accordion

Given the mobile navigation is open

When the user selects Instalaciones

Then the port links are displayed.

#### Scenario: Navigate from accordion

Given the accordion is expanded

When the user selects a port

Then the corresponding port page is opened

And the mobile menu closes.

---

### Requirement: Shared Installation Architecture

The system SHALL reuse the shared installation page architecture.

#### Scenario: Render port page

Given a port page is requested

When the page renders

Then shared installation components are reused

And page-specific content is supplied through data files.

---

### Requirement: Design System Consistency

The system SHALL reuse the existing application design system.

#### Scenario: Render port page styling

Given any port page is rendered

When page components render

Then existing typography styles are reused

And existing spacing conventions are reused

And existing brand colors are reused.