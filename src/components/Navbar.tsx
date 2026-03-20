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
      style={{ backgroundColor: "var(--warm-white)", borderBottom: "1px solid rgba(207,187,153,0.4)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="EcoSevika — Threads of Change"
            width={120}
            height={120}
            className="object-contain"
            style={{ height: "52px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="btn-primary"
            style={{ fontSize: "0.58rem", padding: "0.7rem 1.8rem" }}
          >
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

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-8 pb-8 flex flex-col gap-6"
          style={{ backgroundColor: "var(--warm-white)", borderTop: "1px solid rgba(207,187,153,0.4)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
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
