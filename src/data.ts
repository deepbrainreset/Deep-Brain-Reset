import { CaseStudy, Service, ProcessPhase } from "./types";

export const services: Service[] = [
  {
    id: "creative-advertising",
    title: "Creative Advertising",
    category: "Advertising",
    tag: "High-impact narrative vision",
    description: "We define precise creative copy, storyboard immersive narrative concepts, and design strategic campaign themes that command absolute consumer attention and build high-end brand equity.",
    bulletPoints: [
      "Narrative copy & campaign art direction",
      "Multi-channel advertising strategy",
      "Conceptual print & out-of-home themes",
      "Brand voice and positioning architectures"
    ]
  },
  {
    id: "ai-commercial",
    title: "AI Commercial Production",
    category: "Advertising",
    tag: "Cinematic machine-learning systems",
    description: "We combine generative diffusion models with state-of-the-art camera simulation and advanced 3D render pipelines to produce photorealistic television commercials and filmic social campaigns.",
    bulletPoints: [
      "AI-driven visual frame-generation",
      "Unreal Engine / 3D virtual production",
      "High-fidelity simulation and fluid physics",
      "Color-grading & cinematic sound design"
    ]
  },
  {
    id: "full-stack-dev",
    title: "Full Stack Development",
    category: "Engineering",
    tag: "Production-ready enterprise architectures",
    description: "We engineer performant, low-latency applications with type-safe backend microservices. Our codebases are designed for military-grade stability, scaling seamlessly from launch to millions of queries.",
    bulletPoints: [
      "Type-safe Node.js & Go API microservices",
      "React/Next.js single page applications",
      "Durable SQL database schematics & queue handling",
      "Optimized load-balanced cloud structures"
    ]
  },
  {
    id: "premium-websites",
    title: "Premium Websites",
    category: "Engineering",
    tag: "Luxury editorial digital sanctuaries",
    description: "We translate high-end brand identities into pixel-perfect, sensory websites. Combining slow-motion scroll transitions, editorial layouts, and sub-second loading states.",
    bulletPoints: [
      "Editorial typography and bespoke layout systems",
      "Interactive WebGL animations & fluid scroll dynamics",
      "Sub-50ms paint times and global CDN caching",
      "Adaptive responsive design across luxury dimensions"
    ]
  },
  {
    id: "custom-platforms",
    title: "Custom Platforms",
    category: "Engineering",
    tag: "Tailored operational interfaces",
    description: "We design and build bespoke client portals, real-time administrative control centers, and booking orchestrators that consolidate fragmented SaaS dependencies into a single digital environment.",
    bulletPoints: [
      "Secure client onboarding & role-based portals",
      "Real-time live-updating metrics & calendars",
      "Custom analytics & telemetry aggregation",
      "Robust REST & GraphQL API orchestration"
    ]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    category: "Automation",
    tag: "Removing operational friction entirely",
    description: "We replace manual, error-prone data replication with self-healing background automation pipelines, integrating your existing CRM, inventory database, and communication layers.",
    bulletPoints: [
      "Multi-platform data synchronization",
      "Automated SMS/Email communications",
      "Automated invoicing & financial reconciliation",
      "Continuous health and process logging"
    ]
  },
  {
    id: "ai-integration",
    title: "Artificial Intelligence Integration",
    category: "Automation",
    tag: "Cognitive workflows with semantic depth",
    description: "We infuse intelligence into standard business workflows. From fine-tuned semantic document parsing to context-aware customer-facing assistants that understand nuance.",
    bulletPoints: [
      "Secure server-side LLM document extraction",
      "Vector databases & retrieval-augmented generation",
      "Natural language business data synthesis",
      "Custom fine-tuned agent task-runners"
    ]
  },
  {
    id: "creative-consulting",
    title: "Creative Consulting",
    category: "Strategy",
    tag: "Rigorous diagnostic strategy",
    description: "We act as your unified Fractional Chief Technology and Creative Directors. We audit existing systems, outline immediate leverage points, and draft complete execution plans.",
    bulletPoints: [
      "Tech stack architecture audits",
      "Aesthetic and communication consulting",
      "Technical feasibility mapping & cost-containment",
      "Generative workflow integration workshops"
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "axon-revolution",
    client: "AXON REVOLUTION",
    title: "Concept Fashion Film",
    subtitle: "AXON REVOLUTION is a conceptual AI-generated fashion commercial exploring individuality in a dystopian future where conformity has become the norm.",
    category: "AI Commercial Production",
    year: "2026",
    challenge: "Create a premium fashion commercial that captures attention without relying on traditional product advertising. The project had to communicate emotion, atmosphere and storytelling instead of features or benefits. The film needed to feel like a real international campaign while being entirely conceptual.",
    strategy: "To demonstrate how artificial intelligence can be integrated into a professional cinematic production pipeline while maintaining a strong creative direction and narrative consistency, we formulated a structured, multi-step AI video-to-audio workspace.",
    creativeProcess: "Every project follows a structured production methodology designed to maximize consistency and quality: \n\n• 01 Concept Development: The narrative, symbolism and emotional objective are defined before any visual production begins.\n• 02 Character Design: Character Sheets are created for every principal and secondary character in order to maintain visual consistency across every scene.\n• 03 Environment Design: All locations are designed from multiple camera angles before production to guarantee architectural consistency.\n• 04 Storyboard: The complete commercial is planned shot by shot, defining camera movements, composition, and transitions.\n• 05 AI Production: Every shot is individually generated following established creative direction, character sheets, and environments.\n• 06 Music Production: An original soundtrack is composed by AI specifically for the pacing, emotional rhythm, and narrative progression of the film.\n• 07 Editing: Visuals, music, pacing and transitions are refined into the final cinematic piece.\n• 08 4K Mastering: The project is exported and mastered at 4K for premium presentation.",
    execution: "We structured a unified creative production pipeline. Generative models were synchronized via character seeds and background prompts, allowing us to build consistent character and architectural assets. The finished film was compiled and scored with custom AI music, then mastered to 4K resolution.",
    technologyUsed: [
      "Artificial Intelligence",
      "Creative Direction",
      "Storytelling",
      "Character Design",
      "Environment Design",
      "Storyboard Development",
      "AI Video Production",
      "AI Music Composition",
      "Professional Editing",
      "4K Mastering"
    ],
    outcome: "AXON REVOLUTION demonstrates that artificial intelligence can dramatically accelerate production without replacing creative thinking. Technology generated the assets; creative direction generated the story. That difference defines the Deep Brain Reset production philosophy.",
    videoUrl: "https://www.youtube.com/embed/t8jb_QmENy4",
    creativeInsight: "When everyone dresses the same, everyone thinks the same. Fashion has always been more than clothing. It communicates identity, beliefs, personality, and culture. AXON REVOLUTION imagines a future where individuality has almost disappeared. One person chooses to break that system. The commercial is not about clothing. It is about the courage to think differently.",
    projectInfo: [
      { label: "Project Type", value: "Concept Commercial" },
      { label: "Industry", value: "Fashion" },
      { label: "Duration", value: "1 minute 51 seconds" },
      { label: "Development Time", value: "Approximately 24 hours" },
      { label: "Status", value: "Concept Project" }
    ],
    demonstrates: [
      "Creative Direction",
      "Storytelling",
      "AI Production Pipeline",
      "Visual Consistency",
      "Cinematic Composition",
      "Concept Development",
      "Rapid Premium Production",
      "Professional Editing",
      "Integrated AI Workflow"
    ]
  },
  {
    id: "axon-drive",
    client: "AXON — Drive Beyond Reality",
    title: "Concept Automotive Commercial",
    subtitle: "AXON is a speculative automotive commercial demonstrating how AI can be used to build premium advertising campaigns for products that do not yet exist.",
    category: "AI Commercial Production",
    year: "2026",
    challenge: "Create an automotive commercial capable of competing visually with premium campaigns from brands such as Porsche, BMW, Audi or Polestar, while being produced almost entirely using AI-assisted workflows. The objective was to prove that cinematic quality, emotional storytelling and premium brand identity can now be achieved with dramatically reduced production time.",
    strategy: "We established a visual identity blueprint for a fictional luxury automotive brand and designed a narrative focused on wonder, freedom, and emotional connection rather than technical specifications, combining it with multi-model frame generation.",
    creativeProcess: "• Creative Direction: The project started with the creation of a fictional premium automotive brand designed to feel authentic and internationally recognizable.\n• Concept Development: Instead of focusing on speed or technology, the narrative was built around wonder, freedom and emotional connection.\n• Visual Exploration: Hundreds of AI-generated concepts were created until a consistent visual language was achieved for the vehicle, environments and whales.\n• Production: Each scene was produced individually using AI generation tools while maintaining cinematic continuity across locations, lighting and vehicle design.\n• Post Production: Editing, pacing, music and sound design were carefully refined to create the emotional rhythm expected from a luxury automotive commercial.",
    execution: "Utilizing state-of-the-art text-to-video diffusion mechanisms and cinematic spatial audio, we compiled over 100 high-resolution cinematic passes, perfecting the motion tracking and grading to achieve a breathtaking 4K master in under 12 hours.",
    technologyUsed: [
      "ChatGPT",
      "Google AI Studio",
      "Generative AI Video",
      "Professional Editing Pipeline",
      "AI Image Generation",
      "Cloudinary"
    ],
    outcome: "A complete concept commercial demonstrating how AI can drastically reduce production costs while maintaining premium visual quality. The project illustrates how future advertising workflows can combine creativity, engineering and artificial intelligence into a single production pipeline.",
    videoUrl: "https://www.youtube.com/embed/CAewwTDQ0Nk",
    creativeInsight: "When reality blends with fantasy, the ordinary road trip becomes an extraordinary journey. The commercial positions the vehicle not simply as transportation, but as a gateway to extraordinary moments of deep wonder.",
    projectInfo: [
      { label: "Project", value: "AXON — Drive Beyond Reality" },
      { label: "Category", value: "AI Commercial Production" },
      { label: "Industry", value: "Automotive" },
      { label: "Duration", value: "1 minute 40 seconds" },
      { label: "Development Time", value: "Approximately 12 hours" },
      { label: "Status", value: "Concept Project" }
    ],
    demonstrates: [
      "Creative Direction",
      "Concept Development",
      "AI Production",
      "Automotive Visualization",
      "Storytelling",
      "Editing",
      "Sound Design",
      "Brand Design"
    ]
  },
  {
    id: "con-la-tuya",
    client: "Con La Tuya Contribuyente",
    title: "Con La Tuya Contribuyente // Fiscal Transparency Platform",
    subtitle: "Civic technology platform focused on transparency, public data, and investigative journalism.",
    category: "Civic Intelligence Platform",
    year: "2026",
    challenge: "Translating large volumes of public information into an interface that remains approachable, trustworthy and easy to navigate. The experience needed to balance editorial storytelling with structured data presentation while avoiding visual overload.",
    strategy: "Con La Tuya Contribuyente was conceived as a civic information platform focused on making complex public fiscal information easier to understand. The design emphasizes neutrality, readability and structured navigation while maintaining high performance across desktop and mobile devices.",
    creativeProcess: "• Diagnostic Research: Analyzed the cognitive blockages citizens face when trying to read and navigate dense public fiscal logs.\n• Neutral Information Architecture: Drafted objective content taxonomy, removing political or biased elements to project pure institutional trustworthiness.\n• Layout Engineering: Structured modular article pages and clean, clear data visualizers to present complex fiscal calculations without cognitive load.",
    execution: "Developed a secure, lightning-fast React platform utilizing editorial information hierarchies, modular layouts, sub-100ms client paint times, and pristine responsive touch mechanics.",
    technologyUsed: [
      "TypeScript",
      "React SPA",
      "Tailwind CSS",
      "Information Architecture",
      "UI Design",
      "SEO Optimization",
      "Performance Optimization"
    ],
    outcome: "Successfully structured, categorized, and launched a highly legible transparency dashboard that renders complex public datasets in sub-100ms paint times and establishes absolute objective authority.",
    creativeInsight: "Civic data platform design should avoid political signaling or aggressive rhetoric. Pure typographic rigor, generous white-space, and clean information hierarchy build unparalleled institutional trust and make public records accessible to all.",
    projectInfo: [
      { label: "Project", value: "Civic Information Platform" },
      { label: "Client", value: "Con La Tuya Contribuyente" },
      { label: "URL", value: "https://con-la-tuya.app" },
      { label: "Industry", value: "Government Transparency, Public Info" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Production" }
    ],
    demonstrates: [
      "Civic Tech",
      "Information Architecture",
      "UI Design",
      "UX Research",
      "Responsive Development",
      "SEO & Performance"
    ]
  },
  {
    id: "menu-noir",
    client: "MENU NOIR",
    title: "Hospitality Operating System",
    subtitle: "A complete Hospitality Operating System designed to integrate guest digital menus, supply-chain inventory dashboards, table-side experience simulators, and operational metrics.",
    category: "Hospitality Operating System",
    year: "2026",
    challenge: "Hospitality businesses have historically managed front-of-house displays, table service, and inventory pipelines via disconnected point solutions, introducing operational latency and visual inconsistencies.",
    strategy: "We designed a unified hospitality platform that integrates physical layouts and ingredient thresholds directly with customer-facing digital menus, presented in a high-contrast matte black editorial interface.",
    creativeProcess: "• Operational Architecture: Mapping raw back-of-house logistical schemas directly into responsive customer-facing menu layers.\n• Guest Experience Simulator: Engineering a simulation tool to test guest decision-making, visual aesthetics, and ordering flows prior to physical deployment.\n• Unified Intelligence: Aggregating real-time restaurant demand patterns, inventory statuses, and telemetry metrics into an active SaaS administration panel.",
    execution: "Developed a robust React and Firebase single-page-application utilizing optimized Cloudinary media layers and an intuitive, performance-tuned administration hub.",
    technologyUsed: [
      "React",
      "Firebase",
      "Cloudinary Integration",
      "Hospitality Operating System",
      "Guest Experience Simulator",
      "Supply Dashboards",
      "Tailwind CSS"
    ],
    outcome: "Streamlined operational efficiency across high-end restaurants, reducing menu configuration latencies to sub-100ms and eliminating inventory-menu mismatches entirely.",
    creativeInsight: "Premium gastronomy deserves matching luxury technology. By combining a matte black editorial aesthetic with a powerful operational core, Menu Noir turns restaurant management into an elevated digital experience.",
    projectInfo: [
      { label: "Project", value: "Hospitality SaaS" },
      { label: "Client", value: "MENU NOIR" },
      { label: "URL", value: "https://menu-noir.app" },
      { label: "Industry", value: "Hospitality Tech" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Active Production" }
    ],
    demonstrates: [
      "Product Strategy",
      "SaaS Architecture",
      "UI/UX Design",
      "Operational Intelligence",
      "Firebase Backend",
      "Performance Optimization"
    ]
  },
  {
    id: "sucupam",
    client: "SUCUPAM",
    title: "Corporate Website & Industrial E-Commerce",
    subtitle: "Modernizing digital presence and streamlining online product discovery through a scalable industrial e-commerce platform.",
    category: "Corporate Commerce Platform",
    year: "2026",
    challenge: "Translate SUCUPAM's extensive industrial catalog into a streamlined, modern e-commerce experience. The legacy system was hard to navigate, causing friction in B2B inquiry pipelines and customer discovery of specialized components.",
    strategy: "We engineered a clean, high-density industrial layout inspired by raw metal and precise architectural grids. Combining sub-second paint times, modular product filtering, and an elegant, responsive catalog architecture to maximize search discovery.",
    creativeProcess: "• Diagnostic Audit: Documented friction points in B2B buying cycles, focusing on bulk part search and manual catalog downloading.\n• Material Aesthetics: Drafted a dark graphite color palette paired with subtle metallic highlights, mirroring industrial machinery and premium engineering.\n• Layout Engineering: Structured dense, highly readable layouts with generous negative space to make complex specification sheets easily digestible.",
    execution: "Developed a headless product catalog and commerce solution using React, optimized for lightning-fast asset loading and responsive mobile interactions, complete with direct B2B lead capture routing.",
    technologyUsed: [
      "TypeScript",
      "React SPA",
      "Tailwind CSS",
      "Headless Catalog Engine",
      "SEO Optimization",
      "B2B Inquiry Workflows"
    ],
    outcome: "Successfully streamlined online product discovery, reducing page-load latencies from 3.8s to sub-100ms and increasing B2B direct inquiries by 45% within the first 60 days of launch.",
    creativeInsight: "Industrial equipment deserves the same aesthetic rigor as high-end luxury products. By treating machinery components with editorial prestige—bold typography, dramatic contrasts, and spacious margins—we establish immediate market authority.",
    projectInfo: [
      { label: "Project", value: "Industrial E-Commerce Platform" },
      { label: "Client", value: "SUCUPAM" },
      { label: "URL", value: "https://sucupam.com" },
      { label: "Industry", value: "Industrial Manufacturing" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Active Publication" }
    ],
    demonstrates: [
      "Web Design",
      "E-Commerce Architecture",
      "Responsive UX",
      "SEO Strategy",
      "Performance Tuning",
      "Content Hierarchy"
    ]
  },
  {
    id: "emilia-marsicano",
    client: "Emilia Marsicano Abogada",
    title: "Official Firm Website",
    subtitle: "An editorial digital sanctuary designed and engineered for a Florida-based luxury legal practice.",
    category: "Premium Brand Website",
    year: "2026",
    challenge: "Establish a highly professional and elegant digital presence for counselor Emilia Marsicano. The portal needed to serve as an authoritative, accessible, and fast information terminal for international and local clients seeking real estate, probate, contract, and corporate representation in Florida, deviating from outdated and cluttered traditional legal directories.",
    strategy: "We engineered a bespoke, single-page-application layout combining sleek typography, classic architectural proportions, and robust performance optimization. The interface provides instantaneous translations, structured contact routing, and mobile accessibility compliant with ADA standards.",
    creativeProcess: "• Diagnostic Strategy: Audited competitor legal sites to isolate user frustration points (clunky forms, confusing terms, lack of clear contact pathways).\n• Editorial Typography: Paired classical display typography with highly readable sans-serif body text, establishing immediate authority and trustworthiness.\n• Architecture-First Layout: Designed generous whitespace and subtle hover-states reflecting high-end editorial and legal professionalism.\n• Seamless Interaction: Integrated localized routing so Spanish-speaking and English-speaking clientele can explore legal capabilities with zero friction.",
    execution: "We built a high-performance web experience with optimized asset caching, elegant navigation flow, and direct calendar/consultation integration, achieving sub-100ms response times.",
    technologyUsed: [
      "TypeScript",
      "React SPA",
      "Tailwind CSS",
      "Aesthetic Editorial Layouts",
      "Responsive Accessibility",
      "Global CDN Caching"
    ],
    outcome: "Redefined digital accessibility for the firm, providing a unified portal that channels secure client intakes, boosts brand prestige, and represents the counselor's attention to detail.",
    creativeInsight: "A great lawyer's digital presence should reflect their defense of clarity and order. By stripping away generic clip-art scales of justice and bulky sidebars, the firm's website commands attention through pristine typography and uncompromising simplicity.",
    projectInfo: [
      { label: "Project", value: "Official Firm Website" },
      { label: "Client", value: "Emilia Marsicano Abogada" },
      { label: "URL", value: "https://www.emiliamarsicanoabogada.com" },
      { label: "Industry", value: "Legal Services" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Active Publication" }
    ],
    demonstrates: [
      "Creative Direction",
      "Web Design",
      "Full Stack Engineering",
      "Editorial Typography",
      "Responsive Optimization",
      "Secure Contact Systems"
    ]
  }
];

export const processPhases: ProcessPhase[] = [
  {
    phase: "01",
    title: "Business Discovery",
    subtitle: "Isolating key bottlenecks",
    description: "We conduct deep diagnostic sessions with your decision-makers to audit operating pipelines and clarify precise business constraints.",
    outputs: ["Commercial diagnostic report", "Functional systems overview", "Operational boundary definitions"]
  },
  {
    phase: "02",
    title: "Research",
    subtitle: "Systematic auditing",
    description: "We audit existing system structures, document complex database schemas, and map out third-party CRM or ERP dependencies.",
    outputs: ["Data architecture blueprint", "Legacy API dependency map", "Technological feasibility report"]
  },
  {
    phase: "03",
    title: "Creative Strategy",
    subtitle: "Aesthetic narrative vision",
    description: "We frame the conceptual campaign goals, establish the visual identity system, and define how the brand communicates.",
    outputs: ["Creative direction guide", "Campaign theme options", "Visual tone-of-voice directives"]
  },
  {
    phase: "04",
    title: "Concept Development",
    subtitle: "Prototyping logic flows",
    description: "We structure the information architecture, storyboard key brand animations, and outline strategic data-entry systems.",
    outputs: ["Cinematic narrative storyboards", "User-flow schematics", "Initial concept presentation slides"]
  },
  {
    phase: "05",
    title: "Design",
    subtitle: "Luxury editorial layout",
    description: "We design pixel-perfect layouts featuring luxurious whitespace, custom interactive graphics, and elegant typographic hierarchies.",
    outputs: ["High-fidelity typography system", "Complete wireframe prototypes", "Interactive mockups"]
  },
  {
    phase: "06",
    title: "Engineering",
    subtitle: "Type-safe robust coding",
    description: "We write clean, modular, production-ready code with safe TypeScript, performant frontend engines, and low-latency API architectures.",
    outputs: ["TypeScript / React codebase", "Structured SQL schemas", "Highly scalable API layers"]
  },
  {
    phase: "07",
    title: "Artificial Intelligence",
    subtitle: "Cognitive task automation",
    description: "We develop customized generative models, connect secure server-side LLM processing queues, and integrate semantic intelligence.",
    outputs: ["Secure server-side LLM parsers", "RAG vector-embedding databases", "Contextual AI assistants"]
  },
  {
    phase: "08",
    title: "Production",
    subtitle: "Compiling system assets",
    description: "We render high-resolution brand cinema media, compile static assets, bundle custom scripts, and prepare staging environments.",
    outputs: ["High-fidelity media master files", "Staging system verification", "Compiled production code packages"]
  },
  {
    phase: "09",
    title: "Testing",
    subtitle: "Rigorous quality check",
    description: "We conduct sub-50ms performance audits, complete end-to-end user-flow tests, and verify system security layers.",
    outputs: ["Performance score logs", "Comprehensive security reports", "API response validation reports"]
  },
  {
    phase: "10",
    title: "Deployment",
    subtitle: "Seamless live publication",
    description: "We publish compiled systems to secure, load-balanced servers with global CDN caching and automatic health checks.",
    outputs: ["Live secure web domains", "Cloud infrastructure setups", "Automated deployment pipelines"]
  },
  {
    phase: "11",
    title: "Optimization",
    subtitle: "Compounding growth",
    description: "We monitor ongoing operational analytics, refine database indexing speeds, and adapt automated prompts to maximize efficiency.",
    outputs: ["Performance telemetry feeds", "Continuous prompt adjustments", "System upgrade plans"]
  }
];
