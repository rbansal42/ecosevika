import Link from "next/link";

export default function Home() {
  const categories = [
    {
      emoji: "🛍",
      name: "Upcycled Bags",
      description:
        "Unique totes, shoulder bags, and zippered bags — each one handstitched from reclaimed fabric.",
      href: "/products?category=upcycled-bags",
      bg: "linear-gradient(135deg, #E5D7C4 0%, #CFBB99 100%)",
    },
    {
      emoji: "🎒",
      name: "Canvas Cloth Bags",
      description:
        "Sturdy, reusable canvas bags — the sustainable alternative to single-use plastic.",
      href: "/products?category=canvas-bags",
      bg: "linear-gradient(135deg, #d4dcc8 0%, #b8c4a8 100%)",
    },
    {
      emoji: "👝",
      name: "Pouches",
      description:
        "Pencil pouches, cosmetics pouches, and travel organisers — handcrafted for everyday use.",
      href: "/products?category=pouches",
      bg: "linear-gradient(135deg, #dcd4c8 0%, #c8b898 100%)",
    },
    {
      emoji: "👨‍🍳",
      name: "Aprons",
      description:
        "Kitchen and studio aprons for cooks, artists, and young helpers — made from upcycled denim and cotton.",
      href: "/products?category=aprons",
      bg: "linear-gradient(135deg, #c8d4c0 0%, #a8b898 100%)",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #CFBB99 0%, #E5D7C4 40%, #F5F0E8 75%, #f0ece4 100%)",
        }}
      >
        {/* Decorative leaf SVG */}
        <svg
          className="absolute right-0 top-0 opacity-10 pointer-events-none"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="280" cy="160" rx="120" ry="180" stroke="#354024" strokeWidth="1.5" fill="none" transform="rotate(-30 280 160)" />
          <line x1="280" y1="40" x2="280" y2="280" stroke="#354024" strokeWidth="1" />
          <line x1="230" y1="100" x2="280" y2="130" stroke="#354024" strokeWidth="0.8" />
          <line x1="220" y1="140" x2="280" y2="165" stroke="#354024" strokeWidth="0.8" />
          <line x1="225" y1="180" x2="280" y2="198" stroke="#354024" strokeWidth="0.8" />
          <line x1="330" y1="100" x2="280" y2="130" stroke="#354024" strokeWidth="0.8" />
          <line x1="335" y1="140" x2="280" y2="165" stroke="#354024" strokeWidth="0.8" />
          <line x1="330" y1="180" x2="280" y2="198" stroke="#354024" strokeWidth="0.8" />
        </svg>

        {/* Decorative needle SVG */}
        <svg
          className="absolute left-8 bottom-20 opacity-8 pointer-events-none hidden md:block"
          width="40"
          height="160"
          viewBox="0 0 40 160"
          fill="none"
          aria-hidden="true"
        >
          <line x1="20" y1="0" x2="20" y2="120" stroke="#889063" strokeWidth="1.5" />
          <ellipse cx="20" cy="12" rx="5" ry="2" stroke="#889063" strokeWidth="1" fill="none" />
          <path d="M20 120 Q28 135 18 150 Q15 155 22 158" stroke="#889063" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="tagline mb-6" style={{ color: "var(--moss-green)" }}>
            Rotaract Club of Delhi Dynamic Leaders
          </p>
          <h1
            className="font-display mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 600,
              color: "var(--kombu-green)",
            }}
          >
            Handcrafted with purpose.
            <br />
            <em style={{ fontWeight: 400 }}>Worn with pride.</em>
          </h1>
          <div className="section-divider mb-6" />
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{
              color: "var(--cafe-noir)",
              fontFamily: "Montserrat, sans-serif",
              maxWidth: "540px",
              margin: "0 auto 2.5rem",
              opacity: 0.85,
            }}
          >
            Every EcoSevika product is made by a woman from an underserved
            community — using fabric that would otherwise be waste. Buy with
            purpose. Wear with meaning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/story" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section style={{ backgroundColor: "var(--kombu-green)" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              emoji: "♻️",
              title: "Upcycled Fabric",
              body: "We use donated fabrics that would otherwise end up in landfills. Zero new raw material.",
            },
            {
              emoji: "👩‍🎨",
              title: "Women Artisans",
              body: "Each product is handcrafted by women from underserved communities — skilled, paid, empowered.",
            },
            {
              emoji: "🛍️",
              title: "Market-Ready",
              body: "Quality products that generate real income and sustain livelihoods long-term.",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3
                className="font-subheading text-lg mb-2"
                style={{ color: "var(--bone)", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--tan)", opacity: 0.85 }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category grid */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="tagline text-center mb-3" style={{ color: "var(--moss-green)" }}>
            What we make
          </p>
          <h2
            className="font-display text-center mb-2"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--kombu-green)",
              fontWeight: 600,
            }}
          >
            Our Collections
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group block rounded-sm overflow-hidden transition-shadow duration-300"
                style={{
                  border: "1px solid var(--tan)",
                  boxShadow: "0 1px 4px rgba(53,64,36,0.05)",
                }}
              >
                {/* Visual area */}
                <div
                  className="w-full h-36 flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-105"
                  style={{ background: cat.bg }}
                >
                  {cat.emoji}
                </div>
                {/* Text */}
                <div className="p-5" style={{ backgroundColor: "white" }}>
                  <h3
                    className="font-subheading text-base mb-2"
                    style={{ color: "var(--kombu-green)" }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: "var(--cafe-noir)", opacity: 0.75 }}
                  >
                    {cat.description}
                  </p>
                  <span
                    className="tagline"
                    style={{ color: "var(--moss-green)", fontSize: "0.6rem" }}
                  >
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story split section */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--bone)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="tagline mb-4" style={{ color: "var(--moss-green)" }}>
              The story behind each stitch
            </p>
            <h2
              className="font-display mb-6 leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "var(--kombu-green)",
                fontWeight: 600,
              }}
            >
              Every thread carries a woman&apos;s story.
            </h2>
            <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "var(--cafe-noir)", opacity: 0.85 }}
            >
              Ecosevika began with a simple belief: that a woman&apos;s skill
              should translate into economic dignity. We collect donated fabrics
              from homes, schools, and businesses — fabric that would otherwise
              be discarded — and we put it in the hands of women who transform
              it into beautiful, functional products.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--cafe-noir)", opacity: 0.85 }}
            >
              When you carry an EcoSevika bag, you carry three things at once:
              a woman&apos;s craft, a piece of upcycled heritage, and a quiet
              vote for a more sustainable world.
            </p>
            <Link href="/story" className="btn-outline">
              Read the Full Story
            </Link>
          </div>

          {/* Decorative SVG */}
          <div className="flex justify-center items-center">
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              aria-hidden="true"
            >
              {/* Outer organic circle */}
              <circle cx="160" cy="160" r="130" stroke="#889063" strokeWidth="1" fill="none" strokeDasharray="4 6" />

              {/* Leaf */}
              <ellipse cx="160" cy="130" rx="55" ry="80" stroke="#354024" strokeWidth="1.5" fill="none" transform="rotate(10 160 130)" />
              <line x1="160" y1="60" x2="155" y2="200" stroke="#354024" strokeWidth="1" />
              <line x1="130" y1="100" x2="155" y2="115" stroke="#354024" strokeWidth="0.8" />
              <line x1="125" y1="130" x2="154" y2="140" stroke="#354024" strokeWidth="0.8" />
              <line x1="188" y1="100" x2="156" y2="115" stroke="#354024" strokeWidth="0.8" />
              <line x1="192" y1="130" x2="156" y2="140" stroke="#354024" strokeWidth="0.8" />

              {/* Needle */}
              <line x1="200" y1="80" x2="195" y2="230" stroke="#889063" strokeWidth="1.5" />
              <ellipse cx="200" cy="90" rx="4" ry="2.5" stroke="#889063" strokeWidth="1" fill="none" transform="rotate(-5 200 90)" />
              <path d="M195 230 Q210 248 190 262 Q184 268 194 272" stroke="#889063" strokeWidth="1.2" fill="none" />

              {/* Woman silhouette (simplified) */}
              <path
                d="M90 200 Q80 180 85 160 Q88 145 100 140 Q110 138 115 150 Q120 162 112 175 Q105 188 110 200"
                stroke="#4C3D19"
                strokeWidth="1.2"
                fill="none"
                opacity="0.5"
              />

              {/* Small leaves */}
              <ellipse cx="250" cy="200" rx="12" ry="20" stroke="#889063" strokeWidth="0.8" fill="none" transform="rotate(25 250 200)" opacity="0.5" />
              <ellipse cx="70" cy="240" rx="10" ry="16" stroke="#889063" strokeWidth="0.8" fill="none" transform="rotate(-15 70 240)" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="font-display italic mb-6"
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              color: "var(--kombu-green)",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            &ldquo;Your purchase empowers a woman, upcycles fabric, and reduces waste.
            That&apos;s three good things in one.&rdquo;
          </p>
          <div className="section-divider mb-4" />
          <p className="tagline" style={{ color: "var(--moss-green)" }}>
            The EcoSevika Promise
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "var(--tan)" }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "2rem", color: "var(--kombu-green)", fontWeight: 600 }}
          >
            Ready to shop with purpose?
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--cafe-noir)", opacity: 0.8 }}
          >
            Browse our collection and enquire via WhatsApp. We&apos;ll get back to you promptly.
          </p>
          <Link href="/products" className="btn-primary">
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
