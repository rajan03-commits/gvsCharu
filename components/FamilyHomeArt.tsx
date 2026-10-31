export default function FamilyHomeArt({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 400 320" className={className}>
      <circle cx="200" cy="165" r="150" className="fill-surface" />
      <ellipse cx="200" cy="278" rx="165" ry="14" className="fill-border" />
      <g className="fill-background">
        <ellipse cx="86" cy="86" rx="30" ry="12" />
        <ellipse cx="108" cy="78" rx="20" ry="12" />
        <ellipse cx="322" cy="70" rx="26" ry="10" />
        <ellipse cx="340" cy="63" rx="16" ry="10" />
      </g>
      <circle cx="300" cy="112" r="14" className="fill-accent" />
      <rect x="330" y="228" width="8" height="40" rx="3" className="fill-primary-hover" />
      <circle cx="334" cy="212" r="26" className="fill-primary" />
      <circle cx="352" cy="228" r="16" className="fill-primary" opacity="0.8" />
      <circle cx="82" cy="260" r="16" className="fill-primary" opacity="0.9" />
      <circle cx="104" cy="266" r="11" className="fill-primary" opacity="0.7" />
      <rect x="246" y="92" width="18" height="40" rx="2" className="fill-primary-hover" />
      <rect x="122" y="150" width="156" height="118" rx="6" className="fill-accent" />
      <polygon points="104,156 200,78 296,156" className="fill-primary" />
      <rect x="104" y="152" width="192" height="10" rx="5" className="fill-primary-hover" />
      <path d="M200 142 C 177 126, 183 106, 200 117 C 217 106, 223 126, 200 142 Z" className="fill-background" />
      <rect x="178" y="206" width="44" height="62" rx="22" ry="22" className="fill-primary-hover" />
      <circle cx="213" cy="240" r="3" className="fill-accent" />
      <g className="fill-background">
        <rect x="138" y="184" width="30" height="30" rx="4" />
        <rect x="232" y="184" width="30" height="30" rx="4" />
      </g>
      <g className="stroke-primary-hover" strokeWidth="2">
        <line x1="153" y1="184" x2="153" y2="214" />
        <line x1="138" y1="199" x2="168" y2="199" />
        <line x1="247" y1="184" x2="247" y2="214" />
        <line x1="232" y1="199" x2="262" y2="199" />
      </g>
    </svg>
  );
}