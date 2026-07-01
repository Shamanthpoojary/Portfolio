import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Led from "./Led";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative border-b border-border">
      <Led size={8} top="5.5rem" right="3rem" delay={0.5} duration={2} />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="03"
          title="Skills"
          subtitle="Component reference — hover an IC to see it light up."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative rounded-lg border border-border bg-panel p-5 transition-colors hover:border-trace"
            >
              {/* pin rows, decorative */}
              <div className="absolute -left-1 top-4 flex flex-col gap-2">
                {[0, 1, 2].map((p) => (
                  <span key={p} className="h-px w-2 bg-border-hi group-hover:bg-trace" />
                ))}
              </div>
              <div className="absolute -right-1 top-4 flex flex-col gap-2">
                {[0, 1, 2].map((p) => (
                  <span key={p} className="h-px w-2 bg-border-hi group-hover:bg-trace" />
                ))}
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                <span>{group.ref}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border-hi group-hover:animate-blink group-hover:bg-trace" />
              </div>
              <h3 className="mt-1 font-mono text-sm font-semibold text-text">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border-hi bg-bg-soft px-2 py-1 text-[11px] text-muted transition-colors group-hover:border-trace-dim group-hover:text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
