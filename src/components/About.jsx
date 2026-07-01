import { motion } from "framer-motion";
import { Cpu, Radio, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Led from "./Led";
import { personal } from "../data/content";

const PILLARS = [
  {
    icon: Cpu,
    title: "Bare-Metal & RTOS",
    body: "Firmware built directly on STM32, ESP32 and EFR32 silicon — bare-metal and FreeRTOS-based, from bring-up through production.",
  },
  {
    icon: Radio,
    title: "BLE & Wireless",
    body: "BLE, BLE Mesh, and Bluetooth Classic stacks for connected devices — GATT profiles, pairing, OTA updates, and RF tuning.",
  },
  {
    icon: Layers,
    title: "Drivers & GUI",
    body: "Low-level peripheral drivers (GPIO, I2C, SPI, UART) alongside embedded GUI work with LVGL and touch displays.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-border">
      <Led size={8} bottom="2.5rem" left="1.5rem" delay={0.9} duration={1.6} />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="01" title="About" subtitle="A quick datasheet on how I work." />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border border-border bg-panel p-6 font-mono text-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 text-xs text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-trace/70" />
                <span className="ml-2">about.json</span>
              </div>
              <pre className="whitespace-pre-wrap text-muted">
{`{
  "name": "`}<span className="text-trace">{personal.name}</span>{`",
  "role": "`}<span className="text-copper">{personal.role}</span>{`",
  "based_in": "`}<span className="text-text">{personal.location}</span>{`",
  "focus": [
    "BLE / BT firmware",
    "RTOS & bare-metal",
    "driver development"
  ],
  "status": "`}<span className="text-trace">actively building</span>{`"
}`}
              </pre>
            </div>
          </motion.div>

          <div className="grid gap-5 lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {personal.summary}
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-lg border border-border bg-panel/60 p-5 transition-colors hover:border-trace"
                >
                  <p.icon className="mb-3 text-trace" size={22} />
                  <h3 className="font-mono text-sm font-semibold text-text">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
