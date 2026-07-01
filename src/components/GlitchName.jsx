import { useEffect, useRef, useState } from "react";

function randomBit() {
  return Math.random() < 0.5 ? "0" : "1";
}

// Preserves spaces so the layout never reflows mid-glitch.
function scramble(text, revealCount) {
  return text
    .split("")
    .map((ch, i) => (ch === " " || i < revealCount ? ch : randomBit()))
    .join("");
}

const SCRAMBLE_MS = 380;
const SCRAMBLE_TICK = 45;
const DECODE_TICK = 35;
const FIRST_GLITCH_DELAY = 1800;
const REPEAT_EVERY = 14000;

export default function GlitchName({ text, className }) {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const track = (id) => {
      timers.current.push(id);
      return id;
    };

    function decodeTick(revealed) {
      setDisplay(scramble(text, revealed));
      if (revealed < text.length) {
        track(setTimeout(() => decodeTick(revealed + 1), DECODE_TICK));
      } else {
        setDisplay(text);
        setGlitching(false);
      }
    }

    function scrambleTick(elapsed) {
      setDisplay(scramble(text, 0));
      if (elapsed < SCRAMBLE_MS) {
        track(setTimeout(() => scrambleTick(elapsed + SCRAMBLE_TICK), SCRAMBLE_TICK));
      } else {
        decodeTick(0);
      }
    }

    function runGlitch() {
      setGlitching(true);
      scrambleTick(0);
    }

    track(setTimeout(runGlitch, FIRST_GLITCH_DELAY));
    const interval = setInterval(runGlitch, REPEAT_EVERY);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      clearInterval(interval);
    };
  }, [text]);

  return (
    <span className={glitching ? "glitch-text" : className}>{display}</span>
  );
}
