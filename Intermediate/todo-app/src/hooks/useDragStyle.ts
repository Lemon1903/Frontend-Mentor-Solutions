import { MotionValue, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function useDragStyle(value: MotionValue<number>) {
  const scale = useMotionValue(1);
  const backgroundColor = useMotionValue("var(--foreground)");

  useEffect(() => {
    value.on("change", (latest) => {
      if (latest !== 0) {
        animate(scale, 0.96);
        animate(backgroundColor, "var(--muted)");
      } else {
        animate(scale, 1);
        animate(backgroundColor, "var(--foreground)");
      }
    });
  }, [value]);

  return { scale, backgroundColor };
}
