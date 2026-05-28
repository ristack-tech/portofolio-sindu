---
name: Ristack
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1a1c1c"
  on-surface-variant: "#424754"
  inverse-surface: "#2f3131"
  inverse-on-surface: "#f1f1f1"
  outline: "#727785"
  outline-variant: "#c2c6d6"
  surface-tint: "#005ac2"
  primary: "#0058be"
  on-primary: "#ffffff"
  primary-container: "#2170e4"
  on-primary-container: "#fefcff"
  inverse-primary: "#adc6ff"
  secondary: "#5e5e5e"
  on-secondary: "#ffffff"
  secondary-container: "#e2e2e2"
  on-secondary-container: "#646464"
  tertiary: "#5a5c5c"
  on-tertiary: "#ffffff"
  tertiary-container: "#737575"
  on-tertiary-container: "#fcfcfc"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d8e2ff"
  primary-fixed-dim: "#adc6ff"
  on-primary-fixed: "#001a42"
  on-primary-fixed-variant: "#004395"
  secondary-fixed: "#e2e2e2"
  secondary-fixed-dim: "#c6c6c6"
  on-secondary-fixed: "#1b1b1b"
  on-secondary-fixed-variant: "#474747"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c7"
  on-tertiary-fixed: "#1a1c1c"
  on-tertiary-fixed-variant: "#454747"
  background: "#f9f9f9"
  on-background: "#1a1c1c"
  surface-variant: "#e2e2e2"
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: "800"
    lineHeight: "1.0"
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: "800"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 36px
    fontWeight: "800"
    lineHeight: "1.1"
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: "500"
    lineHeight: "1.6"
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1.0"
spacing:
  unit: 4px
  gutter: 24px
  margin: 32px
  border-thin: 2px
  border-thick: 4px
  border-heavy: 8px
  shadow-offset: 6px
---

## Brand & Style

The design system is built on the principles of **Neo-Brutalism**: a raw, honest, and high-impact aesthetic that prioritizes clarity through extreme contrast. It rejects the soft gradients and subtle shadows of modern SaaS design in favor of structural confidence and functional grit.

The target audience consists of power users and creators who value efficiency and a distinct digital identity. The UI should evoke a sense of urgency, stability, and unapologetic boldness. Every element is intentionally "loud," utilizing thick strokes and rigid alignments to create a tactile, paper-like interface that feels engineered rather than merely decorated.

## Colors

The palette is restricted and high-tension. We utilize **Pure Black (#000000)** for all structural elements, including borders, shadows, and primary text, ensuring maximum legibility and "ink-on-paper" contrast.

- **Primary (Electric Blue):** Used sparingly for interactive signals, focus states, and primary actions. It must always be contained within a black border.
- **Surface (White/Off-White):** The primary background is pure white to allow the black architecture to pop, while off-white is used for secondary containers or card backgrounds to create subtle grouping.
- **Accents:** While Electric Blue is the hero, occasional use of "caution" colors (like a harsh red for errors) must maintain the same saturation levels to match the brand intensity.

## Typography

Typography in this design system is structural. **Archivo Narrow** (Bold/Extra Bold) provides the heavy lifting for headers, creating a dense, impactful vertical rhythm.

For body text, **Hanken Grotesk** offers a clean, contemporary grotesque feel that balances the aggression of the headers with superior readability. **JetBrains Mono** is reserved for labels, metadata, and technical indicators to reinforce the "engineered" aesthetic of the system.

Text should generally be black on white. Avoid gray text; if hierarchy is needed, use size or weight rather than color reduction.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, behaving like a printed broadsheet. Elements are locked into a 12-column system with generous gutters (24px) to prevent the heavy borders from feeling cluttered.

- **The Border Rule:** All major containers and interactive elements must use a minimum 4px black border.
- **Hard Shadows:** Use a "Hard Offset" approach for elevation. Instead of blurs, elements use a solid black box offset by 6px or 8px to the bottom-right.
- **Padding:** Internal padding should be generous and consistent (typically 24px or 32px) to provide "breathing room" inside the heavy frames.

## Elevation & Depth

This design system rejects Z-axis depth (blur). Instead, depth is achieved through **Solid Offsets**:

1.  **Level 0 (Flat):** Used for the background and static sections. No shadow.
2.  **Level 1 (Interactive):** Used for buttons and cards. A 4px or 8px solid black shadow offset at 90 or 45 degrees.
3.  **Active State:** When a user clicks or engages with an element, the shadow offset should reduce to 0px, visually "pushing" the element into the page.

Borders are the primary separators. Use `border-thick` (4px) for most components and `border-heavy` (8px) for major section breaks or hero cards.

## Shapes

The shape language is strictly **Sharp (0px)**. Every corner is a 90-degree angle, reinforcing the brutalist, architectural nature of the system.

The only exception to the "sharp" rule is the use of circular icons or "stickers" (like notification badges) which serve as organic counterpoints to the rigid grid. However, buttons, inputs, and cards must remain perfectly rectangular.

## Components

### Buttons

Primary buttons use the Electric Blue background with a 4px black border and a 6px hard black shadow. On hover, the shadow may increase in size; on click, the shadow disappears as the button translates 6px down and right to simulate a physical press.

### Cards

Cards are white-surfaced containers with a 4px border. They should be used to group related content. Headlines inside cards should always be Archivo Narrow, left-aligned.

### Input Fields

Inputs use a 2px black border. When focused, the border thickens to 4px or changes to the Primary Electric Blue. Placeholder text should be high-contrast (dark gray) to maintain legibility.

### Chips & Tags

Small rectangular containers using JetBrains Mono. Use bright, high-saturation backgrounds (Acid Green or Bright Yellow) to differentiate categories, always framed in a 2px black border.

### Lists

Lists are separated by horizontal 4px black rules. Each list item should feel like a distinct "row" in a ledger. Use oversized icons or numerals to lead the eye.
