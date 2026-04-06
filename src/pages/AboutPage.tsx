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
               Building products that start with users and scale with impact.
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
              Hey, this is Ranit Mondal from Indian Institute of Technology (BHU) Varanasi with a strong focus on turning complex, ambiguous problems into structured, scalable solutions. Coming from a technical background and complementing it with experience in strategy and consulting case competitions, I have developed the ability to operate at the intersection of product thinking and product building. I approach problems by combining analytical rigor with deep user empathy, ensuring that solutions are both meaningful and scalable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
              I am a 15x National Case Competition winner, with projects spanning Sustainability, ESG, and Product UI. These experiences have strengthened my ability to break down ambiguity, identify high impact opportunities, and translate ideas into actionable solutions. I have worked as a Technical Associate Product Manager Intern at Languify AI, an edtech firm, where I collaborated directly with clients and translated their needs into product decisions.
              </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/80 leading-[1.8] max-w-prose"
            >
               Additionally, as a Strategic Relations Associate at E Cell IIT BHU, I have worked closely with student startups, helping them connect with VC panels and angel investors while supporting them with strategic guidance. I bring a user first mindset and a bias for action, focusing on building products that create real and measurable impact.
              </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Product Strategy", "AI/ML Systems", "Market Analysis", "Growth", "Data Pipelines", "User Research", "Experimentation"].map((skill) => (
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
