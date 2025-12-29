import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jed Park",
  description: "Jed Park의 개발 철학과 핵심 역량을 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 text-black">
      <section className="mx-auto max-w-4xl space-y-8">
        <div className="inline-block border-4 border-black bg-[#00ff00] px-4 py-2">
          <p className="text-xs font-bold uppercase tracking-wider">About</p>
        </div>
        <h1 className="text-4xl font-black uppercase text-black sm:text-5xl">
          기술과 비즈니스를
          <br />
          연결하는 개발자
        </h1>
        <p className="text-lg text-black/80 border-l-4 border-black pl-4">
          Jed Park은 AI/ML 기반 솔루션을 설계하고, 복잡한 비즈니스 문제를
          제품으로 구현합니다. 고대의 지혜와 현대 기술을 연결하는 관점으로
          시스템을 설계합니다.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Product Thinking",
              description:
                "문제 정의부터 시장 검증까지 제품의 전체 흐름을 설계합니다.",
            },
            {
              title: "LLM Orchestration",
              description:
                "RAG, 에이전트, 멀티모달 파이프라인을 서비스에 통합합니다.",
            },
            {
              title: "Automation",
              description:
                "파트너 API와 결제, 운영 플로우를 자동화해 비용을 절감합니다.",
            },
            {
              title: "Execution",
              description:
                "실서비스 배포, 성장, 운영을 동시에 고려한 실행력을 중시합니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-4 border-black bg-white p-6 hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-black uppercase text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="border-4 border-black bg-white p-8">
          <div className="inline-block border-4 border-black bg-[#ff00ff] px-4 py-2 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider">
              Tech Stack
            </p>
          </div>
          <h2 className="text-3xl font-black uppercase text-black">
            Backend · Data · AI
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Languages",
                items: ["Go", "Java", "Kotlin", "TypeScript", "Python"],
              },
              {
                title: "Backend",
                items: ["Spring (Spring Boot)", "Gin", "Fiber", "Echo", "FastAPI"],
              },
              {
                title: "Databases",
                items: [
                  "OracleDB",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "PocketBase",
                  "Supabase",
                ],
              },
              {
                title: "AI",
                items: [
                  "Upstage",
                  "OpenAI",
                  "Gemini",
                  "LangChain",
                  "LangGraph",
                  "LlamaIndex",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="border-4 border-black bg-white p-6"
              >
                <h3 className="text-xl font-black uppercase text-black">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black px-3 py-1 text-xs font-bold uppercase hover:bg-[#00ff00] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <div className="border-4 border-black bg-[#00ffff] p-8">
          <div className="inline-block border-4 border-black bg-white px-4 py-2 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider">
              Philosophy
            </p>
          </div>
          <h2 className="text-3xl font-black uppercase text-black">
            Bridging the mystical
            <br />
            with the technological
          </h2>
          <p className="mt-4 text-sm text-black/80">
            실용적인 AI 응용, 사용자 중심 설계, 지속적 학습을 핵심 가치로 삼습니다.
            기술을 통해 실질적인 비즈니스 가치를 만드는 데 집중합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
