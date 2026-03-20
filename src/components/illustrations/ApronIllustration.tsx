import type { IllustrationProps } from "./types";

export default function ApronIllustration({ className, style }: IllustrationProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M55 45 L105 45 L115 140 L45 140 Z" stroke="#354024" strokeWidth="1.5" />
      <path d="M55 45 C55 38 65 33 80 33 C95 33 105 38 105 45" stroke="#354024" strokeWidth="1.5" />
      <rect x="62" y="90" width="36" height="28" rx="1" stroke="#354024" strokeWidth="1" />
      <line x1="70" y1="58" x2="90" y2="58" stroke="#354024" strokeWidth="0.8" />
      <line x1="80" y1="45" x2="80" y2="140" stroke="#354024" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}
