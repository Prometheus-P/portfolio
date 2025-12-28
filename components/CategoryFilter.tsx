"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "../types/project";
import { categoryMeta } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { cn } from "../lib/utils";

type CategoryFilterProps = {
  projects: Project[];
};

type FilterKey = ProjectCategory | "all";

export default function CategoryFilter({ projects }: CategoryFilterProps) {
  const [active, setActive] = useState<FilterKey>("all");

  const categories = useMemo(
    () =>
      (Object.keys(categoryMeta) as ProjectCategory[]).map((key) => ({
        key,
        ...categoryMeta[key],
        count: projects.filter((project) => project.category === key).length,
      })),
    [projects]
  );

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition",
            active === "all" &&
              "border-white/40 bg-white/10 text-white shadow-lg"
          )}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActive(category.key)}
            className={cn(
              "rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition",
              active === category.key &&
                "border-white/40 bg-white/10 text-white shadow-lg"
            )}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
