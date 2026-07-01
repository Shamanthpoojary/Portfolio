import { motion } from "framer-motion";

export default function SectionHeading({ index, title, subtitle }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 font-mono text-sm text-trace">
        <span className="text-copper">//</span>
        <span>{index}</span>
        <span className="h-px flex-1 max-w-16 bg-border-hi" />
      </div>
      <h2 className="mt-2 font-mono text-2xl font-bold text-text sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
