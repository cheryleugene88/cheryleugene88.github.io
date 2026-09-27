# Cheryl Eugene Saari — Portfolio Website

A personal portfolio website for **Cheryl Eugene Saari**, a Data Science student at Binus University working across data engineering, CI/CD, and analytics/ML projects, with a side of creative/motion-graphic volunteer work.

Visual direction: playful **pixel-art accents** mixed with a clean, modern layout — small 8-bit icons, retro cursor/blink details, and pill-shaped tags — kept restrained so the content (education, experience, projects, skills) stays easy to scan. See [`design.md`](./design.md) for the full design system, [`content.md`](./content.md) for the English copy, and [`content-id.md`](./content-id.md) for the Bahasa Indonesia version — both organized per section, pick whichever language (or add a toggle later using both).

**Layout:** confirmed as a single scrolling page (no separate routes per section/project) — see [`structure.md`](./structure.md).

## 1. Tech stack

Chosen for "keep it simple, just make sure everything reads clearly":

| Layer | Choice | Why |
|---|---|---|
| Framework | **React + Vite** | Fast dev server, no heavy config, easy to deploy as a static site |
| Styling | **CSS Modules** (or plain CSS with custom properties) | No extra build complexity; design tokens live in `:root` variables |
| Animation | **CSS transitions + [Framer Motion](https://www.framer.com/motion/)** (optional, light use only) | Simple fade/slide-in on scroll, hover bounce on pixel icons — nothing heavier |
| Icons | Custom small pixel-art PNG/SVG sprites (see `design.md`) | Matches the reference mood boards |
| Fonts | Google Fonts: one pixel/retro display font (headers/accents only) + one clean sans-serif (body) | Keeps pixel theme from hurting readability |
| Deployment | Vercel / Netlify / GitHub Pages | Any static host works with a Vite build |

If a plain HTML/CSS/JS version is preferred instead of React, the same structure below still applies — just swap components for `.html` sections and `main.js` for interactivity.

## 2. Suggested folder structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── pixel-icons/          # small pixel sprites (see design.md)
├── src/
│   ├── assets/
│   │   ├── images/           # profile photo, project screenshots
│   │   └── pixel-icons/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Organization.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── PixelTag.jsx       # reusable pill/badge with tiny pixel icon
│   ├── styles/
│   │   ├── tokens.css          # colors, fonts, spacing (from design.md)
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── design.md
├── content.md
├── structure.md
├── README.md
└── package.json
```

## 3. Getting started

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install framer-motion   # optional, only if using scroll animations
npm run dev
```

Drop the color/type tokens from `design.md` into `src/styles/tokens.css`, then build each component in `src/components/` using the copy already written out in `content.md`.

## 4. Sections (in order)

1. Hero / intro
2. About
3. Education
4. Experience
5. Organization & Volunteering
6. Projects
7. Skills
8. Contact

Full breakdown of what goes in each section, plus a rough wireframe description, is in [`structure.md`](./structure.md).

## 5. Content source

All text content was extracted and translated from Cheryl's original portfolio brief (PDF) and reorganized into ready-to-paste sections in `content.md`. Update contact details, links, and the profile photo before publishing.

## 6. Still open / to decide

- Final pixel-icon set (which icons represent which skill/tool)
- Whether to add a project detail page per project or keep everything on one scrolling page
- Resume/CV download button (mentioned in the original brief — needs a PDF file)
