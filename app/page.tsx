import Link from "next/link";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <div className="text-white">
      <Hero />

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              label: "프로젝트",
              value: "26+",
              detail: "AI · SaaS · 자동화 제품",
            },
            {
              label: "핵심 역량",
              value: "LLM",
              detail: "RAG, 에이전트, 오케스트레이션",
            },
            {
              label: "운영 집중",
              value: "Scale",
              detail: "실서비스와 수익화 중심",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                {item.label}
              </p>
              <p className="font-display mt-3 text-3xl text-white">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-white/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              Featured
            </p>
            <h2 className="font-display mt-3 text-3xl text-white">
              대표 프로젝트
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/70">
              AI 제품, 자동화 시스템, 엔터프라이즈 워크플로우를 아우르는 프로젝트를
              선별했습니다.
            </p>
          </div>
          <Link
            href="/projects"
            className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 transition hover:border-white/40 hover:text-white"
          >
            View All
          </Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
