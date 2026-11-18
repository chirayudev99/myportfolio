import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { SpotlightCard } from "@/components/portfolio/tilt-card";

const architectureDomains = [
  {
    id: "frontend",
    label: "Frontend & State",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
    ],
    context:
      "Interfaces that stay snappy under heavy data, messy state, and impatient users.",
  },
  {
    id: "backend",
    label: "Backend & Microservices",
    skills: [
      "Node.js",
      "Express",
      "Nest.js",
      "Python",
      "FastAPI",
      "GraphQL",
      "WebSockets",
    ],
    context:
      "Clean API contracts, real-time streams, and service boundaries built to survive production traffic.",
  },
  {
    id: "genai",
    label: "GenAI & RAG Pipelines",
  skills: ["OpenAI", "Anthropic", "PydanticAI", "Hybrid RAG", "Gemini embeddings", "pgvector"],
    context:
      "Turning dense, unstructured filings into source-cited answers instead of confident hallucinations.",
  },
  {
    id: "delivery",
    label: "Cloud, DevOps & Quality",
    skills: [
      "AWS",
      "Docker",
      "GitLab CI/CD",
      "Playwright",
      "SonarQube",
      "Core Web Vitals",
    ],
    context:
      "Automated pipelines and real-user telemetry so Friday deployments stay boring.",
  },
] as const;

const engineeringStages = [
  {
    number: "01",
    trackLabel: "01 · Idea to Foundation",
    title: "Built to Scale",
    detail:
      "From early startup MVPs to enterprise platforms, I architect clean, maintainable systems from scratch across SaaS, healthcare, fintech, AI, and real-time products.",
    input: "Scratch Idea",
    deliverable: "Scalable System",
  },
  {
    number: "02",
    trackLabel: "02 · Full-Stack Ownership",
    title: "End-to-End Engineering",
    detail:
      "5+ years owning complete product lifecycles—crafting responsive interfaces, resilient APIs, databases, authentication, real-time workflows, and production AI integrations.",
    input: "Requirements",
    deliverable: "Production Release",
  },
  {
    number: "03",
    trackLabel: "03 · Scale & Optimize",
    title: "Performance Optimization",
    detail:
      "Obsessed with sub-second responsiveness and clean releases—delivering up to 50% Lighthouse gains, 30–40% faster module loads, and ~35% quicker API responses.",
    input: "Bottlenecks",
    deliverable: "35–50% Faster",
  },
] as const;

export function ImpactBento() {
  const metrics = [
    { value: "6+", label: "Years building & shipping production software" },
    { value: "15+", label: "Production apps & startup MVPs delivered" },
    { value: "30–50%", label: "Faster load & Lighthouse performance gains" },
  ];

  return (
    <section className="proof-section content-width" aria-label="Engineering impact">
      {metrics.map((metric) => (
        <div className="proof-item" key={metric.value}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

export function SkillsBento() {
  const [activeDomain, setActiveDomain] = useState<(typeof architectureDomains)[number]["id"]>(
    architectureDomains[0].id,
  );
  const [activeStage, setActiveStage] = useState(0);
  const [isLifecycleHovered, setIsLifecycleHovered] = useState(false);
  const [isLifecycleFocused, setIsLifecycleFocused] = useState(false);
  const activeArchitectureDomain =
    architectureDomains.find((domain) => domain.id === activeDomain) ?? architectureDomains[0];

  useEffect(() => {
    if (isLifecycleHovered || isLifecycleFocused) return;
    const timer = window.setTimeout(() => {
      setActiveStage((current) => (current + 1) % engineeringStages.length);
    }, 4200);
    return () => window.clearTimeout(timer);
  }, [activeStage, isLifecycleFocused, isLifecycleHovered]);

  return (
    <>
      <section className="skills-band skills-bento-band" id="architecture">
        <div className="content-width">
          <motion.div
            className="skills-intro"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-heading">
              <p className="eyebrow">ARCHITECTURE &amp; STACK</p>
              <h2>
                Systems that make
                <br />
                products scale.
              </h2>
            </div>
            <p>
              Select a domain to see the tools I use together and the production context behind
              them.
            </p>
          </motion.div>
          <div className="architecture-explorer">
            <div className="architecture-tabs" role="tablist" aria-label="Engineering domains">
              {architectureDomains.map((domain) => (
                <button
                  aria-controls={`architecture-panel-${domain.id}`}
                  aria-selected={activeDomain === domain.id}
                  className="architecture-tab"
                  id={`architecture-tab-${domain.id}`}
                  key={domain.id}
                  onClick={() => setActiveDomain(domain.id)}
                  role="tab"
                  type="button"
                >
                  <span>{domain.label}</span>
                  <span aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
            <div
              aria-labelledby={`architecture-tab-${activeDomain}`}
              className="architecture-panel"
              id={`architecture-panel-${activeDomain}`}
              role="tabpanel"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 8 }}
                  key={activeDomain}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="architecture-panel-label">CONNECTED TOOLING</p>
                  <div className="architecture-nodes">
                    <span className="architecture-node architecture-node-core">
                      {activeArchitectureDomain.label}
                    </span>
                    <span className="architecture-node-connector" aria-hidden="true" />
                    {activeArchitectureDomain.skills.map((skill) => (
                      <span className="architecture-node" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="architecture-context">{activeArchitectureDomain.context}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="architecture-footnote">
            Each domain maps to production work across enterprise systems, shipped products, and AI
            workflows.
          </p>
        </div>
      </section>
      <section
        className="architecture-section content-width"
        aria-labelledby="principles-title"
        id="engineering-lifecycle"
      >
        <div className="bento-section-heading">
          <p className="eyebrow">HOW I ENGINEER</p>
          <h2 id="principles-title">From concept to high-scale production.</h2>
        </div>
        <div
          className="lifecycle-experience"
          onMouseEnter={() => setIsLifecycleHovered(true)}
          onMouseLeave={() => setIsLifecycleHovered(false)}
          onFocusCapture={() => setIsLifecycleFocused(true)}
          onBlurCapture={(event) => {
            if (
              !(event.relatedTarget instanceof Node) ||
              !event.currentTarget.contains(event.relatedTarget)
            ) {
              setIsLifecycleFocused(false);
            }
          }}
        >
          <div className="lifecycle-track" role="group" aria-label="Engineering lifecycle progress">
            {engineeringStages.map((stage, index) => (
              <Fragment key={stage.number}>
                <button
                  aria-pressed={activeStage === index}
                  className={`lifecycle-milestone${activeStage === index ? " is-active" : ""}${activeStage > index ? " is-complete" : ""}`}
                  onClick={() => setActiveStage(index)}
                  onMouseEnter={() => setActiveStage(index)}
                  type="button"
                >
                  <span className="lifecycle-milestone-node">{stage.number}</span>
                  <span className="lifecycle-milestone-label">{stage.trackLabel}</span>
                </button>
                {index < engineeringStages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`lifecycle-track-link${activeStage === index || activeStage === index + 1 ? " is-active" : ""}${activeStage > index + 1 ? " is-complete" : ""}`}
                  >
                    <ChevronRight className="lifecycle-track-chevron" />
                  </span>
                )}
              </Fragment>
            ))}
          </div>
          <ol className="lifecycle-pipeline">
            {engineeringStages.map((stage, index) => (
              <li className="lifecycle-step" key={stage.number}>
                <SpotlightCard
                  aria-label={`${stage.number}: ${stage.title}. Input: ${stage.input}. Deliverable: ${stage.deliverable}.`}
                  aria-pressed={activeStage === index}
                  className={`lifecycle-card${activeStage === index ? " is-active" : ""}`}
                  onClick={() => setActiveStage(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveStage(index);
                    }
                  }}
                  onMouseEnter={() => setActiveStage(index)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="lifecycle-number">{stage.number}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                  <div className="lifecycle-flow-pill">
                    <span>{stage.input}</span>
                    <ArrowRight aria-hidden="true" size={14} />
                    <strong>{stage.deliverable}</strong>
                  </div>
                </SpotlightCard>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
