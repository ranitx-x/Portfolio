import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10 px-6 py-16">
        {/* Back nav */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link
            to="/"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
              About Me
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground mb-12">
              Building at the intersection of product & AI.
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
              I'm a product builder from IIT BHU with a focus on turning complex, ambiguous problems into scalable systems. I work across the full spectrum — from defining strategy and running growth experiments to architecting AI-powered products that ship real impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
              My approach is data-first but user-obsessed. I believe the best products emerge when you combine rigorous experimentation with deep empathy for the people using them. Every feature I ship is tied to a metric that matters.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
              I've built RAG engines that cut support tickets by 38%, experimentation platforms adopted by 12+ teams, and data pipelines processing millions of events daily. I care about velocity, clarity, and outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Product Strategy", "AI/ML Systems", "Growth", "Data Pipelines", "User Research", "Experimentation"].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
