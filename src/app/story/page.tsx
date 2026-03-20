import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — EcoSevika",
  description:
    "How EcoSevika began, what drives us, and the women whose hands bring every product to life.",
};

const milestones = [
  {
    year: "The Problem",
    title: "Fabric waste goes unnoticed",
    body: "Millions of tonnes of textile waste are generated in India every year. Homes, schools, and businesses donate or discard fabric that still has life in it. We decided to give it a second one.",
  },
  {
    year: "The Solution",
    title: "Skills + Fabric = Livelihood",
    body: "We partner with women from underserved communities in Delhi NCR, train them in textile crafts, and connect them to fabric donations. The result: a dignified income and a beautiful product.",
  },
  {
    year: "The Products",
    title: "Made by hand, sold with purpose",
    body: "Every bag, pouch, and apron is handcrafted. No two are identical. Each carries the artisan's personal touch — and your support ensures she keeps crafting.",
  },
  {
    year: "The Vision",
    title: "A circular economy rooted in community",
    body: "We envision a city where fabric waste becomes women's wealth — where sustainability and empowerment aren't separate causes, but the same one.",
  },
];

export default function StoryPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-white)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, #d4dcc8 0%, #E5D7C4 40%, #F5F0E8 80%)",
        }}
      >
        <p className="tagline mb-4" style={{ color: "var(--moss-green)" }}>
          Where it all began
        </p>
        <h1
          className="font-display mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "var(--kombu-green)",
            fontWeight: 600,
          }}
        >
          Our Story
        </h1>
        <div className="section-divider mb-6" />
        <p
          className="text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--cafe-noir)", opacity: 0.85 }}
        >
          EcoSevika is an initiative of the Rotaract Club of Delhi Dynamic
          Leaders — born from the belief that a woman&apos;s skill should be her
          source of independence, and that waste should never go to waste.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--tan)" }}
          />

          <div className="flex flex-col gap-14">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start">
                {/* Node */}
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center hidden md:flex"
                  style={{
                    backgroundColor: "var(--kombu-green)",
                    border: "3px solid var(--warm-white)",
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: "var(--bone)" }}>
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="tagline mb-2" style={{ color: "var(--moss-green)" }}>
                    {m.year}
                  </p>
                  <h3
                    className="font-subheading text-xl mb-3"
                    style={{ color: "var(--kombu-green)", fontWeight: 600 }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--cafe-noir)", opacity: 0.8 }}
                  >
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 px-6"
        style={{ backgroundColor: "var(--bone)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
            What we stand for
          </p>
          <h2
            className="font-display mb-10"
            style={{ fontSize: "2rem", color: "var(--kombu-green)", fontWeight: 600 }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Dignity", body: "Every artisan is a skilled professional, not a charity case. We pay fairly and credit their craft." },
              { title: "Sustainability", body: "We use upcycled fabric exclusively. No new raw material, no greenwashing — just honest circular practice." },
              { title: "Community", body: "Rotaract brings people together across backgrounds. EcoSevika is that spirit expressed through textile and trade." },
            ].map((v) => (
              <div
                key={v.title}
                className="p-6"
                style={{ backgroundColor: "white", border: "1px solid var(--tan)" }}
              >
                <h4
                  className="font-subheading text-lg mb-3"
                  style={{ color: "var(--kombu-green)" }}
                >
                  {v.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--cafe-noir)", opacity: 0.8 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ backgroundColor: "var(--kombu-green)" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "2rem", color: "var(--bone)", fontWeight: 600 }}
          >
            Join the movement
          </h2>
          <p
            className="text-sm mb-8 leading-relaxed"
            style={{ color: "var(--tan)", opacity: 0.9 }}
          >
            Buy a product. Donate fabric. Spread the word. Every action, however small, is a thread in the larger fabric of change.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/products"
              className="btn-primary"
              style={{ backgroundColor: "var(--bone)", color: "var(--kombu-green)", borderColor: "var(--bone)" }}
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="btn-outline"
              style={{ borderColor: "var(--bone)", color: "var(--bone)" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
