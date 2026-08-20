# Design System — Jay Suthar Portfolio (Swiss Redesign)

> A design.md spec for Google Stitch and other AI coding agents. Documents the complete design system for jaysuthar0721.github.io so any generated screen, component, or new page renders on-brand and technically consistent with the existing site.

---

## 1. Project Context

**Product:** Personal engineering portfolio for a Mechanical Engineering junior at Colorado State University, targeting aerospace and propulsion internships.

**Type:** Static multi-page website (HTML + CSS + vanilla JS), deployed via GitHub Pages. No framework, no build step.

**Primary audience:** Aerospace engineering recruiters, hiring managers, and technical leads who spend 30–90 seconds skimming portfolio pages during candidate review.

**Primary goals:**
1. Read as confident and modern without being trend-chasing.
2. Make selected project case studies easy to scan (Challenge / Action / Impact structure).
3. Feel visibly hand-crafted rather than template-generated.

**Non-goals:** Marketing splash, e-commerce, dashboards, mobile app patterns, social feed patterns, gamification.

---

## 2. Aesthetic Direction

**One-line summary:** Swiss industrial modernism.

**Reference feel:**
- International Typographic Style (Müller-Brockmann, Hoffmann)
- Modern technical brands: Linear, Vercel, Anduril, Rivian
- Aerospace and industrial identity systems (SpaceX press kits, Boeing white papers with modern grid)
- Editorial design magazines that use grotesques at large sizes

**Visual keywords:** bold, grotesque, structural, systemic, high-contrast, ruled, disciplined, aerospace-adjacent, technical.

**What this site is NOT:**
- Not editorial-serif (previous direction — retired).
- Not a marketing landing page (no gradients, glassmorphism, orbital shapes).
- Not a dashboard (no charts, no cards on cards).
- Not a creative-agency portfolio (no cursor followers, no scroll hijacking).

---

## 3. Design Principles

1. **Type is the primary design element.** Massive bold grotesque headings carry identity. Layout serves the type.
2. **Two accents, used surgically.** Green marks meaning (competencies, section rules, block labels). Orange marks state (active nav, key CTA). Nothing else gets accent color.
3. **Rules do structural work.** Thick black rules divide sections. Thick green rules open subsections. Thin gray rules separate related items. The rule vocabulary is intentional.
4. **Restraint reads as competence.** No decorative shadow, no gradient, no illustration, no motion for its own sake.
5. **Wide editorial layout.** 1280px container. Text can go full-width. This is a magazine, not a book.

---

## 4. Color System

Light theme only. No dark mode.

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#ffffff` | Page background. Pure white. |
| `--text` | `#0a0a0a` | Primary text. Near-black. |
| `--text-muted` | `#9a9a9a` | Section number labels, project meta lines, muted nav state. |
| `--text-muted-strong` | `#666666` | Placeholder notes on empty projects. |
| `--accent-green` | `#0e4a2a` | Meaning accent. Pills (filled and outline), competency titles, project block labels (Challenge/Action/Impact), section-opening rules, pullquote left border, image placeholder captions, hero subtitle, About subtitle. |
| `--accent-green-hover` | `#1a5c37` | Green hover state. |
| `--accent-orange` | `#f26522` | State accent. Active nav item only. Also the Resume_PDF link in footer. Nothing else. |
| `--accent-orange-hover` | `#ff7a35` | Orange hover state. |
| `--rule` | `#e5e5e5` | Thin dividers (between competencies, footer top border, image placeholder edge). |
| `--rule-strong` | `#0a0a0a` | Thick rules (2–3px) for page/section division. |
| `--placeholder-bg` | `#f0f0ef` | Image placeholder fill. |

**Semantic states (success, error, warning, info) are not defined.** Site has no forms or toasts. If they become necessary, request approval before introducing new colors.

**No dark mode.** `color-scheme: light` declared on `:root`.

---

## 5. Typography

### 5.1 Font Families

**Single family used throughout:** **Space Grotesk** (Google Fonts).
- Weights loaded: 400 (regular), 500 (medium), 700 (bold).
- Fallback stack: `"Helvetica Neue", Arial, sans-serif`.

Space Grotesk is the working choice as the closest free equivalent to the commercial grotesques (PP Neue Machina, Aeonik, Söhne) commonly used in this aesthetic. If a commercial license is acquired, swap the `--font-display` and `--font-body` variables in `styles.css` and update the Google Fonts `<link>` in each HTML file.

**Do not substitute** with Inter, Roboto, SF Pro, or system-ui. Space Grotesk's specific character shapes carry the identity.

### 5.2 Type Scale

All display type is uppercase or title-case with tight negative letter-spacing.

| Element | Size | Weight | Line-height | Notes |
|---|---|---|---|---|
| Hero name (home) | `clamp(3.5rem, 7vw, 6rem)` | 700 | 0.95 | Uppercase. Letter-spacing `-0.02em`. `text-wrap: balance`. |
| Page title (About, Projects) | `clamp(4rem, 9vw, 7rem)` | 700 | 0.92 | Title case. Letter-spacing `-0.03em`. `text-wrap: balance`. |
| Project title | `clamp(2rem, 4.5vw, 3rem)` | 700 | 1.0 | Title case. Letter-spacing `-0.02em`. `text-wrap: balance`. |
| Section heading (h2) | `clamp(2rem, 4vw, 2.9rem)` | 700 | 1.05 | Sentence case with terminal period. Letter-spacing `-0.02em`. `text-wrap: balance`. |
| Competency title (h3) | `1.35rem` | 700 | (inherit) | Title case. Color: `--accent-green`. Letter-spacing `-0.01em`. |
| Pullquote | `1.35rem` | 400 | 1.5 | Regular weight (not italic). Straight typographic quotes wrap the content. |
| Hero intro | `1.1rem` | 400 | 1.55 | Body paragraph next to hero name. |
| Body paragraph | `1rem` | 400 | 1.55 | Inside sections and project blocks. |
| Base body | `17px` (mobile: `16px`) | 400 | 1.55 | Root font size on `<body>`. |
| Micro labels (nav, meta, pill, block-label, footer, hero subtitle, page subtitle) | `0.78–0.85rem` | 500 or 700 | (inherit) | Uppercase, letter-spacing `0.04–0.06em`. |

### 5.3 Micro-typography

- **Curly quotes required.** `'` and `"`, not `'` and `"`.
- **Ellipsis:** `…` (U+2026), not `...`.
- **Em dash:** `—` is BANNED sitewide. Use commas, colons, parentheses, en dashes, or restructure sentences instead. Do not generate copy containing em dashes anywhere.
- **En dash:** `–` (U+2013) acceptable for numeric ranges and light separators (e.g., placeholder note "not yet written – placeholder template").
- **Non-breaking spaces (`&nbsp;`):** required on glued terms — course codes (`MECH&nbsp;307`), semester tags (`Spring&nbsp;2026`), project numbers (`Project&nbsp;01`), unit values (`44&nbsp;Hz`), phrases like `Class&nbsp;of&nbsp;2027`.
- **`text-wrap: balance`** on every heading.
- **`text-wrap: pretty`** on body paragraphs, pullquotes, and competency bodies.
- **Uppercase transformation** for labels: applied via `text-transform: uppercase` in CSS, never by typing in caps in the HTML.

### 5.4 Voice & Copy Conventions

- **First person** in bio/about content.
- **Active voice** always.
- **Technical specificity over adjectives.** Prefer "44 Hz low-pass" over "aggressive filter."
- **No AI-slop vocabulary.** Never use: "delve," "tapestry," "navigate the landscape," "in the ever-evolving world of," "unleash," "harness," "elevate," "embrace," "foster," "at the intersection of," "not just X but Y" (as filler), "it's important to note that."
- **Brand-code tokens** (ANSYS, MATLAB, Simulink, PID, ESP32, ESP-NOW, MPU-6050, DSHOT, PWM, IMU, ESC, Vbat, SolidWorks) wrap in `<span translate="no">…</span>`.

---

## 6. Spacing Scale

Rem-based, roughly on an 8pt grid.

| Token | Value | Common use |
|---|---|---|
| xs | `0.5rem` (8px) | Tight inline gaps. |
| sm | `0.75rem` (12px) | Pill row gaps, small internal padding. |
| md | `1rem` (16px) | Default gap between related items. |
| lg | `1.5rem` (24px) | Body padding, section internal spacing. |
| xl | `2rem` (32px) | Space around image blocks, section heading margin. |
| 2xl | `3rem` (48px) | Content padding sides, section number margin bottom. |
| 3xl | `4rem` (64px) | Section-divider vertical margin, main top padding. |
| 4xl | `5rem` (80px) | Section bottom margin. |
| 5xl | `6rem` (96px) | Hero content padding, main bottom padding. |

---

## 7. Layout & Grid

- **Container max-width:** `--content-width: 1280px`.
- **Content padding:** `--content-padding: 3rem` (2rem tablet ≤900px, 1.5rem mobile ≤600px).
- **Column model:** single column. Body text fills container width minus padding (deliberately wide — magazine-style).
- **Home page:** does not use standard main padding. Uses a 50/50 CSS grid (`hero-split`): left half is solid green panel (decorative), right half holds content with generous left padding (5rem). Grid collapses to single column at ≤900px; green panel hidden entirely.
- **Breakpoints:** 900px (tablet, hero collapses), 600px (mobile).
- **Safe-area insets:** `env(safe-area-inset-*)` applied to nav top padding, footer bottom padding, and horizontal padding on nav/footer/hero-split-content.

---

## 8. Motion

Motion is progressive-enhancement only. Site is fully readable with JS disabled or `prefers-reduced-motion: reduce` set.

### 8.1 Easings

| Token | Value | Use |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal transforms (slide). |
| `--ease-out-swift` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Fade, opacity, background transitions. |

### 8.2 Durations

| Interaction | Duration | Easing |
|---|---|---|
| Button hover (background/color) | 180ms | linear |
| Nav border-bottom appear on scroll | 300ms | `--ease-out-swift` |
| Hero name word slide-up | 1000ms | `--ease-out-expo` |
| Hero secondary content fade-up | 900ms | `--ease-out-swift` + `--ease-out-expo` |
| Scroll-reveal (section entrance) | 1000ms | `--ease-out-swift` + `--ease-out-expo` |

### 8.3 Entrance Reveals

**Hero (home page, on load):**
- Each word of "JAY SUTHAR" slides from `translateY(105%)` inside an `overflow: hidden` wrapper. Stagger: 50ms, 180ms.
- Hero subtitle, intro paragraph, and CTA buttons fade-up in sequence at 450ms, 600ms, 750ms delays. Initial state: `opacity: 0`, `translateY(12px)`.
- Total sequence: approximately 1.7s to full settle.

**Scroll-triggered (About, Projects pages):**
- Elements with `[data-reveal]` transition from `opacity: 0`, `translateY(24px)` to natural state when they enter viewport.
- Intersection Observer trigger: `threshold: 0.15`, `rootMargin: '0px 0px -60px 0px'`.
- Fires once per element, then the observer disconnects.

### 8.4 Motion Rules

- Only `transform` and `opacity` animate on entrance. `background-color`, `color`, and `border-color` animate on state changes.
- No `transition: all`.
- `transform-origin` explicitly set where needed.
- `prefers-reduced-motion: reduce` overrides all animations and transitions to `0.01ms` (effectively instant), sets `.word transform: translateY(0)`, and forces revealed states immediately.

---

## 9. Components

### 9.1 Skip-to-Content Link (a11y)

Visually hidden until keyboard focus, then appears top-left over content.
- Position: absolute, off-screen (`left: -9999px`).
- On focus: reveals at `top: 1rem, left: 1rem`.
- Background: `var(--text)`. Text: `var(--bg)`. Space Grotesk 700, uppercase, `0.78rem`.
- Target: `<main id="main">`.

### 9.2 Sticky Navigation

- Position: `sticky, top: 0, z-index: 100`, background `var(--bg)`.
- At page top: no visible border.
- After 24px scroll: `1px solid var(--rule-strong)` bottom border appears.
- Inner container: `flex, justify-content: space-between, max-width: var(--content-width)`.
- Left: brand link "Jay Suthar" in Space Grotesk 700 uppercase `0.95rem`, letter-spacing `0.02em`.
- Right: nav links list. Format `01 / About`, `02 / Selected Works`, `03 / Parameters`. Space Grotesk 500 uppercase `0.82rem`, letter-spacing `0.04em`. Default color `--text-muted`. Hover color `--text`. **Active state (current page) color `--accent-orange`.**
- Gap between nav links: `3rem` desktop, `1.5rem` tablet, `1rem` mobile.
- Padding: `max(1.5rem, env(safe-area-inset-top))` top with matching side insets.

### 9.3 Buttons

Two variants, both with generous padding, 2px border, `0.85rem` bold uppercase text, and small border-radius (2px).

**`.btn.btn-primary` (solid black):**
- Background: `var(--text)`. Text: `var(--bg)`. Border: 2px `var(--text)`.
- Hover: background and border become `var(--accent-green)`.

**`.btn.btn-secondary` (outlined):**
- Background: transparent. Text: `var(--text)`. Border: 2px `var(--text)`.
- Hover: background becomes `var(--text)`, text becomes `var(--bg)`.

Both use `padding: 1rem 1.75rem`, `letter-spacing: 0.04em`, and include an arrow `→` at the end of the label.

`:focus-visible`: `outline: 2px solid var(--accent-orange), outline-offset: 3px`.
`:active`: `transform: translateY(1px)`.

### 9.4 Split-Screen Hero (home only)

Structure:
```
<section class="hero-split" data-hero>
  <div class="hero-split-panel" aria-hidden="true"></div>
  <div class="hero-split-content">
    <h1 class="hero-name">
      <span class="word-wrap"><span class="word">Jay</span></span>
      <span class="word-wrap"><span class="word">Suthar</span></span>
    </h1>
    <p class="hero-subtitle">[ Colorado State University / Class of 2027 ]</p>
    <p class="hero-intro">…lede…</p>
    <div class="hero-ctas"><a class="btn btn-primary">…</a><a class="btn btn-secondary">…</a></div>
  </div>
</section>
```

- Grid: `grid-template-columns: 1fr 1fr`.
- Min-height: `calc(100vh - 6rem)`.
- Panel: solid `var(--accent-green)` background, no content.
- Content: `padding: 6rem 3rem 6rem 5rem`, centered vertically via `justify-content: center`, gap `2rem` between children.
- Word-mask reveal on load (see §8.3).
- Below 900px: panel is hidden with `display: none`, content becomes full-width with reduced padding.

### 9.5 Page Title & Subtitle (About, Projects)

- Page title: `<h1 class="page-title">`, size `clamp(4rem, 9vw, 7rem)`, tight letter-spacing.
- Page subtitle (About only): `<p class="page-subtitle">`, wrapped in `[ ]` brackets, `--accent-green` color, Space Grotesk 700 uppercase `0.85rem`.
- **About uses:** page-title → page-subtitle → `<hr class="page-title-rule">` (thick 2px black rule).
- **Projects uses:** page-title → `<hr class="page-title-rule-green">` (thick 3px green rule, no subtitle).

### 9.6 Section (About)

Structure:
```
<section class="section" data-reveal>
  <span class="section-number">01 / Executive Summary</span>
  [optional: <hr class="section-rule-green"> — used for Section 02 only]
  <h2 class="section-heading">…</h2>
  …content…
</section>
<hr class="section-divider">
```

- Section number: `<span class="section-number">`, Space Grotesk 700 uppercase `0.78rem`, letter-spacing `0.05em`, color `--text-muted`. `1.5rem` bottom margin.
- Section divider: `<hr class="section-divider">`, 2px `--rule-strong`, `4rem` top margin / `3rem` bottom margin. Placed BETWEEN sections.
- Section rule green: `<hr class="section-rule-green">`, 3px `--accent-green`, `2.5rem` bottom margin. Used inside Section 02 only, between the section number and the heading, to visually "open" the section that has no pills or pullquote.
- Section heading (h2): Space Grotesk 700, size `clamp(2rem, 4vw, 2.9rem)`.

### 9.7 Pill Chips

- Container: `<div class="pills-row">`, `flex-wrap: wrap`, `gap: 0.75rem`.
- Each pill: `<span class="pill filled">` or `<span class="pill outlined">`.
- Shape: `border-radius: 999px` (fully rounded ends).
- Padding: `0.6rem 1.1rem`.
- Type: Space Grotesk 700 uppercase `0.78rem`, letter-spacing `0.04em`.
- Border: `1.5px solid var(--accent-green)`.
- **Filled variant:** background `--accent-green`, text `--bg`.
- **Outlined variant:** background transparent, text `--accent-green`.
- Convention: first pill in a row is filled; subsequent are outlined.
- Format inside pill: `LABEL: value` (e.g., `Role: Mechanical Engineering Senior`).

### 9.8 Competency Block (About)

- Container: `<div class="competency">`, padding `1.75rem 0`, top border `1px solid var(--rule)`. Last competency also has bottom border.
- Title (h3): Space Grotesk 700 `1.35rem`, color `--accent-green`.
- Body: `1rem`, default text color, `text-wrap: pretty`.

### 9.9 Pullquote

- Element: `<blockquote class="pullquote">`.
- Font: Space Grotesk 400, `1.35rem`, line-height 1.5.
- Padding: `0.5rem 0 0.5rem 2rem`.
- Left border: `4px solid var(--accent-green)`.
- Max-width: `60rem`.
- Content wrapped in curly typographic quotes `"..."`.
- NOT italic. NOT display font. Regular body weight.

### 9.10 Project Card (Projects page, repeated)

Structure for fully-written project:
```
<article class="project" data-reveal>
  <p class="project-meta">Project 01 / MECH 307 / Spring 2026 / Role: …</p>
  <h2 class="project-title">…</h2>
  <div class="image-placeholder">…</div>  <!-- or <img class="project-image"> -->
  <div class="project-block">
    <span class="project-block-label">Challenge</span>
    <p>…</p>
  </div>
  <div class="project-block">
    <span class="project-block-label">Action</span>
    <p>…</p>
  </div>
  <div class="project-block">
    <span class="project-block-label">Impact</span>
    <p>…</p>
  </div>
</article>
```

Structure for placeholder project:
```
<article class="project" data-reveal>
  <p class="project-meta">Project 02 / [Course Code] / [Semester] / Role: …</p>
  <h2 class="project-title">…</h2>
  <div class="image-placeholder">…</div>
  <p class="project-placeholder-note">Challenge / Action / Impact copy not yet written – placeholder template on the live site.</p>
</article>
```

- Vertical padding: `3rem` top, `4rem` bottom. Top border `2px solid var(--rule-strong)` (removed on first project via `:first-of-type`).
- Meta line: Space Grotesk 700 uppercase `0.78rem`, letter-spacing `0.05em`, `--text-muted` color. `/` separators. Non-breaking spaces required on `Project 01`, `MECH 307`, `Spring 2026`.
- Project title: Space Grotesk 700, size `clamp(2rem, 4.5vw, 3rem)`.
- Block labels (Challenge/Action/Impact): Space Grotesk 700 uppercase `0.78rem`, letter-spacing `0.06em`, color `--accent-green`.
- Block body: max-width `60rem` to keep line lengths readable within the wide container.

### 9.11 Image Placeholder & Project Image

Placeholder (used while images are missing):
- 16:9 aspect ratio, full container width.
- Background: `var(--placeholder-bg)`. Border: `1px dashed #b8b8b8`.
- Centered caption in brackets, Space Grotesk 700 uppercase, color `--accent-green`. Example: `[ Fig 01_A: Assembled drone on constrained attitude test rig ]`.

Real image (`.project-image`):
- `width: 100%, height: auto, aspect-ratio: 16 / 9, object-fit: cover`.
- Border: `1px solid var(--rule)`, border-radius `2px`.
- `loading="lazy"` on all except the first project's hero image, which uses `fetchpriority="high"`.
- Explicit `width` and `height` attributes on every `<img>` to prevent layout shift.

### 9.12 Footer

- Border-top: `1px solid var(--rule)`. Top margin: `4rem`.
- Font: Space Grotesk 700 uppercase `0.78rem`, letter-spacing `0.05em`.
- Inner container: flex, `justify-content: space-between`, wraps on narrow screens.
- Left: `<div class="footer-copy">` — `© 2026 Jay Suthar`.
- Right: `<div class="footer-links">` — Email, GitHub, LinkedIn, Resume_PDF (last one gets `class="accent"`, colored `--accent-orange`).
- Safe-area insets on left, right, and bottom padding.

---

## 10. Interactive States

All interactive elements (`<a>`, `<button>`) implement all four states.

| State | Treatment |
|---|---|
| Default | Base styling per component. |
| Hover | Buttons: bg/text/border color shift. Body/footer links: color shift from muted or accent to `--text`. Nav links (non-active): color goes from `--text-muted` to `--text`. |
| Focus-visible | `outline: 2px solid var(--text)` (or `var(--accent-orange)` on buttons), `outline-offset: 3px`, `border-radius: 2px`. Never remove focus rings without a visible replacement. |
| Active | Links: `opacity: 0.65`. Buttons: `transform: translateY(1px)`. |

---

## 11. Borders, Radii, Shadows

- **Border widths:** 1px thin (dividers), 1.5px medium (pill borders), 2px thick (buttons, section dividers, black rules), 3px extra thick (green section-opening rules), 4px (pullquote left).
- **Border radius:** `2px` on buttons and images. `999px` on pills. Everything else: no radius.
- **Shadows:** none sitewide. Do not introduce box-shadow, drop-shadow, or text-shadow. Rules and borders carry all separation.

---

## 12. Accessibility

- **Semantic HTML first.** `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<blockquote>`, `<button>`, `<h1>`–`<h3>`, `<hr>` used correctly.
- **Heading hierarchy:** h1 on every page. h2 for major sections. h3 for competency titles.
- **Skip-to-content link** as the first focusable element inside `<body>`.
- **All interactive elements keyboard-reachable** with visible `:focus-visible` state.
- **All content images** get descriptive alt text. Decorative elements (`.hero-split-panel`) get `aria-hidden="true"`.
- **`prefers-reduced-motion: reduce`** honored across all animations and transitions.
- **`translate="no"`** on technical brand tokens (ANSYS, MATLAB, ESP32, etc.).
- **Touch targets:** minimum 44×44px effective size on buttons and nav links.
- **`touch-action: manipulation`** on interactive elements (removes 300ms mobile tap delay).
- **Color contrast:** primary text on background exceeds WCAG AA. Accent green on white and white on accent green both pass AA at label sizes.

---

## 13. Anti-Patterns (Do Not Generate)

- Serif fonts (Fraunces, Newsreader, Georgia, or any transitional/old-style serif) — that was the previous direction, retired.
- Warm off-white backgrounds — background is pure `#ffffff`.
- Paper grain overlay or noise textures.
- Dark mode variants.
- Any accent color other than the defined green and orange.
- Purple/blue SaaS gradients, glassmorphism, blob shapes.
- Rounded-corner cards with drop shadows.
- Emoji or icon-heavy nav.
- Inter, Roboto, SF Pro, or generic sans-serif system stack. Use Space Grotesk.
- Sparkles, cursor followers, magnetic buttons, parallax, scroll-jacking.
- Multi-column marketing grids (Features/Testimonials/Pricing).
- `transition: all`.
- Em dashes anywhere in generated copy.

---

## 14. Reference Files

Actual implementation lives in the same repo alongside this file:
- `index.html` — home / split-screen hero
- `about.html` — page title / pill chips / core competencies / pullquote
- `projects.html` — page title / four project case studies
- `styles.css` — canonical source of all design tokens and component styles
- `animations.js` — hero reveal, scroll reveals, nav scroll behavior

**Not yet built:** `parameters.html` (linked from nav as `03 / Parameters`; page content to be designed).

When any spec in this document conflicts with `styles.css`, `styles.css` wins and this file should be updated to match.

---

*Last updated: 2026. Update this file whenever tokens change and re-import into Stitch so generated screens stay on-system.*
