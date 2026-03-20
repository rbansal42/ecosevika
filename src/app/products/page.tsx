"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const categories = [
  {
    id: "upcycled-bags",
    name: "Upcycled Bags",
    emoji: "🛍",
    bg: "linear-gradient(135deg, #E5D7C4 0%, #CFBB99 100%)",
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
    name: "Canvas Cloth Bags",
    emoji: "🎒",
    bg: "linear-gradient(135deg, #d4dcc8 0%, #b8c4a8 100%)",
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
    name: "Pouches",
    emoji: "👝",
    bg: "linear-gradient(135deg, #dcd4c8 0%, #c8b898 100%)",
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
    name: "Aprons",
    emoji: "👨‍🍳",
    bg: "linear-gradient(135deg, #c8d4c0 0%, #a8b898 100%)",
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

export default function ProductsPage() {
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all"
      ? categories
      : categories.filter((c) => c.id === active);

  return (
    <div style={{ backgroundColor: "var(--warm-white)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #E5D7C4 0%, #F5F0E8 60%, #dce8d4 100%)",
        }}
      >
        <p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
          Handmade with care
        </p>
        <h1
          className="font-display mb-4"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "var(--kombu-green)",
            fontWeight: 600,
          }}
        >
          Our Products
        </h1>
        <div className="section-divider mb-5" />
        <p
          className="text-sm max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--cafe-noir)", opacity: 0.8 }}
        >
          Photos are coming soon — each product is made to order. Enquire via
          WhatsApp and we&apos;ll share details, customisation options, and pricing.
        </p>
      </section>

      {/* Filter tabs */}
      <div
        className="sticky top-16 z-40 py-4 px-6 flex flex-wrap gap-2 justify-center"
        style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--tan)" }}
      >
        <button
          onClick={() => setActive("all")}
          className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 rounded-sm"
          style={{
            backgroundColor: active === "all" ? "var(--kombu-green)" : "transparent",
            color: active === "all" ? "var(--bone)" : "var(--kombu-green)",
            border: "1.5px solid var(--kombu-green)",
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "0.12em",
          }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="px-4 py-1.5 text-xs font-semibold transition-all duration-200 rounded-sm"
            style={{
              backgroundColor: active === cat.id ? "var(--kombu-green)" : "transparent",
              color: active === cat.id ? "var(--bone)" : "var(--kombu-green)",
              border: "1.5px solid var(--kombu-green)",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        {visibleCategories.map((cat) => (
          <div key={cat.id} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <h2
                  className="font-subheading text-xl"
                  style={{ color: "var(--kombu-green)", fontWeight: 600 }}
                >
                  {cat.name}
                </h2>
              </div>
              <div
                className="flex-1 h-px ml-4"
                style={{ backgroundColor: "var(--tan)" }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((p) => (
                <ProductCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  categoryEmoji={cat.emoji}
                  categoryColor={cat.bg}
                  tags={p.tags}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
