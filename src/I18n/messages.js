export const messages = {
  en: {
    logo: "Portfolio",
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
      title: "Frontend Web Developer & Engineer",
      subtitle: "Engineering Logic Meets Creative Code",
      description:
        "Building responsive, user-focused applications while leveraging engineering principles for optimal performance",
      cta: "See My Work",
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
          {
            dot: "bg-green-400",
            k: "Frontend Web Developer Intern at MMS IT",
            v: "Developing Inventura App with React.js, implementing responsive designs, API integration, and contributing to company projects with modern web technologies.",
          },
        ],
        projects: [
          {
            dot: "bg-blue-400",
            k: "Inventory & Invoice Management System (Inventura)",
            v: "Next.js + Tailwind + Zustand + SWR + PrimeReact + Chart.js. Features complete inventory management, voucher creation, profile management, bilingual UI (EN/JA).",
          },
        ],
      },
      languagesTitle: "Languages",
      languages: [
        { name: "Japanese", level: "JLPT N2", percent: 95 },
        { name: "English", level: "Business", percent: 90 },
      ],
      title: "About Me",
      // New: stat labels/values used by the About section cards
      stats: {
        basedInLabel: "Based in",
        basedIn: "Kanagawa, Japan",
        currentLabel: "Current",
        current: "Researcher @ Kajima + Frontend Intern @ MMS IT",
        seekingLabel: "Seeking",
        seeking: "Frontend Web Developer roles anywhere in Japan",
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
      description:
        "Showcasing my journey from engineering concepts to digital solutions",
      viewDemo: "Visit Website",
      items: [
        {
          key: "inventura",
          title: "Inventura - Inventory & Invoice Management",
          description:
            "Complete inventory management with real-time tracking, professional invoice generation and management, and dashboard analytics (revenue, sales, top products). Bilingual-ready (EN/JA).",
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
          image: "/resume/projects/inventura.png",
          url: "https://inventura-inventory-management-syst.vercel.app/",
          featured: true,
          tag: " Featured",
        },
        {
          key: "swanthukha",
          title: "Swan Thu Kha - Traditional Myanmar Medicine",
          description:
            "Clinic portfolio with service pages, bilingual-ready layout, and subtle animations.",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "Portfolio",
          image: "/resume/projects/swanthukha.png",
          url: "https://swanthukha.phoenixgroupint.com/",
        },
        {
          key: "lapyaewoon",
          title: "La Pyae Woon - Iron & Steel Trading",
          description:
            "Business portfolio with custom branding and smooth interactions.",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "Portfolio",
          image: "/resume/projects/lapyaewoon.png",
          url: "https://lapyaewoon.phoenixgroupint.com/",
        },
        {
          key: "invoice",
          title: "Invoice Generation Tool",
          description:
            "Create printable invoices, manage items, and see live totals with tax.",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "Frontend",
          image: "/resume/projects/invoice.png",
          url: "https://invoice-app-theta-six.vercel.app/",
        },
        {
          key: "todo",
          title: "To Do List App",
          description:
            "Clean todo app with counters and quick actions to mark/clear tasks.",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "Frontend",
          image: "/resume/projects/todo.png",
          url: "https://to-do-list-app-deployment.vercel.app/",
        },
      ],
    },
    experience: {
      title: "My Journey",
      jobsTitle: "Work",
      educationTitle: "Education",
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
            "Procurement of construction materials and equipment (competitive quotation creation and comparison, purchasing management)",
            "Quotation requests and necessary documentation creation",
            "Work standards and procedure manual creation, safety measures implementation",
            "Measurement sensor installation support, measurement data organization and analysis (Excel usage)",
            "Improvement proposals and material creation in team meetings",
          ],
        },
        internship: {
          title: "Frontend Web Developer (Intern)",
          company: "MMS IT",
          location: "Myanmar",
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
          period: "2016 - 2023",
          description:
            "Built strong analytical and problem-solving skills in mechatronics, systems thinking, and documentation—now applied to software development.",
          highlights: [
            "Systems design and analysis",
            "Automation technologies",
            "Technical documentation",
            "Problem-solving methodologies",
            "Programming",
            "IoT System Development",
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
        available: "Open to opportunities in Japan",
        response: "Quick response time",
      },
    },
  },
  ja: {
    logo: "ポートフォリオ",
    nav: {
      home: "ホーム",
      about: "私について",
      skills: "スキル",
      projects: "プロジェクト",
      experience: "経験",
      contact: "連絡先",
    },
    hero: {
      name: "シン・タンッ・ナイン",
      title: "フロントエンドウェブ開発者",
      subtitle: "精密工学技術と最新ウェブ開発技術の統合",
      description:
        "工学的思考とウェブ開発スキルを組み合わせ、高性能でユーザビリティの高いアプリケーション開発を行っています",
      cta: "実績を確認",
      contact: "ご相談・お問い合わせ",
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
          {
            dot: "bg-green-400",
            k: "MMS IT フロントエンドWeb開発者（インターン）",
            v: "React.jsを使用したInventura Appの開発、レスポンシブデザインの実装、API統合、最新のWeb技術で会社プロジェクトに貢献。",
          },
        ],
        projects: [
          {
            dot: "bg-blue-400",
            k: "在庫・請求管理システム (Inventura)",
            v: "Next.js + Tailwind + Zustand + SWR + PrimeReact + Chart.js。 完全な在庫管理、バウチャー作成、プロフィール管理、日英対応UI。",
          },
        ],
      },
      languagesTitle: "言語",
      languages: [
        { name: "日本語", level: "JLPT N2", percent: 95 },
        { name: "英語", level: "ビジネス", percent: 90 },
      ],
      title: "自己紹介",
      // New: stat labels/values for cards
      stats: {
        basedInLabel: "拠点",
        basedIn: "神奈川県, 日本",
        currentLabel: "現職",
        current: "鹿島建設 研究員 + MMS IT フロントエンドインターン",
        seekingLabel: "志望職種",
        seeking: "フロントエンドエンジニア（日本全国）",
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
      description:
        "エンジニアリングコンセプトからデジタルソリューションまでの歩みを紹介",
      viewDemo: "ウェブサイトを見る",
      items: [
        {
          key: "inventura",
          title: "インベンチュラ - 在庫・請求管理",
          description:
            "完全な在庫管理とリアルタイム追跡、プロフェッショナルな請求書の作成・管理、ダッシュボード分析（収益・売上・トップ商品）。英日バイリンガル対応。",
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
          image: "/resume/projects/inventura.png",
          url: "https://inventura-inventory-management-syst.vercel.app/",
          featured: true,
          tag: "フィーチャー プロジェクト",
        },
        {
          key: "swanthukha",
          title: "Swan Thu Kha - 伝統医療",
          description:
            "サービス紹介ページ付きのクリニック用ポートフォリオ。バイリンガル対応の軽量UI。",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "ポートフォリオ",
          image: "/resume/projects/swanthukha.png",
          url: "https://swanthukha.phoenixgroupint.com/",
        },
        {
          key: "lapyaewoon",
          title: "La Pyae Woon - Iron & Steel Trading",
          description:
            "ロゴ/ブランディングを含む事業用ポートフォリオ。滑らかなアニメーション。",
          tech: ["React", "Tailwind CSS", "Framer Motion"],
          category: "ポートフォリオ",
          image: "/resume/projects/lapyaewoon.png",
          url: "https://lapyaewoon.phoenixgroupint.com/",
        },
        {
          key: "invoice",
          title: "請求書作成ツール",
          description:
            "印刷用請求書を作成。商品管理と合計/税の自動計算に対応。",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "フロントエンド",
          image: "/resume/projects/invoice.png",
          url: "https://invoice-app-theta-six.vercel.app/",
        },
        {
          key: "todo",
          title: "To Do リスト",
          description:
            "タスクのカウントや一括操作に対応したシンプルなToDoアプリ。",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          category: "フロントエンド",
          image: "/resume/projects/todo.png",
          url: "https://to-do-list-app-deployment.vercel.app/",
        },
      ],
    },
    experience: {
      title: "私の歩み",
      jobsTitle: "職歴",
      educationTitle: "学歴",
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
            "工事に必要な資材・機材の調達（相見積書の作成・比較検討、購買管理）",
            "見積依頼や必要書類の作成",
            "作業標準書・作業手順書の作成、安全対策の実施",
            "計測センサー設置補助、測定データの整理・分析（Excel 使用）",
            "チーム会議での改善提案・資料作成",
          ],
        },
        internship: {
          title: "フロントエンドWeb開発者（インターン）",
          company: "MMS IT",
          location: "ミャンマー",
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
          period: "2016年 - 2023年",
          description:
            "システム思考・自動化・技術文書の基礎を習得し、課題解決力を強化。現在のソフトウェア開発へ応用。",
          highlights: [
            "システム設計・分析",
            "自動化技術",
            "技術文書作成",
            "問題解決手法",
            "プログラミング",
            "IoTシステム開発",
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
        available: "日本国内の機会にオープン",
        response: "迅速な対応",
      },
      // New comprehensive contact content
      header: {
        badge: "お問い合わせ",
        title: "お問い合わせ",
        subtitle: "お気軽にご連絡ください",
        description:
          "次のプロジェクトでコラボレーションしませんか？新しい機会や革新的なアイデアについて議論し、一緒に素晴らしいものを作り上げることを常に楽しみにしています。",
      },
      methods: {
        email: {
          title: "メール",
          value: "shinthantnaing.general@gmail.com",
          description: "いつでもメールをお送りください",
        },
        phone: {
          title: "電話",
          value: "+81-70-9239-4148",
          description: "直接お電話ください",
        },
        linkedin: {
          title: "LinkedIn",
          value: "Shin Thant Naing",
          description: "プロフェッショナルに繋がりましょう",
        },
        github: {
          title: "GitHub",
          value: "@shinthantnaingGit",
          description: "コードとプロジェクトをご覧ください",
        },
      },
      quickInfo: {
        title: "基本情報",
        location: {
          label: "所在地",
          value: "神奈川県, 日本",
        },
        available: {
          label: "対応可能",
          value: "フルタイムの機会",
        },
        response: {
          label: "返信",
          value: "24時間以内",
        },
        languages: {
          label: "言語",
          value: "英語、日本語、ミャンマー語",
        },
        projects: {
          label: "ポートフォリオプロジェクト",
          value: "5件以上の完成プロジェクト",
        },
      },
      cta: {
        title: "一緒に素晴らしいものを作りましょう",
        description:
          "プロジェクトのアイデアがある、機会について話し合いたい、または単に挨拶したい場合でも、お気軽にお声がけください。一緒に特別なものを作りましょう！",
        button: "お問い合わせ",
      },
      buttons: {
        downloadResume: "履歴書をダウンロード",
        downloadCareerHistory: "職務経歴書をダウンロード",
        seeProjects: "プロジェクトを見る",
      },
    },
  },
};
