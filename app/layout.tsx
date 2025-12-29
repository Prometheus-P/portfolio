import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PixelDog from "../components/PixelDog";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jed Park | Developer & Entrepreneur",
  description:
    "AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자.",
  keywords: [
    "Developer",
    "Entrepreneur",
    "AI",
    "ML",
    "LLM",
    "Full-Stack",
    "RAG",
    "Go",
    "Java",
    "Kotlin",
    "Spring",
    "Gin",
    "PocketBase",
    "OracleDB",
    "Upstage",
  ],
  authors: [{ name: "Jed Park" }],
  openGraph: {
    title: "Jed Park | Developer & Entrepreneur",
    description:
      "AI/ML 기반 솔루션을 설계하고 비즈니스 가치를 구현하는 풀스택 개발자.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${jetbrains.variable} font-mono antialiased`}>
        {/* Grid background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <PixelDog />
      </body>
    </html>
  );
}
