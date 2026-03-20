# UX Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix UX bugs, accessibility gaps, and improve the product page placeholder experience across the EcoSevika Next.js site.

**Architecture:** Changes are grouped into 3 sequential batches: (1) global shared fixes — constants, font sizes, skip link, nested anchor bug, mobile menu; (2) product page overhaul — extract illustrations, redesign ProductCard without photos, improve filter bar; (3) polish pass — Instagram links, scroll hint, touch interaction, metadata.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, Bun

> ⚠️ **Before writing any Next.js code:** Check `node_modules/next/dist/docs/` for current API conventions — the installed version may differ from training data.

---

## File Map

**New files:**
- `src/lib/constants.ts` — WhatsApp number constant and URL helper
- `src/lib/constants.test.ts` — Bun unit tests for the URL helper
- `src/components/illustrations/BagIllustration.tsx` — extracted SVG, accepts `className`/`style` props
- `src/components/illustrations/CanvasIllustration.tsx` — same
- `src/components/illustrations/PouchIllustration.tsx` — same
- `src/components/illustrations/ApronIllustration.tsx` — same

**Modified files:**
- `src/app/globals.css` — skip-link style, product-card `:active` state
- `src/app/layout.tsx` — skip link element, `id="main-content"` on `<main>`, Instagram metadata
- `src/components/Navbar.tsx` — mobile menu animation + Escape + click-outside + Instagram link
- `src/app/contact/page.tsx` — fix nested `<a>`, use constants
- `src/app/page.tsx` — font size fixes, scroll hint opacity, import illustrations from new paths
- `src/app/story/page.tsx` — font size fixes
- `src/components/Footer.tsx` — font size fixes, use constants, Instagram link
- `src/components/ProductCard.tsx` — Illustration prop, materials prop, "Made to order" pill, use constants
- `src/app/products/page.tsx` — header copy, filter bar as `<nav>`, product counts, materials data, pass Illustration + materials to ProductCard

---

## Task 1: Create constants file

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/lib/constants.test.ts`

- [ ] **Step 1: Create the constants file**

```typescript
// src/lib/constants.ts

export const WHATSAPP_NUMBER = "919667545342";

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 2: Write the test file**

```typescript
// src/lib/constants.test.ts
import { describe, it, expect } from "bun:test";
import { WHATSAPP_NUMBER, whatsappUrl } from "./constants";

describe("WHATSAPP_NUMBER", () => {
  it("is the correct number", () => {
    expect(WHATSAPP_NUMBER).toBe("919667545342");
  });
});

describe("whatsappUrl", () => {
  it("returns base URL when no message given", () => {
    expect(whatsappUrl()).toBe("https://wa.me/919667545342");
  });

  it("encodes a simple message", () => {
    expect(whatsappUrl("Hello world")).toBe(
      "https://wa.me/919667545342?text=Hello%20world"
    );
  });

  it("encodes special characters", () => {
    const result = whatsappUrl("Hi, I'm interested!");
    expect(result).toContain("?text=");
    expect(result).not.toContain(" ");
    expect(result).not.toContain(",");
  });
});
```

- [ ] **Step 3: Run the tests**

```bash
bun test src/lib/constants.test.ts
```

Expected: all 4 tests pass.

- [ ] **Step 4: Update ProductCard.tsx to use the constant**

In `src/components/ProductCard.tsx`, replace the hardcoded URL construction:

Remove:
```typescript
const whatsappMsg = encodeURIComponent(
  `Hi, I'm interested in the EcoSevika ${name}. Can you share more details?`
);
const whatsappUrl = `https://wa.me/919667545342?text=${whatsappMsg}`;
```

Add at the top of the file:
```typescript
import { whatsappUrl } from "@/lib/constants";
```

Replace the two removed lines with:
```typescript
const url = whatsappUrl(`Hi, I'm interested in the EcoSevika ${name}. Can you share more details?`);
```

Update the anchor tag:
```tsx
<a href={url} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
```

- [ ] **Step 5: Update contact/page.tsx to use the constant**

Add import at top of `src/app/contact/page.tsx`:
```typescript
import { whatsappUrl } from "@/lib/constants";
```

Replace the hardcoded WhatsApp href on the outer card `<a>`:
```tsx
// Before:
href="https://wa.me/919667545342?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20EcoSevika%20products."

// After:
href={whatsappUrl("Hi, I'd like to enquire about EcoSevika products.")}
```

- [ ] **Step 6: Update Footer.tsx to use the constant**

Add import at top of `src/components/Footer.tsx`:
```typescript
import { whatsappUrl } from "@/lib/constants";
```

Replace hardcoded href:
```tsx
// Before:
href="https://wa.me/919667545342"

// After:
href={whatsappUrl()}
```

Also replace the display text in the footer link to keep the number readable (it's fine as a literal string in display text — only the href needs the constant).

- [ ] **Step 7: Commit**

```bash
git add src/lib/constants.ts src/lib/constants.test.ts src/components/ProductCard.tsx src/app/contact/page.tsx src/components/Footer.tsx
git commit -m "refactor: extract WhatsApp number to constants"
```

---

## Task 2: Font size audit

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/story/page.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/contact/page.tsx`

The rule: all inline `fontSize` overrides below `0.75rem` must be removed (for tagline elements, let the class handle it) or bumped to `0.75rem` (for body text elements).

- [ ] **Step 1: Fix src/app/page.tsx**

Find and fix these specific instances:

```tsx
// 1. Scroll hint label — remove the fontSize override entirely
// Before:
<span className="tagline" style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}>Scroll</span>
// After:
<span className="tagline" style={{ letterSpacing: "0.25em" }}>Scroll</span>

// 2. Mission pillar body text — bump from 0.72rem
// Before:
fontSize: "0.72rem",
// After:
fontSize: "0.75rem",
// (there are 2 pillar body text instances — fix both)

// 3. "View all products →" link — bump from 0.62rem
// Before (on the Link with className="nav-link"):
style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
// After:
style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}

// 4. cat-card-browse "Browse collection →" — bump from 0.55rem
// Before:
<span className="cat-card-browse tagline" style={{ color: "var(--moss-green)", fontSize: "0.55rem" }}>
// After:
<span className="cat-card-browse tagline" style={{ color: "var(--moss-green)" }}>
```

- [ ] **Step 2: Fix src/app/story/page.tsx**

```tsx
// Milestone label tagline — remove fontSize override (0.58rem)
// Before:
<p className="tagline mb-3" style={{ color: "var(--moss-green)", fontSize: "0.58rem" }}>
// After:
<p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
```

- [ ] **Step 3: Fix src/components/Footer.tsx**

```tsx
// 1. Tagline "Threads of Change" under brand — remove 0.52rem override
// Before:
<p className="tagline mb-5" style={{ color: "var(--moss-green)", fontSize: "0.52rem" }}>
// After:
<p className="tagline mb-5" style={{ color: "var(--moss-green)" }}>

// 2. Brand description body text — bump 0.68rem
// Before:
fontSize: "0.68rem",
// After:
fontSize: "0.75rem",

// 3. "Explore" column label — remove 0.52rem override
// Before:
<p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5, fontSize: "0.52rem" }}>
// After:
<p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5 }}>

// 4. "Get in Touch" column label — remove 0.52rem override
// Before:
<p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5, fontSize: "0.52rem" }}>
// After:
<p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5 }}>

// 5. "Delhi NCR, India" text — bump 0.62rem
// Before:
fontSize: "0.62rem",
// After:
fontSize: "0.75rem",

// 6. Bottom bar copyright — bump 0.6rem (both instances)
// Before:
fontSize: "0.6rem",
// After:
fontSize: "0.75rem",
```

- [ ] **Step 4: Fix src/app/contact/page.tsx**

```tsx
// 1. WhatsApp card "Fastest response" tagline — remove 0.56rem override
// Before:
<p className="tagline mb-2" style={{ color: "var(--moss-green)", fontSize: "0.56rem" }}>
// After:
<p className="tagline mb-2" style={{ color: "var(--moss-green)" }}>

// 2. Email card "For detailed queries" tagline — remove 0.56rem override
// Before:
<p className="tagline mb-2" style={{ color: "var(--moss-green)", fontSize: "0.56rem" }}>
// After:
<p className="tagline mb-2" style={{ color: "var(--moss-green)" }}>
```

- [ ] **Step 5: Verify visually**

```bash
bun dev
```

Open http://localhost:3000. Visit every page. Confirm no text appears illegibly small. The taglines should still look refined — they use `letter-spacing: 0.25em` and `text-transform: uppercase` which keeps them feeling small even at 12px.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/app/story/page.tsx src/components/Footer.tsx src/app/contact/page.tsx
git commit -m "fix: bump all font sizes to 12px minimum for accessibility"
```

---

## Task 3: Skip-to-content link

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add skip-link style to globals.css**

Add at the end of `src/app/globals.css`:

```css
/* ── Skip-to-content link ───────────────────────────── */
.skip-link {
  position: fixed;
  top: 1rem;
  left: 1rem;
  transform: translateY(-200%);
  background-color: var(--kombu-green);
  color: var(--bone);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  z-index: 99999;
  transition: transform 0.2s ease;
}
.skip-link:focus-visible {
  transform: translateY(0);
}
```

- [ ] **Step 2: Add skip link and main id to layout.tsx**

In `src/app/layout.tsx`, update the `<body>`:

```tsx
<body>
  <a href="#main-content" className="skip-link">
    Skip to content
  </a>
  <Navbar />
  <main id="main-content">{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify with keyboard**

```bash
bun dev
```

Open http://localhost:3000. Press Tab immediately after page load. A "SKIP TO CONTENT" button should appear top-left. Press Enter — focus should jump past the navbar to the main content.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: add skip-to-content link for keyboard accessibility"
```

---

## Task 4: Fix nested anchor bug in Contact page

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Convert the nested tel: link to a paragraph**

The WhatsApp card (`<a href={whatsappUrl(...)}>`) contains a child `<a href="tel:...">`. Replace the inner anchor:

```tsx
// Before — inside the WhatsApp card:
<div className="flex flex-wrap items-center gap-3 mb-3">
  <a
    href="tel:+919667545342"
    style={{
      fontFamily: "Montserrat, sans-serif",
      fontSize: "0.8rem",
      color: "var(--cafe-noir)",
      letterSpacing: "0.04em",
      textDecoration: "none",
    }}
  >
    +91 96675 45342
  </a>
</div>

// After — plain paragraph, outer card already links to WhatsApp:
<p
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.8rem",
    color: "var(--cafe-noir)",
    letterSpacing: "0.04em",
    marginBottom: "0.75rem",
  }}
>
  +91 96675 45342
</p>
```

- [ ] **Step 2: Verify**

```bash
bun dev
```

Open http://localhost:3000/contact. Inspect the WhatsApp card — there should be no `<a>` inside the card `<a>`. Clicking the card should still open WhatsApp.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "fix: remove nested anchor in contact page WhatsApp card"
```

---

## Task 5: Mobile menu improvements

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add mobile menu CSS to globals.css**

Add after the existing nav-link styles in `src/app/globals.css`:

```css
/* ── Mobile menu animation ──────────────────────────── */
.mobile-menu {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.25s ease;
}
.mobile-menu--open {
  max-height: 500px;
  opacity: 1;
}
```

- [ ] **Step 2: Update Navbar.tsx**

Replace the full content of `src/components/Navbar.tsx` with:

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Scroll-lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/story", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid rgba(207,187,153,0.4)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="EcoSevika — Threads of Change"
            width={160}
            height={52}
            className="object-contain"
            style={{ height: "52px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " nav-link--active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="btn-primary"
            style={{ fontSize: "0.65rem", padding: "0.7rem 1.8rem" }}
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              transform: open ? "rotate(45deg) translate(3px, 4px)" : "",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              transform: open ? "rotate(-45deg) translate(3px, -4px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu — always rendered, animated via CSS */}
      <div
        className={`md:hidden mobile-menu${open ? " mobile-menu--open" : ""}`}
        style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid rgba(207,187,153,0.4)" }}
        aria-hidden={!open}
      >
        <div className="px-8 pb-8 pt-4 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " nav-link--active" : ""}`}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="btn-primary text-center"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 3: Verify**

```bash
bun dev
```

On mobile viewport (or DevTools responsive mode):
1. Open menu → should slide down smoothly
2. Close via hamburger → should slide up smoothly
3. Press Escape → menu should close
4. Click outside nav → menu should close
5. Navigate to another page → menu should close

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/globals.css
git commit -m "feat: animate mobile menu, add Escape and click-outside close"
```

---

## Task 6: Extract category illustrations

**Files:**
- Create: `src/components/illustrations/BagIllustration.tsx`
- Create: `src/components/illustrations/CanvasIllustration.tsx`
- Create: `src/components/illustrations/PouchIllustration.tsx`
- Create: `src/components/illustrations/ApronIllustration.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create BagIllustration.tsx**

```tsx
// src/components/illustrations/BagIllustration.tsx
import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function BagIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M50 65 L110 65 L120 130 L40 130 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M65 65 C65 50 95 50 95 65" stroke="#354024" strokeWidth="1.5" />
      <line x1="40" y1="90" x2="120" y2="90" stroke="#354024" strokeWidth="0.8" />
      <line x1="75" y1="90" x2="75" y2="130" stroke="#354024" strokeWidth="0.8" />
      <line x1="85" y1="90" x2="85" y2="130" stroke="#354024" strokeWidth="0.8" />
    </svg>
  );
}
```

- [ ] **Step 2: Create CanvasIllustration.tsx**

```tsx
// src/components/illustrations/CanvasIllustration.tsx
import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function CanvasIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="40" y="60" width="80" height="75" rx="1" stroke="#354024" strokeWidth="1.5" />
      <path d="M60 60 C60 48 100 48 100 60" stroke="#354024" strokeWidth="1.5" />
      {[72, 80, 88, 96, 104].map((y) => (
        <line key={y} x1="40" y1={y} x2="120" y2={y} stroke="#354024" strokeWidth="0.5" opacity="0.5" />
      ))}
      {[52, 60, 68, 76, 84, 92, 100, 108, 116].map((x) => (
        <line key={x} x1={x} y1="60" x2={x} y2="135" stroke="#354024" strokeWidth="0.5" opacity="0.5" />
      ))}
    </svg>
  );
}
```

- [ ] **Step 3: Create PouchIllustration.tsx**

```tsx
// src/components/illustrations/PouchIllustration.tsx
import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function PouchIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="45" y="72" width="70" height="58" rx="4" stroke="#354024" strokeWidth="1.5" />
      <line x1="45" y1="88" x2="115" y2="88" stroke="#354024" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="4" stroke="#354024" strokeWidth="1" />
      <path d="M60 72 L60 62 Q80 52 100 62 L100 72" stroke="#354024" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
```

- [ ] **Step 4: Create ApronIllustration.tsx**

```tsx
// src/components/illustrations/ApronIllustration.tsx
import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function ApronIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M55 45 L105 45 L115 140 L45 140 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M55 45 C55 38 65 33 80 33 C95 33 105 38 105 45" stroke="#354024" strokeWidth="1.5" />
      <rect x="62" y="90" width="36" height="28" rx="1" stroke="#354024" strokeWidth="1" />
      <line x1="70" y1="58" x2="90" y2="58" stroke="#354024" strokeWidth="0.8" />
      <line x1="80" y1="45" x2="80" y2="140" stroke="#354024" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}
```

- [ ] **Step 5: Update home/page.tsx to import from new locations**

Remove the 4 inline SVG functions (`BagSvg`, `CanvasSvg`, `PouchSvg`, `ApronSvg`) from the top of `src/app/page.tsx` and replace with imports:

```tsx
import BagIllustration from "@/components/illustrations/BagIllustration";
import CanvasIllustration from "@/components/illustrations/CanvasIllustration";
import PouchIllustration from "@/components/illustrations/PouchIllustration";
import ApronIllustration from "@/components/illustrations/ApronIllustration";
```

Update the `categories` array — rename `Illustration` values from the old function names to the new component names:

```tsx
const categories = [
  {
    id: "upcycled-bags",
    name: "Upcycled\nBags",
    label: "I",
    description: "Handstitched from reclaimed fabric. Each one truly one-of-a-kind.",
    href: "/products?category=upcycled-bags",
    bg: "var(--bone)",
    Illustration: BagIllustration,
  },
  {
    id: "canvas-bags",
    name: "Canvas\nBags",
    label: "II",
    description: "Sturdy, reusable canvas — the sustainable alternative.",
    href: "/products?category=canvas-bags",
    bg: "#dce4d2",
    Illustration: CanvasIllustration,
  },
  {
    id: "pouches",
    name: "Pouches &\nOrganisers",
    label: "III",
    description: "Pencil cases, cosmetics pouches, travel organisers.",
    href: "/products?category=pouches",
    bg: "#e4dcd0",
    Illustration: PouchIllustration,
  },
  {
    id: "aprons",
    name: "Artisan\nAprons",
    label: "IV",
    description: "Kitchen and studio aprons — upcycled denim and cotton.",
    href: "/products?category=aprons",
    bg: "#d4dcc8",
    Illustration: ApronIllustration,
  },
];
```

At the call site in the JSX (inside the category card), pass `className` explicitly:

```tsx
// Before:
<cat.Illustration />

// After:
<cat.Illustration className="w-24 h-24" style={{ opacity: 0.30 }} />
```

- [ ] **Step 6: Verify homepage unchanged**

```bash
bun dev
```

Open http://localhost:3000. The category cards should look identical to before — same illustration size and opacity.

- [ ] **Step 7: Commit**

```bash
git add src/components/illustrations/ src/app/page.tsx
git commit -m "refactor: extract category illustrations into standalone components"
```

---

## Task 7: ProductCard overhaul

**Files:**
- Modify: `src/components/ProductCard.tsx`

- [ ] **Step 1: Replace ProductCard.tsx**

```tsx
// src/components/ProductCard.tsx
import type { CSSProperties } from "react";
import { whatsappUrl } from "@/lib/constants";

interface IllustrationComponent {
  (props: { className?: string; style?: CSSProperties }): JSX.Element;
}

interface ProductCardProps {
  name: string;
  description: string;
  categoryBg: string;
  tags?: string[];
  Illustration: IllustrationComponent;
  materials?: string;
}

export default function ProductCard({
  name,
  description,
  categoryBg,
  tags = [],
  Illustration,
  materials,
}: ProductCardProps) {
  const url = whatsappUrl(
    `Hi, I'm interested in the EcoSevika ${name}. Can you share more details?`
  );

  return (
    <div
      className="product-card flex flex-col"
      style={{
        backgroundColor: "var(--warm-white)",
        border: "1px solid rgba(207,187,153,0.5)",
      }}
    >
      {/* Visual area */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          backgroundColor: categoryBg,
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Illustration className="w-24 h-24" style={{ opacity: 0.45 }} />

        {/* Made to order pill */}
        <span
          className="tagline"
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            zIndex: 10,
            fontSize: "0.75rem",
            color: "var(--kombu-green)",
            backgroundColor: "rgba(245,240,232,0.85)",
            padding: "0.2rem 0.6rem",
          }}
        >
          Made to order
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-display mb-2 leading-snug"
          style={{
            fontSize: "1.15rem",
            fontWeight: 500,
            color: "var(--kombu-green)",
          }}
        >
          {name}
        </h3>

        <p
          className="mb-2 leading-relaxed"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
            color: "var(--cafe-noir)",
            opacity: 0.75,
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>

        {materials && (
          <p
            className="mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              color: "var(--moss-green)",
              opacity: 0.85,
            }}
          >
            {materials}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <ul
            role="list"
            className="flex flex-wrap gap-1.5 mb-5 flex-1"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {tags.map((tag) => (
              <li
                key={tag}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--moss-green)",
                  backgroundColor: "var(--bone)",
                  border: "1px solid rgba(207,187,153,0.6)",
                  padding: "0.25rem 0.6rem",
                }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* WhatsApp CTA */}
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify — TypeScript compiles**

```bash
bun run build 2>&1 | head -30
```

Expected: no TypeScript errors on ProductCard. (Will see errors on `products/page.tsx` since it doesn't pass `Illustration` yet — those are fixed in Task 8.)

- [ ] **Step 3: Commit**

```bash
git add src/components/ProductCard.tsx
git commit -m "feat: redesign ProductCard with illustrations and materials field"
```

---

## Task 8: Products page updates

**Files:**
- Modify: `src/app/products/page.tsx`

This task: updates header copy, upgrades filter bar to `<nav>`, adds product counts from data, adds `materials` to each product object, and passes `Illustration` + `materials` to each `<ProductCard>`.

- [ ] **Step 1: Replace products/page.tsx**

```tsx
// src/app/products/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import BagIllustration from "@/components/illustrations/BagIllustration";
import CanvasIllustration from "@/components/illustrations/CanvasIllustration";
import PouchIllustration from "@/components/illustrations/PouchIllustration";
import ApronIllustration from "@/components/illustrations/ApronIllustration";

const categories = [
  {
    id: "upcycled-bags",
    label: "I",
    name: "Upcycled Bags",
    bg: "var(--bone)",
    Illustration: BagIllustration,
    materials: "Upcycled mixed fabric",
    products: [
      {
        name: "Upcycled Tote Bag",
        description:
          "A roomy everyday tote, handstitched from reclaimed fabric. Each one is truly one-of-a-kind.",
        tags: ["Tote", "Everyday", "Upcycled"],
      },
      {
        name: "Upcycled Shoulder Bag",
        description:
          "A compact shoulder bag with adjustable strap, made from patchwork upcycled cloth.",
        tags: ["Shoulder", "Adjustable", "Compact"],
      },
      {
        name: "Upcycled Zippered Bag",
        description:
          "Secure zip closure, multiple compartments. Great for travel or organising essentials.",
        tags: ["Zippered", "Travel", "Multi-compartment"],
      },
    ],
  },
  {
    id: "canvas-bags",
    label: "II",
    name: "Canvas Cloth Bags",
    bg: "#dce4d2",
    Illustration: CanvasIllustration,
    materials: "Natural unbleached canvas",
    products: [
      {
        name: "Natural Canvas Tote",
        description:
          "Unbleached natural canvas tote. Minimalist, strong, and endlessly reusable.",
        tags: ["Natural", "Minimal", "Reusable"],
      },
      {
        name: "Printed Canvas Bag",
        description:
          "Canvas bag with hand-stamped block-printed designs by our artisans.",
        tags: ["Printed", "Artisan", "Block-print"],
      },
      {
        name: "Canvas Grocery Bag",
        description:
          "Wide-base canvas bag designed for grocery runs. Holds more, lasts longer.",
        tags: ["Grocery", "Heavy-duty", "Wide-base"],
      },
    ],
  },
  {
    id: "pouches",
    label: "III",
    name: "Pouches",
    bg: "#e4dcd0",
    Illustration: PouchIllustration,
    materials: "Upcycled cotton & lining",
    products: [
      {
        name: "Pencil Pouch",
        description:
          "A neat zip-closure fabric pouch. Perfect for stationery, tools, or accessories.",
        tags: ["Pencil case", "Zip", "Stationery"],
      },
      {
        name: "Cosmetics Pouch",
        description:
          "A lined fabric pouch for make-up or toiletries. Easy to wipe clean.",
        tags: ["Cosmetics", "Lined", "Travel"],
      },
      {
        name: "Multi-Pocket Organiser",
        description:
          "Multiple pockets for cables, cards, and small items. A traveller's companion.",
        tags: ["Organiser", "Multi-pocket", "Travel"],
      },
    ],
  },
  {
    id: "aprons",
    label: "IV",
    name: "Aprons",
    bg: "#d4dcc8",
    Illustration: ApronIllustration,
    materials: "Upcycled denim & cotton",
    products: [
      {
        name: "Kitchen Apron",
        description:
          "Full-length kitchen apron with front pocket. Adjustable neck strap and waist ties.",
        tags: ["Kitchen", "Full-length", "Adjustable"],
      },
      {
        name: "Craft / Studio Apron",
        description:
          "A durable apron for artists and crafters. Multiple pockets, comfortable fit.",
        tags: ["Studio", "Multi-pocket", "Crafts"],
      },
      {
        name: "Children's Apron",
        description:
          "A smaller apron for young helpers in the kitchen or art class.",
        tags: ["Kids", "Adjustable", "Compact"],
      },
    ],
  },
];

const totalCount = categories.reduce((sum, c) => sum + c.products.length, 0);

export default function ProductsPage() {
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <div style={{ backgroundColor: "var(--warm-white)", minHeight: "100vh" }}>
      {/* ── Header ─────────────────────────────────────── */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: "var(--bone)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="tagline mb-5" style={{ color: "var(--moss-green)" }}>
            Handmade with care
          </p>
          <h1
            className="font-display leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 300,
              color: "var(--kombu-green)",
            }}
          >
            Our
            <em style={{ fontStyle: "italic" }}> Products</em>
          </h1>
          <div
            className="mb-7"
            style={{ width: "36px", height: "1px", backgroundColor: "var(--moss-green)" }}
          />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              color: "var(--cafe-noir)",
              opacity: 0.7,
              maxWidth: "460px",
              lineHeight: 1.85,
            }}
          >
            Every piece is made to your order — no two alike. Message us on
            WhatsApp and we&apos;ll share details, customisation options, and pricing.
          </p>
        </div>
      </section>

      {/* ── Filter tabs ────────────────────────────────── */}
      <nav
        aria-label="Filter by category"
        className="sticky top-16 z-40 py-4 px-8 flex flex-wrap gap-2"
        style={{
          backgroundColor: "var(--warm-white)",
          borderBottom: "1px solid rgba(207,187,153,0.4)",
        }}
      >
        <button
          onClick={() => setActive("all")}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "0.55rem 1.4rem",
            cursor: "pointer",
            backgroundColor: active === "all" ? "var(--kombu-green)" : "transparent",
            color: active === "all" ? "var(--bone)" : "var(--kombu-green)",
            border: "1px solid var(--kombu-green)",
            transition: "background-color 0.25s ease, color 0.25s ease",
          }}
        >
          All · {totalCount}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.55rem 1.4rem",
              cursor: "pointer",
              backgroundColor: active === cat.id ? "var(--kombu-green)" : "transparent",
              color: active === cat.id ? "var(--bone)" : "var(--kombu-green)",
              border: "1px solid var(--kombu-green)",
              transition: "background-color 0.25s ease, color 0.25s ease",
            }}
          >
            {cat.name} · {cat.products.length}
          </button>
        ))}
      </nav>

      {/* ── Products ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {visibleCategories.map((cat) => (
          <div key={cat.id} className="mb-20">
            {/* Category heading */}
            <div className="flex items-baseline gap-5 mb-10">
              <span
                className="font-display"
                style={{
                  fontSize: "4rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(53,64,36,0.1)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {cat.label}
              </span>
              <div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "var(--kombu-green)",
                    lineHeight: 1,
                  }}
                >
                  {cat.name}
                </h2>
              </div>
              <div
                className="flex-1"
                style={{ height: "1px", backgroundColor: "rgba(207,187,153,0.6)" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.products.map((p) => (
                <ProductCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  categoryBg={cat.bg}
                  tags={p.tags}
                  Illustration={cat.Illustration}
                  materials={cat.materials}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify — build succeeds**

```bash
bun run build 2>&1 | head -40
```

Expected: clean build, no TypeScript errors.

- [ ] **Step 3: Verify visually**

```bash
bun dev
```

Open http://localhost:3000/products. Check:
- Header copy is updated (no "Photos coming soon")
- Filter buttons show product counts ("Upcycled Bags · 3", "All · 12")
- Each product card shows its category illustration at higher opacity
- "Made to order" pill appears bottom-left of each card's visual area
- Materials line appears below description
- Filtering still works

- [ ] **Step 4: Commit**

```bash
git add src/app/products/page.tsx
git commit -m "feat: overhaul products page — illustrations, materials, filter counts"
```

---

## Task 9: Polish pass

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

### 9a — Instagram links

- [ ] **Step 1: Add Instagram icon to Navbar desktop and mobile**

In `src/components/Navbar.tsx`, add an Instagram SVG component inline at the top of the file body (before the return):

```tsx
// Instagram icon — inline SVG for zero-dependency icon
function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
```

In the desktop nav div (after the links map, before the "Shop Now" button):

```tsx
<a
  href="https://www.instagram.com/eco.sevika/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="EcoSevika on Instagram"
  style={{ color: "var(--cafe-noir)", display: "flex", alignItems: "center", transition: "color 0.25s ease" }}
  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--kombu-green)")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cafe-noir)")}
>
  <InstagramIcon />
</a>
```

In the mobile menu (in the `<div className="px-8 pb-8 pt-4 flex flex-col gap-6">`, after the links map, before the Shop Now button):

```tsx
<a
  href="https://www.instagram.com/eco.sevika/"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-link"
  tabIndex={open ? 0 : -1}
  onClick={() => setOpen(false)}
>
  Instagram
</a>
```

- [ ] **Step 2: Add Instagram to Footer**

In `src/components/Footer.tsx`, in the "Get in Touch" column, add between the WhatsApp `<a>` and the email `<a>`:

```tsx
<a
  href="https://www.instagram.com/eco.sevika/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-link"
>
  Instagram: @eco.sevika
</a>
```

### 9b — Scroll hint opacity

- [ ] **Step 3: Bump scroll hint opacity in home/page.tsx**

```tsx
// Before:
style={{ opacity: 0.35 }}

// After:
style={{ opacity: 0.55 }}
```

This is the `<div>` containing the "SCROLL" label and vertical line at the bottom of the hero section.

### 9c — Product card touch active state

- [ ] **Step 4: Add :active style to globals.css**

In `src/app/globals.css`, after the `.product-card:hover` rule:

```css
.product-card:active {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(53, 64, 36, 0.11);
}
```

### 9d — Social metadata

- [ ] **Step 5: Add Instagram to layout.tsx metadata**

In `src/app/layout.tsx`, update the `metadata` export:

```tsx
export const metadata: Metadata = {
  title: "EcoSevika — Threads of Change",
  description:
    "Handcrafted upcycled bags, pouches, aprons and more — made by women artisans from underserved communities in Delhi NCR. Every purchase empowers a woman and reduces fabric waste.",
  keywords: ["ecosevika", "upcycled bags", "women empowerment", "sustainable fashion", "handcrafted", "Delhi"],
  openGraph: {
    title: "EcoSevika — Threads of Change",
    description: "Handcrafted by women. Kinder to the planet.",
    url: "https://ecosevika.racddl.com",
    siteName: "EcoSevika",
    locale: "en_IN",
    type: "website",
  },
  other: {
    "instagram:site": "@eco.sevika",
  },
};
```

### Final verification and commit

- [ ] **Step 6: Full build and smoke test**

```bash
bun run build
```

Expected: clean build.

```bash
bun dev
```

Check every page:
- Home: scroll hint is slightly more visible, no changes otherwise
- Products: all cards have illustrations + "Made to order" pill + materials
- Contact: no nested anchor, WhatsApp card works
- Navbar: Instagram icon visible desktop, Instagram link in mobile menu
- Footer: Instagram link in "Get in Touch" column
- Skip link: Tab on any page shows the skip button

- [ ] **Step 7: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx src/app/page.tsx src/app/globals.css src/app/layout.tsx
git commit -m "feat: add Instagram links, polish scroll hint, product card active state"
```

---

## Summary

| Task | Batch | Key outcome |
|---|---|---|
| 1 | 1 | WhatsApp number centralised |
| 2 | 1 | All text ≥ 12px |
| 3 | 1 | Keyboard users can skip nav |
| 4 | 1 | Contact page HTML valid |
| 5 | 1 | Mobile menu animates, closes on Escape/outside |
| 6 | 2 | Illustrations extracted and reusable |
| 7 | 2 | ProductCard uses illustrations, shows materials |
| 8 | 2 | Products page complete — no apologies for missing photos |
| 9 | 3 | Instagram linked, scroll hint visible, touch interaction |
