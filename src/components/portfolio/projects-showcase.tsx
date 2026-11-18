import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { TiltCard } from "@/components/portfolio/tilt-card";
import { contact, projects } from "@/components/portfolio/portfolio-data";

type ProjectsShowcaseProps = {
  audience: "recruiter" | "hire";
};

// Ensure all six premium projects from resume & portfolio-data display on BOTH viewports
const clientProjectOrder = [
  "LedgerLens AI",
  "Complimind AI",
  "Kryton",
  "MarkMind AI",
  "Vidfin",
  "AskChirayu",
];

const clientNames: Record<string, string> = {
  "LedgerLens AI": "LedgerLens AI",
  "Complimind AI": "Complimind AI",
  "Kryton": "Kryton Intelligence",
  "MarkMind AI": "MarkMind AI",
  "Vidfin": "Vidfin Platform",
  "AskChirayu": "Chirayu AI Assistant",
};

// Ensure business solutions are completely clear to founders and clients
const productSolutions: Record<string, string> = {
  "LedgerLens AI":
    "Transforms raw financial data, earnings releases, and Indian quick-commerce reports into immediate, citation-backed answers—removing manual tracking and saving days of analysis.",
  "Complimind AI":
    "A sophisticated compliance and clinical governance copilot that helps UK healthcare squads browse dense, changing standards within single data-rich dashboards.",
  "Kryton":
    "High-speed market intelligence delivering 24/7 Binance WebSocket tickers, OHLC candlestick charts, and trade volumes without connection latency.",
  "MarkMind AI":
    "Interactive grading dashboards with contextual, AI-assisted rubric evaluation—slashing open-ended feedback times by ~4 hours per batch for teachers.",
  "Vidfin":
    "An intuitive fintech educational portal featuring secure, DRM-protected VdoCipher streaming and seamless search-engine visibility.",
  "AskChirayu":
    "An interactive AI assistant built directly into my portfolio, granting immediate, contextual insight into experience, projects, and work workflow.",
};

export function ProjectsShowcase({ audience }: ProjectsShowcaseProps) {
  const showcaseProjects =
    audience === "hire"
      ? clientProjectOrder.flatMap((name) => {
          const project = projects.find((item) => item.name === name || clientNames[item.name] === name);
          return project ? [project] : [];
        })
      : projects;

  return (
    <section
      className={`projects-band projects-${audience}`}
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="content-width">
        <motion.div
          className="projects-intro"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="section-heading">
            <p className="eyebrow">
              {audience === "hire" ? "PROOF IN PRODUCTS" : "PROOF IN PROJECTS"}
            </p>
            <h2 id="projects-title">
              {audience === "hire"
                ? "Products shipped, results delivered."
                : "Systems built to ship."}
            </h2>
          </div>
          <p>
            {audience === "hire"
              ? "See real-world applications designed around business challenges, core solutions, and end-user impact."
              : "Technical deep dives with their underlying architecture, trade-offs, and engineering outcomes."}
          </p>
        </motion.div>
        <div className="project-grid">
          {showcaseProjects.map((project, index) => {
            const title = clientNames[project.name] ?? project.name;

            return (
              <TiltCard
                className={`project-card ${project.tone}`}
                key={project.name}
                delay={Math.min(index * 0.055, 0.3)}
              >
                <div className="project-art" aria-hidden="true">
                  <span className="project-art-orbit" />
                  <span className="project-monogram">{title.charAt(0)}</span>
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-body">
                  <p className="project-kind">{project.tag}</p>
                  <h3>{title}</h3>
                  <dl>
                    <div>
                      <dt>{audience === "hire" ? "BUSINESS CHALLENGE" : "PROBLEM SPACE"}</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>{audience === "hire" ? "PRODUCT SOLUTION" : "OUTCOME"}</dt>
                      <dd>
                        {audience === "hire"
                          ? (productSolutions[project.name] ?? project.outcome)
                          : project.outcome}
                      </dd>
                    </div>
                    {audience === "recruiter" && (
                      <div>
                        <dt>ARCHITECTURE &amp; ENGINEERING</dt>
                        <dd>{project.architecture}</dd>
                      </div>
                    )}
                  </dl>
                  {audience === "hire" ? (
                    <p className="case-study-outcome">
                      <span>OUTCOME</span>
                      {project.outcome}
                    </p>
                  ) : (
                    <div className="project-stack" aria-label="Technology stack">
                      {project.stack.map((item) => (
                        <span className="skill-chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="project-links">
                    {project.demo && (
                      <motion.a
                        className="project-action"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Live demo <ArrowUpRight size={14} aria-hidden="true" />
                      </motion.a>
                    )}
                    {/* Maintain consistency with the Github-filtering configuration */}
                    {project.github && (
                      <motion.a
                        className="project-action"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        GitHub <Github size={14} aria-hidden="true" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}