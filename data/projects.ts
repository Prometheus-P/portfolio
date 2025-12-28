import type { Project, ProjectCategory } from "../types/project";

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; description: string; color: string }
> = {
  "b2b-saas": {
    label: "B2B SaaS / Enterprise",
    description: "엔터프라이즈 워크플로우를 자동화하는 고신뢰 시스템",
    color: "from-blue-500 to-cyan-500",
  },
  "b2c-consumer": {
    label: "B2C Consumer Apps",
    description: "대규모 사용자를 위한 소비자 제품과 경험 설계",
    color: "from-green-500 to-emerald-500",
  },
  "ai-agent": {
    label: "AI / Agent Systems",
    description: "LLM 오케스트레이션과 멀티에이전트 플랫폼",
    color: "from-purple-500 to-pink-500",
  },
  automation: {
    label: "Automation & Integration",
    description: "결제, 공급망, 파트너 API를 연결하는 자동화",
    color: "from-yellow-500 to-orange-500",
  },
  "developer-tools": {
    label: "Developer Tools",
    description: "개발 생산성과 문서 파이프라인을 위한 도구",
    color: "from-slate-400 to-slate-600",
  },
  analytics: {
    label: "Analytics & Tools",
    description: "데이터 기반 의사결정을 돕는 분석 제품",
    color: "from-red-500 to-rose-500",
  },
  experimental: {
    label: "Experimental",
    description: "새로운 사용자 경험을 실험하는 프로토타입",
    color: "from-indigo-500 to-violet-500",
  },
};

export const projects: Project[] = [
  {
    slug: "arbquant",
    name: "ArbQuant",
    summary: "그레이박스 암호화폐 차익거래 시스템",
    description:
      "Upbit-Binance 간 실시간 KIMP 차익거래를 자동 집행하는 엔터프라이즈 트레이딩 플랫폼입니다. 리스크 한도와 승인 플로우를 결합해 안전한 운영을 지원합니다.",
    category: "b2b-saas",
    stack: ["Go", "PostgreSQL", "TimescaleDB", "NATS", "Redis"],
    highlights: [
      "초 단위 가격 불균형 모니터링 엔진",
      "Human-in-the-loop 승인 시스템",
      "포지션·리스크 통합 대시보드",
    ],
    featured: true,
  },
  {
    slug: "auditx",
    name: "Auditx",
    summary: "AI 스마트컨트랙트 보안 감사",
    description:
      "오픈소스 시큐리티 도구와 GPT 기반 검증을 결합해 취약점 분석 시간을 단축했습니다. 자동 리포팅과 우선순위 분류로 감사 효율을 높입니다.",
    category: "b2b-saas",
    stack: ["Python", "FastAPI", "OpenAI", "Solidity", "SQLite"],
    highlights: [
      "False Positive 90% 감소 워크플로우",
      "자동 감지 → 검증 → 리포트 파이프라인",
      "컨트랙트 위험도 스코어링",
    ],
  },
  {
    slug: "chagok",
    name: "Chagok",
    summary: "AI 법률 증거 관리 플랫폼",
    description:
      "이혼 소송 증거 자료를 AI로 분석하고 법률 문서 초안을 생성하는 플랫폼입니다. 변호사와 고객 간 협업을 간소화합니다.",
    category: "b2b-saas",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "AWS"],
    highlights: [
      "멀티모달 증거 분석 파이프라인",
      "법률 문서 초안 자동 생성",
      "협업 워크스페이스와 권한 관리",
    ],
  },
  {
    slug: "numna-road",
    name: "NumnaRoad",
    summary: "24/7 자동화 eSIM 판매 플랫폼",
    description:
      "결제 → 발급 → 이메일 전송까지 자동화된 eSIM 판매 플랫폼입니다. 멀티 프로바이더 페일오버로 가동률을 높였습니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "PocketBase", "Stripe", "n8n", "Resend"],
    highlights: [
      "10초 내 발급 자동화",
      "멀티 프로바이더 페일오버",
      "셀프 서빙 주문 관리",
    ],
    featured: true,
  },
  {
    slug: "onda-coreana",
    name: "OndaCoreana",
    summary: "K-Culture 스페인어 콘텐츠 포털",
    description:
      "라틴아메리카 및 미국 히스패닉 대상 K-Drama, K-Pop 콘텐츠 포털을 구축했습니다. SEO와 콘텐츠 운영에 최적화되었습니다.",
    category: "b2c-consumer",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare"],
    highlights: [
      "콘텐츠 파이프라인 자동화",
      "다국어 SEO 최적화",
      "고속 정적 렌더링",
    ],
  },
  {
    slug: "interview-service",
    name: "Interview Service",
    summary: "AI 실시간 모의면접 코칭",
    description:
      "직무별 맞춤 질문과 피드백을 제공하는 AI 면접 코칭 플랫폼입니다. 실시간 평가와 분석 리포트를 지원합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    highlights: [
      "직무별 질문 생성",
      "실시간 피드백 대시보드",
      "지원자 퍼널 분석",
    ],
    featured: true,
  },
  {
    slug: "salon-mate",
    name: "Salon Mate",
    summary: "미용실 운영 관리 소프트웨어",
    description:
      "예약, 고객 데이터베이스, 매출 정산을 통합한 살롱 운영 플랫폼입니다. 모바일 친화적인 예약 경험을 제공합니다.",
    category: "b2c-consumer",
    stack: ["React", "Node.js", "PostgreSQL"],
    highlights: [
      "예약/알림 자동화",
      "고객 세그먼트 관리",
      "POS 연동 리포트",
    ],
  },
  {
    slug: "talk-studio",
    name: "TalkStudio",
    summary: "오디오/팟캐스트 제작 플랫폼",
    description:
      "팟캐스트 제작, 편집, 퍼블리싱을 통합한 스튜디오입니다. AI 나레이션과 자동 편집 기능을 제공합니다.",
    category: "b2c-consumer",
    stack: ["React", "Node.js", "Audio Processing"],
    highlights: [
      "자동 음성 정제",
      "호스트 협업 워크플로우",
      "배포 채널 통합",
    ],
  },
  {
    slug: "tripkit",
    name: "Tripkit",
    summary: "AI 여행 플래너",
    description:
      "AI 기반 일정 추천과 다중 목적지 최적화를 지원하는 여행 플래너입니다. 개인화된 여행 일정과 체크리스트를 제공합니다.",
    category: "b2c-consumer",
    stack: ["Next.js", "Python", "LangGraph", "Gemini"],
    highlights: [
      "다중 목적지 일정 최적화",
      "개인화된 일정 추천",
      "여행 체크리스트 자동 생성",
    ],
    featured: true,
  },
  {
    slug: "careguide",
    name: "CareGuide",
    summary: "만성콩팥병 환자 AI 플랫폼",
    description:
      "연구 논문 기반 식이 추천과 상담을 제공하는 CKD 환자 플랫폼입니다. 의료 콘텐츠와 커뮤니티를 통합했습니다.",
    category: "ai-agent",
    stack: ["Python", "FastAPI", "React", "MongoDB", "OpenAI"],
    highlights: [
      "임상 논문 기반 지식 그래프",
      "개인화 식단 추천",
      "커뮤니티/상담 통합",
    ],
    featured: true,
  },
  {
    slug: "contents-creator",
    name: "Contents Creator",
    summary: "멀티에이전트 콘텐츠 생성",
    description:
      "블로그, SNS, 영상 콘텐츠를 자동 생성하는 멀티에이전트 플랫폼입니다. 1인 사업자의 마케팅 생산성을 높입니다.",
    category: "ai-agent",
    stack: ["React", "FastAPI", "Gemini", "Supabase"],
    highlights: [
      "콘텐츠 브리프 자동 생성",
      "멀티 채널 포맷 변환",
      "자동 퍼블리싱",
    ],
  },
  {
    slug: "satiachat",
    name: "SatiaChat",
    summary: "AI 식단 코칭 챗봇",
    description:
      "개인화된 식단 추천과 식사 계획을 제공하는 AI 챗봇입니다. 건강 목표에 맞춘 코칭을 제공합니다.",
    category: "ai-agent",
    stack: ["React", "TypeScript", "Supabase", "OpenAI", "LlamaIndex"],
    highlights: [
      "영양 목표 기반 코칭",
      "식단 기록 및 피드백",
      "지식 기반 답변",
    ],
  },
  {
    slug: "study-assistant",
    name: "Study Assistant",
    summary: "LLM 기반 학습 보조 챗봇",
    description:
      "과목별 학습과 숙제 도움을 제공하는 AI 튜터입니다. 학습 로그와 요약 기능을 제공합니다.",
    category: "ai-agent",
    stack: ["Python", "FastAPI", "Streamlit", "OpenAI"],
    highlights: [
      "과목별 맞춤 튜터링",
      "학습 기록 요약",
      "문제 풀이 설명",
    ],
  },
  {
    slug: "airalo-api",
    name: "Airalo API",
    summary: "eSIM 통합 발급 서비스",
    description:
      "주문, 발급, 고객 알림을 통합한 백엔드 서비스입니다. 파트너사 주문 자동화와 알림을 지원합니다.",
    category: "automation",
    stack: ["Go", "Gin", "OAuth2"],
    highlights: [
      "주문-발급-알림 자동화",
      "파트너 API 게이트웨이",
      "에러 복구 큐",
    ],
  },
  {
    slug: "habit-cashback",
    name: "Habit Cashback",
    summary: "습관 트래킹 환급 서비스",
    description:
      "Toss 앱스 기반 습관 트래킹 및 정산 시스템입니다. 인증 플로우와 결제 정산을 통합했습니다.",
    category: "automation",
    stack: ["React", "Vite", "Go", "PostgreSQL", "Caddy"],
    highlights: [
      "인증/정산 자동화",
      "토스 WebView UX 최적화",
      "정산 리포트 자동 생성",
    ],
  },
  {
    slug: "ai-software-factory",
    name: "AI Software Factory",
    summary: "AI 개발 프레임워크",
    description:
      "Spec-Driven Development와 TDD를 결합한 AI 개발 프레임워크입니다. 역할 기반 에이전트를 지원합니다.",
    category: "developer-tools",
    stack: ["Node.js", "Python", "Docker", "GitHub Actions"],
    highlights: [
      "요구사항 → 테스트 → 구현 자동화",
      "멀티 에이전트 협업",
      "CI 파이프라인 통합",
    ],
    featured: true,
  },
  {
    slug: "hwp-bridge",
    name: "HWP Bridge",
    summary: "HWP 문서 변환 파이프라인",
    description:
      "한글(HWP) 문서를 현대적 포맷으로 변환하는 도구입니다. 대량 변환과 품질 검증을 지원합니다.",
    category: "developer-tools",
    stack: ["Python", "Node.js", "C/C++"],
    highlights: [
      "포맷 변환 자동화",
      "대량 문서 처리",
      "결과 품질 검증",
    ],
  },
  {
    slug: "coupang-keyword-radar",
    name: "Coupang Keyword Radar",
    summary: "키워드 예측 및 상품명 추천",
    description:
      "트렌드 데이터를 시계열 예측하여 최적 상품명을 추천하는 분석 툴입니다. 경쟁 지표와 결합한 인사이트를 제공합니다.",
    category: "analytics",
    stack: ["Next.js", "TypeScript", "Groq", "Supabase"],
    highlights: [
      "트렌드 키워드 예측",
      "상품명 추천 알고리즘",
      "시장 경쟁 지표 분석",
    ],
    featured: true,
  },
  {
    slug: "racelab",
    name: "Racelab",
    summary: "레이스/경쟁 분석 플랫폼",
    description:
      "경기 데이터를 수집하고 결과를 시각화하는 분석 플랫폼입니다. 팀과 선수의 성과를 추적합니다.",
    category: "analytics",
    stack: ["Node.js", "React"],
    highlights: [
      "경기 기록 자동 수집",
      "성능 지표 대시보드",
      "리포트 내보내기",
    ],
  },
  {
    slug: "pyeongsu-calculator",
    name: "Pyeongsu Calculator",
    summary: "부동산 평수 계산기",
    description:
      "한국 부동산 기준의 면적 변환과 비용 분석을 제공하는 계산기입니다. 모바일 사용자 경험을 강화했습니다.",
    category: "analytics",
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "면적/비용 실시간 계산",
      "모바일 최적화 UX",
      "SEO 친화적 정적 배포",
    ],
  },
  {
    slug: "relationship-calculator",
    name: "Relationship Calculator",
    summary: "관계 지표 계산 도구",
    description:
      "관계 지표와 호환성 분석을 계산하는 도구입니다. 간단한 입력으로 결과를 제공합니다.",
    category: "analytics",
    stack: ["React", "TypeScript"],
    highlights: [
      "즉시 결과 계산",
      "경량 인터페이스",
      "공유 가능한 리포트",
    ],
  },
  {
    slug: "landlord-war",
    name: "Landlord War",
    summary: "부동산 임대 관리 시뮬레이션",
    description:
      "부동산 운영 전략을 게임형 시뮬레이션으로 풀어낸 프로젝트입니다. 전략적 의사결정을 학습하도록 설계했습니다.",
    category: "experimental",
    stack: ["Web-based"],
    highlights: [
      "게임형 시뮬레이션",
      "부동산 전략 학습",
      "커뮤니티 랭킹 시스템",
    ],
  },
  {
    slug: "some-some",
    name: "Some-Some",
    summary: "소셜/공유 애플리케이션",
    description:
      "콘텐츠 공유와 협업을 위한 소셜 애플리케이션입니다. 커뮤니티 기반 피드와 메시징을 제공합니다.",
    category: "experimental",
    stack: ["Node.js", "React"],
    highlights: [
      "실시간 피드",
      "협업 워크스페이스",
      "커뮤니티 큐레이션",
    ],
  },
  {
    slug: "soul-lab",
    name: "Soul Lab",
    summary: "연구/분석 플랫폼",
    description:
      "심층 연구와 분석 워크플로우를 지원하는 플랫폼입니다. 데이터 수집부터 인사이트 도출까지 연결합니다.",
    category: "experimental",
    stack: ["Node.js", "Python"],
    highlights: [
      "데이터 수집 파이프라인",
      "연구 노트 자동 정리",
      "인사이트 리포트",
    ],
  },
  {
    slug: "saegim",
    name: "Saegim",
    summary: "특화 애플리케이션",
    description:
      "도메인 특화 워크플로우를 위한 맞춤형 애플리케이션입니다. 복잡한 프로세스를 단순화했습니다.",
    category: "experimental",
    stack: ["React", "Node.js"],
    highlights: [
      "업무 프로세스 단순화",
      "커스텀 워크플로우",
      "관리자 대시보드",
    ],
  },
  {
    slug: "reporty",
    name: "Reporty",
    summary: "리포트 생성 플랫폼",
    description:
      "데이터를 자동으로 분석하고 보고서를 생성하는 플랫폼입니다. 템플릿 기반 리포트와 예약 배포를 지원합니다.",
    category: "experimental",
    stack: ["Node.js", "React"],
    highlights: [
      "리포트 자동 생성",
      "템플릿 커스터마이징",
      "예약 배포",
    ],
  },
  {
    slug: "tee-up",
    name: "Tee-Up",
    summary: "골프 소셜 플랫폼",
    description:
      "스코어링, 핸디캡 트래킹, 토너먼트 관리를 지원하는 골프 소셜 네트워크입니다.",
    category: "experimental",
    stack: ["React", "Node.js"],
    highlights: [
      "스코어/핸디캡 관리",
      "토너먼트 운영",
      "커뮤니티 피드",
    ],
  },
  {
    slug: "abitrage",
    name: "Abitrage",
    summary: "차익거래 실험/프로토타입",
    description:
      "차익거래 아이디어를 빠르게 검증하기 위한 실험성 프로젝트입니다. 데이터 수집, 알림, 리스크 체크를 중심으로 구성했습니다.",
    category: "experimental",
    stack: ["Node.js", "TypeScript"],
    highlights: ["시장 데이터 수집", "시그널 탐지 및 알림", "리스크 체크 리스트"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
