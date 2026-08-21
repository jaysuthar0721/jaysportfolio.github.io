# Design System — Jay Suthar Portfolio (Swiss Redesign, Figma-matched)

> A design.md spec for Google Stitch and other AI coding agents. Documents the complete design system for jaysuthar0721.github.io. All tokens matched to the source Figma file (`iazrockJyqgpRQYL6b1Ebs`).

---

## 1. Project Context

**Product:** Personal engineering portfolio for a Mechanical Engineering junior at Colorado State University, targeting aerospace and propulsion internships.

**Type:** Static multi-page website (HTML + CSS + vanilla JS), deployed via GitHub Pages. No framework, no build step.

**Primary audience:** Aerospace engineering recruiters, hiring managers, and technical leads who spend 30–90 seconds skimming portfolio pages during candidate review.

**Primary goals:**
1. Read as confident and modern without being trend-chasing.
2. Make selected project case studies easy to scan (Challenge / Action / Impact structure).
3. Feel visibly hand-crafted rather than template-generated.

---

## 2. Aesthetic Direction

**One-line summary:** Swiss industrial modernism, with a display-face twist.

**Reference feel:**
- International Typographic Style, updated with a distinctive rounded-geometric display face
- Modern technical brands: Linear, Vercel, Anduril
- Aerospace and industrial identity systems

**Visual keywords:** bold, systemic, high-contrast, ruled, disciplined, aerospace-adjacent, technical.

**What this site is NOT:**
- Not editorial-serif (previous direction — retired).
- Not a marketing landing page.
- Not a dashboard.
- Not a creative-agency portfolio.

---

## 3. Design Principles

1. **Type is the primary design element.** Unbounded (display) provides identity through its rounded-geometric character. Geist (body) does the reading work.
2. **Two accents, used surgically.** Green marks meaning. Orange marks state.
3. **Rules do structural work.** 2px black rules divide sections. 4px green rules open subsections. 1px gray rules separate related items. Nav and footer have permanent 2px black borders.
4. **Restraint reads as competence.** No decorative shadow, no gradient, no illustration.
5. **Wide editorial layout.** 1280px container. Text can go full-width for prose, or constrain to 50rem/800px for case-study paragraphs.

---

## 4. Color System

Light theme only. No dark mode.

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#ffffff` | Page background. Pure white. |
| `--text` | `#000000` | Primary text. Pure black. |
| `--text-muted` | `#999999` | Section labels, project meta, muted nav state. |
| `--accent-green` | `#1E4D2B` | Meaning accent. Pills (filled), pill borders, competency titles, project block labels (Challenge/Action/Impact), section accent bars, pullquote border, project 01 image placeholder caption + border, page subtitles, hero subtitle. |
| `--accent-green-hover` | `#266138` | Green hover state. |
| `--accent-orange` | `#FF6600` | State accent. Active nav item (current page). Also the Resume_PDF link in footer. Nothing else. |
| `--accent-orange-hover` | `#ff8033` | Orange hover state. |
| `--pill-outline-bg` | `#E5ECFF` | Pale blue fill on outlined pill variants (institution, class). |
| `--rule` | `#EFEFEF` | Thin dividers (between competencies). |
| `--rule-strong` | `#000000` | Thick 2px rules (nav border, footer border, section-tops on About, project-tops on Projects except project 01). |
| `--placeholder-bg` | `#EFEFEF` | Image placeholder fill. |
| `--placeholder-border` | `#999999` | Dashed border on placeholder image slots (projects 02–04). |

**No dark mode.** `color-scheme: light` declared on `:root`.

---

## 5. Typography

### 5.1 Font Families

Two Google Fonts, distinct roles:

| Role | Family | Weights loaded | Fallback |
|---|---|---|---|
| Display (page titles, hero name, section headings, project titles, competency titles) | **Unbounded** | 700, 800 | `"Helvetica Neue", Arial, sans-serif` |
| Body / UI (paragraphs, pullquote, nav, footer, labels, meta, pills, buttons, subtitles) | **Geist** | 500, 600, 700 | `"Helvetica Neue", Arial, sans-serif` |

Load both from Google Fonts in a single `<link>`:
```
https://fonts.googleapis.com/css2?family=Geist:wght@500;600;700&family=Unbounded:wght@700;800&display=swap
```

**Do not substitute.** Unbounded's rounded-geometric character carries the identity. Geist's neutral modern proportions do the reading work. Substituting with Inter, Space Grotesk, Söhne, or system-ui breaks both.

### 5.2 Type Scale (matched to Figma)

All display type is title-case or uppercase (uppercase applied via CSS `text-transform`, not in the source HTML).

| Element | Family | Weight | Size (px) | Size (rem) | Line-height | Letter-spacing | Notes |
|---|---|---|---|---|---|---|---|
| Hero name (home) | Unbounded | 800 | 56 | clamp(3rem, 6vw, 3.5rem) | 1.0 | -0.035em | Uppercase. `text-wrap: balance`. |
| Page title (About, Projects) | Unbounded | 800 | 56 | clamp(2.5rem, 6vw, 3.5rem) | 1.0 | -0.035em | Title case. `text-wrap: balance`. |
| Section heading (h2) | Unbounded | 700 | 32 | clamp(1.75rem, 3.2vw, 2rem) | 1.2 | -0.01em | Sentence case with terminal period. `text-wrap: balance`. |
| Project title | Unbounded | 700 | 32 | clamp(1.75rem, 3vw, 2rem) | 1.25 | -0.01em | Title case. `text-wrap: balance`. |
| Competency title (h3) | Unbounded | 700 | 20 | 1.25rem | 1.25 | 0 | Title case. Color `--accent-green`. |
| Pullquote | Geist | 600 | 24 | clamp(1.25rem, 2.4vw, 1.5rem) | 1.5 | 0 | Semibold. Content wrapped in curly typographic quotes. NOT display font. |
| About body paragraph | Geist | 500 | 18 | 1.125rem | 1.6 | 0 | Larger than competency body for the executive-summary weight. |
| Competency body / hero intro / project block body | Geist | 500 | 16 | 1rem | 1.6 | 0 | Standard body reading size. |
| Placeholder note (projects 02–04) | Geist | 500 | 15 | 0.9375rem | 1.6 | 0 | Slightly smaller. |
| Page subtitle (About), hero subtitle (home) | Geist | 700 | 14 | 0.875rem | 1.286 | 0 | Uppercase. Color `--accent-green`. |
| Micro labels (nav, section number, project meta, pill, block label, image caption, footer) | Geist | 500 or 700 | 12 | 0.75rem | 1.333 | 0 | Uppercase. |
| Nav brand | Unbounded | 800 | 16 | 1rem | 1.25 | 0 | Uppercase. |

### 5.3 Micro-typography

- **Curly quotes required.** `'` and `"`, not `'` and `"`.
- **Ellipsis:** `…` (U+2026), not `...`.
- **Em dash:** `—` is BANNED sitewide. Use commas, colons, parentheses, or en dashes instead.
- **En dash:** `–` (U+2013) acceptable for numeric ranges and light separators (e.g., placeholder note "not yet written – placeholder template").
- **Non-breaking spaces (`&nbsp;`):** required on glued terms — course codes (`MECH&nbsp;307`), semester tags (`Spring&nbsp;2026`), project numbers (`Project&nbsp;01`), unit values (`44&nbsp;Hz`), phrases like `Class&nbsp;of&nbsp;2027`, `Colorado&nbsp;State&nbsp;University`.
- **`text-wrap: balance`** on every heading.
- **`text-wrap: pretty`** on body paragraphs, pullquotes, competency bodies.
- **Uppercase transformation** for labels: applied via CSS `text-transform: uppercase`, never typed in caps in the HTML.

### 5.4 Voice & Copy Conventions

- **First person** in bio/about content.
- **Active voice** always.
- **Technical specificity over adjectives.** Prefer "44 Hz low-pass" over "aggressive filter."
- **No AI-slop vocabulary.** Never use: "delve," "tapestry," "navigate the landscape," "in the ever-evolving world of," "unleash," "harness," "elevate," "embrace," "foster," "at the intersection of," "not just X but Y" (as filler), "it's important to note that."
- **Brand-code tokens** (ANSYS, MATLAB, Simulink, PID, ESP32, ESP-NOW, MPU-6050, DSHOT, PWM, IMU, ESC, Vbat, SolidWorks) wrap in `<span translate="no">…</span>`.

---

## 6. Spacing

Figma-derived scale, rem values in 8px grid.

| Token | Value | Common use |
|---|---|---|
| xs | 0.5rem (8px) | Tight inline gaps. |
| sm | 0.75rem (12px) | Pill row gap, small internal padding. |
| md | 1rem (16px) | Default gap between related items. |
| lg | 1.5rem (24px) | Standard section-internal gap; hero CTA gap; project card internal gap. |
| xl | 2rem (32px) | Nav vertical padding, section top padding after border, section-to-heading gap, project card top padding. |
| 2xl | 4rem (64px) | Section-to-section gap (About), title-block bottom margin. |
| 3xl | 5rem (80px) | `--content-padding` on desktop (main + nav + footer sides). |

Content-edge padding: `--content-padding: 5rem` desktop (80px), `3rem` (48px) at ≤900px, `1.5rem` (24px) at ≤600px.

---

## 7. Layout & Grid

- **Container max-width:** `--content-width: 1280px`. Content fills this max minus padding on wide viewports; centered via `margin: 0 auto`.
- **Total effective viewport width:** 1440px on wide screens (1280 content + 80 × 2 padding).
- **Nav and footer:** full-width bars, inner content constrained to 1280px + auto margins for centering.
- **Body paragraphs on About:** fill full container width (matches Figma's wide magazine layout).
- **Project narrative blocks on Projects:** constrained to `max-width: 50rem` (800px) for comfortable reading, matching Figma's spec that project 01's Challenge/Action/Impact copy sits at 800px width even while its image spans the full 1280px container.
- **Home page:** does not use standard main padding. Uses a CSS grid `hero-split` with `grid-template-columns: 1fr 2fr` (480px green panel + 960px content on 1440px viewport). Grid collapses to single column at ≤900px; green panel hidden entirely via `display: none`.
- **Breakpoints:** 900px (tablet, hero collapses), 600px (mobile).
- **Safe-area insets:** `env(safe-area-inset-*)` applied to nav top padding, footer bottom padding, and horizontal padding on nav/footer.

---

## 8. Motion

Motion is progressive-enhancement only. Site works with JS disabled or `prefers-reduced-motion: reduce` set.

### 8.1 Easings

| Token | Value | Use |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal transforms (slide). |
| `--ease-out-swift` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Fade, opacity. |

### 8.2 Durations

| Interaction | Duration | Easing |
|---|---|---|
| Button hover (background/color) | 180ms | linear |
| Nav-link color hover | 200ms | linear |
| Hero name word slide-up | 1000ms | `--ease-out-expo` |
| Hero secondary content fade-up | 900ms | `--ease-out-swift` + `--ease-out-expo` |
| Scroll-reveal (section entrance) | 1000ms | `--ease-out-swift` + `--ease-out-expo` |

### 8.3 Entrance Reveals

**Hero (home page, on load):**
- Each word of "JAY SUTHAR" slides from `translateY(105%)` inside `overflow: hidden` wrappers. Stagger: 50ms, 180ms.
- Hero subtitle, intro paragraph, and CTA buttons fade-up at 450ms, 600ms, 750ms delays.

**Scroll-triggered (About, Projects pages):**
- Elements with `[data-reveal]` transition from `opacity: 0`, `translateY(24px)` to natural state on viewport entry.
- Intersection Observer: `threshold: 0.15`, `rootMargin: '0px 0px -60px 0px'`.
- Fires once per element.

### 8.4 Rules

- Only `transform` and `opacity` animate on entrance; `background-color`, `color`, `border-color` animate on state changes.
- No `transition: all`.
- `prefers-reduced-motion: reduce` overrides all animations/transitions to `0.01ms`.

---

## 9. Components

### 9.1 Skip-to-Content Link

Visually hidden until keyboard focus, then appears top-left.
- Position: absolute, off-screen (`left: -9999px`).
- On focus: `top: 1rem, left: 1rem`.
- Background: `var(--text)`. Text: `var(--bg)`. Geist 700 uppercase 0.75rem.
- Target: `<main id="main">`.

### 9.2 Sticky Navigation

- Position: `sticky, top: 0, z-index: 100`, background `var(--bg)`.
- **Border-bottom: `2px solid #000000` — always visible.** (Not scroll-triggered.)
- Inner container: `flex, justify-content: space-between, max-width: var(--content-width)`.
- Padding: `2rem 5rem` (desktop), with safe-area insets on top/left/right.
- **Left:** brand link "Jay Suthar" — Unbounded 800 uppercase 1rem.
- **Right:** two nav links only. Format: `01 / About`, `02 / Projects`. Geist uppercase 0.75rem. Default weight 500 color `--text-muted`. Hover color `--text`. **Active state (current page): weight 700, color `--accent-orange`.**
- Gap between nav links: `2.5rem` desktop, `1.75rem` tablet, `1.25rem` mobile.

### 9.3 Buttons

Two variants, both with `padding: 0.875rem 1.5rem` (14px 24px), 1px border, `border-radius: 4px`, Geist 700 uppercase 0.75rem text, arrow `→` at end of label.

**`.btn.btn-primary` (solid black):**
- Background `var(--text)`, text `var(--bg)`, border `1px var(--text)`.
- Hover: background and border become `var(--accent-green)`.

**`.btn.btn-secondary` (outlined):**
- Background transparent, text `var(--text)`, border `1px var(--text)`.
- Hover: background `var(--text)`, text `var(--bg)`.

`:focus-visible`: `outline: 2px solid var(--accent-orange), outline-offset: 3px`.
`:active`: `transform: translateY(1px)`.

### 9.4 Split-Screen Hero (home only)

Structure:
```
<section class="hero-split" data-hero>
  <div class="hero-split-panel" aria-hidden="true"></div>
  <div class="hero-split-content">
    <div>
      <h1 class="hero-name">
        <span class="word-wrap"><span class="word">Jay</span></span>
        <span class="word-wrap"><span class="word">Suthar</span></span>
      </h1>
      <p class="hero-subtitle">[ Colorado State University / Class of 2027 ]</p>
    </div>
    <p class="hero-intro">…lede…</p>
    <div class="hero-ctas"><a class="btn btn-primary">…</a><a class="btn btn-secondary">…</a></div>
  </div>
</section>
```

- Grid: `grid-template-columns: 1fr 2fr` (1:2 ratio, matches Figma's 480px + 960px split).
- Min-height: `calc(100vh - 12rem)` to fill available viewport.
- Panel: solid `var(--accent-green)` background, no content, `aria-hidden="true"`.
- Content: `padding: 5rem`, `justify-content: space-between` so CTAs anchor to bottom of the viewport-height area.
- Below 900px: panel hidden via `display: none`, content becomes full-width with reduced padding.

### 9.5 Title Block

Wrapper for page title + subtitle:
```
<div class="title-block" data-reveal>
  <h1 class="page-title">About</h1>
  <p class="page-subtitle">[ … ]</p>  <!-- About only -->
  <hr class="accent-bar">              <!-- Projects only, 4px green -->
</div>
```

- Gap between title and subtitle: `1rem` (16px).
- Bottom margin: `4rem` (64px) before the first section/project.
- **About:** page title + subtitle. No trailing rule (the first section's top border acts as the divider).
- **Projects:** page title + `<hr class="accent-bar">` (4px green full-width rule directly under the title).

### 9.6 About Section (three sections repeated)

Structure:
```
<section class="section" data-reveal>
  <span class="section-number">01 / Executive Summary</span>
  [optional: <hr class="section-accent-bar">]  <!-- Section 02 only, 4px green -->
  [content varies per section]
</section>
```

- **Border-top:** `2px solid var(--rule-strong)` on every section (this is the section divider — no separate `<hr>` elements between sections).
- Padding-top: `2rem` (32px) below the border.
- Margin-bottom: `4rem` (64px) between sections.
- Internal `flex-direction: column, gap: 2rem`.
- **Section 01 (Executive Summary):** section-number, pills-row, section-heading, section-paragraphs (three paragraphs with `gap: 1.25rem`, each Geist 500 18px).
- **Section 02 (Core Competencies):** section-number, section-accent-bar (4px green), section-heading, competency-list.
- **Section 03 (Philosophy):** section-number, pullquote.

### 9.7 Pill Chips (About)

- Container: `<div class="pills-row">`, `flex-wrap: wrap, gap: 0.75rem`.
- Each pill: `<span class="pill filled">` or `<span class="pill outlined">`.
- Shape: `border-radius: 999px`.
- Padding: `0.375rem 0.625rem` (6px 10px per Figma).
- Type: Geist 700 uppercase 0.75rem.
- Border: `1px solid var(--accent-green)`.
- **Filled variant:** background `--accent-green`, text `--bg`.
- **Outlined variant:** background `--pill-outline-bg` (pale blue `#E5ECFF`), text `--accent-green`.
- Convention: first pill in a row is filled; subsequent are outlined.
- Format: `Label: value` (e.g., `Role: Mechanical Engineering Senior`).
- `white-space: nowrap` so pills don't wrap mid-word.

### 9.8 Competency Block (About)

- List container: `<div class="competency-list">`, `flex-direction: column, gap: 1.5rem`.
- Each block: `<div class="competency">`, `padding-top: 1rem, border-top: 1px solid var(--rule), gap: 0.75rem`.
- Title (h3): Unbounded 700 20px (`1.25rem`), color `--accent-green`.
- Body: Geist 500 16px, `text-wrap: pretty`.
- No last-child bottom border.

### 9.9 Pullquote

- Element: `<blockquote class="pullquote">`.
- Font: Geist 600 (semibold), 24px, line-height 1.5.
- Padding: `0 0 0 2rem` (32px left only).
- Left border: `4px solid var(--accent-green)`.
- Content wrapped in curly typographic quotes `"..."`.
- NOT italic. NOT display font. Semibold body weight.

### 9.10 Project Card (Projects page)

Structure — fully-written project:
```
<article class="project" data-reveal>
  <p class="project-meta">Project 01 / MECH 307 / Spring 2026 / Role: …</p>
  <h2 class="project-title">…</h2>
  <div class="image-placeholder image-placeholder--hero">…</div>
  <div class="project-block">
    <span class="project-block-label">Challenge</span>
    <p>…</p>
  </div>
  <!-- Action, Impact blocks follow -->
</article>
```

Structure — placeholder project:
```
<article class="project" data-reveal>
  <p class="project-meta">Project 02 / [Course Code] / [Semester] / Role: …</p>
  <h2 class="project-title">…</h2>
  <div class="image-placeholder">…</div>  <!-- no --hero modifier -->
  <p class="project-placeholder-note">Challenge / Action / Impact copy not yet written – placeholder template on the live site.</p>
</article>
```

- Vertical padding: `2rem` top, `2rem` bottom.
- Top border: `2px solid var(--rule-strong)` (removed on first project via `:first-of-type`).
- Internal `flex-direction: column, gap: 1.5rem`.
- Meta line: Geist 700 uppercase 0.75rem, color `--text-muted`. `/` separators. Non-breaking spaces on `Project 01`, `MECH 307`, `Spring 2026`.
- Project title: Unbounded 700 32px.
- Block labels (Challenge/Action/Impact): Geist 700 uppercase 0.75rem, color `--accent-green`.
- Block body: `max-width: 50rem` (800px per Figma). Geist 500 16px.

### 9.11 Image Placeholder (two variants) & Real Image

**Default (`.image-placeholder`)** — used for placeholder projects 02–04:
- Full container width, min-height 180px.
- Background `--placeholder-bg` (`#EFEFEF`).
- Border: `1px dashed var(--placeholder-border)` (`#999999`).
- Border-radius: `4px`.
- Caption centered, Geist 700 uppercase 0.75rem, color `--text` (black).

**Hero variant (`.image-placeholder--hero`)** — used for project 01:
- Same base, but:
- Min-height `280px` (taller).
- Border: `1px solid var(--rule-strong)` (`#000000`, solid not dashed).
- Caption color: `--accent-green`.

**Real image (`.project-image`)** replaces the placeholder when a real photo is available:
- `width: 100%, height: auto, object-fit: cover`.
- Border: `1px solid var(--rule-strong)`, border-radius `4px`.
- `loading="lazy"` on all except the first project's hero image (`fetchpriority="high"`).
- Explicit `width` and `height` attributes to prevent layout shift.

### 9.12 Footer

- Border-top: `2px solid var(--rule-strong)` — always visible.
- Padding: `2rem 5rem` (desktop) with safe-area insets on left, right, bottom.
- Font: Geist 700 uppercase 0.75rem.
- Inner container: flex, `justify-content: space-between`, wraps at ≤600px (stacks vertically).
- Left: `<div class="footer-copy">` — `© 2026 Jay Suthar`.
- Right: `<div class="footer-links">` — Email, GitHub, LinkedIn, Resume_PDF (last one `class="accent"`, color `--accent-orange`).
- Gap between links: `2rem`.

---

## 10. Interactive States

| State | Treatment |
|---|---|
| Default | Base styling per component. |
| Hover | Buttons: bg/text/border color shift. Body/footer links: color shift to accent or text. Nav links (non-active): color shift from `--text-muted` to `--text`. |
| Focus-visible | `outline: 2px solid var(--text)` (or `var(--accent-orange)` on buttons), `outline-offset: 3px`, `border-radius: 2px`. |
| Active | Links: `opacity: 0.65`. Buttons: `transform: translateY(1px)`. |

---

## 11. Borders, Radii, Shadows

- **Border widths:** 1px thin (dividers, pill borders, button borders, image placeholder borders), 2px thick (nav border, footer border, section-top dividers, project-top dividers), 4px extra thick (accent bars, pullquote left).
- **Border radius:** `4px` on buttons, image placeholders, and project images. `999px` on pills. Everything else: no radius.
- **Shadows:** none sitewide.

---

## 12. Accessibility

- **Semantic HTML first.** `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<blockquote>`, `<button>`, `<h1>`–`<h3>`, `<hr>`.
- **Heading hierarchy:** h1 on every page. h2 for major sections and project titles. h3 for competency titles.
- **Skip-to-content link** as the first focusable element inside `<body>`.
- **All interactive elements keyboard-reachable** with visible `:focus-visible` state.
- **All content images** get descriptive alt text. Decorative elements (`.hero-split-panel`) get `aria-hidden="true"`.
- **`prefers-reduced-motion: reduce`** honored across all animations and transitions.
- **`translate="no"`** on technical brand tokens.
- **Touch targets:** minimum effective 44×44px on buttons and nav links.
- **`touch-action: manipulation`** on interactive elements.
- **Color contrast:** black on white and white on accent green both pass WCAG AA at all sizes. Muted text on white passes AA at 12px+ label sizes.

---

## 13. Anti-Patterns (Do Not Generate)

- Serif fonts (Fraunces, Newsreader, Georgia) — retired.
- Space Grotesk, Inter, Roboto, SF Pro — use Unbounded + Geist only.
- Warm off-white backgrounds — background is pure `#ffffff`.
- Paper grain / noise textures.
- Dark mode variants.
- Accent colors other than the defined green (`#1E4D2B`) and orange (`#FF6600`).
- Purple/blue SaaS gradients, glassmorphism, blob shapes.
- Rounded-corner cards with drop shadows.
- Emoji or icon-heavy nav.
- Sparkles, cursor followers, magnetic buttons, parallax, scroll-jacking.
- Multi-column marketing grids.
- `transition: all`.
- Em dashes anywhere in generated copy.
- A third nav item beyond `01 / About` and `02 / Projects`.

---

## 14. Reference Files

- `index.html` — home / split-screen hero
- `about.html` — title-block, three sections (executive summary, core competencies, philosophy)
- `projects.html` — title-block with green accent bar, four project case studies
- `styles.css` — canonical source of all design tokens and component styles
- `animations.js` — hero reveal, scroll reveals, reduced-motion handling

When any spec in this document conflicts with `styles.css`, `styles.css` wins and this file should be updated to match.

---

*Last updated: 2026. Update this file whenever tokens change and re-import into Stitch so generated screens stay on-system.*
