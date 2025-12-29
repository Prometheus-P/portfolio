import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Projects Section */}
      <section className="px-4 pt-10 pb-16 md:px-6 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 border-t-4 border-black">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex flex-col gap-4 mb-8 pb-6 border-b-2 border-black/10 md:flex-row md:items-end md:justify-between md:gap-6 lg:mb-12 lg:pb-8">
            <div className="space-y-2 md:space-y-3">
              <span className="badge badge-primary">Featured</span>
              <h2 className="text-lg font-black text-black md:text-xl lg:text-2xl">
                대표 프로젝트
              </h2>
              <p className="text-xs md:text-sm text-black/60 max-w-md leading-relaxed">
                AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트입니다.
              </p>
            </div>
            <Link href="/projects" className="brutal-btn-outline self-start md:self-auto">
              전체 보기
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
