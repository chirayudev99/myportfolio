import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/portfolio/hero-scene";
import { SiteNav } from "@/components/portfolio/site-nav";

const experience = [
  { date: "2022 — NOW", role: "Senior Full-Stack Engineer", company: "Ascendion · Johnson & Johnson", detail: "Building dependable digital workflows for enterprise teams, with an emphasis on scalable architecture, performance, and quality." },
  { date: "2021 — 2022", role: "Founding Engineer", company: "Innex.ai", detail: "Helped shape an early product from its foundations—shipping full-stack features and turning product ideas into production software." },
  { date: "2019 — 2021", role: "Full-Stack Developer", company: "Product teams & startups", detail: "Delivered web experiences across the stack, from interface implementation through APIs, data, and deployment." },
];

const strengths = [
  { value: "30–40%", label: "Faster frontend render times" },
  { value: "80%+", label: "SonarQube test coverage" },
  { value: "5+", label: "Years building for the web" },
];

export function RecruiterView() {
  return (
    <main className="portfolio-page recruiter-page">
      <div className="dark-field">
        <SiteNav mode="recruiter" />
        <section className="recruiter-hero content-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> ENGINEER · BUILDER · SYSTEMS THINKER</p>
            <h1>Hi, I’m<br /><span>Chirayu.</span></h1>
            <p className="hero-subtitle">Senior Full-Stack Engineer<br />building software that feels effortless.</p>
            <p className="hero-description">I turn complex product needs into reliable, fast experiences—across the interface, the platform, and everything in between.</p>
            <div className="hero-actions">
              <Button asChild className="action-primary">
                <a href="/resume-cv-placeholder.txt" download>Download Resume / CV <ArrowDown size={16} /></a>
              </Button>
              <a className="text-link light-link" href="https://github.com/chirayudev99" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="social-links">
              <a href="https://github.com/chirayudev99" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href="mailto:singhchirayu22@gmail.com" aria-label="Email Chirayu"><Mail size={17} /></a>
            </div>
          </div>
          <HeroScene />
          <a className="scroll-cue" href="#experience"><span /> SCROLL TO EXPLORE</a>
        </section>
        <section className="proof-band content-width" aria-label="Engineering highlights">
          {strengths.map((item) => <div className="proof-item" key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </section>
        <section className="experience-section content-width" id="experience">
          <div className="section-heading section-heading-dark">
            <p className="eyebrow">A FEW CHAPTERS</p>
            <h2>Work that<br />moves things forward.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <span className="experience-date">{item.date}</span>
                <div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p className="experience-detail">{item.detail}</p></div>
                <ArrowUpRight className="row-arrow" size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="skills-band">
        <div className="content-width skills-layout">
          <div className="section-heading"><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Thoughtful by design.<br />Strong under the hood.</h2></div>
          <div className="skill-groups">
            <div><span>FRONTEND</span><p>React · Next.js · TypeScript · Core Web Vitals</p></div>
            <div><span>BACKEND</span><p>Node.js · FastAPI · REST APIs · PostgreSQL</p></div>
            <div><span>DELIVERY</span><p>CI/CD · Automated testing · Cloud deployment</p></div>
          </div>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div className="content-width contact-layout">
          <p className="eyebrow">LET’S BUILD WHAT’S NEXT</p>
          <h2>Good work starts<br />with a conversation.</h2>
          <div className="contact-actions">
            <Button asChild className="action-dark"><a href="mailto:singhchirayu22@gmail.com">Get in touch <ArrowUpRight size={17} /></a></Button>
            <a className="text-link dark-link" href="https://github.com/chirayudev99" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15} /></a>
          </div>
          <footer className="portfolio-footer"><span>CHIRAYU · FULL-STACK ENGINEER</span><span>© 2026</span></footer>
        </div>
      </section>
    </main>
  );
}