import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function BagIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M50 65 L110 65 L120 130 L40 130 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M65 65 C65 50 95 50 95 65" stroke="#354024" strokeWidth="1.5" />
      <line x1="40" y1="90" x2="120" y2="90" stroke="#354024" strokeWidth="0.8" />
      <line x1="75" y1="90" x2="75" y2="130" stroke="#354024" strokeWidth="0.8" />
      <line x1="85" y1="90" x2="85" y2="130" stroke="#354024" strokeWidth="0.8" />
    </svg>
  );
}
