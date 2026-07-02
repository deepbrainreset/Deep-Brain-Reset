export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  year: string;
  challenge: string;
  strategy: string;
  creativeProcess: string;
  execution: string;
  technologyUsed: string[];
  outcome: string;
  videoUrl?: string;
  creativeInsight?: string;
  projectInfo?: { label: string; value: string }[];
  demonstrates?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: "Advertising" | "Engineering" | "Automation" | "Strategy";
  bulletPoints: string[];
  tag: string;
}

export interface ProcessPhase {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
}

export interface InquiryInput {
  businessName: string;
  industry: string;
  bottleneck: string;
  additionalNotes?: string;
}
