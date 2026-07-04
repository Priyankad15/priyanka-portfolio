# Priyanka — Portfolio

A premium, animated personal portfolio built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build outputs to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  components/      All UI sections (Hero, Skills, Projects, Contact, etc.)
  data/content.ts  Single source of truth for all text/data on the site
  hooks/           useCountUp (animated stat counters), useScrollSpy (nav highlighting)
  index.css        Theme tokens (colors, fonts) + global styles
  App.tsx          Composes every section in order
```

## Editing content

Almost everything you'd want to change — your name, bio, skills, internships,
projects, education, achievements, social links — lives in one file:

**`src/data/content.ts`**

Edit the arrays/objects there and the whole site updates automatically. You
generally shouldn't need to touch the component files unless you want to
change layout or styling.

## Customizing the look

Colors, fonts, and a few global utility classes are defined in `src/index.css`
under the `@theme` block at the top:

```css
--color-mint: #34d399;     /* primary accent */
--color-bg: #08090d;       /* page background */
--font-display: "Space Grotesk", sans-serif;
--font-body: "Inter", sans-serif;
```

Change these and the whole site re-themes — every component reads from these
tokens via Tailwind utility classes like `text-mint`, `bg-card`, `font-display`.

## Connecting the contact form

The contact form in `src/components/Contact.tsx` currently simulates a
submission (no backend). To make it actually send messages, swap the
`setTimeout` block in `handleSubmit` for a real call to a service like:

- [Formspree](https://formspree.io) — drop-in form endpoint, no backend needed
- [EmailJS](https://www.emailjs.com) — sends straight from the browser
- Your own API route, if you add a backend later

## Adding your resume

Drop your resume PDF into the `public/` folder as `Priyanka_Resume.pdf`
(or update the `resumeUrl` path in `src/data/content.ts` to match your
filename). The Hero and Navbar "Resume" buttons link to that path.

## Tech stack

- React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file needed)
- Framer Motion — all animations and scroll reveals
- Vite — dev server and build tooling
- Zero other runtime dependencies (icons are hand-drawn inline SVGs, no icon-font or icon-library dependency)
