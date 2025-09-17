export const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      name: "Shin Thant Naing",
      title: "Mechatronics Engineer",
      subtitle: "Transitioning to Frontend Web Development",
      description:
        "From Myanmar to Japan, building bridges between engineering precision and digital innovation",
      cta: "View Projects",
      contact: "Get in Touch",
    },
    about: {
      highlightsTitle: "Highlights",
      highlights: {
        job: [
          {
            dot: "bg-purple-400",
            k: "Researcher at Kajima Corporation (Technical Research Institute)",
            v: "CO₂ reduction research, equipment procurement management, work standards & safety implementation, data analysis/reporting.",
          },
        ],
        projects: [
          {
            dot: "bg-blue-400",
            k: "Inventory & Invoice Management System (Inventura)",
            v: "Next.js + Tailwind + Zustand + SWR + PrimeReact + Chart.js. Features inventory CRUD, voucher creation, profile management, bilingual UI (EN/JA).",
          },
          {
            dot: "bg-cyan-400",
            k: "Swan Thu Kha - Traditional Myanmar Medicine",
            v: "Portfolio website with service pages, modern UI, and smooth animations (React + Tailwind + Framer Motion).",
          },
          {
            dot: "bg-indigo-400",
            k: "La Pyae Woon Iron & Steel Trading",
            v: "Business portfolio website with custom logo, branding, and lightweight frontend implementation.",
          },
        ],
      },
      languagesTitle: "Languages / 言語",
      languages: [
        { name: "Japanese", level: "JLPT N2", percent: 95 },
        { name: "English", level: "Business", percent: 90 },
        { name: "Burmese", level: "Native", percent: 100 },
      ],
      title: "About Me",
      content:
        "Myanmar-born engineer based in Kanagawa, Japan. I’m transitioning into a Frontend Web Developer while working as a researcher at Kajima Corporation Technical Research Institute (CO₂ reduction & data analysis). I build clean, fast, bilingual UIs with Next.js/React and Tailwind.",
      journey: "Highlights",
      current:
        "Researcher at Kajima Corporation (Technical Research Institute)",
      focus:
        "Frontend-first: Next.js, React, Tailwind, Zustand, SWR, PrimeReact, Chart.js, Framer Motion; bilingual EN/JA (JLPT N2).",
      // New: stat labels/values used by the About section cards
      stats: {
        basedInLabel: "Based in",
        basedIn: "Kanagawa, Japan",
        currentLabel: "Current",
        current: "Researcher @ Kajima Technical Research Institute",
        seekingLabel: "Seeking",
        seeking: "Frontend Web Developer roles (Japan-wide & Remote)",
        languagesLabel: "Languages",
        languages: "English / Japanese",
      },
    },
    skills: {
      title: "Technical Skills",
      frontend: "Frontend Development",
      backend: "Backend Development",
      learning: "Currently Learning",
      engineering: "Engineering Background",
      devops: "DevOps & Tools",
    },
    projects: {
      title: "Featured Projects",
      viewDemo: "View Demo",
      sourceCode: "Source Code",
      details: "Details",
      items: [
        {
          key: "inventura",
          title: "Inventura - Inventory & Invoice Management",
          description:
            "Inventory CRUD with real-time tracking, professional invoice generation and management, and dashboard analytics (revenue, sales, top products). Bilingual-ready (EN/JA).",
          tech: [
            "TailwindCSS",
            "React",
            "Next.js",
            "Laravel API",
            "Chart.js",
            "Framer Motion",
            "SWR",
            "Zustand",
          ],
          category: "Full-Stack",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          url: "https://inventura-inventory-management-syst.vercel.app/",
          featured: true,
        },
        {
          key: "swanthukha",
          title: "Swan Thu Kha - Traditional Myanmar Medicine",
          description:
            "Clinic portfolio with service pages, bilingual-ready layout, and subtle animations.",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "Portfolio",
          image:
            "https://images.unsplash.com/photo-1505575972945-334ecb2293f2?w=600&h=400&fit=crop",
          url: "https://swanthukha.phoenixgroupint.com/",
        },
        {
          key: "lapyaewoon",
          title: "La Pyae Woon Iron & Steel Trading",
          description:
            "Business portfolio with custom branding and smooth interactions.",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "Portfolio",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          url: "https://lapyaewoon.phoenixgroupint.com/",
        },
        {
          key: "invoice",
          title: "Invoice Generation Tool (HTML/CSS/JS)",
          description:
            "Create printable invoices, manage items, and see live totals with tax.",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "Frontend",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          url: "https://invoice-app-theta-six.vercel.app/",
        },
        {
          key: "todo",
          title: "To Do List App (HTML/CSS/JS)",
          description:
            "Clean todo app with counters and quick actions to mark/clear tasks.",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "Frontend",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
          url: "https://to-do-list-app-deployment.vercel.app/",
        },
      ],
    },
    experience: {
      title: "My Journey",
      jobsTitle: "Work",
      educationTitle: "Education",
      current: "Current Position",
      previous: "Previous Experience",
      keyResponsibilities: "Key Responsibilities:",
      currentStatus: "Current",
      experiences: {
        researcher: {
          title: "Research Engineer",
          company:
            "Dispatch: Enchant Inc. → Assignment: Kajima Corporation Technical Research Institute (GI Fund CN Concrete Project)",
          location: "Kanagawa, Odawara, Japan",
          period: "Sep 2024 - Present",
          description:
            "Research support and operations at Kajima Technical Research Institute: quotation handling, procurement coordination, standardization and safety, data整理/visualization, and stakeholder communication.",
          highlights: [
            "Quotation requests and documentation (Excel/Word/PowerPoint)",
            "Procurement management: ordering, lead-time coordination, and delivery planning support",
            "Standardization & safety: work standards, procedures, KY risk identification and mitigation",
            "Research support: sensor setup assistance, data整理 and charting (Excel), report creation",
            "Daily coordination and reporting with managers, partners, and research members",
            "Improved technical Japanese writing/reading; Excel-based data analysis",
            "Achieved cost reductions via competitive quotations; enhanced safety rules",
          ],
        },
        internship: {
          title: "Frontend Web Developer (Intern)",
          company: "MMS IT",
          location: "Myanmar・Remote",
          period: "Jul 2025 - Present · 3 mos",
          description:
            "Participated in web development projects as a frontend developer intern, contributing to the creation of the Inventura App and supporting current company projects with modern web technologies.",
          highlights: [
            "Developed the Inventura App using React.js and modern web technologies",
            "Collaborated on current company projects as a contributing team member",
            "Implemented responsive designs using HTML5, CSS, and Tailwind CSS",
            "Integrated REST APIs and conducted API testing using Postman",
            "Worked with Next.js for server-side rendering and optimized performance",
            "Utilized Git and GitHub for version control and collaborative development",
            "Developed frontend components based on provided design specifications",
            "Applied JavaScript and Node.js for full-stack development tasks",
          ],
        },
        coordinator: {
          title: "Coordinator",
          company: "Career Tech Japan",
          location: "Myanmar",
          period: "Dec 2023 - Jun 2024",
          description:
            "Matched Japanese companies with Myanmar candidates; prepared/translated documents, coordinated interviews, and supported visa application paperwork.",
          highlights: [
            "Candidate matching and interview coordination",
            "Document preparation and translation (JA⇔EN/MM)",
            "Technical Intern/Specified Skilled visa paperwork support",
            "Pre-departure guidance and travel preparation",
            "Business-level Japanese usage experience",
          ],
        },
        teacher: {
          title: "Japanese Language Teacher (N5–N3)",
          company: "Myanmar Unity Employment Agency",
          location: "Myanmar",
          period: "Apr 2023 - Dec 2023",
          description:
            "Taught Japanese grammar, conversation, and kanji to technical intern candidates; prepared class materials and managed student progress.",
          highlights: [
            "N5–N3 instruction with conversation focus",
            "Material creation and improvement (Google Slides/PDF)",
            "Progress tracking, reports, and one-on-one coaching",
            "Monthly tests, evaluation, and interviews",
            "Classroom leadership and practical Japanese for work",
          ],
        },
        student: {
          title: "Mechatronics Engineering Studies",
          company: "University Education",
          location: "Myanmar",
          period: "2018 - 2022",
          description:
            "Built strong analytical and problem-solving skills in mechatronics, systems thinking, and documentation—now applied to software development.",
          highlights: [
            "Systems design and analysis",
            "Automation technologies",
            "Technical documentation",
            "Problem-solving methodologies",
          ],
        },
      },
    },
    contact: {
      title: "Let's Connect",
      description: "Ready to bring engineering precision to frontend projects",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
      },
      info: {
        location: "Kanagawa, Japan",
        available: "Open across Japan & Remote",
        response: "Quick response time",
      },
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私について",
      skills: "スキル",
      projects: "プロジェクト",
      experience: "経験",
      contact: "連絡先",
    },
    hero: {
      name: "シン タント ナイン",
      title: "メカトロニクスエンジニア",
      subtitle: "フロントエンド開発への転身",
      description:
        "ミャンマーから日本へ。エンジニアの精密さとデジタル革新をつなぐフロントエンドへ。",
      cta: "プロジェクトを見る",
      contact: "お問い合わせ",
    },
    about: {
      highlightsTitle: "ハイライト",
      highlights: {
        job: [
          {
            dot: "bg-purple-400",
            k: "鹿島建設 技術研究所 研究員",
            v: "CO₂削減研究、設備調達管理、作業標準・安全対策の実施、データ分析・報告業務。",
          },
        ],
        projects: [
          {
            dot: "bg-blue-400",
            k: "在庫・請求管理システム (Inventura)",
            v: "Next.js + Tailwind + Zustand + SWR + PrimeReact + Chart.js。 在庫CRUD、バウチャー作成、プロフィール管理、日英対応UI。",
          },
          {
            dot: "bg-cyan-400",
            k: "Swan Thu Kha - 伝統医療（ミャンマー）",
            v: "サービス紹介ページを備えたポートフォリオサイト。モダンなUIとアニメーション（React + Tailwind + Framer Motion）。",
          },
          {
            dot: "bg-indigo-400",
            k: "La Pyae Woon Iron & Steel Trading",
            v: "事業用ポートフォリオサイト。ロゴ/ブランディング、軽量なフロント実装。",
          },
        ],
      },
      languagesTitle: "言語",
      languages: [
        { name: "日本語", level: "JLPT N2", percent: 95 },
        { name: "英語", level: "ビジネス", percent: 90 },
        { name: "ミャンマー語（ビルマ語）", level: "母語", percent: 100 },
      ],
      title: "自己紹介",
      content:
        "神奈川県在住のミャンマー出身エンジニア。現在は鹿島建設 技術研究所で研究員（CO₂削減・データ分析）として勤務しつつ、Next.js/ReactとTailwindでクリーンで高速、日英対応のUIを構築するフロントエンドエンジニアを目指しています。",
      journey: "ハイライト",
      current: "鹿島建設 技術研究所 研究員",
      focus:
        "フロントエンド中心：Next.js / React / Tailwind / Zustand / SWR / PrimeReact / Chart.js / Framer Motion。英日バイリンガル（JLPT N2）。",
      // New: stat labels/values for cards
      stats: {
        basedInLabel: "拠点",
        basedIn: "神奈川県, 日本",
        currentLabel: "現職",
        current: "鹿島建設 技術研究所 研究員",
        seekingLabel: "志望職種",
        seeking: "フロントエンドエンジニア（日本全国・リモート可）",
        languagesLabel: "言語",
        languages: "英語 / 日本語",
      },
    },
    skills: {
      title: "技術スキル",
      frontend: "フロントエンド開発",
      backend: "バックエンド開発",
      learning: "現在学習中",
      engineering: "エンジニアリング背景",
      devops: "DevOps・ツール",
    },
    projects: {
      title: "主要プロジェクト",
      viewDemo: "デモを見る",
      sourceCode: "ソースコード",
      details: "詳細",
      items: [
        {
          key: "inventura",
          title: "インベンチュラ - 在庫・請求管理",
          description:
            "在庫CRUDとリアルタイム追跡、プロフェッショナルな請求書の作成・管理、ダッシュボード分析（収益・売上・トップ商品）。英日バイリンガル対応。",
          tech: [
            "TailwindCSS",
            "React",
            "Next.js",
            "Laravel API",
            "Chart.js",
            "Framer Motion",
            "SWR",
            "Zustand",
          ],
          category: "フルスタック",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          url: "https://inventura-inventory-management-syst.vercel.app/",
          featured: true,
        },
        {
          key: "swanthukha",
          title: "Swan Thu Kha - 伝統医療（ミャンマー）",
          description:
            "サービス紹介ページ付きのクリニック用ポートフォリオ。バイリンガル対応の軽量UI。",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "ポートフォリオ",
          image:
            "https://images.unsplash.com/photo-1505575972945-334ecb2293f2?w=600&h=400&fit=crop",
          url: "https://swanthukha.phoenixgroupint.com/",
        },
        {
          key: "lapyaewoon",
          title: "La Pyae Woon Iron & Steel Trading",
          description:
            "ロゴ/ブランディングを含む事業用ポートフォリオ。滑らかなアニメーション。",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "ポートフォリオ",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          url: "https://lapyaewoon.phoenixgroupint.com/",
        },
        {
          key: "invoice",
          title: "請求書作成ツール（HTML/CSS/JS）",
          description:
            "印刷用請求書を作成。商品管理と合計/税の自動計算に対応。",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "フロントエンド",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          url: "https://invoice-app-theta-six.vercel.app/",
        },
        {
          key: "todo",
          title: "To Do リスト（HTML/CSS/JS）",
          description:
            "タスクのカウントや一括操作に対応したシンプルなToDoアプリ。",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "フロントエンド",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
          url: "https://to-do-list-app-deployment.vercel.app/",
        },
      ],
    },
    experience: {
      title: "私の歩み",
      jobsTitle: "職歴",
      educationTitle: "学歴",
      current: "現在のポジション",
      previous: "以前の経験",
      keyResponsibilities: "主要業務:",
      currentStatus: "現職",
      experiences: {
        researcher: {
          title: "研究員",
          company:
            "派遣元：エンチャント株式会社 ／ 派遣先：鹿島建設株式会社 技術研究所（GI基金CNコンクリートPJ）",
          location: "神奈川県、小田原市、日本",
          period: "2024年9月 - 現在",
          description:
            "見積対応、設備の調達管理、標準化・安全の整備、研究支援（センサー設置補助・データ整理/グラフ化）、関係者調整などを担当。",
          highlights: [
            "見積依頼対応・必要書類作成（Excel/Word/PowerPoint）",
            "設備の調達管理（発注〜納期調整、搬入計画サポート）",
            "標準化・安全（作業標準・手順書、KYの洗い出し/是正→再確認）",
            "研究支援（センサー設置補助、計測データ整理・グラフ化（Excel）、報告資料作成）",
            "関係者調整（日次の連携・報連相）",
            "技術日本語の読み書き能力向上、Excelによるデータ分析",
            "相見積・安全管理ルール整備によるコスト削減とリスク低減",
          ],
        },
        internship: {
          title: "フロントエンドWeb開発者（インターン）",
          company: "MMS IT",
          location: "ミャンマー、 リモート",
          period: "2025年7月 - 現在 · 3ヶ月",
          description:
            "フロントエンド開発者インターンとしてWebプロジェクトに参加し、Inventura Appの作成と会社の現在進行中のプロジェクトを最新のWeb技術でサポートしました。",
          highlights: [
            "React.jsと最新のWeb技術を使用してInventura Appを開発",
            "チームメンバーとして会社の現在進行中のプロジェクトに貢献",
            "HTML5、CSS、Tailwind CSSを使用してレスポンシブデザインを実装",
            "REST APIの統合とPostmanを使用したAPIテストを実施",
            "サーバーサイドレンダリングとパフォーマンス最適化にNext.jsを活用",
            "バージョン管理と共同開発にGitとGitHubを使用",
            "提供されたデザイン仕様に基づいてフロントエンドコンポーネントを開発",
            "フルスタック開発タスクにJavaScriptとNode.jsを適用",
          ],
        },
        coordinator: {
          title: "コーディネーター",
          company: "Career Tech Japan（送り出し機関）",
          location: "ミャンマー",
          period: "2023年12月 - 2024年6月",
          description:
            "日本企業とミャンマー人候補者のマッチング、書類準備・翻訳、面接調整、各種ビザ申請書類の準備支援を担当。",
          highlights: [
            "マッチング業務・面接調整・通訳",
            "書類準備・作成・翻訳（日本語⇔英語/ミャンマー語）",
            "技能実習・特定技能のビザ申請書類サポート",
            "事前ガイダンス、渡航準備の支援",
            "ビジネスレベルの日本語運用経験",
          ],
        },
        teacher: {
          title: "日本語教師（N5～N3）",
          company: "Myanmar Unity Employment Agency",
          location: "ミャンマー",
          period: "2023年4月 - 2023年12月",
          description:
            "実習生向けに文法・会話・漢字を指導。授業資料の作成・改善、進捗管理、テスト・評価・面談を実施。",
          highlights: [
            "N5〜N3レベルの教育（会話中心）",
            "授業資料の作成・改善（Google Slides・PDF）",
            "進捗管理・学習報告・個別指導",
            "月次テスト・評価・面談対応",
            "教育現場でのリーダーシップ",
          ],
        },
        student: {
          title: "メカトロニクス工学専攻",
          company: "大学教育",
          location: "ミャンマー",
          period: "2018年 - 2022年",
          description:
            "システム思考・自動化・技術文書の基礎を習得し、課題解決力を強化。現在のソフトウェア開発へ応用。",
          highlights: [
            "システム設計・分析",
            "自動化技術",
            "技術文書作成",
            "問題解決手法",
          ],
        },
      },
    },
    contact: {
      title: "お問い合わせ",
      description: "エンジニアの精密さをフロントエンド開発に活かします",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        send: "送信",
      },
      info: {
        location: "神奈川県, 日本",
        available: "日本全国・リモート可",
        response: "迅速な対応",
      },
    },
  },
};
