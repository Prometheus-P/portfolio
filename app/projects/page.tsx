import type { Metadata } from "next";
import CategoryFilter from "../../components/CategoryFilter";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "Projects | Jed Park",
  description: "Jed Park의 21개 프로젝트 포트폴리오를 확인하세요.",
};

export default function ProjectsPage() {
  return (
    <div className="px-4 pt-6 pb-16 md:px-6 md:pt-10 md:pb-24 lg:pt-14 lg:pb-32">
      <section className="mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-8 md:mb-12 lg:mb-14">
          <span className="badge badge-secondary mb-3 md:mb-4">Portfolio</span>
          <h1 className="text-xl font-black text-black sm:text-2xl md:text-3xl lg:text-4xl">
            프로젝트
          </h1>
          <p className="mt-3 text-xs md:text-sm text-black/60 max-w-lg leading-relaxed md:mt-4 lg:text-base lg:mt-5">
            AI/ML, SaaS, 자동화, 분석까지 다양한 도메인의 제품을 설계하고 구현했습니다.
          </p>
        </div>

        {/* Projects with Filter */}
        <CategoryFilter projects={projects} />
      </section>
    </div>
  );
}
