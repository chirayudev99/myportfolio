import { createFileRoute } from "@tanstack/react-router";
import portfolioCss from "../styles/portfolio.css?url";
import { HireView } from "@/components/portfolio/hire-view";

export const Route = createFileRoute("/hire")({
  head: () => ({
    meta: [
      { title: "Hire Chirayu — MVP & Product Engineering" },
      {
        name: "description",
        content:
          "Product engineering for founders and teams: thoughtful interfaces, dependable architecture, and full-stack delivery from discovery to launch.",
      },
      { property: "og:title", content: "Hire Chirayu — MVP & Product Engineering" },
      {
        property: "og:description",
        content:
          "From first sketch to first customer: thoughtful design and full-stack MVP delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: portfolioCss }],
  }),
  component: HireView,
});
