import { AnimatePresence, motion, useScroll, useSpring, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { lazy, Suspense, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImpactBento, SkillsBento } from "@/components/portfolio/skills-bento";
import { SiteNav } from "@/components/portfolio/site-nav";
import { ProjectsShowcase } from "@/components/portfolio/projects-showcase";
import { SpotlightCard } from "@/components/portfolio/tilt-card";
import { contact, experience } from "@/components/portfolio/portfolio-data";
import { ContactForm } from "@/components/portfolio/contact-form";

const ContactStarsCanvas = lazy(() =>
  import("@/components/portfolio/contact-stars-canvas").then((module) => ({
    default: module.ContactStarsCanvas,
  })),
);
const HeroScene = lazy(() =>
  import("@/components/portfolio/hero-scene").then((module) => ({
    default: module.HeroScene,
  })),
);

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.55, ease: "easeOut" },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function RecruiterView() {
  const [selectedRole, setSelectedRole] = useState(0);
  const timeline = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: timeline,
    offset: ["start 0.7", "end 0.35"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.2 });
  const role = experience[selectedRole];

  return (
    <motion.main
      className="portfolio-page recruiter-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="dark-field">
        <SiteNav mode="recruiter" />
        <section className="recruiter-hero content-width" id="overview">
          <motion.div
            className="hero-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="eyebrow" variants={revealItem}>
              <span className="eyebrow-line" /> ENGINEER · BUILDER · SYSTEMS THINKER
            </motion.p>
            <motion.h1 variants={revealItem}>
              Engineering
              <br />
              <span>at scale.</span>
            </motion.h1>
            <motion.p className="hero-subtitle" variants={revealItem}>
              Senior Full-Stack Engineer
              <br />
              building fast, dependable products.
            </motion.p>
            <motion.p className="hero-description" variants={revealItem}>
              6+ years taking products from first architecture to production: leading frontend
              systems, improving enterprise performance, and owning delivery across teams.
            </motion.p>
            <motion.div className="hero-actions" variants={revealItem}>
              <Button asChild className="action-primary">
                <motion.a
                  href="/ChirayuSinghResume.docx"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download Resume <ArrowDown size={16} />
                </motion.a>
              </Button>
              <motion.a
                className="text-link light-link"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                GitHub <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
            <motion.div className="social-links" variants={revealItem}>
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={17} />
              </motion.a>
              <motion.a
                href="www.linkedin.com/in/chirayu-singh-338916225"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={17} />
              </motion.a>
              <motion.a
                href='#contact'
                aria-label="Email Chirayu"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={17} />
              </motion.a>
            </motion.div>
          </motion.div>
          <Suspense
            fallback={<div className="hero-scene hero-scene-placeholder" aria-hidden="true" />}
          >
            <HeroScene />
          </Suspense>
          <a className="scroll-cue" href="#experience">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>
        <ImpactBento />
        <section
          className="experience-section content-width"
          id="experience"
          ref={timeline}
          aria-labelledby="experience-title"
        >
          <div className="experience-heading">
            <motion.div
              className="section-heading section-heading-dark"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="eyebrow">CAREER CHAPTERS</p>
              <h2 id="experience-title">
                Engineering
                <br />
                with ownership.
              </h2>
              <p className="experience-intro">
                Roles spanning enterprise modernization, founding teams, and shipped MVPs.
              </p>
            </motion.div>
          </div>
          <div className="career-timeline">
            <div className="career-selector" aria-label="Career timeline">
              <span className="career-spine" aria-hidden="true">
                <motion.span className="career-progress" style={{ scaleY: progress }} />
              </span>
              {experience.map((item, index) => (
                <button
                  aria-pressed={selectedRole === index}
                  className="career-role"
                  key={`${item.company}-${item.date}`}
                  onClick={() => setSelectedRole(index)}
                  type="button"
                >
                  <span className="career-role-dot" />
                  <span>
                    <strong>{item.role}</strong>
                    <span className="career-role-company">{item.company}</span>
                    <small>{item.date}</small>
                  </span>
                </button>
              ))}
            </div>
            <SpotlightCard className="career-stage" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                {role && (
                  <motion.article
                    className="career-detail"
                    key={role.company}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.24 }}
                  >
                    <p className="career-date">{role.date}</p>
                    <h3>{role.role}</h3>
                    <p className="experience-company">{role.company}</p>
                    <p className="experience-detail">{role.detail}</p>
                    <ul className="experience-highlights">
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="career-stack" aria-label="Technology and domain experience">
                      {role.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </div>
        </section>
      </div>

      <ProjectsShowcase audience="recruiter" />
      <SkillsBento />

      <section className="contact-band" id="contact">
        <Suspense fallback={<div className="contact-stars-canvas" aria-hidden="true" />}>
          <ContactStarsCanvas />
        </Suspense>
        <div className="content-width contact-layout">
          <SpotlightCard className="contact-card">
            <p className="eyebrow">LET’S BUILD WHAT’S NEXT</p>
            <h2>Good work starts with a conversation.</h2>
            <p className="contact-description">
              Let’s talk about engineering ownership, architecture, and product outcomes.
            </p>
            <div className="contact-actions">
              <ContactForm triggerLabel="Get in touch" triggerClassName="action-dark" />
              <motion.a
                className="text-link dark-link"
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore my GitHub <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </SpotlightCard>
          <footer className="portfolio-footer">
            <span>CHIRAYU · FULL-STACK ENGINEER</span>
            <span>© 2026</span>
          </footer>
        </div>
      </section>
    </motion.main>
  );
}
