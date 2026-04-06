import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const statements = [
  "Data is noise. Insights are signal.",
  "User pain defines the roadmap.",
  "Speed is a feature.",
];

const PhilosophyLine = ({ text, index }: { text: string; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.3], [4, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, filter }}
      className="flex items-center gap-6 py-16 md:py-24"
    >
      <span className="font-mono text-xs text-muted-foreground tabular-nums min-w-[2rem]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground text-balance leading-tight">
        {text}
      </p>
    </motion.div>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Philosophy
        </p>
        <div className="border-l border-border pl-8 md:pl-12">
          {statements.map((text, i) => (
            <PhilosophyLine key={i} text={text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
