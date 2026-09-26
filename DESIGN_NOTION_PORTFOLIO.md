# DESIGN.md — Sindu Aditya Portfolio

Design specification for a personal portfolio built with **Next.js + Tailwind CSS + Framer Motion + Lenis**.

The visual direction combines a **Notion-like workspace aesthetic** with a personal hand-drawn doodle character system. The website should feel like opening a developer's working notebook: structured, technical, playful, and personal without looking like a generic SaaS landing page.

---

## 1. Design Direction

### Core idea

**A developer's interactive workspace / notebook.**

The interface borrows the clarity of Notion:

- bright white canvas
- near-black typography
- thin gray dividers
- simple bordered blocks
- restrained radius
- generous whitespace
- content-first hierarchy
- almost monochrome UI

The personality comes from the custom character illustrations and small handwritten details rather than decorative UI.

The portfolio should communicate:

> Backend engineer who also understands systems, IoT, DevOps, and project ownership.

### Visual keywords

`Notion-like` · `developer notebook` · `hand-drawn` · `playful` · `technical` · `minimal` · `personal`

### Avoid

- SaaS-dashboard appearance
- glassmorphism
- gradients
- excessive floating cards
- colorful category systems
- giant pill buttons everywhere
- heavy shadows
- overly polished vector characters
- beige / vintage-paper aesthetic
- excessive scroll animation

The background stays **pure white**, not cream.

---

## 2. Design Language

The UI and illustrations deliberately use two levels of refinement.

### Interface

The interface is precise and structured:

- clean grid
- crisp typography
- consistent spacing
- subtle borders
- restrained animation

### Illustration

The character is intentionally imperfect:

- rough black strokes
- visible hand-drawn irregularity
- simple geometry
- casual doodle quality
- slightly imperfect proportions

This contrast is important.

**Clean interface + imperfect character = portfolio identity.**

Do not make the entire website sketchy. The doodle treatment belongs primarily to the character, tiny annotations, arrows, and occasional decorative marks.

---

## 3. Color System

The site is approximately **90–95% monochrome**.

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#FFFFFF` | Main canvas |
| `surface` | `#FAFAFA` | Secondary panels |
| `ink` | `#0A0A0A` | Main text and illustration |
| `ink-soft` | `#737373` | Supporting text |
| `muted` | `#A3A3A3` | Dates and tertiary metadata |
| `line` | `#E5E5E5` | Borders and dividers |
| `line-strong` | `#CFCFCF` | Hover / emphasized border |
| `amber` | `#E8A317` | Single primary accent |
| `amber-soft` | `#FDF1D6` | Active-selection background |

### Accent rule

Amber is an event, not a decoration.

Use it for only **1–2 meaningful elements in a viewport**, for example:

- one highlighted word
- active timeline entry
- selected folder
- tiny illustration accent
- primary CTA

Never assign different colors to project categories.

### Character colors

The doodle system should remain mostly black and white.

Optional color is limited to:

- subtle skin tone when needed
- amber for a tiny prop or emphasis
- very subtle blush for expressions

Clothing can remain black/white/gray.

---

## 4. Typography

### Font stack

**Display / headings:** Space Grotesk  
Weights: `500`, `600`, `700`

**Body / interface:** Inter  
Weights: `400`, `500`, `600`

**Technical metadata:** JetBrains Mono  
Weights: `400`, `500`

### Type scale

```text
Hero H1     clamp(2.7rem, 6vw, 4.5rem)
Section H2  clamp(1.7rem, 3vw, 2.2rem)
Card H3     1.05–1.25rem
Body        1rem
Small       0.875rem
Meta        0.78–0.82rem
```

Body copy should generally stay below `60ch`.

### Typography behavior

Headlines should feel direct rather than promotional.

Avoid:

- ALL CAPS section labels
- excessive letter spacing
- random italicized words
- highlighting several words in one heading

JetBrains Mono is reserved for information that behaves like metadata:

```text
2026
BACKEND
NEXT.JS
POSTGRESQL
CURRENT
```

---

## 5. Global Layout

### Container

```text
max-width: 1040px
desktop horizontal padding: 32px
tablet: 24px
mobile: 18px
```

Use generous vertical separation between major sections.

```text
desktop section gap: 120–160px
mobile section gap: 80–100px
```

### Border radius

```text
large card: 14–16px
small card: 8–10px
button: 8px
tag: 6px
```

Avoid fully rounded pills except for very small status indicators.

### Borders

Most containers use:

```text
1px solid #E5E5E5
```

Hover may darken the border rather than adding a large shadow.

---

## 6. Navigation

Desktop:

```text
┌──────────────────────────────────────────────────────────┐
│ Sindu.                Work  Experience  About  Contact  │
└──────────────────────────────────────────────────────────┘
```

The navigation should feel closer to a document toolbar than a marketing navbar.

### Behavior

- sticky at top
- initially transparent/white
- after scrolling: white with subtle blur and bottom border
- active section can use a tiny underline or dot
- no large navigation container

Brand:

```text
Sindu.
```

Optional tiny doodle mark can sit beside the brand.

Mobile uses a compact menu rather than shrinking all links into one row.

---

## 7. Hero

The hero should feel like the first page of a personal notebook rather than a startup landing page.

### Desktop composition

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Semarang, Indonesia · available for interesting work       │
│                                                             │
│  I build systems that                                      │
│  make complicated things                                   │
│  feel simple.                     [ HERO DOODLE ]           │
│                                   [    AVATAR    ]           │
│  Backend-focused Informatics                                │
│  student working across APIs,                               │
│  IoT, infrastructure, and products.                         │
│                                                             │
│  [ Explore my work ]   [ GitHub ↗ ]                         │
│                                                             │
│  Next.js / Laravel / PostgreSQL / IoT / Docker              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The illustration should overlap empty hero space naturally rather than being trapped inside a card.

### Hero avatar

Use the established character style:

- head/face can be slightly oversized
- rough black hand-drawn outline
- glasses and hairstyle remain recognizable
- intentionally imperfect strokes
- no polished vector finish
- minimal fills
- white/transparent background
- no drop shadow

The primary hero version should be calm and approachable.

### Hover avatar

Hovering/clicking the character swaps only the micro-expression.

Example:

```text
default → gentle smile
hover   → eyes closed + wide laugh
```

The body position and crop remain identical so the swap feels like an expression change rather than an animation cut.

---

## 8. Small Doodle Language

Small doodles can appear near otherwise empty areas:

```text
→
?
*
:)
↗
```

They should look like they came from the same pen as the character.

Use them sparingly.

Suitable places:

- beside section headings
- near active project
- around an illustration
- empty state
- footer

Do not decorate every card.

---

## 9. Featured Work — Folder System

Section heading:

```text
Featured work
A few things I've been building.
```

Projects should resemble **documents/folders in a workspace**, not product cards.

### Desktop grid

Use a 6-column asymmetric grid.

Example:

```text
┌──────────────────────┐ ┌─────────────────────────────┐
│ FIK-Apps             │ │ Nexa FleetTrack             │
│ PM · Backend         │ │ Backend · IoT               │
│                ↗     │ │                         ↗   │
└──────────────────────┘ └─────────────────────────────┘

┌───────────────────────────────┐ ┌───────────────────┐
│ fakultas-sync                 │ │ iGer              │
│ Infrastructure · DevOps       │ │ Personal · AI     │
└───────────────────────────────┘ └───────────────────┘

┌─────────────────────────────────────────────────────┐
│ DolanRek · Group Project                            │
└─────────────────────────────────────────────────────┘
```

Projects currently defined in the portfolio:

1. FIK-Apps / TOP FIK
2. Nexa FleetTrack
3. fakultas-sync
4. iGer
5. DolanRek

### Default card

```text
white background
gray border
black title
gray metadata
```

### Hover

```text
translateY(-3px)
border → #0A0A0A
small hard shadow
```

Example hard shadow:

```css
box-shadow: 4px 4px 0 #0A0A0A;
```

### Selected project

Only the selected project receives:

```text
background: amber-soft
border: amber
```

Its details expand **in place** rather than opening a modal.

### Expanded content

```text
FIK-Apps / TOP FIK
PM & Backend · 2026

[ short project story ]

Role
PM + Backend

Stack
Laravel · PostgreSQL · Docker

[ View case study ↗ ]

                     [small supporting doodle]
```

---

## 10. Experience — Clickable Log

Instead of a traditional dot-and-line timeline, treat experience as a chronological activity log.

Header:

```text
Experience
Things I've worked on along the way.
```

Structure:

```text
2026       PM & Backend Developer
           FIK-Apps                              +

──────────────────────────────────────────────────────

2025–26    Research Assistant
           Nexa IoT Lab                          +

──────────────────────────────────────────────────────

2025       Backend Developer
           Nexa FleetTrack                       +

──────────────────────────────────────────────────────
```

Other entries:

- Exchange @ UGM — 2025
- PM Semnasti 2024 @ HIMTI UDINUS — 2024–25
- Freelance Full-Stack @ PT Sinergi Inovasi Tekno — 2023–24

### Interaction

Clicking a row:

```text
+ → −
```

and expands it directly below.

Only one entry should be expanded at a time.

### Expanded timeline card

This is where the **half-body doodle character** fits best.

```text
2026       PM & Backend Developer
           FIK-Apps                              −

           ┌─────────────────────────────────────────┐
           │ What I worked on                        │
           │                                         │
           │ Multi-tenant architecture, backend      │
           │ systems, faculty-level administration.  │
           │                                         │
           │ Laravel · PostgreSQL · Docker            │
           │                           [character]     │
           └─────────────────────────────────────────┘
```

The illustration can change by entry while preserving the same drawing language.

Suggested expressions:

```text
PM / leadership       → proud
Backend / engineering → coding
Research              → thinking
Problem solving       → idea / eureka
```

---

## 11. Character Illustration System

This section supersedes the earlier polished “Notion Avatar Maker” interpretation.

The desired character style is the **rough doodle style established during illustration exploration**.

### Core visual rule

The drawing should look like someone quickly sketched the character using a thick black pen or crayon.

It must **not** look like:

- polished vector artwork
- 3D avatar
- anime
- smooth corporate illustration
- detailed portrait
- photorealistic caricature

### Line style

```text
rough
slightly uneven
visible stroke texture
rounded ends
imperfect symmetry
near-black
```

Avoid perfectly smooth Bézier curves.

### Face identity

Keep these features consistent:

- messy side-parted dark hair
- rectangular/rounded black glasses
- simple eyebrows
- small nose
- simplified face shape

The likeness comes mainly from:

```text
hair + glasses + face silhouette
```

rather than realistic facial detail.

### Face-only doodles

For tiny decorative illustrations:

```text
head only
NO neck
NO shoulders
NO torso
```

Example:

```text
     /////////
   //         //
  |  ┌─┐ ┌─┐  |
  |  •     •   |
  |     ·       |
  |    ___      |
   \___________/
```

These should be rougher and simpler than the featured half-body artwork.

### Featured half-body illustration

For timeline details / larger cards:

- chest-up crop
- open jacket
- plain shirt
- visible loose clothing folds
- one expressive hand pose
- slightly more detail than face-only doodles
- still rough and monochrome

Do not suddenly switch to clean vector rendering.

---

## 12. Character Expression Library

Keep the same hair, glasses, face shape, line weight, jacket, and proportions across variants.

Only expression and arm pose should change.

### Neutral

```text
Eyes: normal
Mouth: small gentle smile
Use: hero default
```

### Laugh

```text
Eyes: closed arcs
Mouth: wide open smile
Optional: 2–3 laugh marks
Use: hero hover / click
```

### Shy

```text
Eyes: looking sideways
Mouth: small straight / awkward smile
Cheeks: subtle blush strokes
Use: playful empty state
```

### Proud

```text
Eyes: gently closed or relaxed
Mouth: satisfied smile
Pose: arms crossed
Head: slightly raised
Use: leadership / completed milestone
```

### Coding

```text
Eyes: focused downward
Mouth: neutral / tiny smile
Pose: hands at laptop
Use: backend / engineering work
```

### Thinking

```text
Eyes: looking upward
Mouth: small neutral curve
Pose: one hand holding chin
Optional: one hand-drawn question mark
Use: research / problem exploration
```

### Idea / Eureka

```text
Eyes: open / excited
Mouth: open smile
Pose: index finger raised
Optional: tiny amber lightbulb
Use: solution / discovery
```

---

## 13. About

Avoid a generic centered biography block.

Use a document-like two-column section.

```text
┌────────────────────────────────────────────────────────────┐
│ About me                                                   │
│                                                            │
│ I'm an Informatics student who tends to end up             │
│ somewhere between backend systems, IoT, infrastructure,    │
│ and project ownership.                         [ doodle ]   │
│                                                [ waving ]   │
│ Current                                                     │
│ PM — FIK-Apps                                               │
│ Research Assistant — Nexa IoT Lab                           │
│ Co-founder — ristack.tech                                   │
│                                                            │
│                         ┌───────────────────────────────┐    │
│                         │ Beswan Djarum 41              │    │
│                         │ Scholarship                   │    │
│                         └───────────────────────────────┘    │
└────────────────────────────────────────────────────────────┘
```

The scholarship block can resemble a pinned note/document.

Do not make every fact a separate card.

---

## 14. Skills / Stack

Avoid logo clouds.

Treat technologies like a compact text index.

```text
I work with

Backend
Laravel · Node.js · REST APIs · PostgreSQL

Frontend
Next.js · React · Tailwind CSS

Infrastructure
Docker · Linux · CI/CD

Other
IoT · MQTT · System Design
```

Technology names remain monochrome.

Optional hover:

```text
underline appears
tiny handwritten arrow shifts 2px
```

No brand-colored logos are necessary.

---

## 15. Contact

The contact section should feel like the final note on the page.

```text
Have something interesting
to build?

Let's talk. ↗

GitHub
LinkedIn
Email

                              [small waving doodle]
```

`Let's talk.` may use amber because it is the primary final action.

The footer character should be much smaller than the hero illustration.

---

## 16. Motion

Motion should communicate state, not decorate scrolling.

### Initial hero sequence

```text
kicker
↓ 100–120ms
headline
↓
description
↓
CTA
↓
stack
↓
character
```

Each element:

```text
opacity: 0 → 1
y: 12px → 0
```

Duration around `400–550ms`.

### Character

One meaningful micro-interaction:

```text
default face
   ↓ hover
laughing face
```

Use a short crossfade or instant image swap.

Do not continuously bob, float, rotate, or breathe.

### Project cards

Hover:

```text
y: -3
shadow: 4px 4px 0 black
```

Click:

```text
Framer Motion layout expansion
```

### Timeline

Use `AnimatePresence` / layout animation for the detail region.

No animation is needed for every paragraph entering the viewport.

### Smooth scrolling

Lenis is acceptable, but preserve normal scrolling behavior and respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

## 17. Mobile

Mobile should preserve the document/notebook feeling rather than becoming a stack of oversized cards.

### Hero

```text
[kicker]

[headline]

[description]

[buttons]

        [character]

[stack]
```

Character can overlap the right edge slightly, provided it never creates horizontal scrolling.

### Projects

All folder cards become one column.

Preserve different visual weights through:

- content length
- selected state
- illustration placement

rather than artificial card heights.

### Timeline

Desktop:

```text
date | content
```

Mobile:

```text
date
role
organization
details
```

### Illustration

Face-only decorative doodles should remain small.

Featured timeline character may be approximately:

```text
desktop: 220–280px
mobile: 150–190px
```

---

## 18. Accessibility

- semantic navigation and headings
- visible keyboard focus
- minimum 44px interactive targets where practical
- character swaps must not convey essential information
- illustrations use empty `alt=""` when purely decorative
- descriptive alt text when an illustration carries meaning
- support `prefers-reduced-motion`
- maintain sufficient contrast for gray metadata
- project/timeline expansion accessible from keyboard
- use `aria-expanded` for expandable elements

---

## 19. Recommended Component Structure

```text
app/
├── page.tsx
├── layout.tsx
└── globals.css

components/
├── navigation/
│   ├── Navbar.tsx
│   └── MobileMenu.tsx
│
├── hero/
│   ├── Hero.tsx
│   └── HeroAvatar.tsx
│
├── work/
│   ├── FeaturedWork.tsx
│   ├── ProjectFolder.tsx
│   └── ProjectDetail.tsx
│
├── experience/
│   ├── Experience.tsx
│   ├── ExperienceRow.tsx
│   └── ExperienceDetail.tsx
│
├── about/
│   ├── About.tsx
│   └── ScholarshipNote.tsx
│
├── contact/
│   └── Contact.tsx
│
└── illustration/
    ├── Character.tsx
    └── DoodleMark.tsx
```

Character component:

```tsx
<Character
  variant="thinking"
  size="featured"
/>

<Character
  variant="laugh"
  size="face"
/>
```

Suggested variants:

```ts
type CharacterVariant =
  | "neutral"
  | "laugh"
  | "shy"
  | "proud"
  | "coding"
  | "thinking"
  | "idea"
  | "wave";
```

---

## 20. Asset Structure

```text
/public
└── illustrations
    ├── face-neutral.webp
    ├── face-laugh.webp
    ├── face-shy.webp
    ├── half-proud.webp
    ├── half-coding.webp
    ├── half-thinking.webp
    ├── half-idea.webp
    └── half-wave.webp
```

SVG is preferable when the hand-drawn texture survives vectorization.

Otherwise use transparent WebP at 2× the maximum rendered size.

Do not apply CSS drop shadows to the character.

---

## 21. Page Rhythm

The final page should read approximately like this:

```text
NAVIGATION

HERO
Hello / identity / what I build
Character introduction

↓ generous whitespace

FEATURED WORK
Interactive folder-like project collection

↓ generous whitespace

EXPERIENCE
Expandable chronological work log
Character expressions support selected entries

↓ generous whitespace

ABOUT
Short personal context + scholarship note

↓ generous whitespace

STACK
Simple technical index

↓ generous whitespace

CONTACT
Large final invitation
Small goodbye doodle

FOOTER
```

The visitor should feel they are moving through **one continuous personal document**, not navigating a collection of disconnected landing-page components.

---

## 22. Final Design Rules

When making implementation decisions, use these rules in order:

1. **Content before decoration.**
2. **White space is part of the design.**
3. **The UI stays clean; the character carries the imperfection.**
4. **One amber accent is more effective than five colorful cards.**
5. **Cards should represent actual objects or interactions, not merely wrap text.**
6. **Use borders before shadows.**
7. **Use motion to explain state changes.**
8. **Keep the character recognizable through hair + glasses + silhouette.**
9. **Tiny face doodles have no neck.**
10. **Featured character art may use a chest-up pose but must retain the same rough doodle line language.**
11. **Do not polish the drawings into vector mascots.**
12. **The whole portfolio should feel authored by one person, not assembled from a component library.**
