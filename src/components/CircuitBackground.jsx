import { motion } from "framer-motion";

// Decorative animated PCB trace background. Purely visual, aria-hidden.
export default function CircuitBackground({ className = "" }) {
  const traces = [
    "M0,80 H180 L210,110 H420 L450,140 H700",
    "M0,220 H120 L150,190 H360 L400,230 H620 L650,260 H900",
    "M1000,60 H820 L790,90 H600 L560,50 H340",
    "M1000,300 H860 L830,270 H660 L620,310 H460",
    "M50,0 V60 L80,90 V200",
    "M950,0 V90 L920,120 V240",
  ];

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1000 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {traces.map((d, i) => (
        <g key={i}>
          <motion.path
            d={d}
            fill="none"
            stroke="var(--color-border-hi)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.8, delay: i * 0.15, ease: "easeInOut" }}
          />
          <motion.circle
            r="3"
            fill="var(--color-trace)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: 1.5 + i * 0.4,
              repeat: Infinity,
              repeatDelay: 2 + i,
              ease: "linear",
            }}
          >
            <animateMotion dur="3s" repeatCount="indefinite" path={d} />
          </motion.circle>
        </g>
      ))}
    </svg>
  );
}
