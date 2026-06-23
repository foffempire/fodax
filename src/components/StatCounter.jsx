import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function StatCounter({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame;
    const duration = 1400;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1);
      setCount(Math.round(stat.value * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
        {stat.label}
      </p>
    </div>
  );
}
