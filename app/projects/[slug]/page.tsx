import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMeta, projects } from "../../../data/projects";

const categoryColors: Record<string, string> = {
  saas: "bg-[#00ff00]",
  consumer: "bg-[#ff00ff]",
  ai: "bg-[#00ffff]",
  automation: "bg-[#ffff00]",
  tools: "bg-[#ff6600]",
};

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found | Jed Park",
    };
  }

  return {
    title: `${project.name} | Jed Park`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const meta = categoryMeta[project.category];
  const accentColor = categoryColors[project.category] || "bg-[#00ff00]";

  return (
    <div className="px-6 pb-24 text-black">
      <section className="mx-auto max-w-4xl space-y-6">
        <Link
          href="/projects"
          className="inline-flex border-4 border-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#00ff00] transition-colors"
        >
          ← Back to Projects
        </Link>
        <div className="border-4 border-black bg-white p-8">
          <div className={`h-3 w-full -mt-8 -mx-8 mb-8 ${accentColor}`} style={{ width: 'calc(100% + 64px)' }} />
          <div className="inline-block border-4 border-black bg-white px-4 py-2 mb-4">
            <p className="text-xs font-bold uppercase tracking-wider">
              {meta.label}
            </p>
          </div>
          <h1 className="text-4xl font-black uppercase text-black">
            {project.name}
          </h1>
          <p className="mt-4 text-lg text-black/80 border-l-4 border-black pl-4">{project.summary}</p>
          <p className="mt-6 text-sm text-black/70">{project.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-4 border-black bg-white p-6">
            <h2 className="text-xl font-black uppercase text-black border-b-4 border-black pb-4 mb-4">Highlights</h2>
            <ul className="space-y-3 text-sm text-black/70">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#00ff00] font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-4 border-black bg-white p-6">
            <h2 className="text-xl font-black uppercase text-black border-b-4 border-black pb-4 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border-2 border-black px-3 py-1 text-xs font-bold uppercase hover:bg-[#00ff00] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 ? (
              <div className="mt-6 space-y-2 border-t-4 border-black pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-bold uppercase hover:bg-[#00ff00] transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
