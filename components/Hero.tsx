import Link from "next/link";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10">
      {/* Marquee banner */}
      <div className="mb-12 -mx-6 border-y-4 border-black bg-[#00ff00] py-3 overflow-hidden">
        <div className="marquee">
          <span className="marquee-content text-sm font-bold uppercase tracking-wider">
            DEVELOPER & ENTREPRENEUR • AI/ML SPECIALIST • FULL-STACK ENGINEER • LLM ORCHESTRATION • PRODUCT BUILDER • DEVELOPER & ENTREPRENEUR • AI/ML SPECIALIST • FULL-STACK ENGINEER • LLM ORCHESTRATION • PRODUCT BUILDER •{" "}
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <div className="inline-block border-4 border-black bg-white px-4 py-2">
            <p className="text-xs font-bold uppercase tracking-wider">
              Developer & Entrepreneur
            </p>
          </div>
          <h1 className="text-4xl font-black uppercase leading-tight text-black sm:text-5xl lg:text-6xl">
            AI로 미래를
            <br />
            <span className="bg-[#00ff00]">설계하고,</span>
            <br />
            비즈니스 가치를
            <br />
            구현합니다.
          </h1>
          <p className="text-lg text-black/80 max-w-xl border-l-4 border-black pl-4">
            Jed Park은 제품, 시스템, 비즈니스를 연결하는 풀스택 개발자입니다.
            LLM 기반 서비스 설계, 자동화 파이프라인, 데이터 중심 제품을 구축합니다.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="brutal-btn px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              View Projects →
            </Link>
            <Link
              href="/contact"
              className="brutal-btn-outline px-8 py-4 text-sm font-bold uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-black">
            <span className="inline-flex h-3 w-3 animate-blink bg-[#00ff00] border-2 border-black" />
            <TypeWriter
              texts={[
                "LLM & RAG Specialist",
                "Product-focused Full-Stack",
                "Automation & Integration",
              ]}
            />
          </div>
        </div>

        <div className="relative">
          <div className="brutal-box p-8">
            <div className="flex items-center justify-between border-b-4 border-black pb-4 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider">
                Signature Stack
              </p>
              <span className="border-4 border-black bg-[#ff00ff] px-3 py-1 text-xs font-bold text-black">
                2025
              </span>
            </div>
            <div className="grid gap-4">
              {[
                { name: "LLM Orchestration", status: "LIVE" },
                { name: "Event-driven Systems", status: "LIVE" },
                { name: "Product Analytics", status: "LIVE" },
                { name: "Enterprise Automation", status: "LIVE" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-4 border-black bg-white px-4 py-3 hover:bg-[#00ff00] transition-colors"
                >
                  <span className="text-sm font-bold text-black">{item.name}</span>
                  <span className="text-xs font-bold text-black/60">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
