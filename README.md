# Sindu Aditya Janadi — Portfolio

Personal portfolio built with Vite, React, Tailwind CSS, and Motion. The homepage follows a white, document-like design with project screenshots, work history, awards, and an interactive contact section.

## Run locally

Requires Node.js 22.x.

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npm run preview
```

## Routes

| Route | Content |
| --- | --- |
| `/` | Portfolio: Hero, Featured work, Experience, Awards, About, Stack, Contact, Footer |
| `/form` | Project intake form (Tally) |
| `/privacy`, `/terms` | Legal pages |

Other URLs display the not-found page.

## Content and assets

- Homepage composition: `src/Homepage.jsx`
- Projects and their screenshots: `src/Components/Projects.jsx`, `src/Components/ProjectCard.jsx`, `src/Images/optimized/`
- Experience and awards: `src/Components/Experience.jsx`, `src/Components/Awards.jsx`
- About, stack, and contact: `src/Components/AboutSection.jsx`, `src/Components/ToolsSection.jsx`, `src/Components/ContactSection.jsx`
- Hand-drawn character illustrations: `public/illustrations/`
- Design direction: `DESIGN_NOTION_PORTFOLIO.md`
- Resume reference: `RESUME.md`

Contact links open email and WhatsApp directly. Analytics use Vercel Analytics and PostHog. Deployment is configured in `vercel.json`.
