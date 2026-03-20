"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll-lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Close on click outside
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node) && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

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
          ref={buttonRef}
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
        style={{ backgroundColor: "var(--warm-white)" }}
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
