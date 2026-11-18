import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProjectsShowcase } from "@/components/portfolio/projects-showcase";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SkillsBento } from "@/components/portfolio/skills-bento";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function stubIntersectionObserver() {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      root = null;
      rootMargin = "0px";
      thresholds: number[] = [];

      disconnect() {}
      observe() {}
      unobserve() {}
      takeRecords() {
        return [];
      }
    },
  );
}

describe("portfolio audience experiences", () => {
  it("keeps recruiter navigation local and tailored", () => {
    const { container } = render(<SiteNav mode="recruiter" />);
    const navigation = screen.getByRole("navigation", { name: "On this page" });

    expect(navigation).toHaveTextContent("OverviewExperienceProjectsArchitectureContact");
    expect(container.querySelector('a[href="/hire"]')).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /recruiter|client/i })).not.toBeInTheDocument();
  });

  it("keeps client navigation local and shows its six business case studies", () => {
    stubIntersectionObserver();
    const { container } = render(
      <>
        <SiteNav mode="hire" />
        <ProjectsShowcase audience="hire" />
      </>,
    );
    const navigation = screen.getByRole("navigation", { name: "On this page" });

    expect(navigation).toHaveTextContent("ServicesCase StudiesProcessContact");
    expect(container.querySelector('a[href="/"]')).not.toBeInTheDocument();
    expect(container.querySelectorAll(".project-card")).toHaveLength(6);
    expect(screen.getAllByText("BUSINESS CHALLENGE")).toHaveLength(6);
    expect(screen.getAllByText("PRODUCT SOLUTION")).toHaveLength(6);
    expect(screen.getAllByText("OUTCOME")).toHaveLength(6);
  });

  it("updates the production context when an architecture domain is selected", async () => {
    stubIntersectionObserver();
    render(<SkillsBento />);
    const backendTab = screen.getByRole("tab", { name: /Backend & Microservices/ });

    fireEvent.click(backendTab);

    expect(backendTab).toHaveAttribute("aria-selected", "true");
    expect(
      await screen.findByText(
        "Designed REST APIs and service boundaries for SaaS, healthcare, education, and AI-assisted product workflows.",
      ),
    ).toBeInTheDocument();
  });
});
