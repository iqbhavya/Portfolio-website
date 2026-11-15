# Verification record

## Build and source

- TypeScript strict checking passed.
- Vite production build passed with local fonts and optimized assets.
- Dependency installation audit reported zero known vulnerabilities at install time.
- All four source repositories were read; project functionality and preview provenance are documented in `project-sources.md`.

## Browser verification

Tested using the in-app Chromium browser at **1440, 1024, 768, 390, and 360 CSS pixels**.

- No page-level horizontal overflow at any requested width.
- Desktop and tablet hero compositions visually inspected; mobile hero stacks correctly.
- Three hero-layer controls update the selected state, illustration, description, and stack.
- Active navigation follows document position, independently of navigation-link order.
- Mobile menu opens/closes, Escape dismisses it and returns focus to its toggle, and section links close it and navigate.
- Explicit in-page links use a short, interruptible animation with a header offset and focus applied after arrival. This avoids Chromium interrupting long native fragment scrolls. Wheel, touch, and navigation keys cancel the animation; ordinary scrolling remains native. Reduced-motion preference removes this animation.
- All four native project disclosures open and close using Enter.
- Email link uses the supplied `mailto:` address; clipboard write resolves and the copied-status feedback appears. The in-app clipboard inspection API did not expose the copied text, so that secondary readback is not claimed.
- The final clean browser load recorded no console warnings or errors. During dependency optimization and source formatting, the development tab briefly retained stale Vite/HMR module errors; those were resolved by a fresh load and were not reproduced in the final check.
- Rentra screenshot loaded; no broken image elements or empty/`#` placeholder anchors were found.
- A computed-style contrast check found no readable non-decorative text below 4.5:1. This is a targeted check, not a complete accessibility audit.
- Reduced-motion behavior is implemented through Motion’s user preference setting, the reveal hook, and CSS media overrides. OS-level reduced-motion emulation was not performed.

## External links

- Four repository URLs verified through the GitHub connector.
- Rentra live site visually verified.
- Updated ContriFlow and LeafLock demo links visually verified against their public interfaces. The earlier unrelated ContriFlow URL is not used.
- User-supplied resume copied to `public/resume.pdf` without modification; SHA-256 matches the original file. Resume controls are enabled in navigation, hero, and contact.
- LinkedIn sourced from the author’s repository, not authenticated/profile-audited.
- Email client dispatch and actual message delivery were not attempted.

## ContriFlow screenshot update — 14 November 2026

- Replaced the interface illustration with eight supplied captures, an optimized workspace cover, and a native dialog gallery. Full-size WebP files preserve the original resolution; thumbnails load only after opening the gallery.
- TypeScript checking and the Vite production build passed after the change.
- At 1440 × 1000, opening the gallery using Enter displayed the workspace and focused the close button. The native dialog was confirmed modal, and the page had no horizontal overflow. Clicking Next selected the AI suggestions screen and updated its caption and full-size link. All eight thumbnails and the displayed full-size image loaded successfully.
- Desktop visual evidence is saved in `artifacts/contriflow-gallery-desktop.jpg` (local, ignored artifact).
- Responsive styles, arrow/Home/End navigation, Escape dismissal, and focus restoration are implemented. Follow-up mobile and keyboard verification could not be completed: the browser tool's automatic approval review failed with an internal resource mismatch, including on a read-only state check. This was a review service error, not an unsafe-action rejection. The temporary 1440 × 1000 viewport and open gallery could not be reset through the blocked browser tool.
- The earlier general browser checks above describe the portfolio before this gallery update; they do not establish mobile verification of the new gallery.

## Before public sharing

- Keep the included resume PDF current as your experience changes.
- Set the final site URL and rebuild for absolute Open Graph URLs, canonical metadata, robots, and sitemap.
- Optionally run Lighthouse on the final deployment; no synthetic score is asserted here.
- Recheck the third-year academic label and availability text as time passes.
