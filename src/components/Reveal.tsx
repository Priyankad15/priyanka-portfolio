import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "up" | "left" | "right" | "none";

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  });

  if (as === "li") {
    return (
      <motion.li
        ref={ref as React.RefObject<HTMLLIElement>}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants[direction]}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
