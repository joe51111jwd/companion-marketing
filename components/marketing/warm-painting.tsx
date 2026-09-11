/** Tonalist wash behind the product window — CSS/SVG only, no photo bytes. */
export function WarmPainting({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="cp-sky" x1="0" y1="0" x2="0.08" y2="1">
          <stop offset="0%" stopColor="#efe4cf" />
          <stop offset="28%" stopColor="#d9c7a8" />
          <stop offset="58%" stopColor="#b79a76" />
          <stop offset="100%" stopColor="#6d5640" />
        </linearGradient>
        <radialGradient id="cp-sun" cx="28%" cy="22%" r="38%">
          <stop offset="0%" stopColor="#fff4dc" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#e8c992" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#e8c992" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cp-far" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4ae8c" />
          <stop offset="100%" stopColor="#8d7356" />
        </linearGradient>
        <linearGradient id="cp-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6e50" />
          <stop offset="100%" stopColor="#4d3b2b" />
        </linearGradient>
        <filter id="cp-soft">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="cp-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>
      <rect width="1600" height="900" fill="url(#cp-sky)" />
      <rect width="1600" height="900" fill="url(#cp-sun)" />
      <g filter="url(#cp-soft)" opacity="0.9">
        <ellipse cx="200" cy="560" rx="520" ry="140" fill="url(#cp-far)" />
        <ellipse cx="860" cy="540" rx="420" ry="110" fill="#b39a78" />
        <ellipse cx="1380" cy="560" rx="380" ry="130" fill="#9a8062" />
        <ellipse cx="480" cy="680" rx="620" ry="180" fill="url(#cp-mid)" />
        <ellipse cx="1200" cy="720" rx="560" ry="200" fill="#3f3124" />
        <ellipse cx="180" cy="430" rx="70" ry="150" fill="#4a3a2c" />
        <ellipse cx="280" cy="450" rx="56" ry="130" fill="#3b2e23" />
        <ellipse cx="360" cy="470" rx="40" ry="100" fill="#32271d" />
        <ellipse cx="1420" cy="420" rx="90" ry="170" fill="#433428" />
        <ellipse cx="1510" cy="450" rx="60" ry="130" fill="#2f251c" />
      </g>
      <rect width="1600" height="900" filter="url(#cp-grain)" opacity="0.18" />
    </svg>
  );
}
