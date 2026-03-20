import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--kombu-green)", color: "var(--bone)" }}>
      {/* Leaf SVG divider */}
      <div className="flex justify-center pt-10 pb-4 opacity-30">
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
          <line x1="0" y1="12" x2="50" y2="12" stroke="#E5D7C4" strokeWidth="0.8" />
          <path
            d="M60 4 C64 4 68 8 68 12 C68 16 64 20 60 20 C56 20 52 16 52 12 C52 8 56 4 60 4 Z"
            stroke="#E5D7C4"
            strokeWidth="0.8"
            fill="none"
          />
          <line x1="60" y1="4" x2="60" y2="20" stroke="#E5D7C4" strokeWidth="0.5" />
          <line x1="70" y1="12" x2="120" y2="12" stroke="#E5D7C4" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3
            className="font-display text-2xl mb-2"
            style={{ color: "var(--bone)", fontWeight: 600 }}
          >
            EcoSevika
          </h3>
          <p className="tagline mb-4" style={{ color: "var(--moss-green)" }}>
            Threads of Change
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--tan)", maxWidth: "220px" }}>
            Upcycled fabric. Empowered women. A kinder planet.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p
            className="tagline mb-5"
            style={{ color: "var(--tan)" }}
          >
            Explore
          </p>
          <div className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/story", label: "Our Story" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--bone)", opacity: 0.75 }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.opacity = "0.75")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="tagline mb-5" style={{ color: "var(--tan)" }}>
            Get in Touch
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/919667545342"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-opacity duration-200"
              style={{ color: "var(--bone)", opacity: 0.75 }}
            >
              WhatsApp: +91 96675 45342
            </a>
            <a
              href="mailto:rotaractclubofdynamicleaders@gmail.com"
              className="text-xs transition-opacity duration-200"
              style={{ color: "var(--bone)", opacity: 0.75 }}
            >
              rotaractclubofdynamicleaders@gmail.com
            </a>
            <p className="text-xs" style={{ color: "var(--tan)", opacity: 0.6 }}>
              Delhi NCR, India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5 text-center"
        style={{ borderColor: "rgba(229,215,196,0.15)" }}
      >
        <p className="text-xs" style={{ color: "var(--tan)", opacity: 0.6 }}>
          A{" "}
          <a
            href="https://racddl.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0.9, textDecoration: "underline" }}
          >
            Rotaract Club of Delhi Dynamic Leaders
          </a>{" "}
          Initiative &mdash; RID 3011
        </p>
      </div>
    </footer>
  );
}
