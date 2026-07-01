import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Signal path through the roles that got me here."
        />

        <div className="relative">
          <motion.div
            className="absolute left-[15px] top-2 w-px bg-border-hi sm:left-[19px]"
            style={{ bottom: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <ul className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.start}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-10 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 sm:h-10 sm:w-10 ${
                    job.current
                      ? "border-trace bg-trace/10"
                      : "border-border-hi bg-panel"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      job.current ? "animate-blink bg-trace" : "bg-muted"
                    }`}
                  />
                </span>

                <div className="rounded-lg border border-border bg-panel/70 p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-mono text-lg font-semibold text-text">
                      {job.role}{" "}
                      <span className="text-trace">@ {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {job.start} — {job.current ? (
                        <span className="text-trace">present</span>
                      ) : (
                        job.end
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border-hi px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
