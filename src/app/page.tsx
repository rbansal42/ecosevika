import Link from "next/link";

/* ── Botanical SVG — hero right column ───────────────── */
function BotanicalHero() {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Outer circle — echoes logo */}
      <circle cx="240" cy="280" r="210" stroke="#354024" strokeWidth="0.8" opacity="0.18" />
      <circle cx="240" cy="280" r="185" stroke="#889063" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.25" />

      {/* Large leaf — main element */}
      <path
        d="M260 60 C340 80 400 160 390 260 C380 360 310 440 240 460 C170 480 110 420 100 340 C90 260 130 170 190 120 C220 95 240 50 260 60Z"
        stroke="#354024"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaf midrib */}
      <path d="M260 60 C248 180 238 300 240 460" stroke="#354024" strokeWidth="1" />
      {/* Leaf veins — left */}
      <path d="M183 150 C205 165 228 172 240 180" stroke="#354024" strokeWidth="0.7" />
      <path d="M155 195 C183 205 215 212 240 218" stroke="#354024" strokeWidth="0.7" />
      <path d="M140 245 C170 252 208 256 240 258" stroke="#354024" strokeWidth="0.7" />
      <path d="M143 298 C173 302 210 302 240 300" stroke="#354024" strokeWidth="0.7" />
      <path d="M160 348 C185 349 215 348 240 344" stroke="#354024" strokeWidth="0.7" />
      <path d="M188 392 C208 390 226 387 240 384" stroke="#354024" strokeWidth="0.7" />
      {/* Leaf veins — right */}
      <path d="M322 155 C300 165 270 172 240 180" stroke="#354024" strokeWidth="0.7" />
      <path d="M348 198 C318 207 280 213 240 218" stroke="#354024" strokeWidth="0.7" />
      <path d="M360 248 C330 254 285 257 240 258" stroke="#354024" strokeWidth="0.7" />
      <path d="M358 300 C330 302 283 302 240 300" stroke="#354024" strokeWidth="0.7" />
      <path d="M342 350 C316 350 276 348 240 344" stroke="#354024" strokeWidth="0.7" />

      {/* Sewing needle */}
      <line x1="155" y1="110" x2="148" y2="400" stroke="#889063" strokeWidth="1.8" />
      {/* Needle eye */}
      <ellipse
        cx="152"
        cy="124"
        rx="6"
        ry="3.5"
        stroke="#889063"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(-5 152 124)"
      />
      {/* Thread */}
      <path
        d="M148 400 Q172 438 145 465 Q132 476 142 488"
        stroke="#889063"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Small decorative leaf — bottom left */}
      <path
        d="M70 420 C60 400 72 375 90 370 C108 365 120 382 118 398 C116 414 100 426 86 424 C78 423 72 428 70 420Z"
        stroke="#889063"
        strokeWidth="0.9"
        fill="none"
        opacity="0.6"
      />
      <line x1="94" y1="370" x2="88" y2="424" stroke="#889063" strokeWidth="0.6" opacity="0.6" />

      {/* Small decorative leaf — top right */}
      <path
        d="M390 100 C400 82 420 80 430 95 C440 110 432 128 418 130 C404 132 390 120 390 108 C390 104 390 102 390 100Z"
        stroke="#889063"
        strokeWidth="0.9"
        fill="none"
        opacity="0.5"
      />
      <line x1="410" y1="80" x2="412" y2="130" stroke="#889063" strokeWidth="0.6" opacity="0.5" />

      {/* Floating dots — botanical scatter */}
      <circle cx="380" cy="300" r="2" fill="#889063" opacity="0.3" />
      <circle cx="375" cy="312" r="1.2" fill="#889063" opacity="0.2" />
      <circle cx="70" cy="200" r="2" fill="#889063" opacity="0.25" />
      <circle cx="82" cy="215" r="1.2" fill="#889063" opacity="0.18" />
    </svg>
  );
}

/* ── Category card SVGs ───────────────────────────────── */
function BagSvg() {
  return (
    <svg viewBox="0 0 160 160" fill="none" className="w-24 h-24 opacity-30" aria-hidden="true">
      <path d="M50 65 L110 65 L120 130 L40 130 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M65 65 C65 50 95 50 95 65" stroke="#354024" strokeWidth="1.5" />
      <line x1="40" y1="90" x2="120" y2="90" stroke="#354024" strokeWidth="0.8" />
      <line x1="75" y1="90" x2="75" y2="130" stroke="#354024" strokeWidth="0.8" />
      <line x1="85" y1="90" x2="85" y2="130" stroke="#354024" strokeWidth="0.8" />
    </svg>
  );
}
function CanvasSvg() {
  return (
    <svg viewBox="0 0 160 160" fill="none" className="w-24 h-24 opacity-30" aria-hidden="true">
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
function PouchSvg() {
  return (
    <svg viewBox="0 0 160 160" fill="none" className="w-24 h-24 opacity-30" aria-hidden="true">
      <rect x="45" y="72" width="70" height="58" rx="4" stroke="#354024" strokeWidth="1.5" />
      <line x1="45" y1="88" x2="115" y2="88" stroke="#354024" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="4" stroke="#354024" strokeWidth="1" />
      <path d="M60 72 L60 62 Q80 52 100 62 L100 72" stroke="#354024" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function ApronSvg() {
  return (
    <svg viewBox="0 0 160 160" fill="none" className="w-24 h-24 opacity-30" aria-hidden="true">
      <path d="M55 45 L105 45 L115 140 L45 140 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M55 45 C55 38 65 33 80 33 C95 33 105 38 105 45" stroke="#354024" strokeWidth="1.5" />
      <rect x="62" y="90" width="36" height="28" rx="1" stroke="#354024" strokeWidth="1" />
      <line x1="70" y1="58" x2="90" y2="58" stroke="#354024" strokeWidth="0.8" />
      <line x1="80" y1="45" x2="80" y2="140" stroke="#354024" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

const categories = [
  {
    id: "upcycled-bags",
    name: "Upcycled\nBags",
    label: "I",
    description: "Handstitched from reclaimed fabric. Each one truly one-of-a-kind.",
    href: "/products?category=upcycled-bags",
    bg: "var(--bone)",
    Illustration: BagSvg,
  },
  {
    id: "canvas-bags",
    name: "Canvas\nBags",
    label: "II",
    description: "Sturdy, reusable canvas — the sustainable alternative.",
    href: "/products?category=canvas-bags",
    bg: "#dce4d2",
    Illustration: CanvasSvg,
  },
  {
    id: "pouches",
    name: "Pouches &\nOrganisers",
    label: "III",
    description: "Pencil cases, cosmetics pouches, travel organisers.",
    href: "/products?category=pouches",
    bg: "#e4dcd0",
    Illustration: PouchSvg,
  },
  {
    id: "aprons",
    name: "Artisan\nAprons",
    label: "IV",
    description: "Kitchen and studio aprons — upcycled denim and cotton.",
    href: "/products?category=aprons",
    bg: "#d4dcc8",
    Illustration: ApronSvg,
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[94vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
        {/* Watermark botanical — background */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <div style={{ width: "50%", height: "100%", opacity: 0.07, paddingRight: "4rem" }}>
            <BotanicalHero />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="py-16">
              <p
                className="tagline animate-fade-up delay-1 mb-8"
                style={{ color: "var(--moss-green)" }}
              >
                Rotaract Club · Delhi Dynamic Leaders
              </p>

              <h1
                className="font-display animate-fade-up delay-2 leading-none mb-10"
                style={{
                  fontSize: "clamp(3.8rem, 8vw, 7rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                <span style={{ color: "var(--kombu-green)", display: "block" }}>Handcrafted</span>
                <span style={{ color: "var(--cafe-noir)", fontStyle: "italic", display: "block" }}>with purpose.</span>
              </h1>

              <div
                className="animate-fade-up delay-3 mb-8"
                style={{ width: "40px", height: "1px", backgroundColor: "var(--moss-green)" }}
              />

              <p
                className="animate-fade-up delay-4 leading-relaxed mb-10"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--cafe-noir)",
                  opacity: 0.75,
                  maxWidth: "420px",
                  lineHeight: 1.85,
                }}
              >
                Every EcoSevika product is made by a woman from an underserved
                community — using fabric that would otherwise be waste.
                Buy with purpose. Wear with meaning.
              </p>

              <div className="animate-fade-up delay-5 btn-group">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link href="/story" className="btn-outline">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Botanical illustration — visible on md+ */}
            <div
              className="hidden md:flex items-center justify-center animate-fade-in delay-4"
              style={{ height: "560px" }}
            >
              <BotanicalHero />
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0.35 }}
        >
          <span className="tagline" style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}>Scroll</span>
          <div style={{ width: "1px", height: "32px", backgroundColor: "var(--moss-green)" }} />
        </div>
      </section>

      {/* ── Mission pillars ───────────────────────────────── */}
      <section style={{ backgroundColor: "var(--kombu-green)" }} className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: "I",
                title: "Upcycled Fabric",
                body: "We use donated fabrics that would otherwise end up in landfills. Zero new raw material, zero compromise.",
              },
              {
                num: "II",
                title: "Women Artisans",
                body: "Each product is handcrafted by women from underserved communities — skilled, fairly paid, empowered.",
              },
              {
                num: "III",
                title: "Market-Ready",
                body: "Quality products that generate real income and sustain livelihoods — not charity, but commerce.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`px-10 py-12${i > 0 ? " pillar-separator" : ""}`}
              >
                <p
                  className="font-display mb-5"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "rgba(229,215,196,0.22)",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </p>
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    color: "var(--bone)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.72rem",
                    color: "var(--tan)",
                    opacity: 0.8,
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category grid ─────────────────────────────────── */}
      <section className="py-24 px-8" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
                What we make
              </p>
              <h2
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  fontWeight: 300,
                  color: "var(--kombu-green)",
                }}
              >
                Our Collections
              </h2>
            </div>
            <Link
              href="/products"
              className="nav-link"
              style={{ fontSize: "0.62rem", letterSpacing: "0.2em" }}
            >
              View all products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="cat-card group block"
                style={{
                  backgroundColor: cat.bg,
                  border: "1px solid rgba(207,187,153,0.4)",
                }}
              >
                {/* Card visual */}
                <div
                  className="flex flex-col items-center justify-center pt-10 pb-4"
                  style={{ minHeight: "200px", position: "relative" }}
                >
                  {/* Large roman numeral ghost */}
                  <p
                    className="font-display absolute"
                    style={{
                      fontSize: "8rem",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "rgba(53,64,36,0.06)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {cat.label}
                  </p>
                  <cat.Illustration />
                </div>

                {/* Card text */}
                <div
                  className="px-6 py-5"
                  style={{ borderTop: "1px solid rgba(207,187,153,0.35)" }}
                >
                  <h3
                    className="font-display mb-2"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--kombu-green)",
                      whiteSpace: "pre-line",
                      lineHeight: 1.2,
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.68rem",
                      color: "var(--cafe-noir)",
                      opacity: 0.65,
                      lineHeight: 1.7,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {cat.description}
                  </p>
                  <span
                    className="cat-card-browse tagline"
                    style={{ color: "var(--moss-green)", fontSize: "0.55rem" }}
                  >
                    Browse collection →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story split ───────────────────────────────────── */}
      <section className="py-24 px-8" style={{ backgroundColor: "var(--bone)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Decorative element */}
          <div
            className="flex items-center justify-center order-2 md:order-1"
            style={{ minHeight: "320px" }}
          >
            <svg
              viewBox="0 0 360 360"
              fill="none"
              className="w-full max-w-xs md:max-w-sm opacity-70"
              aria-hidden="true"
            >
              <circle cx="180" cy="180" r="155" stroke="#889063" strokeWidth="0.8" strokeDasharray="4 8" />
              <circle cx="180" cy="180" r="120" stroke="#354024" strokeWidth="0.6" opacity="0.3" />

              {/* Leaf */}
              <ellipse cx="185" cy="165" rx="52" ry="78" stroke="#354024" strokeWidth="1.4" fill="none" transform="rotate(8 185 165)" />
              <path d="M185 95 C180 155 178 215 185 243" stroke="#354024" strokeWidth="0.9" />
              {[120, 140, 162, 184, 205, 222].map((y) => (
                <g key={y}>
                  <line x1={185 - 25} y1={y} x2="185" y2={y + 8} stroke="#354024" strokeWidth="0.6" />
                  <line x1={185 + 25} y1={y} x2="185" y2={y + 8} stroke="#354024" strokeWidth="0.6" />
                </g>
              ))}

              {/* Needle */}
              <line x1="230" y1="90" x2="224" y2="280" stroke="#889063" strokeWidth="1.6" />
              <ellipse cx="228" cy="102" rx="5" ry="3" stroke="#889063" strokeWidth="1.1" fill="none" transform="rotate(-6 228 102)" />
              <path d="M224 280 Q244 305 218 325 Q210 332 220 340" stroke="#889063" strokeWidth="1.1" fill="none" />

              {/* Small leaves */}
              <path d="M80 240 C68 224 76 200 92 198 C108 196 118 212 112 226 C106 240 86 248 80 240Z" stroke="#889063" strokeWidth="0.9" fill="none" opacity="0.55" />
              <line x1="96" y1="198" x2="90" y2="242" stroke="#889063" strokeWidth="0.6" opacity="0.55" />
            </svg>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="tagline mb-5" style={{ color: "var(--moss-green)" }}>
              The story behind each stitch
            </p>
            <h2
              className="font-display mb-8 leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 300,
                color: "var(--kombu-green)",
              }}
            >
              Every thread carries
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>a woman&apos;s story.</em>
            </h2>
            <div
              className="mb-7"
              style={{ width: "36px", height: "1px", backgroundColor: "var(--moss-green)" }}
            />
            <p
              className="leading-relaxed mb-5"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "var(--cafe-noir)",
                opacity: 0.8,
                lineHeight: 1.9,
                maxWidth: "440px",
              }}
            >
              EcoSevika began with a simple belief: that a woman&apos;s skill should
              translate into economic dignity. We collect donated fabrics from homes,
              schools, and businesses — fabric that would otherwise be discarded —
              and put it in the hands of women who transform it.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "var(--cafe-noir)",
                opacity: 0.8,
                lineHeight: 1.9,
                maxWidth: "440px",
              }}
            >
              When you carry an EcoSevika bag, you carry three things: a woman&apos;s
              craft, a piece of upcycled heritage, and a quiet vote for a more
              sustainable world.
            </p>
            <Link href="/story" className="btn-outline">
              Read the Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────── */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: "var(--kombu-green)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-display italic mb-8"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              fontWeight: 300,
              color: "var(--bone)",
              lineHeight: 1.55,
              letterSpacing: "0.005em",
            }}
          >
            &ldquo;Your purchase empowers a woman,&nbsp;
            upcycles fabric,&nbsp;and reduces waste.
            <br />
            That&apos;s three good things in one.&rdquo;
          </p>
          <div
            className="mx-auto mb-5"
            style={{ width: "36px", height: "1px", backgroundColor: "rgba(229,215,196,0.4)" }}
          />
          <p className="tagline" style={{ color: "var(--moss-green)" }}>
            The EcoSevika Promise
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: "var(--tan)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="tagline mb-4" style={{ color: "var(--kombu-green)", opacity: 0.65 }}>
                Ready to shop?
              </p>
              <h2
                className="font-display leading-none"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--kombu-green)",
                }}
              >
                Shop with
                <br />
                <em style={{ fontStyle: "italic" }}>purpose.</em>
              </h2>
            </div>
            <div>
              <p
                className="leading-relaxed mb-8"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.72rem",
                  color: "var(--cafe-noir)",
                  opacity: 0.75,
                  lineHeight: 1.85,
                }}
              >
                Browse our collection and enquire via WhatsApp.
                We&apos;ll get back to you promptly with details,
                customisation options, and pricing.
              </p>
              <div className="btn-group">
                <Link href="/products" className="btn-primary">
                  Browse Products
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
