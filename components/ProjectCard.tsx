"use client";

import Link from "next/link";
import type { Project } from "../types/project";
import { categoryMeta } from "../data/projects";
import { cn } from "../lib/utils";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

const categoryColors: Record<string, string> = {
  saas: "bg-[#00ff00]",
  consumer: "bg-[#ff00ff]",
  ai: "bg-[#00ffff]",
  automation: "bg-[#ffff00]",
  tools: "bg-[#ff6600]",
};

export default function ProjectCard({ project, compact }: ProjectCardProps) {
  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#00ff00]";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col border-4 border-black bg-white transition-all duration-100",
        "hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1",
        compact ? "p-5" : "p-6"
      )}
    >
      <div className={cn("h-2 w-full -mt-5 -mx-5 mb-5", accentColor, compact ? "-mt-5 -mx-5 mb-5 w-[calc(100%+40px)]" : "-mt-6 -mx-6 mb-6 w-[calc(100%+48px)]")} />
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-black/60">
            {meta.label}
          </p>
          <h3 className="mt-3 text-xl font-black uppercase text-black">
            {project.name}
          </h3>
          <p className="mt-3 text-sm text-black/70">{project.summary}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="border-2 border-black bg-white px-3 py-1 text-xs font-bold uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t-4 border-black pt-4 text-xs font-bold uppercase tracking-wider">
        <span>View</span>
        <span className="translate-x-0 transition-transform group-hover:translate-x-2">
          →
        </span>
      </div>
    </Link>
  );
}
