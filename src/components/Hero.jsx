import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import CircuitBackground from "./CircuitBackground";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { ResistorIcon, ChipIcon, CapacitorIcon } from "./ElectronicIcons";
import GlitchName from "./GlitchName";
import { personal, stats } from "../data/content";

const STAT_ICONS = [ResistorIcon, ChipIcon, CapacitorIcon];

const ROLES = [
  "BLE / BT Firmware Engineer",
  "RTOS & Bare-Metal Developer",
  "STM32 · ESP32 · EFR32",
  "Embedded GUI (LVGL) Builder",
];

function useTypewriter(words, { typeMs = 55, deleteMs = 30, holdMs = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteMs : typeMs);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
}

function Waveform() {
  return (
    <svg viewBox="0 0 400 60" className="h-10 w-full max-w-xs text-trace" aria-hidden="true">
      <motion.path
        d="M0,30 L30,30 L40,10 L50,50 L60,30 L90,30 L100,15 L110,45 L120,30 L150,30 L160,5 L170,55 L180,30 L210,30 L220,20 L230,40 L240,30 L270,30 L280,10 L290,50 L300,30 L400,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pcb-grid-bg"
    >
      <CircuitBackground className="opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-4 font-mono text-sm text-copper"
        >
          {"// hello_world.c"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl font-mono text-4xl font-extrabold leading-tight text-text sm:text-5xl md:text-6xl"
        >
          I&apos;m <GlitchName text={personal.name} className="text-trace text-glow" />
        </motion.h1>

        <div className="mt-4 h-8 font-mono text-lg text-muted sm:text-xl">
          <span className="text-copper">$</span> {typed}
          <span className="ml-1 inline-block h-5 w-2.5 translate-y-0.5 animate-blink bg-trace" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 max-w-xl text-base text-muted sm:text-lg"
        >
          {personal.summary}
        </motion.p>

        <Waveform />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded border border-trace bg-trace/10 px-5 py-2.5 font-mono text-sm font-semibold text-trace transition-colors hover:bg-trace/20"
          >
            view_projects()
          </a>
          <a
            href="#contact"
            className="rounded border border-border-hi px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-trace hover:text-trace"
          >
            get_in_touch()
          </a>
          <div className="flex items-center gap-3 pl-2 text-muted">
            <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-trace">
              <Mail size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-trace">
              <LinkedinIcon size={18} />
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-trace">
              <GithubIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded border border-border bg-panel/60 px-4 py-3"
              >
                <Icon size={28} className="shrink-0 text-copper" />
                <div>
                  <div className="font-mono text-xl font-bold text-trace">{s.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-trace"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block"
        >
          <ArrowDown size={20} />
        </motion.span>
      </a>
    </section>
  );
}
