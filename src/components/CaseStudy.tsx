import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CaseStudy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="case-study" className="relative px-6 py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Case Study
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground mb-16">
            Growth Experimentation Platform
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-[11px] tracking-wide uppercase text-muted-foreground mb-1">
                  Impact
                </p>
                <p className="text-4xl font-bold tabular-nums text-foreground">+22%</p>
                <p className="text-sm text-muted-foreground mt-1">Conversion Rate</p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide uppercase text-muted-foreground mb-1">
                  Timeline
                </p>
                <p className="text-sm text-foreground">12 weeks · 2024</p>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-wide uppercase text-muted-foreground mb-1">
                  Role
                </p>
                <p className="text-sm text-foreground">Product Manager, Lead</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Growth", "Platform", "React", "Analytics"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable right column */}
          <div className="space-y-12">
            <CaseSection
              title="Problem"
              content="Product teams were shipping features blindly. Without a centralized experimentation framework, teams ran inconsistent tests with unreliable statistical methods — leading to false confidence in results that didn't move real metrics."
              delay={0.1}
            />
            <CaseSection
              title="User Persona"
              content="Sarah, a mid-level product manager running 3-4 experiments per quarter. She needed to validate hypotheses quickly but spent 40% of her time on experiment setup, data instrumentation, and manual analysis instead of strategic thinking."
              delay={0.2}
            />
            <CaseSection
              title="Approach"
              content="Built a self-serve platform with three pillars: (1) One-click experiment creation with automatic event instrumentation, (2) Real-time Bayesian analysis with clear 'ship or kill' recommendations, (3) An institutional memory — a searchable archive of every experiment and its learnings."
              delay={0.3}
            />
            <CaseSection
              title="The Decision Log"
              content="Trade-off 1: Bayesian vs. Frequentist — chose Bayesian for faster decisions with smaller sample sizes. Trade-off 2: Build vs. Buy — built in-house because existing tools couldn't integrate with our event pipeline. Trade-off 3: Shipped an MVP without the archive feature to validate core utility first, then layered it in Sprint 4."
              delay={0.4}
            />
            <CaseSection
              title="Outcome"
              content="Adopted by 12 teams within 6 weeks. Average experiment cycle time dropped from 3 weeks to 4 days. The platform surfaced a pricing page variant that single-handedly drove the +22% conversion lift — an insight that would have taken months to discover manually."
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseSection = ({
  title,
  content,
  delay,
}: {
  title: string;
  content: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
        {title}
      </h3>
      <p className="text-base text-foreground/80 leading-[1.75] max-w-prose">
        {content}
      </p>
    </motion.div>
  );
};

export default CaseStudy;
