import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

const STATUS_LABEL = {
  active: "ACTIVE",
  completed: "COMPLETED",
  shipped: "SHIPPED",
  archived: "ARCHIVED",
};

const STATUS_COLOR = {
  active: "bg-trace text-trace",
  completed: "bg-trace text-trace",
  shipped: "bg-copper text-copper",
  archived: "bg-muted text-muted",
};

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="Modules built and deployed across firmware roles."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="flex flex-col rounded-lg border border-border bg-panel p-6 transition-colors hover:border-trace"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-base font-semibold text-text sm:text-lg">
                  {p.name}
                </h3>
                <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${STATUS_COLOR[p.status].split(" ")[0]} ${
                      p.status === "active" ? "animate-blink" : ""
                    }`}
                  />
                  <span className={STATUS_COLOR[p.status].split(" ")[1]}>
                    {STATUS_LABEL[p.status]}
                  </span>
                </span>
              </div>

              <p className="mt-1 font-mono text-xs text-copper">
                {p.org} · {p.period}
              </p>

              <p className="mt-3 text-sm text-muted">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-trace-dim" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border-hi px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
