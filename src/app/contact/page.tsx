import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EcoSevika",
  description: "Reach out to EcoSevika for product enquiries, bulk orders, fabric donations, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-white)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #E5D7C4 0%, #F5F0E8 70%)",
        }}
      >
        <p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
          We'd love to hear from you
        </p>
        <h1
          className="font-display mb-4"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "var(--kombu-green)", fontWeight: 600 }}
        >
          Get in Touch
        </h1>
        <div className="section-divider" />
      </section>

      {/* Contact cards */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919667545342?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20EcoSevika%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 transition-shadow duration-300"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--tan)",
              boxShadow: "0 1px 4px rgba(53,64,36,0.05)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(53,64,36,0.12)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(53,64,36,0.05)")
            }
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "var(--bone)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#354024">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <p className="tagline mb-2" style={{ color: "var(--moss-green)" }}>
              Fastest response
            </p>
            <h3
              className="font-subheading text-xl mb-2"
              style={{ color: "var(--kombu-green)" }}
            >
              WhatsApp
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--cafe-noir)", opacity: 0.75 }}>
              +91 96675 45342
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--cafe-noir)", opacity: 0.65 }}>
              Message us for product enquiries, bulk orders, pricing, or fabric donations. We typically reply within a few hours.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:rotaractclubofdynamicleaders@gmail.com?subject=EcoSevika%20Enquiry"
            className="block p-8 transition-shadow duration-300"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--tan)",
              boxShadow: "0 1px 4px rgba(53,64,36,0.05)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(53,64,36,0.12)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(53,64,36,0.05)")
            }
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "var(--bone)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#354024" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <p className="tagline mb-2" style={{ color: "var(--moss-green)" }}>
              For detailed queries
            </p>
            <h3
              className="font-subheading text-xl mb-2"
              style={{ color: "var(--kombu-green)" }}
            >
              Email
            </h3>
            <p
              className="text-xs mb-4 break-all"
              style={{ color: "var(--cafe-noir)", opacity: 0.75 }}
            >
              rotaractclubofdynamicleaders@gmail.com
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--cafe-noir)", opacity: 0.65 }}>
              For partnership proposals, bulk corporate orders, or fabric donation coordination.
            </p>
          </a>
        </div>

        {/* Location */}
        <div
          className="mt-8 p-8 text-center"
          style={{
            backgroundColor: "var(--bone)",
            border: "1px solid var(--tan)",
          }}
        >
          <p className="tagline mb-3" style={{ color: "var(--moss-green)" }}>
            Where we are
          </p>
          <h3
            className="font-subheading text-lg mb-2"
            style={{ color: "var(--kombu-green)" }}
          >
            Delhi NCR, India
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--cafe-noir)", opacity: 0.75 }}>
            EcoSevika is an initiative of the{" "}
            <a
              href="https://racddl.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--kombu-green)", textDecoration: "underline" }}
            >
              Rotaract Club of Delhi Dynamic Leaders
            </a>
            , District 3011.
          </p>
        </div>
      </section>
    </div>
  );
}
