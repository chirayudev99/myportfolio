import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "motion/react";

const navigation = {
  recruiter: [
    { label: "Overview", href: "#overview" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
  ],
  hire: [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export function SiteNav({ mode }: { mode: "recruiter" | "hire" }) {
  return (
    <header className="portfolio-nav">
      <div className="portfolio-nav-inner">
        <a className="portfolio-brand" href="#overview" aria-label="Back to overview">
          <span className="brand-mark">
            <Code2 size={17} strokeWidth={2.2} />
          </span>
          <span>
            Chirayu<span className="brand-period">.</span>
          </span>
        </a>
        <nav className="section-nav" aria-label="On this page">
          {navigation[mode].map((item) => (
            <motion.a
              href={item.href}
              key={item.label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <motion.a
          className="availability"
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="availability-dot" />
          <span>Let’s talk</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </motion.a>
      </div>
    </header>
  );
}
