import { createFileRoute } from "@tanstack/react-router";
import portfolioCss from "../styles/portfolio.css?url";
import { RecruiterView } from "@/components/portfolio/recruiter-view";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chirayu — Senior Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full-Stack Engineer with 5+ years building web applications across frontend architecture, performance optimization, and end-to-end feature delivery.",
      },
      { property: "og:title", content: "Chirayu — Senior Full-Stack Engineer" },
      {
        property: "og:description",
        content: "Scalable architecture, faster interfaces, and dependable full-stack delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: portfolioCss }],
  }),
  component: RecruiterView,
});
