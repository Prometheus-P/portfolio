export type ProjectCategory =
  | "b2b-saas"
  | "b2c-consumer"
  | "ai-agent"
  | "automation"
  | "developer-tools"
  | "analytics"
  | "experimental";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  highlights: string[];
  links?: ProjectLink[];
  featured?: boolean;
};
