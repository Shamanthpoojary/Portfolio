import { motion } from "framer-motion";

// Decorative animated PCB trace background. Purely visual, aria-hidden.
// Each trace carries a bright pulse that travels its full length; the dim
// base path underneath keeps the routing readable between pulses.
const TRACES = [
  { d: "M-20,90 H240 L300,150 H560 L610,100 H900 L960,160 H1220", dur: 4.2, delay: 0.2, gap: 1.6 },
  { d: "M-20,250 H160 L210,200 H430 L480,250 H720 L780,190 H1020 L1070,240 H1220", dur: 5.4, delay: 1.1, gap: 2.2 },
  { d: "M1220,420 H980 L930,370 H700 L650,420 H420 L370,360 H120 L60,420 H-20", dur: 5, delay: 0.6, gap: 1.9 },
  { d: "M-20,560 H180 L240,620 H520 L570,570 H860 L920,630 H1220", dur: 4.6, delay: 1.8, gap: 2.6 },
  { d: "M120,-20 V60 L180,120 V300 L120,360 V720", dur: 3.8, delay: 0.9, gap: 3 },
  { d: "M1080,-20 V80 L1020,140 V320 L1080,380 V720", dur: 4, delay: 2.3, gap: 2.4 },
  { d: "M600,-20 V40 L660,100 V260 L600,320 V470", dur: 3.4, delay: 1.5, gap: 3.4 },
];

const PADS = [
  [300, 150], [610, 100], [960, 160], [210, 200], [480, 250], [780, 190],
  [930, 370], [650, 420], [370, 360], [240, 620], [570, 570], [920, 630],
  [180, 120], [1020, 140], [660, 100],
];

export default function CircuitBackground({ className = "" }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="signal-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {TRACES.map((trace, i) => (
        <g key={i}>
          <motion.path
            d={trace.d}
            fill="none"
            stroke="var(--color-trace)"
            strokeWidth="1.25"
            strokeLinecap="square"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.16 }}
            transition={{ duration: 1.6, delay: i * 0.12, ease: "easeInOut" }}
          />
          <motion.path
            d={trace.d}
            fill="none"
            stroke="var(--color-trace)"
            strokeWidth="2.4"
            strokeLinecap="round"
            filter="url(#signal-glow)"
            initial={{ pathLength: 0.06, pathOffset: 0, opacity: 0 }}
            animate={{ pathLength: 0.06, pathOffset: 1, opacity: 0.95 }}
            transition={{
              pathOffset: {
                duration: trace.dur,
                delay: trace.delay,
                repeat: Infinity,
                repeatDelay: trace.gap,
                ease: "linear",
              },
              opacity: { duration: 0.6, delay: trace.delay },
            }}
          />
        </g>
      ))}

      {PADS.map(([cx, cy], i) => (
        <motion.circle
          key={`pad-${i}`}
          cx={cx}
          cy={cy}
          r="2.6"
          fill="var(--color-bg)"
          stroke="var(--color-trace)"
          strokeWidth="1.1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3.2,
            delay: i * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
