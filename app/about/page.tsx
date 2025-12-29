import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jed Park",
  description: "Jed Park의 개발 철학과 핵심 역량을 소개합니다.",
};

const capabilities = [
  {
    title: "Product Thinking",
    description: "문제 정의부터 시장 검증까지 제품의 전체 흐름을 설계합니다.",
  },
  {
    title: "LLM Orchestration",
    description: "RAG, 에이전트, 멀티모달 파이프라인을 서비스에 통합합니다.",
  },
  {
    title: "Automation",
    description: "파트너 API와 결제, 운영 플로우를 자동화해 비용을 절감합니다.",
  },
  {
    title: "Execution",
    description: "실서비스 배포, 성장, 운영을 동시에 고려한 실행력을 중시합니다.",
  },
];

const techStack = [
  {
    title: "Languages",
    items: ["Go", "Java", "Kotlin", "TypeScript", "Python"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "Gin", "Fiber", "FastAPI", "Next.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "AI/ML",
    items: ["OpenAI", "LangChain", "LangGraph", "LlamaIndex", "Upstage"],
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 pt-6 pb-16 md:px-6 md:pt-10 md:pb-24 lg:pt-14 lg:pb-32">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <section className="mb-10 md:mb-16 lg:mb-20">
          <span className="badge badge-primary mb-3 md:mb-4">About</span>
          <h1 className="text-xl font-black text-black sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            기술과 비즈니스를
            <br />
            연결하는 개발자
          </h1>
          <p className="mt-4 text-xs md:text-base text-black/60 max-w-xl leading-relaxed md:leading-[1.75] md:mt-6 lg:text-lg lg:mt-8">
            AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를 제품으로 구현합니다.
            실용적인 관점으로 시스템을 설계하고 운영합니다.
          </p>
        </section>

        {/* Capabilities */}
        <section className="mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-[9px] md:text-[11px] font-bold text-black/50 uppercase tracking-wider mb-5 md:mb-8">
            Core Capabilities
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:gap-5">
            {capabilities.map((item) => (
              <div key={item.title} className="card-elevated p-4 md:p-6 lg:p-7">
                <h3 className="text-sm md:text-base font-bold text-black mb-2 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-black/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-10 md:mb-16 lg:mb-20">
          <h2 className="text-[9px] md:text-[11px] font-bold text-black/50 uppercase tracking-wider mb-5 md:mb-8">
            Tech Stack
          </h2>
          <div className="card-elevated p-4 md:p-6 lg:p-8">
            <div className="grid gap-5 sm:grid-cols-2 md:gap-8 lg:gap-10">
              {techStack.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs md:text-sm font-bold text-black mb-3 md:mb-4">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="brutal-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section>
          <div className="card-elevated p-4 md:p-6 lg:p-8 bg-[#00ff00]/10 border-[#00ff00]">
            <h2 className="text-[9px] md:text-[11px] font-bold text-black/50 uppercase tracking-wider mb-3 md:mb-5">
              Philosophy
            </h2>
            <p className="text-base md:text-lg font-black text-black leading-snug md:leading-relaxed lg:text-xl">
              실용적인 AI 응용, 사용자 중심 설계, 지속적 학습
            </p>
            <p className="mt-3 text-xs md:text-sm text-black/60 leading-relaxed md:mt-4 lg:mt-5">
              기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
              복잡한 문제를 단순하게 풀고, 확장 가능한 시스템을 구축합니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
