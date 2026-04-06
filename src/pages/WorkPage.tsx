import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const WorkPage = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10 px-6 py-16">
        {/* Back nav */}
        <div className="max-w-6xl mx-auto mb-16">
          <Link
            to="/"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Selected Work
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
              Systems I've shipped.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Conversational RAG Engine",
    slug: "conversational-rag-engine",
    description: "Built a retrieval-augmented generation system that reduced support ticket volume by 38% through intelligent document understanding.",
    tags: ["RAG-AI", "NLP", "Python"],
    metric: "-38% Tickets",
  },
  {
    title: "Growth Experimentation Platform",
    slug: "growth-experimentation-platform",
    description: "Designed and shipped an internal A/B testing framework used across 12 product teams to validate hypotheses in under 48 hours.",
    tags: ["Growth", "Platform", "React"],
    metric: "+22% Conversion",
  },
  {
    title: "Data Pipeline Orchestrator",
    slug: "data-pipeline-orchestrator",
    description: "Architected a real-time event processing system handling 2M+ daily events with sub-second latency for personalized recommendations.",
    tags: ["Data", "Infra", "Kafka"],
    metric: "2M+ Events/day",
  },
  {
    title: "User Onboarding Redesign",
    slug: "user-onboarding-redesign",
    description: "Led cross-functional redesign of the activation flow, increasing Day-7 retention from 31% to 47% through contextual nudges and progressive disclosure.",
    tags: ["UX", "Retention", "Mobile"],
    metric: "+52% Retention",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glow-border rounded-lg bg-card p-6 md:p-8 flex flex-col justify-between min-h-[260px]"
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground leading-tight pr-4">
            {project.title}
          </h3>
          <span className="font-mono text-xs tabular-nums text-foreground/70 whitespace-nowrap">
            {project.metric}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-border text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/deck/${project.slug}`}
          className="magnetic-hover inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors shrink-0 ml-4"
        >
          View Deck
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default WorkPage;
