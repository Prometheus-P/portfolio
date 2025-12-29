import Link from "next/link";

const skills = ["LLM", "RAG", "Full-Stack", "Automation"];

const highlights = [
  { label: "Projects", value: "21+", color: "bg-[#00ff00]" },
  { label: "Focus", value: "LLM", color: "bg-[#00ffff]" },
  { label: "Goal", value: "Scale", color: "bg-[#ff00ff]" },
];

export default function Hero() {
  return (
    <section className="px-4 pt-2 pb-8 md:px-6 md:pt-4 md:pb-16">
      <div className="mx-auto max-w-5xl">
        {/* Badge */}
        <div className="mb-6 md:mb-8">
          <span className="badge badge-primary">
            Available
            <span className="ml-2 h-2 w-2 rounded-full bg-black animate-pulse" />
          </span>
        </div>

        {/* Main Heading - Mobile optimized */}
        <h1 className="text-[2rem] font-black leading-[1.1] tracking-tight text-black mb-4 md:text-5xl lg:text-6xl md:mb-6">
          AI로 비즈니스
          <br />
          <span className="relative">
            가치를 만듭니다
            <span className="absolute bottom-0 left-0 h-2 w-full bg-[#00ff00] -z-10 md:h-3" />
          </span>
        </h1>

        {/* Description - Compact for mobile */}
        <p className="text-sm text-black/70 leading-relaxed mb-6 max-w-md md:text-base md:mb-8 md:max-w-lg">
          LLM 기반 서비스 설계부터 자동화 파이프라인까지,
          실제 운영 가능한 솔루션을 구축합니다.
        </p>

        {/* Skills - Compact tags */}
        <div className="flex flex-wrap gap-2 mb-6 md:gap-3 md:mb-8">
          {skills.map((skill) => (
            <span key={skill} className="brutal-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons - Stack on mobile */}
        <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:gap-4 md:mb-12">
          <Link href="/projects" className="brutal-btn w-full sm:w-auto">
            프로젝트 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="brutal-btn-outline w-full sm:w-auto">
            연락하기
          </Link>
        </div>

        {/* Stats - Horizontal scroll on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:gap-4 md:overflow-visible">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex-shrink-0 w-28 p-3 border-3 border-black bg-white md:w-auto md:flex-1 md:p-4"
            >
              <div className={`h-1.5 w-8 ${item.color} mb-2 md:w-10 md:mb-3`} />
              <p className="text-xl font-black text-black md:text-2xl lg:text-3xl">
                {item.value}
              </p>
              <p className="text-[10px] font-bold text-black/50 uppercase tracking-wider mt-1 md:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Stack - Compact */}
        <div className="mt-6 p-4 border-3 border-black bg-black text-white md:mt-8 md:p-5">
          <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest mb-3 md:text-[10px]">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Python", "LangChain", "Go", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-bold bg-white/10 border border-white/30 md:px-3 md:py-1.5 md:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
