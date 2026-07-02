import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading index="05" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 rounded-lg border border-border bg-panel p-6 sm:flex-row sm:items-start sm:p-8"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border-hi bg-bg-soft text-trace">
            <GraduationCap size={24} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-lg font-semibold text-text">
                {education.school}
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {education.start} — {education.end}
              </span>
            </div>
            <p className="mt-1 text-sm text-copper">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">GPA: {education.gpa}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded border border-border-hi px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
