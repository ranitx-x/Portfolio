import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
      >
        Product Strategy · AI Systems · IIT BHU
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-balance text-center font-sans font-800 leading-[0.92] tracking-[-0.04em] text-foreground"
        style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", fontWeight: 800 }}
      >
        I turn ambiguity
        <br />
        into architecture.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 flex items-center gap-6"
      >
        <Link
          to="/work"
          className="magnetic-hover inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          View Work
        </Link>
        <Link
          to="/about"
          className="magnetic-hover font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Read about me →
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-foreground/0 via-foreground/40 to-foreground/0 animate-pulse-glow" />
      </motion.div>
    </section>
  );
};

export default Hero;
