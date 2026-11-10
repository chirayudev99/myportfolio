import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/portfolio/site-nav";

const projects = [
  { name: "MarkMind AI", kind: "AI · LEARNING", problem: "Learning material can be hard to turn into clear next steps.", solution: "A focused AI study workspace that helps turn source material into organized notes and useful study flows.", result: "A clearer path from reading to understanding.", image: "/site-assets/987a7693a4a7cc4c.png", imageAlt: "Colorful geometric MarkMind project artwork", tone: "project-ink" },
  { name: "Choicemonk", kind: "SAAS · DECISIONS", problem: "Teams need a simple way to gather preferences and make decisions.", solution: "A polished SaaS experience built around making choices easier to collect, understand, and act on.", result: "Less friction between a question and a confident choice.", image: "/site-assets/8a1b05e860cea829.png", imageAlt: "Choicemonk wordmark", tone: "project-blue" },
  { name: "Fleet Dispatch", kind: "OPERATIONS · WEB APP", problem: "Fleet coordination depends on clear, timely operational information.", solution: "A dispatch platform concept focused on making fleet activity and day-to-day coordination easier to manage.", result: "A more legible workflow for the people keeping things moving.", image: "/site-assets/7872c20a045cbb2e.png", imageAlt: "Dark abstract workspace graphic", tone: "project-rust" },
];

const services = [
  { number: "01", title: "0 to 1 MVP Development", text: "From first architecture to a launched product: accounts, data, payments, and deployment included." },
  { number: "02", title: "Performance & UX Overhauls", text: "Make an existing product feel faster and more polished, including Core Web Vitals and Next.js migrations." },
  { number: "03", title: "GenAI Feature Integration", text: "Bring AI into real product workflows with LLM pipelines, document parsing, and streaming interfaces." },
];

export function HireView() {
  return (
    <main className="portfolio-page hire-page">
      <div className="dark-field hire-dark">
        <SiteNav mode="hire" />
        <section className="hire-hero content-width">
          <div className="hire-hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR IDEA, BUILT FOR THE REAL WORLD</p>
            <h1>From first sketch<br />to <span>first customer.</span></h1>
            <p className="hire-lede">I build production-ready MVPs in 3–4 weeks—thoughtful design, complete technology, and a launch you can grow from.</p>
            <div className="hero-actions">
              <Button asChild className="action-primary"><a href="https://calendly.com/your-username/15min" target="_blank" rel="noreferrer">Schedule a 15-Minute Scope Call <ArrowRight size={16} /></a></Button>
              <a className="text-link light-link" href="https://wa.me/918171483794" target="_blank" rel="noreferrer">WhatsApp me <ArrowUpRight size={15} /></a>
            </div>
            <p className="hero-footnote"><span className="availability-dot" /> Available for Q1 Projects &amp; MVPs</p>
          </div>
          <div className="hire-hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="launch-stamp"><span>IDEA</span><ArrowRight size={18} /><span>LIVE</span></div>
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-card art-card-top"><span>PRODUCT</span><strong>Made to matter.</strong><i /></div>
            <div className="art-card art-card-bottom"><span>BUILD WINDOW</span><strong>03 — 04 weeks</strong><div className="build-track"><i /></div></div>
            <span className="art-note">FROM IDEA<br />TO IMPACT</span>
          </div>
        </section>
      </div>

      <section className="services-section content-width" id="services">
        <div className="section-heading"><p className="eyebrow">HOW I CAN HELP</p><h2>One partner.<br />The whole product.</h2></div>
        <div className="services-list">
          {services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><Check className="service-check" size={18} /></article>)}
        </div>
      </section>

      <section className="projects-band" id="projects">
        <div className="content-width">
          <div className="projects-intro"><div className="section-heading"><p className="eyebrow">SELECTED BUILDS</p><h2>Ideas, made useful.</h2></div><p>Real product thinking, expressed through useful software—designed around the people who use it.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.tone}`} key={project.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ rotateX: -2, rotateY: 2, y: -5 }}>
                <div className="project-art"><img src={project.image} alt={project.imageAlt} /><span className="project-index">0{index + 1}</span></div>
                <div className="project-body"><p className="project-kind">{project.kind}</p><h3>{project.name}</h3><dl><div><dt>THE NEED</dt><dd>{project.problem}</dd></div><div><dt>THE BUILD</dt><dd>{project.solution}</dd></div><div><dt>THE OUTCOME</dt><dd>{project.result}</dd></div></dl></div>
              </motion.article>
            ))}
          </div>
          <p className="project-note">Project summaries describe the product intent; contact me for implementation details.</p>
        </div>
      </section>

      <section className="skills-band process-band">
        <div className="content-width skills-layout">
          <div className="section-heading"><p className="eyebrow">A CLEAR PATH TO LAUNCH</p><h2>Small steps.<br />Real momentum.</h2></div>
          <ol className="launch-steps"><li><span>01</span><div><strong>Shape the idea</strong><p>Align on the customer, core problem, and the first version worth launching.</p></div></li><li><span>02</span><div><strong>Design &amp; build</strong><p>Turn the plan into a polished, working product with a clear weekly rhythm.</p></div></li><li><span>03</span><div><strong>Launch &amp; learn</strong><p>Deploy, hand over, and help you make the next product decisions with confidence.</p></div></li></ol>
        </div>
      </section>

      <section className="contact-band hire-contact" id="contact">
        <div className="content-width contact-layout">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let’s make your<br />next move real.</h2>
          <p className="contact-description">A quick conversation is all it takes to see what we can build together.</p>
          <div className="contact-actions">
            <Button asChild className="action-dark"><a href="https://calendly.com/your-username/15min" target="_blank" rel="noreferrer">Schedule a 15-Minute Scope Call <ArrowRight size={16} /></a></Button>
            <a className="text-link dark-link" href="https://wa.me/918171483794" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a>
            <a className="text-link dark-link" href="mailto:singhchirayu22@gmail.com"><Mail size={15} /> Email</a>
          </div>
          <footer className="portfolio-footer"><span>CHIRAYU · PRODUCT ENGINEER</span><a href="mailto:singhchirayu22@gmail.com">Start a conversation <ArrowUpRight size={14} /></a></footer>
        </div>
      </section>
    </main>
  );
}