import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "$ power_on --target=firmware_engineer",
  "[  0.001] initializing clock tree ......... OK",
  "[  0.014] mounting bootloader ............. OK",
  "[  0.082] loading firmware image: shamanth.bin",
  "[  0.140] verifying checksum .............. OK",
  "[  0.201] starting RTOS scheduler .......... OK",
  "[  0.256] enumerating peripherals: BLE, UART, SPI, I2C",
  "[  0.318] link established ................ 100%",
  "> boot complete",
];

export default function BootScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (lineCount >= BOOT_LINES.length) {
      const t = setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineCount((c) => c + 1), 140);
    return () => clearTimeout(t);
  }, [lineCount, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full max-w-lg px-6 font-mono text-xs sm:text-sm">
            {BOOT_LINES.slice(0, lineCount).map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith(">")
                    ? "mt-2 text-trace text-glow"
                    : "text-muted"
                }
              >
                {line}
              </div>
            ))}
            <span className="inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-trace" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
