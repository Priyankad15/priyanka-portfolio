import { useEffect, useState } from "react";
import { useInView } from "./useInView";

/**
 * Animates a number from 0 to `target` once the bound element scrolls
 * into view. Returns the ref to attach and the current display value.
 */
export function useCountUp(target: number, duration = 1400) {
  const { ref, isInView } = useInView<HTMLElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let frame = 0;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    }

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, isInView, target]);

  return { ref, value };
}
