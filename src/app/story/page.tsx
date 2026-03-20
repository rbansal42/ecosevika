import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — EcoSevika",
  description:
    "How EcoSevika began, what drives us, and the women whose hands bring every product to life.",
};

const milestones = [
  {
    label: "The Problem",
    title: "Fabric waste goes unnoticed",
    body: "Millions of tonnes of textile waste are generated in India every year. Homes, schools, and businesses donate or discard fabric that still has life in it. We decided to give it a second one.",
  },
  {
    label: "The Solution",
    title: "Skills + Fabric = Livelihood",
    body: "We partner with women from underserved communities in Delhi NCR, train them in textile crafts, and connect them to fabric donations. The result: a dignified income and a beautiful product.",
  },
  {
    label: "The Products",
    title: "Made by hand, sold with purpose",
    body: "Every bag, pouch, and apron is handcrafted. No two are identical. Each carries the artisan's personal touch — and your support ensures she keeps crafting.",
  },
  {
    label: "The Vision",
    title: "A circular economy rooted in community",
    body: "We envision a city where fabric waste becomes women's wealth — where sustainability and empowerment aren't separate causes, but the same one.",
  },
];

export default function StoryPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-white)", minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="py-28 px-8 relative overflow-hidden"
        style={{ backgroundColor: "var(--bone)" }}
      >
        {/* Decorative watermark */}
        <svg
          className="absolute right-0 top-0 bottom-0 h-full opacity-5 pointer-events-none"
          viewBox="0 0 300 600"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M200 20 C280 60 310 180 290 300 C270 420 200 500 150 530 C100 560 60 520 50 440 C40 360 80 260 130 180 C160 130 170 10 200 20Z" stroke="#354024" strokeWidth="1.5" fill="none" />
          <path d="M200 20 C190 150 178 280 150 530" stroke="#354024" strokeWidth="1" />
          <line x1="155" y1="60" x2="90" y2="80" stroke="#354024" strokeWidth="0.7" />
          <line x1="200" y1="60" x2="140" y2="80" stroke="#354024" strokeWidth="0.7" />
          <line x1="265" y1="80" x2="200" y2="80" stroke="#354024" strokeWidth="0.7" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="tagline mb-6" style={{ color: "var(--moss-green)" }}>
            Where it all began
          </p>
          <h1
            className="font-display leading-none mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 300,
              color: "var(--kombu-green)",
            }}
          >
            Our
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>Story</em>
          </h1>
          <div
            className="mb-8"
            style={{ width: "36px", height: "1px", backgroundColor: "var(--moss-green)" }}
          />
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              color: "var(--cafe-noir)",
              opacity: 0.75,
              maxWidth: "520px",
              lineHeight: 1.9,
            }}
          >
            EcoSevika is an initiative of the Rotaract Club of Delhi Dynamic
            Leaders — born from the belief that a woman&apos;s skill should be her
            source of independence, and that waste should never go to waste.
          </p>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: "2.2rem",
              width: "1px",
              backgroundColor: "rgba(207,187,153,0.5)",
            }}
          />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.label}
                className="flex gap-10 items-start"
                style={{ paddingBottom: i < milestones.length - 1 ? "4rem" : 0 }}
              >
                {/* Number node — square on md+, dot on mobile */}
                <div
                  className="relative z-10 flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--warm-white)",
                    border: "1px solid rgba(207,187,153,0.6)",
                  }}
                >
                  {/* Mobile: simple dot */}
                  <span
                    className="md:hidden block rounded-full"
                    style={{ width: "8px", height: "8px", backgroundColor: "var(--moss-green)" }}
                  />
                  {/* Desktop: roman numeral */}
                  <span
                    className="hidden md:block font-display"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      fontStyle: "italic",
                      color: "var(--moss-green)",
                    }}
                  >
                    {["I", "II", "III", "IV"][i]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <p
                    className="tagline mb-3"
                    style={{ color: "var(--moss-green)" }}
                  >
                    {m.label}
                  </p>
                  <h3
                    className="font-display mb-4"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "var(--kombu-green)",
                      lineHeight: 1.2,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--cafe-noir)",
                      opacity: 0.75,
                      lineHeight: 1.9,
                      maxWidth: "520px",
                    }}
                  >
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-20 px-8" style={{ backgroundColor: "var(--bone)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="tagline mb-5" style={{ color: "var(--moss-green)" }}>
            What we stand for
          </p>
          <h2
            className="font-display mb-14 leading-none"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "var(--kombu-green)",
            }}
          >
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(207,187,153,0.4)" }}>
            {[
              {
                title: "Dignity",
                body: "Every artisan is a skilled professional, not a charity case. We pay fairly and credit their craft.",
              },
              {
                title: "Sustainability",
                body: "We use upcycled fabric exclusively. No new raw material, no greenwashing — just honest circular practice.",
              },
              {
                title: "Community",
                body: "Rotaract brings people together across backgrounds. EcoSevika is that spirit expressed through textile and trade.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-10"
                style={{ backgroundColor: "var(--warm-white)" }}
              >
                <h4
                  className="font-display mb-5"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--kombu-green)",
                    lineHeight: 1,
                  }}
                >
                  {v.title}
                </h4>
                <div
                  className="mb-5"
                  style={{ width: "28px", height: "1px", backgroundColor: "var(--moss-green)" }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--cafe-noir)",
                    opacity: 0.75,
                    lineHeight: 1.9,
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: "var(--kombu-green)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="font-display leading-none"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 300,
                color: "var(--bone)",
              }}
            >
              Join the
              <br />
              <em style={{ fontStyle: "italic" }}>movement</em>
            </h2>
          </div>
          <div>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "var(--tan)",
                opacity: 0.85,
                lineHeight: 1.9,
              }}
            >
              Buy a product. Donate fabric. Spread the word. Every action,
              however small, is a thread in the larger fabric of change.
            </p>
            <div className="btn-group">
              <Link href="/products" className="btn-primary-bone">
                Shop Now
              </Link>
              <Link href="/contact" className="btn-outline-bone">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
