import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-black uppercase text-black">
              Jed Park
            </p>
            <p className="mt-2 text-sm text-black/70">
              AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현합니다.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="border-4 border-black px-4 py-2 text-sm font-bold uppercase hover:bg-[#00ff00] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="border-4 border-black px-4 py-2 text-sm font-bold uppercase hover:bg-[#00ff00] transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:parkdavid31@gmail.com"
              className="border-4 border-black bg-black px-4 py-2 text-sm font-bold uppercase text-white hover:bg-[#00ff00] hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 border-t-4 border-black pt-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-black/60">
            © 2025 Jed Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
