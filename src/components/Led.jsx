// A small indicator LED — styled like a real through-hole LED (domed highlight,
// dark rim, glow) that blinks on/off rather than fading smoothly.
export default function Led({ size = 8, top, left, right, bottom, delay = 0, duration = 1.8 }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute animate-blink rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        background:
          "radial-gradient(circle at 32% 28%, #d9fff1 0%, var(--color-trace) 42%, #0d5c40 100%)",
        boxShadow:
          "0 0 6px 2px rgba(46,230,168,0.85), 0 0 14px 5px rgba(46,230,168,0.3), inset 0 0 2px rgba(0,0,0,0.5)",
      }}
    />
  );
}
