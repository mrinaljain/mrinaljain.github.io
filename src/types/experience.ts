export type ExperienceTechnologyKey =
  | "angular"
  | "aws"
  | "bootstrap"
  | "css"
  | "dart"
  | "flutter"
  | "git"
  | "html5"
  | "javascript"
  | "nodejs"
  | "react";

export type ExperienceStatus = "draft" | "published";

export interface Experience {
  id: string;
  company: string;
  slug: string;
  logo: string;
  companyUrl?: string;
  designation: string;
  employmentType?: string;
  location: string;
  yearLabel: string;
  startDate?: string;
  endDate?: string | null;
  isCurrent?: boolean;
  summary?: string;
  projects: string[];
  technologyKeys: ExperienceTechnologyKey[];
  order: number;
  accentColor?: string;
  status: ExperienceStatus;
  isFeatured?: boolean;
}

export interface ExperienceApiResponse {
  ok: boolean;
  experiences: Experience[];
}