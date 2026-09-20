# Portfolio - Pranav Konjeti

Personal portfolio website built with **Vite + React + TailwindCSS + Material Tailwind**. Features a modern, gradient-heavy design with project showcases, a "Hire Me" landing page, and a blog section.

## Live Demo

🔗 [pranavkonjeti.com](https://pranavkonjeti.com)

## Tech Stack

- **Framework**: Vite 4 + React 18
- **Language**: JavaScript (JSX)
- **Styling**: TailwindCSS 3 + Material Tailwind
- **UI Libraries**: Headless UI, Heroicons, React Icons, FontAwesome
- **Forms**: Formspree
- **Analytics**: Vercel Analytics + PostHog
- **Deployment**: Vercel

## Features

### Pages

| Route | Description |
|-------|-------------|
| `/` | Main portfolio homepage |
| `/hire` | Dedicated "Hire Me" landing page for web development agency |
| `/form` | Embedded Tally form for project intake questionnaire |
| `/learn` | Blog post: "How I Learned Web-Development" |

### Homepage Sections

1. **Hero** - Name, tagline, CTA buttons with animated gradient background
2. **About** - Bio, social links, impact stats (2M+ views, 300k visitors, $4000 funding)
3. **Tools/Tech Stack** - Current stack (React, Tailwind, Next.js, TypeScript, Firebase) + full skill grid
4. **Projects** - Detailed case studies with carousels:
   - **Talem** - Highschool opportunities finder (1M+ visits, $3k raised)
   - **Desource** - Web development resources database
   - **Learntheweb** - Online programming education (300k visits, 200+ students taught)
5. **Extra Projects** - Score1600, EcoEats, Acely, Languify
6. **Contact** - Formspree-powered contact form + footer with links

### Hire Page Sections

- HireHeader, HireFirst, HireTimeline, HireFeatures, HireBottomFeatures
- Dedicated landing page for ThryveDesign web agency

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── portfolio.pdf
│   ├── testx.svg
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── AboutSection.jsx      # About me with bio + stats
│   │   ├── BlogHome.jsx          # Blog preview card
│   │   ├── ButtonGradient.jsx    # Gradient button component
│   │   ├── ContactForm.jsx       # Formspree contact form
│   │   ├── ExtraProjectsBottom.jsx  # Side projects grid
│   │   ├── Footer.jsx            # Contact section + footer
│   │   ├── Header.jsx            # Navbar with mobile menu
│   │   ├── HeaderStatic.jsx      # Static navbar for blog pages
│   │   ├── HeroMain.jsx          # Hero section with animations
│   │   ├── Learn.jsx             # Blog post page
│   │   ├── Projects.jsx          # Main projects showcase
│   │   ├── ToolsSection.jsx      # Tech stack display
│   │   └── WavyLine.jsx          # SVG wave divider
│   ├── HireComponents/
│   │   ├── HireBottomFeatures.jsx
│   │   ├── HireFeatures.jsx
│   │   ├── HireFinalCTA.jsx
│   │   ├── HireFirst.jsx
│   │   ├── HireHeader.jsx
│   │   ├── HireNavbar.jsx
│   │   ├── HireProsCons.jsx
│   │   └── HireTimeline.jsx
│   ├── Images/                   # Project screenshots & profile photos
│   ├── assets/
│   ├── App.jsx                   # Router + root component
│   ├── App.css                   # Global styles
│   ├── Hire.jsx                  # Hire page layout
│   ├── Homepage.jsx              # Homepage layout
│   ├── index.css                 # Tailwind + custom utilities
│   ├── main.jsx                  # React entry point
│   └── TallyForm.jsx             # Tally form embed
├── .env                          # PostHog analytics keys
├── .eslintrc.cjs
├── index.html                    # HTML entry with SEO meta tags
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json                   # Redirects + SPA rewrites
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 22.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build & Preview

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

### Lint

```bash
npm run lint
```

## Configuration

### Environment Variables

```env
REACT_APP_PUBLIC_POSTHOG_KEY=<your_posthog_key>
REACT_APP_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### Content Updates

- **Projects**: Edit `src/Components/Projects.jsx` and `src/Components/ExtraProjectsBottom.jsx`
- **About/Bio**: Edit `src/Components/AboutSection.jsx`
- **Tech Stack**: Edit `src/Components/ToolsSection.jsx`
- **Contact Form**: Formspree form ID in `src/Components/ContactForm.jsx`
- **Images**: Replace files in `src/Images/`

### Vercel Deployment

```json
{
  "redirects": [
    { "source": "/portfolio", "destination": "/portfolio.pdf", "permanent": true },
    { "source": "/dev-portfolio", "destination": "/portfolio.pdf", "permanent": true },
    { "source": "/design-portfolio", "destination": "/portfolio.pdf", "permanent": true }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Images

### Profile Photos

| File | Description |
|------|-------------|
| `pranavlatest.jpg` | Latest profile photo |
| `pranavheadshot.jpg` | Headshot photo |
| `pranavprofile.jpg` | Profile photo |
| `pklogo.png` | Logo mark |
| `pranavlogotext.png` | Logo with text |
| `pranavbigtext.svg` | Large text logo for footer |

### Project Screenshots

| Project | Files |
|---------|-------|
| **Talem** | `talem1.png`, `talem2.png`, `talem3.png` |
| **Desource** | `desource1.png`, `desource2.png`, `desource3.png` |
| **Learn the Web** | `ltw1.png`, `ltw2.png`, `ltw3.png` |
| **EcoEats** | `ecoeats1.png`, `ecoeats2.png`, `ecoeats3.png` |
| **Stella** | `stellapic1.png`, `stellapic2.png` |
| **Score1600** | `score1.png`, `score2.png`, `score3.png` |
| **Acely** | `acely1.png` |
| **Languify** | `languifymain.png` |
| **Current Portfolio** | `currentportfolio.png` |

### Hire Page Assets

| File | Description |
|------|-------------|
| `hirefeature1-4.svg` | Feature icons |
| `hiregrid1-4.svg` | Grid icons |
| `hireIcons.svg` | Icon set |
| `hireSpeed.svg` | Speed illustration |

## License

This project is private. All rights reserved to Pranav Konjeti.
