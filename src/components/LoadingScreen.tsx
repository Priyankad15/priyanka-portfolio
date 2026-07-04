import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6 bg-bg px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card font-display text-2xl font-semibold text-mint sm:h-16 sm:w-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            P
          </motion.div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-0.75 w-[min(18rem,80vw)] overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-mint-soft to-mint"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
            <p className="px-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-dim">
              Compiling portfolio…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
