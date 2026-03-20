"use client";

import { useState } from "react";
import type { JSX } from "react";
import ProductCard from "@/components/ProductCard";
import BagIllustration from "@/components/illustrations/BagIllustration";
import CanvasIllustration from "@/components/illustrations/CanvasIllustration";
import PouchIllustration from "@/components/illustrations/PouchIllustration";
import ApronIllustration from "@/components/illustrations/ApronIllustration";
import type { IllustrationProps } from "@/components/illustrations/types";

type IllustrationComponent = (props: IllustrationProps) => JSX.Element;

interface Category {
  id: string;
  label: string;
  name: string;
  bg: string;
  Illustration: IllustrationComponent;
  materials: string;
  products: { name: string; description: string; tags: string[] }[];
}

const categories: Category[] = [
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
          aria-pressed={active === "all"}
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
            aria-pressed={active === cat.id}
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
