import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jed Park",
  description: "프로젝트 협업 및 문의를 위한 연락처 페이지입니다.",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 text-black">
      <section className="mx-auto max-w-3xl space-y-8">
        <div className="inline-block border-4 border-black bg-[#ff00ff] px-4 py-2">
          <p className="text-xs font-bold uppercase tracking-wider">Contact</p>
        </div>
        <h1 className="text-4xl font-black uppercase text-black sm:text-5xl">
          함께 만들
          <br />
          프로젝트가 있다면
        </h1>
        <p className="text-lg text-black/80 border-l-4 border-black pl-4">
          스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을
          환영합니다. 아래 채널로 편하게 연락해주세요.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-4 border-black bg-white p-6 hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            <p className="text-xs font-bold uppercase tracking-wider text-black/60">
              Email
            </p>
            <p className="mt-3 text-xl font-black text-black">parkdavid31@gmail.com</p>
            <a
              href="mailto:parkdavid31@gmail.com"
              className="mt-4 inline-flex border-4 border-black bg-[#00ff00] px-4 py-2 text-sm font-bold uppercase tracking-wider hover:shadow-[4px_4px_0_#000] transition-all"
            >
              Send a message →
            </a>
          </div>
          <div className="border-4 border-black bg-white p-6 hover:shadow-[8px_8px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all">
            <p className="text-xs font-bold uppercase tracking-wider text-black/60">
              GitHub
            </p>
            <p className="mt-3 text-xl font-black text-black">github.com/x-ordo</p>
            <a
              href="https://github.com/x-ordo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex border-4 border-black bg-black px-4 py-2 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#00ff00] hover:text-black transition-all"
            >
              Visit profile →
            </a>
          </div>
        </div>

        <div className="border-4 border-black bg-[#ffff00] p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-black/60">
            Focus Areas
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "LLM Product Design",
              "B2B SaaS",
              "Automation",
              "RAG Pipelines",
              "Growth & Monetization",
            ].map((item) => (
              <span
                key={item}
                className="border-4 border-black bg-white px-4 py-2 text-sm font-bold uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
