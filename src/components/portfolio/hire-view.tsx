import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/portfolio/site-nav";
import { ProjectsShowcase } from "@/components/portfolio/projects-showcase";
import { SpotlightCard } from "@/components/portfolio/tilt-card";
import { contact } from "@/components/portfolio/portfolio-data";
import { ContactForm } from "@/components/portfolio/contact-form";

const ContactStarsCanvas = lazy(() =>
  import("@/components/portfolio/contact-stars-canvas").then((module) => ({
    default: module.ContactStarsCanvas,
  })),
);

const services = [
  {
    number: "01",
    title: "0-to-1 SaaS & Web MVPs",
    text: "A focused first release designed around the customer problem and ready to validate in the real world.",
    deliverables: ["Scope & architecture", "UX/UI and full-stack build", "Deployment & handover"],
  },
  {
    number: "02",
    title: "Custom GenAI & RAG Copilots",
    text: "Practical AI product experiences grounded in your knowledge, documents, and day-to-day workflows.",
    deliverables: [
      "Document ingestion & retrieval",
      "Copilot experience",
      "Evaluation & iteration",
    ],
  },
  {
    number: "03",
    title: "Frontend Speed & UX Rescue",
    text: "A smoother, faster product experience that helps existing users complete important tasks.",
    deliverables: ["Performance & UX audit", "Prioritized improvements", "Measured release"],
  },
];

const roadmap = [
  {
    id: "scope",
    label: "Week 1",
    title: "Scope & architecture",
    detail:
      "Align on the customer, highest-value workflow, scope, technical foundation, and a release plan with clear milestones.",
  },
  {
    id: "build",
    label: "Weeks 2–3",
    title: "Build & weekly demos",
    detail:
      "Ship a usable product in short cycles, review a working demo every week, and keep priorities visible as we build.",
  },
  {
    id: "launch",
    label: "Week 4",
    title: "Launch & handover",
    detail:
      "Prepare the production launch, walk through the system, transfer the documentation, and agree on the next iteration.",
  },
] as const;

const heroReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" },
  },
};

const heroRevealItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function HireView() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = roadmap[activeStep];

  return (
    <motion.main
      className="portfolio-page hire-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="dark-field hire-dark">
        <SiteNav mode="hire" />
        <section className="hire-hero content-width" id="overview">
          <motion.div
            className="hire-hero-copy"
            variants={heroReveal}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="eyebrow" variants={heroRevealItem}>
              <span className="eyebrow-line" /> A PRODUCT PARTNER FROM IDEA TO LAUNCH
            </motion.p>
            <motion.h1 variants={heroRevealItem}>
              From first idea
              <br />
              to <span>launched product.</span>
            </motion.h1>
            <motion.p className="hire-timeline-promise" variants={heroRevealItem}>
              In 3–4 weeks.
            </motion.p>
            <motion.p className="hire-lede" variants={heroRevealItem}>
              Build a focused MVP, bring a GenAI workflow to life, or make an existing product
              faster—with clear milestones, weekly demos, and one engineering partner from scope to
              launch.
            </motion.p>
            <motion.div className="hero-actions" variants={heroRevealItem}>
              <Button asChild className="action-primary">
                <motion.a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent("Book a 15-Min Scope Call")}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a 15-Min Scope Call <ArrowRight size={16} />
                </motion.a>
              </Button>
              <motion.a
                className="text-link light-link"
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp direct <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
            <motion.div className="trust-strip" variants={heroRevealItem}>
              <div>
                <strong>15+</strong>
                <span>MVPs delivered</span>
              </div>
              <div>
                <strong>UK · US · India</strong>
                <span>Client collaboration</span>
              </div>
              <div>
                <strong>Full-stack + GenAI</strong>
                <span>One product partner</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hire-hero-art"
            aria-label="Interactive product launch telemetry"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="art-grid" />
            <div className="telemetry-orbit telemetry-orbit-one" />
            <div className="telemetry-orbit telemetry-orbit-two" />
            <motion.div
              className="telemetry-core"
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            >
              <span>IDEA</span>
              <ArrowRight size={18} />
              <span>LIVE</span>
            </motion.div>
            <motion.div
              className="telemetry-scan"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="telemetry-card telemetry-card-top">
              <span>SPRINT STATUS</span>
              <strong>Product taking shape</strong>
              <i className="telemetry-status">
                <i />
              </i>
            </div>
            <div className="telemetry-card telemetry-card-bottom">
              <span>PATH TO LAUNCH</span>
              <strong>
                Week 01 <b>→</b> Week 04
              </strong>
              <div className="build-track">
                <motion.i
                  animate={{ width: ["20%", "86%", "20%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            <span className="art-note">
              PLAN
              <br />
              BUILD
              <br />
              LAUNCH
            </span>
          </motion.div>
        </section>
      </div>

      <section className="services-section content-width" id="services">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow">PRODUCTIZED SERVICES</p>
          <h2>
            The right help
            <br />
            for your next move.
          </h2>
          <p className="services-intro">
            Defined outputs, direct collaboration, and a path to a working release.
          </p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <Check size={15} aria-hidden="true" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <ProjectsShowcase audience="hire" />

      <section className="process-band" id="process">
        <div className="content-width process-content">
          <div className="section-heading">
            <p className="eyebrow">A CLEAR PATH TO LAUNCH</p>
            <h2>
              Short feedback loops.
              <br />A real product at the end.
            </h2>
            <p className="process-intro">
              A focused four-week plan, adapted to the product and scope we agree together.
            </p>
          </div>
          <div className="roadmap">
            <div className="roadmap-selector" role="tablist" aria-label="Launch roadmap">
              {roadmap.map((step, index) => (
                <button
                  aria-controls={`roadmap-panel-${step.id}`}
                  aria-selected={activeStep === index}
                  className="roadmap-step"
                  id={`roadmap-tab-${step.id}`}
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  role="tab"
                  type="button"
                >
                  <span>{step.label}</span>
                  <strong>{step.title}</strong>
                </button>
              ))}
            </div>
            <div
              aria-labelledby={currentStep ? `roadmap-tab-${currentStep.id}` : undefined}
              className="roadmap-detail"
              id={currentStep ? `roadmap-panel-${currentStep.id}` : undefined}
              role="tabpanel"
            >
              <AnimatePresence mode="wait">
                {currentStep && (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 12 }}
                    key={currentStep.id}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{currentStep.label}</span>
                    <h3>{currentStep.title}</h3>
                    <p>{currentStep.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band hire-contact" id="contact">
        <Suspense fallback={<div className="contact-stars-canvas" aria-hidden="true" />}>
          <ContactStarsCanvas />
        </Suspense>
        <div className="content-width contact-layout">
          <SpotlightCard className="contact-card">
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
            <h2>Let’s make your next move real.</h2>
            <p className="contact-description">
              Share what you’re building. We’ll use 15 minutes to define the problem, first
              milestone, and the right next step.
            </p>
            <div className="contact-actions">
              <Button asChild className="action-dark">
                <motion.a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent("Book a 15-Min Scope Call")}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a 15-Min Scope Call <ArrowRight size={16} />
                </motion.a>
              </Button>
              <motion.a
                className="text-link dark-link"
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp direct <ArrowUpRight size={15} />
              </motion.a>
            </div>
            <ContactForm triggerLabel="Send a message" triggerClassName="action-dark" />
          </SpotlightCard>
          <footer className="portfolio-footer">
            <span>CHIRAYU · PRODUCT ENGINEERING</span>
            <span>© 2026</span>
          </footer>
        </div>
      </section>
    </motion.main>
  );
}
