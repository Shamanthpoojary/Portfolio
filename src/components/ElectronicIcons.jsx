// Hand-drawn schematic symbols (resistor, capacitor, IC) — used as small
// component-style accents to reinforce the electronics/firmware identity.

export function ResistorIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 40 20" className={className} aria-hidden="true">
      <path
        d="M2,10 H8 L11,3 L15,17 L19,3 L23,17 L27,3 L31,10 H38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CapacitorIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 40 20" className={className} aria-hidden="true">
      <path
        d="M2,10 H16 M16,2 V18 M24,2 V18 M24,10 H38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChipIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="11" y="11" width="18" height="18" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="11" y1="16" x2="4" y2="16" />
        <line x1="11" y1="24" x2="4" y2="24" />
        <line x1="29" y1="16" x2="36" y2="16" />
        <line x1="29" y1="24" x2="36" y2="24" />
        <line x1="16" y1="11" x2="16" y2="4" />
        <line x1="24" y1="11" x2="24" y2="4" />
        <line x1="16" y1="29" x2="16" y2="36" />
        <line x1="24" y1="29" x2="24" y2="36" />
      </g>
    </svg>
  );
}
