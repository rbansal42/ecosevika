import type { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default function CanvasIllustration({ className, style }: Props) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
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
