import { motion } from "framer-motion";
import { Wrench, MonitorCog, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Led from "./Led";

const OFFERINGS = [
  {
    icon: Wrench,
    title: "Embedded Firmware",
    body: "Freelance firmware engagements — board bring-up, peripheral drivers, RTOS integration, and BLE/Bluetooth stack work for connected products.",
    tags: ["Bring-up", "Drivers", "RTOS", "BLE / BT"],
  },
  {
    icon: MonitorCog,
    title: "Embedded Applications & Tooling",
    body: "Companion application-layer tools that make embedded development and validation faster — built to talk directly to your hardware.",
    tags: ["Firmware Flashing Tools", "Data Visualization Tools", "Debugging Tools"],
  },
];

export default function Availability() {
  return (
    <section id="availability" className="relative border-b border-border">
      <Led size={7} top="5.5rem" left="3rem" delay={1} duration={2} />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="06"
          title="Availability"
          subtitle="Open for freelance embedded work, on the side of full-time firmware engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {OFFERINGS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-lg border border-border bg-panel p-6 transition-colors hover:border-trace"
            >
              <o.icon className="mb-3 text-trace" size={24} />
              <h3 className="font-mono text-base font-semibold text-text">{o.title}</h3>
              <p className="mt-2 text-sm text-muted">{o.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {o.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border-hi px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-border-hi bg-panel/60 px-6 py-5 sm:flex-row sm:items-center"
        >
          <p className="flex items-center gap-2 font-mono text-sm text-text">
            <span className="h-2 w-2 animate-blink rounded-full bg-trace" />
            Have a project that fits either of these? Let&apos;s talk.
          </p>
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded border border-trace bg-trace/10 px-5 py-2.5 font-mono text-sm font-semibold text-trace transition-colors hover:bg-trace/20"
          >
            get_in_touch()
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
