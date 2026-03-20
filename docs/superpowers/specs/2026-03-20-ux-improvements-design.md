# UX Improvements — Design Spec

**Date:** 2026-03-20
**Project:** EcoSevika (Next.js site)
**Scope:** Full UX audit across all pages and shared components

---

## Context

EcoSevika is a 4-page Next.js site for a Rotaract Club initiative that sells handcrafted upcycled products made by women artisans. Products are made to order with no product photography (and none planned in the near term). Orders are placed via WhatsApp enquiry. The site has an editorial botanical aesthetic with a warm earth-tone palette.

A recent redesign established the visual language. This spec addresses UX bugs, accessibility gaps, experience improvements, and a polish pass — organised into 3 sequential batches.

---

## Approach

Changes are grouped into 3 batches that each touch a coherent set of files, minimising context-switching and allowing each batch to ship as a reviewable chunk.

---

## Batch 1: Global / Shared Fixes

### 1.1 Phone Number Constant

**Problem:** The WhatsApp number `919667545342` is hardcoded in 3 separate files (`ProductCard.tsx`, `contact/page.tsx`, `Footer.tsx`).

**Fix:** Create `src/lib/constants.ts` exporting:
- `WHATSAPP_NUMBER` — the raw number string
- `WHATSAPP_URL` — a helper that accepts an optional pre-filled message and returns the full `https://wa.me/...` URL

All three files import from this constant.

### 1.2 Font Size Audit

**Problem:** The CSS `.tagline` class declares `0.75rem` (12px) as the minimum for readability, but many components override inline with `0.52rem`–`0.62rem` (8–10px), violating WCAG SC 1.4.4 and the codebase's own stated minimum.

**Fix:** Remove all inline `fontSize` overrides on `.tagline`-class elements that fall below `0.75rem`. Bump body text minimums to `0.75rem` where they are currently below it. Files affected: `home/page.tsx`, `contact/page.tsx`, `Footer.tsx`, `products/page.tsx`, `story/page.tsx`.

### 1.3 Skip-to-Content Link

**Problem:** No skip link exists, making keyboard-only navigation require tabbing through the entire navbar on every page load.

**Fix:** Add a visually-hidden `<a href="#main-content">Skip to content</a>` as the first focusable element in `layout.tsx`, styled to appear only on `:focus-visible`. Add `id="main-content"` to the `<main>` element in `layout.tsx`.

### 1.4 Fix Nested `<a>` Bug

**Problem:** In `contact/page.tsx`, the WhatsApp contact card is an `<a>` element that contains a child `<a href="tel:+919667545342">`. Nesting interactive elements is invalid HTML; browsers handle it inconsistently.

**Fix:** Convert the inner phone number element from `<a href="tel:...">` to `<p>` or `<span>`. The outer card already links to WhatsApp, making the tel: link redundant.

### 1.5 Mobile Menu Improvements

**Problem:** The mobile menu (in `Navbar.tsx`) has three UX gaps:
- It appears/disappears instantly with no animation (jarring)
- Pressing `Escape` does not close it
- Clicking outside the menu does not close it

**Fix:**
- Replace conditional render `{open && <div>}` with always-rendered but CSS-animated element: use `max-height` + `opacity` transition (e.g. `max-height: 0 → 400px`, `opacity: 0 → 1`) toggled via a class
- Add a `useEffect` that attaches a `keydown` listener for `Escape` to call `setOpen(false)`
- Add a `useRef` on the `<nav>` element and a `useEffect` that listens for `mousedown`/`touchstart` outside the ref to call `setOpen(false)`

---

## Batch 2: Product Page Overhaul

The product page currently feels unfinished because placeholder language ("Photo coming soon") apologises for missing imagery. Since made-to-order with no photos is the intended permanent state, the design should frame it as a feature.

### 2.1 Extract Category Illustrations

**Problem:** The 4 category SVG illustrations (`BagSvg`, `CanvasSvg`, `PouchSvg`, `ApronSvg`) are defined in `home/page.tsx` and unavailable elsewhere.

**Fix:** Extract each into its own file under `src/components/illustrations/` (`BagIllustration.tsx`, `CanvasIllustration.tsx`, `PouchIllustration.tsx`, `ApronIllustration.tsx`). Re-import in `home/page.tsx` to preserve existing behaviour.

### 2.2 ProductCard Visual Area

**Problem:** Each card shows a woven texture grid, a faint ghost product name, and a "Made to order · Photo coming soon" badge. This reads as incomplete rather than intentional.

**Fix:**
- Replace the woven texture + ghost name with the category's illustration SVG (passed as a prop), rendered at `opacity: 0.45` — distinct per category, echoes the homepage aesthetic
- Remove the "Photo coming soon" badge
- Add a small "Made to order" pill (tagline style) anchored bottom-left of the visual area — framed positively

**ProductCard prop additions:**
- `Illustration: React.FC` — the category's SVG illustration component
- `materials?: string` — e.g. "Upcycled denim & cotton", shown as a small line below the description

### 2.3 Products Page Header Copy

**Change:**
From: *"Photos coming soon — each product is made to order. Enquire via WhatsApp and we'll share details, customisation options, and pricing."*
To: *"Every piece is made to your order — no two alike. Message us on WhatsApp and we'll share details, customisation options, and pricing."*

### 2.4 Filter Bar Accessibility & Product Counts

**Problem:** The sticky filter bar is a bare `<div>` with no semantic role. Tab labels show category names only.

**Fix:**
- Wrap the filter bar content in `<nav aria-label="Filter by category">`
- Show product count on each tab button: "Upcycled Bags · 3", "Canvas Bags · 3", etc.
- "All" tab shows total count: "All · 12"

### 2.5 Product Data — Add Materials Field

Add a `materials` string to each product object in `products/page.tsx`. Example values:
- Upcycled bags: "Upcycled mixed fabric"
- Canvas bags: "Natural unbleached canvas"
- Pouches: "Upcycled cotton & lining"
- Aprons: "Upcycled denim & cotton"

---

## Batch 3: Polish Pass

### 3.1 Instagram Link

**Account:** https://www.instagram.com/eco.sevika/

**Additions:**
- **Footer** (`Footer.tsx`): Add an Instagram icon link in the "Get in Touch" column, between the WhatsApp entry and the email entry. Use an inline SVG Instagram icon consistent with the existing icon style.
- **Navbar desktop** (`Navbar.tsx`): Add a small Instagram icon link to the right of the nav links, before the "Shop Now" button. Icon only (no label), with `aria-label="EcoSevika on Instagram"`.
- **Navbar mobile menu** (`Navbar.tsx`): Add Instagram as a labelled link row in the mobile menu list.

### 3.2 Scroll Hint Opacity

**Problem:** The hero scroll hint (`opacity: 0.35`) is barely visible.

**Fix:** Increase to `opacity: 0.55`.

### 3.3 Product Card Touch Interaction

**Problem:** `.product-card:hover` lifts the card 5px with a shadow, but this has no equivalent for touch devices.

**Fix:** Add `.product-card:active` with the same shadow/transform styles, ensuring the interaction is perceptible on tap.

### 3.4 Social Metadata

Add Instagram to the site's OpenGraph metadata in `layout.tsx` via the `other` field:
```
other: { 'instagram:site': '@eco.sevika' }
```

---

## Files Changed

| Batch | Files |
|---|---|
| 1 | `src/lib/constants.ts` (new), `src/app/layout.tsx`, `src/app/globals.css`, `src/components/Navbar.tsx`, `src/app/contact/page.tsx`, `src/app/page.tsx`, `src/app/story/page.tsx`, `src/components/Footer.tsx`, `src/app/products/page.tsx` |
| 2 | `src/components/illustrations/BagIllustration.tsx` (new), `src/components/illustrations/CanvasIllustration.tsx` (new), `src/components/illustrations/PouchIllustration.tsx` (new), `src/components/illustrations/ApronIllustration.tsx` (new), `src/components/ProductCard.tsx`, `src/app/products/page.tsx`, `src/app/page.tsx` |
| 3 | `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/app/globals.css`, `src/app/page.tsx`, `src/app/layout.tsx` |

---

## Out of Scope

- Product photography or image upload infrastructure
- E-commerce / cart / checkout functionality
- Pricing display (no public pricing model exists)
- Any new pages
