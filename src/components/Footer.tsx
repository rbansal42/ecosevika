import Link from "next/link";
import { whatsappUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--kombu-green)" }}>
      {/* Brand statement — large display */}
      <div
        className="max-w-7xl mx-auto px-8 pt-20 pb-10"
        style={{ borderBottom: "1px solid rgba(229,215,196,0.1)" }}
      >
        <p
          className="font-display leading-none mb-2"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            color: "rgba(229,215,196,0.12)",
            letterSpacing: "-0.01em",
          }}
        >
          EcoSevika
        </p>
        <p className="tagline" style={{ color: "var(--tan)" }}>
          Threads of Change
        </p>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p
            className="font-display mb-2"
            style={{ fontSize: "1.4rem", fontWeight: 400, fontStyle: "italic", color: "var(--bone)" }}
          >
            EcoSevika
          </p>
          <p
            className="tagline mb-5"
            style={{ color: "var(--moss-green)" }}
          >
            Threads of Change
          </p>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              color: "var(--tan)",
              opacity: 0.7,
              lineHeight: 1.8,
              maxWidth: "200px",
            }}
          >
            Upcycled fabric. Empowered women. A kinder planet.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5 }}>
            Explore
          </p>
          <div className="flex flex-col gap-3.5">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/story", label: "Our Story" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="tagline mb-6" style={{ color: "var(--tan)", opacity: 0.5 }}>
            Get in Touch
          </p>
          <div className="flex flex-col gap-3.5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp: +91 96675 45342
            </a>
            <a
              href="https://www.instagram.com/eco.sevika/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#354024" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a
              href="mailto:teamecosevika@gmail.com"
              className="footer-link"
              style={{ wordBreak: "break-all" }}
            >
              teamecosevika@gmail.com
            </a>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "var(--tan)",
                opacity: 0.45,
              }}
            >
              Delhi NCR, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5 px-8 flex flex-col md:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(229,215,196,0.08)" }}
      >
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
            color: "var(--tan)",
            opacity: 0.4,
            letterSpacing: "0.06em",
          }}
        >
          A{" "}
          <a
            href="https://racddl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ opacity: 0.9, textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            Rotaract Club of Delhi Dynamic Leaders
          </a>{" "}
          Initiative &mdash; RID 3011
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
            color: "var(--tan)",
            opacity: 0.3,
            letterSpacing: "0.06em",
          }}
        >
          &copy; {new Date().getFullYear()} EcoSevika
        </p>
      </div>
    </footer>
  );
}
