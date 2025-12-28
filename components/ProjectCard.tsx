"use client";

import Link from "next/link";
import type { Project } from "../types/project";
import { categoryMeta } from "../data/projects";
import { cn } from "../lib/utils";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  const meta = categoryMeta[project.category];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/30",
        compact ? "p-5" : "p-6"
      )}
    >
      <div className={cn("h-1.5 w-full bg-gradient-to-r", meta.color)} />
      <div className="mt-5 flex flex-1 flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            {meta.label}
          </p>
          <h3 className="font-display mt-3 text-2xl text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-sm text-white/70">{project.summary}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
        <span>View</span>
        <span className="translate-x-0 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
