export const experience = [
  {
    date: "NOV 2025 — JUN 2026",
    role: "Senior Full Stack Engineer",
    company: "Ascendion Digital Solutions · Johnson & Johnson (via ZS Associates)",
    detail:
      "Led performance engineering and large-scale modular refactoring for an enterprise React application powering Johnson & Johnson business workflows.",
    highlights: [
      "Profiled rendering bottlenecks and refactored monolithic modules into reusable hook and utility layers with optimized Recoil subscriptions, cutting module load times by 30–40% and lifting overall app speed by 40%.",
      "Drove technical feasibility, architecture artifacts, and release quality across onshore/offshore squads—resolving 100+ defects ahead of schedule while holding 80%+ SonarQube coverage.",
      "Partnered directly with Business Analysts and stakeholders to break down complex Jira epics into risk-assessed, scalable delivery plans.",
    ],
    stack: ["React", "TypeScript", "Recoil", "Performance Profiling", "SonarQube"],
  },
  {
    date: "APR 2024 — SEP 2025",
    role: "Senior Frontend Engineer",
    company: "Complimind.ai · UK",
    detail:
      "Joined as founding frontend engineer to architect core application patterns, state management, and data-intensive workflows for a UK healthcare GenAI governance copilot.",
    highlights: [
      "Owned end-to-end frontend architecture with Redux, Redux Thunk, Material UI, and modular CSS—establishing scalable state patterns across clinical compliance and regulatory workflows.",
      "Engineered interactive Cal-Heatmap and React-ApexCharts analytics dashboards with memoized real-time filtering and lazy loading to keep large healthcare datasets responsive.",
      "Architected multi-step, schema-validated Formik and Redux form pipelines while collaborating directly with UK clients in weekly product iterations.",
    ],
    stack: ["React", "Redux Toolkit", "Material UI", "ApexCharts", "Cal-Heatmap", "Formik"],
  },
  {
    date: "FEB 2023 — JAN 2024",
    role: "Next.js Developer",
    company: "Vidfin Technologies · Noida, India",
    detail:
      "Led frontend architecture for a stock-market education platform combining interactive equity analysis with DRM-protected video courses.",
    highlights: [
      "Boosted Lighthouse performance scores by 50% and cut page load times by ~20% through route-level code splitting, lazy loading, prefetching, and render optimization.",
      "Strengthened organic search indexing with Next.js Server-Side Rendering (SSR) and dynamic SEO metadata, paired with Firebase Dynamic Links for cross-device deep linking.",
      "Integrated VdoCipher encrypted video playback with custom controls and replaced heavy boilerplate with lightweight Zustand state architecture.",
    ],
    stack: ["Next.js", "TypeScript", "SSR", "Zustand", "VdoCipher", "Firebase"],
  },
  {
    date: "MAY 2022 — FEB 2023",
    role: "MERN Developer",
    company: "Applore Technologies · Noida, India",
    detail:
      "Architected and launched full-stack SaaS MVPs across e-commerce, healthcare, education, and recommendation platforms in partnership with 5+ startups.",
    highlights: [
      "Spearheaded a US-based healthcare platform under strict HIPAA compliance—attaining HIPAA Associate certification while building scalable React, TypeScript, GraphQL, and Node.js services.",
      "Mentored a team of developers from initial technical scoping through DevOps deployment, shipping a critical client platform 10 days ahead of deadline (awarded 'Unmatched Dedication').",
      "Translated early founder concepts into production-ready multi-tenant architectures across five distinct industry verticals.",
    ],
    stack: ["React", "TypeScript", "GraphQL", "Node.js", "HIPAA Compliance"],
  },
  {
    date: "JAN 2021 — MAY 2022",
    role: "MERN Developer",
    company: "Cling Multi Solutions Pvt Ltd · Pune, India",
    detail:
      "Delivered and maintained 10+ full-stack client applications across varied business domains using React, Node.js, and MongoDB.",
    highlights: [
      "Designed modular React UI architectures backed by Node.js REST APIs and MongoDB data models, supporting end-to-end feature rollouts across 10+ production apps.",
      "Drove architectural decisions, production debugging, and client requirement scoping to ship reliable releases on tight timelines.",
      "Awarded Employee of the Month twice for consistent delivery ownership and cross-team technical execution.",
    ],
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "System Architecture"],
  },
];

export const impactMetrics = [
  { value: "6+", label: "Years building & shipping production software" },
  { value: "15+", label: "Production apps & startup MVPs delivered" },
  { value: "30–50%", label: "Faster load & Lighthouse performance gains" },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Core Frontend & State Architecture",
    eyebrow: "01 / INTERFACES",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Redux Thunk",
      "Recoil",
      "TanStack Query",
      "Zustand",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "Shadcn",
      "Bootstrap",
      "Styled Components",
      "CSS Modules",
    ],
  },
  {
    id: "backend",
    title: "Scalable Backend & Microservices",
    eyebrow: "02 / SERVICES",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Python",
      "FastAPI",
      "Socket.IO",
      "GraphQL",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "NextAuth",
    ],
  },
  {
    id: "genai",
    title: "Generative AI, RAG & LLM Pipelines",
    eyebrow: "03 / INTELLIGENCE",
    skills: [
      "OpenAI",
      "Anthropic",
      "NLP",
      "LLM integrations",
      "Hybrid RAG",
      "PydanticAI",
      "Google Gemini embeddings",
      "Supabase pgvector",
    ],
  },
  {
    id: "data",
    title: "Databases, Realtime & Caching",
    eyebrow: "04 / DATA",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "SQLite",
      "Couchbase",
      "Kafka",
      "WebSockets",
      "SWR",
    ],
  },
  {
    id: "delivery",
    title: "Cloud, DevOps, Testing & Certifications",
    eyebrow: "05 / DELIVERY",
    skills: [
      "AWS",
      "Docker",
      "GitLab CI/CD",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Playwright",
      "SonarQube",
      "Core Web Vitals",
      "Real User Monitoring",
      "HIPAA Associate",
    ],
  },
];

export const architectureHighlights = [
  {
    title: "Performance as an engineering practice",
    detail:
      "Profiled rendering bottlenecks, benchmarked improvements, and used memoization and subscription optimization to improve enterprise workflows.",
  },
  {
    title: "Reusable product foundations",
    detail:
      "Established component architecture, hooks, utilities, API layers, and tested delivery patterns across products and teams.",
  },
  {
    title: "End-to-end ownership",
    detail:
      "Worked from requirements and feasibility through implementation, QA, release planning, client feedback, and delivery.",
  },
];

export const education = {
  degree: "Master of Computer Applications (MCA) — Computer Science & IT",
  institution: "Jain University, Bangalore · Distance Learning",
  dates: "2024 — 2026",
};

type Project = {
  name: string;
  tag: string;
  problem: string;
  outcome: string;
  architecture: string;
  stack: string[];
  demo?: string;
  github?: string;
  tone: string;
};

export const projects: Project[] = [
  {
    name: "Shelfline", // Swap with "Burnrate", "Cartograph", or "LedgerLens AI"
    tag: "FLAGSHIP · GENAI & HYBRID RAG",
    problem:
      "Cross-checking unit economics, dark-store expansion, and risk disclosures across 1,500+ pages of Indian quick-commerce filings (Eternal, Swiggy, Zepto) takes analysts days of manual reading.",
    outcome:
      "Compresses multi-filing financial research from days to seconds with citation-backed answers across 8,300+ indexed chunks and source-level verification.",
    architecture:
      "Hybrid RAG pipeline combining Supabase pgvector semantic search with lexical retrieval, PydanticAI agent orchestration, Gemini embeddings, and FastAPI streaming endpoints with fiscal-year metadata filtering.",
    stack: ["FastAPI", "Python", "PydanticAI", "Gemini Embeddings", "Supabase pgvector", "Hybrid RAG"],
    // repo: "https://github.com/YOUR_USERNAME/document-copilot",
    tone: "project-flagship",
  },
  {
    name: "Complimind AI",
    tag: "SENIOR FRONTEND ENGINEER · HEALTHCARE GENAI",
    problem:
      "UK healthcare compliance teams struggled to navigate complex CQC regulations, clinical governance standards, and audit workflows across fragmented records.",
    outcome:
      "Joined as a founding engineer and architected the core frontend for a healthcare governance copilot, streamlining audit visibility and real-time filtering across large multi-facility datasets.",
    architecture:
      "Built responsive React interfaces with Redux, Redux Thunk, Material UI, modular CSS, and Formik—engineering interactive Cal-Heatmap and React-ApexCharts visualizations with memoized rendering pipelines.",
    stack: ["React", "Redux", "Redux Thunk", "Material UI", "ApexCharts", "Cal-Heatmap", "Formik"],
    demo: "https://complimind.co.uk/",
    tone: "project-complimind",
  },
{
    name: "Kryton",
    tag: "REAL-TIME FINTECH · MARKET INTELLIGENCE",
    problem:
      "Crypto traders need low-latency live prices, OHLC candlestick charts, and trade streams without browser lag or redundant API polling.",
    outcome:
      "Built a responsive market intelligence dashboard with live Binance WebSocket ticker/trade streams, interactive candlestick charts, and visibility-aware connection management.",
    architecture:
      "Built with Next.js 16 App Router, Server Components, and parallel data fetching to minimize redundant requests.Integrates CoinGecko REST APIs and visibility-aware Binance WebSockets with automatic reconnection, bounded trade history, SWR caching, Lightweight Charts, and shadcn/ui",
    stack: ["Next.js 16", "TypeScript", "Binance WebSockets", "Lightweight Charts", "SWR", "shadcn/ui"],
    github: "https://github.com/chirayudev99/Krypton",
    demo:"https://krypton-curr.vercel.app/",
    tone: "project-kryton",
  },
  {
    name: "MarkMind AI",
    tag: "AI · EDTECH (OXFORD INCUBATOR)",
    problem:
      "Educators spend hours every week manually assessing student assignments and writing individualized, rubric-aligned feedback.",
    outcome:
      "Selected for the Oxford University Innovation Startup Incubator; built an AI grading MVP designed to save teachers ~4+ hours per assignment batch with contextual feedback.",
    architecture:
      "Full-stack MERN platform (React, Redux, Node.js, Express, MongoDB) integrating OpenAI and Anthropic APIs with asynchronous evaluation workflows, MongoDB aggregation pipelines, and JWT/RBAC access control.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "OpenAI", "Anthropic", "RBAC"],
    tone: "project-markmind",
  },
  {
    name: "Vidfin",
    tag: "NEXT.JS · STOCK-MARKET EDTECH",
    problem:
      "Retail learners needed reliable stock-market education with DRM-protected video courses and fast load times across devices.",
    outcome:
      "Achieved a 50% improvement in Lighthouse performance scores and ~20% faster page loads while strengthening organic search indexing.",
    architecture:
      "Led frontend development with Next.js SSR, dynamic SEO metadata, code splitting, VdoCipher encrypted video streaming, Firebase Dynamic Links, and Zustand state management.",
    stack: ["Next.js", "TypeScript", "Zustand", "Firebase", "VdoCipher", "SSR"],
    demo: "https://vidfin.com",
    tone: "project-vidfin",
  },
  {
    name: "AskChirayu · AI Portfolio Assistant",
    tag: "FULL-STACK · CONVERSATIONAL AI",
    problem:
      "Visitors scanning a portfolio want direct, contextual answers about project architecture, experience, and skills without digging through sections.",
    outcome:
      "Delivers grounded multi-turn Q&A over my engineering background with persistent browser sessions and zero login friction.",
    architecture:
      "React, TypeScript, and Material UI client connected to Node.js/Express REST APIs, MongoDB, JWT HTTP-only cookie auth, and a multi-turn conversation context pipeline.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI", "JWT"],
    demo: "https://ask-chirayu-ai.vercel.app",
    github:"https://github.com/chirayudev99/AskChirayu.ai",
    tone: "project-assistant",
  },
  // {
  //   name: "Choicemonk",
  //   tag: "SAAS · RECOMMENDATIONS",
  //   problem:
  //     "People researching products need a clear way to compare options and make confident choices.",
  //   outcome:
  //     "A product comparison and recommendation platform built around searchable, filterable catalogs.",
  //   architecture:
  //     "Next.js and React interfaces connect to Node.js and Express APIs, with MongoDB schema/index design, Redux state, and NextAuth/JWT authentication.",
  //   stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "NextAuth"],
  //   tone: "project-choicemonk",
  // },
  // {
  //   name: "Fleet / Chauffeur Booking Platform",
  //   tag: "BOOKING · DISPATCH",
  //   problem:
  //     "Chauffeur bookings need a reliable path from reservation and payment through live driver coordination.",
  //   outcome:
  //     "Booking management, dynamic pricing, payment integration, and real-time geolocation; API and query optimization reduced booking response time by approximately 35%.",
  //   architecture:
  //     "Full-stack React and Node.js/Express platform using MongoDB, Stripe payments, and real-time geolocation APIs.",
  //   stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  //   tone: "project-fleet",
  // },
];

export const contact = {
  email: "singhchirayu22@gmail.com",
  phone: "+918171483794",
  github: "https://github.com/chirayudev99",
};
