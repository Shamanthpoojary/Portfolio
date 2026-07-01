import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "../data/content";

const LEFT_PINS = [
  { num: "1", icon: Mail, label: "EMAIL", value: personal.email, href: `mailto:${personal.email}` },
  { num: "2", icon: Phone, label: "PHONE", value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, "")}` },
  { num: "3", icon: MapPin, label: "LOCATION", value: personal.location, href: undefined },
];

const RIGHT_PINS = [
  { num: "4", icon: LinkedinIcon, label: "LINKEDIN", value: "linkedin.com/in/shamanth-poojary", href: personal.linkedin },
  { num: "5", icon: GithubIcon, label: "GITHUB", value: "github.com/shamanth-poojary", href: personal.github },
  { num: "6", icon: Zap, label: "STATUS", value: "OPEN TO WORK", href: undefined, active: true },
];

// Diagram geometry (px, fixed — this is a drawn schematic, not fluid text).
const W = 760;
const H = 320;
const CHIP_W = 176;
const CHIP_H = 220;
const CHIP_X = (W - CHIP_W) / 2;
const CHIP_Y = (H - CHIP_H) / 2;
const STUB = 16;

// 7 evenly spaced slots per vertical edge; the 2nd, 4th and 6th are wired
// out to real contact info, the rest are plain unlabeled leads.
const V_OFFSETS = [25, 50, 75, 100, 125, 150, 175].map((o) => CHIP_Y + o);
const ACTIVE_V_INDEX = [1, 3, 5];

// 5 evenly spaced decorative-only slots along each horizontal edge.
const H_OFFSETS = [28, 56, 84, 112, 140].map((o) => CHIP_X + o);

function edgeSlots(offsets, activeIndexes, activePins) {
  let activeCursor = 0;
  return offsets.map((pos, i) => {
    if (activeIndexes.includes(i)) {
      return { pos, active: true, pin: activePins[activeCursor++] };
    }
    return { pos, active: false };
  });
}

function DecorativeLead({ edge, pos }) {
  const base = "absolute bg-border-hi rounded-full";
  if (edge === "left") {
    return <span className={base} style={{ left: CHIP_X - STUB, top: pos - 1, width: STUB, height: 2 }} />;
  }
  if (edge === "right") {
    return <span className={base} style={{ left: CHIP_X + CHIP_W, top: pos - 1, width: STUB, height: 2 }} />;
  }
  if (edge === "top") {
    return <span className={base} style={{ left: pos - 1, top: CHIP_Y - STUB, width: 2, height: STUB }} />;
  }
  return <span className={base} style={{ left: pos - 1, top: CHIP_Y + CHIP_H, width: 2, height: STUB }} />;
}

function ActivePin({ pin, side, y }) {
  const Comp = pin.href ? motion.a : motion.div;
  const isLeft = side === "left";

  return (
    <Comp
      href={pin.href}
      target={pin.href?.startsWith("http") ? "_blank" : undefined}
      rel={pin.href?.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, x: isLeft ? -14 : 14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay: y * 0.002 }}
      style={
        isLeft
          ? { position: "absolute", left: 0, top: y - 15, width: CHIP_X, height: 30 }
          : { position: "absolute", left: CHIP_X + CHIP_W, top: y - 15, width: W - (CHIP_X + CHIP_W), height: 30 }
      }
      className={`group flex items-center ${isLeft ? "justify-end" : "justify-start"} ${
        pin.href ? "cursor-pointer" : ""
      }`}
    >
      {isLeft ? (
        <>
          <PinLabel pin={pin} />
          <Line active={pin.active} />
          <Dot active={pin.active} />
        </>
      ) : (
        <>
          <Dot active={pin.active} />
          <Line active={pin.active} />
          <PinLabel pin={pin} />
        </>
      )}
    </Comp>
  );
}

function Line({ active }) {
  return (
    <span
      className={`h-px flex-1 shrink-0 ${
        active ? "bg-trace" : "bg-trace-dim"
      } transition-colors group-hover:bg-trace`}
      style={{ minWidth: "1.25rem" }}
    />
  );
}

function Dot({ active }) {
  return (
    <span
      className={`z-10 h-2 w-2 shrink-0 rounded-full border-2 border-bg-soft ${
        active ? "bg-trace animate-blink" : "bg-trace-dim"
      } transition-colors group-hover:bg-trace`}
    />
  );
}

function PinLabel({ pin }) {
  return (
    <span className="flex items-center gap-2 px-3">
      <span className="rounded border border-border-hi px-1.5 py-0.5 font-mono text-[10px] text-muted group-hover:border-trace group-hover:text-trace">
        {pin.num}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-wider text-copper">
          {pin.label}
        </span>
        <span className="block truncate text-sm text-text group-hover:text-trace">
          {pin.value}
        </span>
      </span>
      <pin.icon size={16} className="shrink-0 text-muted group-hover:text-trace" />
    </span>
  );
}

function SchematicDiagram() {
  const leftSlots = edgeSlots(V_OFFSETS, ACTIVE_V_INDEX, LEFT_PINS);
  const rightSlots = edgeSlots(V_OFFSETS, ACTIVE_V_INDEX, RIGHT_PINS);

  return (
    <div className="mx-auto hidden lg:block" style={{ width: W, height: H }}>
      <div className="relative h-full w-full">
        {leftSlots.map((slot, i) =>
          slot.active ? (
            <ActivePin key={`l-${i}`} pin={slot.pin} side="left" y={slot.pos} />
          ) : (
            <DecorativeLead key={`l-${i}`} edge="left" pos={slot.pos} />
          )
        )}

        {rightSlots.map((slot, i) =>
          slot.active ? (
            <ActivePin key={`r-${i}`} pin={slot.pin} side="right" y={slot.pos} />
          ) : (
            <DecorativeLead key={`r-${i}`} edge="right" pos={slot.pos} />
          )
        )}

        {H_OFFSETS.map((x, i) => (
          <DecorativeLead key={`t-${i}`} edge="top" pos={x} />
        ))}
        {H_OFFSETS.map((x, i) => (
          <DecorativeLead key={`b-${i}`} edge="bottom" pos={x} />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", left: CHIP_X, top: CHIP_Y, width: CHIP_W, height: CHIP_H }}
          className="flex flex-col items-center justify-center gap-1 rounded border-2 border-trace bg-panel-hi"
        >
          <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-copper" />
          <span className="font-mono text-base font-bold text-trace text-glow">U1</span>
          <span className="font-mono text-[10px] tracking-wider text-text">SHAMANTH_IO</span>
          <span className="mt-1 font-mono text-[9px] tracking-widest text-muted">24-QFN</span>
        </motion.div>
      </div>
    </div>
  );
}

function MobilePinList() {
  const pins = [...LEFT_PINS, ...RIGHT_PINS];
  return (
    <div className="grid gap-3 lg:hidden">
      {pins.map((pin, i) => {
        const Comp = pin.href ? motion.a : motion.div;
        return (
          <Comp
            key={pin.label}
            href={pin.href}
            target={pin.href?.startsWith("http") ? "_blank" : undefined}
            rel={pin.href?.startsWith("http") ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex items-center gap-3 rounded-lg border border-border bg-panel p-4 transition-colors hover:border-trace"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border-hi font-mono text-xs text-muted group-hover:border-trace group-hover:text-trace">
              {pin.num}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-copper">
                {pin.label}
              </span>
              <span className="block truncate text-sm text-text">{pin.value}</span>
            </span>
            <pin.icon
              size={18}
              className={`shrink-0 ${pin.active ? "text-trace animate-blink" : "text-muted group-hover:text-trace"}`}
            />
          </Comp>
        );
      })}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="06"
          title="Contact"
          subtitle="Schematic pinout — reach out on any of these lines."
        />

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center font-mono text-2xl font-bold text-text sm:text-3xl"
        >
          Let&apos;s build something{" "}
          <span className="text-trace text-glow">reliable</span>.
        </motion.h3>

        <SchematicDiagram />
        <MobilePinList />
      </div>
    </section>
  );
}
