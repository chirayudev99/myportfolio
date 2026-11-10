import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteNav({ mode }: { mode: "recruiter" | "hire" }) {
  return (
    <header className="portfolio-nav">
      <div className="portfolio-nav-inner">
        <Link to="/" className="portfolio-brand" aria-label="Chirayu home">
          <span className="brand-mark"><Code2 size={18} strokeWidth={2.2} /></span>
          <span>Chirayu<span className="brand-period">.</span></span>
        </Link>
        <nav className="mode-switch" aria-label="Portfolio view">
          <Button asChild size="sm" variant={mode === "recruiter" ? "default" : "ghost"} className="mode-button">
            <Link to="/" aria-current={mode === "recruiter" ? "page" : undefined}>Recruiter</Link>
          </Button>
          <Button asChild size="sm" variant={mode === "hire" ? "default" : "ghost"} className="mode-button">
            <Link to="/hire" aria-current={mode === "hire" ? "page" : undefined}>Client / MVP</Link>
          </Button>
        </nav>
        <a className="availability" href="mailto:singhchirayu22@gmail.com">
          <span className="availability-dot" aria-hidden="true" />
          <span>Available for Q1 Projects &amp; MVPs</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}