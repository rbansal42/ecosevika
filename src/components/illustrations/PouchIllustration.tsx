import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function PouchIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="45" y="72" width="70" height="58" rx="4" stroke="#354024" strokeWidth="1.5" />
      <line x1="45" y1="88" x2="115" y2="88" stroke="#354024" strokeWidth="1.2" />
      <circle cx="80" cy="80" r="4" stroke="#354024" strokeWidth="1" />
      <path d="M60 72 L60 62 Q80 52 100 62 L100 72" stroke="#354024" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
