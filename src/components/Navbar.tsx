"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/story", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid var(--tan)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="EcoSevika"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <div>
            <p
              className="font-display text-xl leading-none"
              style={{ color: "var(--kombu-green)", fontWeight: 600 }}
            >
              EcoSevika
            </p>
            <p className="tagline" style={{ fontSize: "0.55rem", marginTop: "2px" }}>
              Threads of Change
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs font-500 tracking-widest uppercase transition-colors duration-200"
              style={{ color: "var(--cafe-noir)", letterSpacing: "0.12em" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--kombu-green)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--cafe-noir)")
              }
            >
              {l.label}
            </Link>
          ))}
          <Link href="/products" className="btn-primary" style={{ fontSize: "0.65rem", padding: "0.6rem 1.5rem" }}>
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--kombu-green)",
              transform: open ? "rotate(-45deg) translate(4px, -4px)" : "",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid var(--tan)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-xs uppercase tracking-widest"
              style={{ color: "var(--cafe-noir)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/products" className="btn-primary text-center" onClick={() => setOpen(false)}>
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
