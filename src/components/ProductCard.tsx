import type { JSX } from "react";
import { whatsappUrl } from "@/lib/constants";
import type { IllustrationProps } from "./illustrations/types";

type IllustrationComponent = (props: IllustrationProps) => JSX.Element;

interface ProductCardProps {
  name: string;
  description: string;
  categoryBg: string;
  tags?: string[];
  Illustration: IllustrationComponent;
  materials?: string;
}

export default function ProductCard({
  name,
  description,
  categoryBg,
  tags = [],
  Illustration,
  materials,
}: ProductCardProps) {
  const url = whatsappUrl(
    `Hi, I'm interested in the EcoSevika ${name}. Can you share more details?`
  );

  return (
    <div
      className="product-card flex flex-col"
      style={{
        backgroundColor: "var(--warm-white)",
        border: "1px solid rgba(207,187,153,0.5)",
      }}
    >
      {/* Visual area */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          backgroundColor: categoryBg,
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Illustration className="w-24 h-24" style={{ opacity: 0.45 }} />

        {/* Made to order pill */}
        <span
          className="tagline"
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            zIndex: 10,
            color: "var(--kombu-green)",
            backgroundColor: "rgba(245,240,232,0.85)",
            padding: "0.2rem 0.6rem",
            borderRadius: "2px",
          }}
        >
          Made to order
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-display mb-2 leading-snug"
          style={{
            fontSize: "1.15rem",
            fontWeight: 500,
            color: "var(--kombu-green)",
          }}
        >
          {name}
        </h3>

        {/* Wrap middle content to push CTA to bottom */}
        <div className="flex-1 flex flex-col">
          <p
            className="mb-2 leading-relaxed"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              color: "var(--cafe-noir)",
              opacity: 0.75,
              lineHeight: 1.8,
            }}
          >
            {description}
          </p>

          {materials && (
            <p
              className="mb-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.75rem",
                color: "var(--moss-green)",
                opacity: 0.85,
              }}
            >
              {materials}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <ul
              role="list"
              className="flex flex-wrap gap-1.5 mt-auto mb-5"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--moss-green)",
                    backgroundColor: "var(--bone)",
                    border: "1px solid rgba(207,187,153,0.6)",
                    padding: "0.25rem 0.6rem",
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* WhatsApp CTA */}
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
