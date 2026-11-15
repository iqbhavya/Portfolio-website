# Bhavya Yadav — Developer Portfolio

A complete, responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion for React, and Lucide. Local fonts use Inter, Space Grotesk, and JetBrains Mono.

## Run locally

Use Node.js **22.12 or newer** (Node 22 LTS recommended).

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` type-checks the project and generates `dist/`. No backend, database, API keys, or runtime environment variables are required.

## Personal information

Edit **`src/data/site.ts`**:

- Email is configured as `bhavyayadav0607@gmail.com`.
- LinkedIn is `https://www.linkedin.com/in/iqbhavya`, sourced from the LeafLock README.
- **Resume:** your supplied PDF is included at `public/resume.pdf` and configured as `resume: '/resume.pdf'`. Resume links are enabled in navigation, hero, and contact. Replace that file to update the document.
- **Domain:** set `url` to your final HTTPS site origin, then rebuild. Vite adds static canonical and Open Graph URLs, an absolute social image URL, `sitemap.xml`, and `robots.txt`.
- **Status:** currently “Always learning. Always building.” Change this only when your availability changes.

Edit projects, skills, and activities in `src/data/projects.ts`, `skills.ts`, and `experience.ts`. Education is in `src/components/Education.tsx`; about copy is in `About.tsx`.

## What is included

- Sticky navigation with active-section tracking and an animated mobile disclosure menu.
- Large editorial hero and an interactive CSS engineering diagram with three selectable layers.
- About bento, categorized skills, four detailed project showcases, NCC leadership and technical activities, academic highlights, contact, and footer.
- Native, keyboard-accessible project disclosures and working source links.
- Direct email, copy-email feedback, LinkedIn, and GitHub. No simulated contact form.
- Scroll reveals, hover feedback, reduced-motion support, skip link, visible keyboard focus, and semantic headings.
- Local optimized fonts, lazy-loaded WebP project previews, an accessible screenshot gallery, SVG favicon, social preview image, and build-time SEO metadata.

## Project evidence and visuals

See **`docs/project-sources.md`** for repository commit references, inspected files, verified functionality, and deployment checks.

- FocusTube has a **labeled interface study** based on its current UI source.
- ContriFlow uses **eight user-supplied application screenshots**. The workspace cover opens a native dialog gallery with thumbnails, previous/next buttons, arrow-key navigation, Escape dismissal, and full-size image links. Edit the ordered screen descriptions in `src/data/screenshots.ts`; the first entry is the cover. Optimized assets live in `public/images/contriflow/`. Invite codes are masked in the portfolio copies; originals are untouched.
- LeafLock has a **labeled flow illustration** based on the current two-player game.
- Rentra uses an **actual screenshot** of its verified live listing page, compressed to WebP.
- Verified live links are configured for ContriFlow (`https://contriflow-workspace.vercel.app/`), LeafLock (`https://leaflock.onrender.com/`), and Rentra. The earlier, unrelated `contriflow.vercel.app` URL is not used.

There are no invented metrics, work placements, testimonials, profile images, or proficiency percentages.

## Deploy to Vercel

1. Push this folder to a GitHub repository you own.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Select **Vite** if it is not detected automatically.
4. Use install command `npm ci`, build command `npm run build`, and output directory `dist`.
5. Choose Node.js **22.x** in project settings. No environment variables are needed.
6. Deploy. Set `site.url` in `src/data/site.ts` to the resulting HTTPS URL and redeploy to generate the canonical URL and sitemap.
7. Test the included resume PDF and your contact links on the deployed site.

`vercel.json` already configures the build/output and basic response headers. The site uses in-page anchors, so no SPA route rewrites are necessary.

## Source map

```text
src/
  components/       # Separate sections and reusable UI
  data/             # Typed project, skill, activity and site content
  hooks/            # Active-section navigation tracking
  styles/           # Design tokens, responsive styles and motion preferences
  App.tsx           # Section composition and Motion configuration
  main.tsx          # React entry point and local fonts
public/
  favicon.svg
  resume.pdf        # User-supplied resume, served without modification
  images/           # ContriFlow gallery, Rentra screenshot, social preview
docs/
  project-sources.md
  verification.md
scripts/
  generate-og.py    # Optional Pillow helper; image is already generated
  prepare-contriflow.py # Optional local screenshot conversion/redaction helper
```

Format changes with `npx prettier --write src vite.config.ts index.html README.md docs`. The image-generation helper is optional, uses Windows Segoe UI fonts, and is not part of building or hosting the website.

## Verification

See `docs/verification.md` for the actual checks performed. Lighthouse scores are not claimed without an audit. External deployments can change independently of this portfolio.
