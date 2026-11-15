# Repository inspection and asset provenance

Inspected on **14 November 2026** using the connected GitHub repository tools. Read the README and recursive tree for all four repositories, then selected package manifests and UI/feature source files. No credentials or environment files were used.

## FocusTube

- Repository: https://github.com/iqbhavya/FocusTube
- Inspected main commit: `07964beb8b247cf4eda0e07365be0e131aeb63f0`
- Files: `README.md`, `manifest.json`, `popup/popup.html`, `popup/popup.css`, `dashboard/dashboard.html`, `content/content.js`.
- Confirmed Manifest V3, local browser storage, the study library, timestamped notes, slide capture, distraction blocking, Shorts quota, tags, reference links, shortcuts, and Markdown export.
- No screenshots or application logos exist in the inspected tree. The portfolio’s HTML/CSS study adapts the real cream, lavender, pink, and green UI, its serif headings, library layout, and popup. Decorative sample text is not presented as a real lecture record. The caption explicitly identifies the interface study.
- README provides Chrome “Load unpacked” installation. No web demo or store publication was verified, and neither is claimed.

## ContriFlow

- Repository: https://github.com/iqbhavya/ContriFlow
- Inspected main commit: `0374caac3d45f944c8eb1f9ced0f32e382db278c`
- Files: `README.md`, `client/package.json`, `server/package.json`, `client/src/pages/project/ProjectDetailsPage.tsx`, `client/src/components/task/AITaskGeneratorDialog.tsx`, `client/src/index.css`.
- Confirmed React/TypeScript, Express, PostgreSQL, Prisma, JWT, invite codes, lead/member roles, task assignment, evidence-backed contribution review, and Gemini task suggestions that are editable/selectable before creation.
- The user subsequently supplied eight actual application captures dated 29 October 2026. These replace the earlier interface illustration. The populated Club workspace is the cover; the gallery also shows AI task suggestions, task details, contribution submission, the project list, an empty workspace, the landing page, and its workflow explanation. Displayed task/member counts belong to the captured UI and are not presented as portfolio achievements.
- `public/images/contriflow/` contains full-resolution lossless WebP images, 800px previews, and 240px thumbnails. Only the cover preview loads on the portfolio page; gallery images load when opened. Original PNGs remain outside the portfolio unchanged. `scripts/prepare-contriflow.py` recreates the assets from the supplied directory using Pillow.
- The visible invite-code values in captures `020810` and `021040` are covered opaquely with “HIDDEN” before encoding or resizing. Redaction rectangles in original pixels are `(1276, 238, 1368, 259)` and `(1286, 238, 1378, 259)`, respectively. No other application content was changed; no unmasked originals are shipped.
- **Verified deployment:** the user supplied https://contriflow-workspace.vercel.app/ on 14 November 2026. Its live page identifies ContriFlow as a student-team project and contribution tracker, with project creation, assignment, contribution review, and links to the author's LinkedIn. It matches the inspected application and is linked in the portfolio. The earlier https://contriflow.vercel.app URL refers to an unrelated product and is not used.

## LeafLock

- Repository: https://github.com/iqbhavya/LeafLock
- Inspected main commit: `a62caa79a51f3486447203081e1d0857db7d6230`
- Files: `README.md`, `package.json`, `src/App.jsx`, `src/components/CipherCreator.jsx`, `server.js`.
- Current project has evolved from the security-oriented brief into an experimental two-player landmark photo game. The portfolio reflects the current source rather than describing it as a secure vault.
- Confirmed React, TensorFlow.js/MobileNet, Sharp, MongoDB, Groq riddle generation, photo matching, note payloads, and shareable hunt codes. The raw image is processed into features rather than retained as an authentication photograph.
- README and server now refer to a Qwen model via Groq, not the Gemma 2 version mentioned in the original brief. The portfolio only claims “Groq,” avoiding a brittle or stale model name. README benchmark and security marketing claims are not reproduced.
- The original UI uses strong outlines, coral and cream cards, a “Player 1: Lock Secret” flow, and camera/photo input. The labeled flow illustration follows that identity. No generic human, photo, or stock image is used.
- LinkedIn is explicitly listed in the author section: https://www.linkedin.com/in/iqbhavya.
- **Verified deployment:** the user supplied https://leaflock.onrender.com/ on 14 November 2026. Its live page displays the expected LeafLock two-player landmark game, Lock Secret and Decrypt Clue modes, note/photo inputs, and riddle generation. The portfolio now links to it. Only the public interface was checked; no photo was uploaded or secret note created.

## Rentra

- Repository: https://github.com/iqbhavya/Rentra
- Inspected main commit: `e3b54cefc5cc3a3c8f917e49c8871f8f65e7c14e`
- Files: `README.md`, `package.json`, `views/listings/index.ejs`, `views/listings/show.ejs`, `controllers/users.js`, `models/listing.js`.
- Confirmed Express/EJS, Passport, MongoDB/Mongoose, Cloudinary uploads, listings/search/reviews, OTP email verification, booking calculations, Leaflet maps, and Chart.js price history. No claim is made about the correctness of every backend path; this was feature inspection, not a security audit.
- README deployment https://rentra-ila8.onrender.com/listings was opened in a browser and displayed the actual listing interface successfully.
- `public/images/rentra.webp` is an optimized screenshot captured directly from that deployment; original capture is `public/images/rentra.jpg`. It includes the application’s existing property photographs. No unrelated images were sourced separately.

## Status and scope

These are student-built projects with implemented source. The inspection does not establish production readiness, reliability, real customer adoption, or completion of all planned features. No such claims appear in the portfolio.
