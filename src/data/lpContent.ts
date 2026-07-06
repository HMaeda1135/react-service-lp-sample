export type NavItem = {
  href: string
  label: string
}

export type ProblemItem = {
  icon: string
  text: string
}

export type ServiceItem = {
  icon: string
  title: string
  summary: string
  details: string[]
  scene: string
}

export type StrengthItem = {
  number: string
  title: string
  text: string
}

export type FlowStep = {
  step: number
  title: string
  description: string
}

export type WorkItem = {
  label: string
  title: string
  summary: string
  tech: string[]
  highlight: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  brandName: 'まなびスタート',
  portfolioSampleName: 'ReactサービスLPサンプル',
  pageTitle: 'まなびスタート | ReactサービスLPサンプル',
  footerCopy: '© 2026 まなびスタート LP Sample',
  footerNote:
    'このページはポートフォリオ掲載用の架空サービスLPサンプルです。実在のサービス・事業者ではありません。',
} as const

export const navItems: NavItem[] = [
  { href: '#problems', label: '悩み' },
  { href: '#services', label: 'サービス' },
  { href: '#flow', label: '流れ' },
  { href: '#works', label: '構成' },
  { href: '#faq', label: 'FAQ' },
]

export const heroContent = {
  eyebrow: '個人向けオンライン講座サービス',
  titleLine1: 'はじめての学び直しを、',
  titleLine2: 'やさしくサポート。',
  description:
    'まなびスタートは、仕事や副業に役立つスキルを、初心者でも少しずつ学べるオンライン講座サービスです。',
  primaryCta: { href: '#services', label: 'サービス内容を見る' },
  secondaryCta: { href: '#flow', label: '学びの流れを見る' },
  panelTitle: '学習ステップ',
  panelTags: ['基礎講座', '実践課題', '相談サポート', 'チェックリスト'],
  panelSteps: [
    { label: '基礎を理解する', done: true },
    { label: '実践課題に挑戦', done: true },
    { label: '学習計画を見直す', done: false },
    { label: '次のステップへ', done: false },
  ],
  panelNote: '自分のペースで、少しずつ進められる流れを想定',
  subPanelTitle: '講座カード',
  progressLabel: 'Web制作の基礎',
  progressValue: '65% 完了',
  progressCaption: '第2章まで視聴済み。次は実践課題',
} as const

export const problemSection = {
  title: 'こんなお悩みはありませんか？',
  lead: '学び直しを始めたい方からよくあるお悩みを、想定課題として整理しています。',
  items: [
    {
      icon: '?',
      text: '何から学べばいいかわからない',
    },
    {
      icon: '↻',
      text: '独学がなかなか続かない',
    },
    {
      icon: '★',
      text: '仕事や副業に活かせるスキルが身につきたい',
    },
    {
      icon: '💬',
      text: 'つまずいたときに相談できる相手がいない',
    },
  ] satisfies ProblemItem[],
}

export const serviceSection = {
  title: 'まなびスタートでできること',
  lead: '初心者でも無理なく続けられるよう、学習内容とサポートを整理しています。',
  items: [
    {
      icon: '📚',
      title: '初心者向けカリキュラム',
      summary: '基礎から順番に学べるよう、学習ステップを整理しています。',
      details: ['段階的な学習構成', 'はじめてでも迷いにくい順序', '復習しやすい章立て'],
      scene: '何から始めればよいかわからないとき',
    },
    {
      icon: '⏱',
      title: '自分のペースで学習',
      summary: '動画や資料を見ながら、空いた時間に少しずつ学べます。',
      details: ['いつでも視聴可能', '進捗に合わせた学習', 'スマホでも見やすい資料'],
      scene: '仕事の合間に学びたいとき',
    },
    {
      icon: '💬',
      title: '学習の相談サポート',
      summary: 'つまずいたところや進め方を、相談しながら学習できます。',
      details: ['学習計画の相談', 'つまずきポイントの整理', '次のステップの提案'],
      scene: '独学が続かないと感じたとき',
    },
    {
      icon: '✓',
      title: '学習チェックリスト',
      summary: 'やるべきことを一覧化し、進み具合を確認しながら学べます。',
      details: ['章ごとのチェック項目', '完了状況の可視化', '復習タイミングの把握'],
      scene: '学習の進捗を把握したいとき',
    },
  ] satisfies ServiceItem[],
}

export const strengthSection = {
  title: '選ばれる理由',
  lead: 'やさしく、信頼感のある学びの体験を大切にしています。',
  items: [
    {
      number: '1',
      title: 'わかりやすい構成',
      text: '悩みからサービス、流れ、FAQまで、情報を段階的に整理しています。',
    },
    {
      number: '2',
      title: 'スマホでも見やすい',
      text: '画面サイズに合わせてレイアウトが変わる、レスポンシブな設計です。',
    },
    {
      number: '3',
      title: '問い合わせしやすい導線',
      text: '気になった方がすぐ相談できるよう、CTAをページ下部に配置しています。',
    },
  ] satisfies StrengthItem[],
}

export const flowSection = {
  title: '学び始めるまでの流れ',
  lead: '初めての方でも進めやすいよう、段階を分けて案内します。',
  steps: [
    {
      step: 1,
      title: 'お問い合わせ',
      description: '学びたい内容や現在の状況を、お気軽にお伝えください。',
    },
    {
      step: 2,
      title: '内容確認・ヒアリング',
      description: '目的や学習経験を整理し、合う進め方を確認します。',
    },
    {
      step: 3,
      title: 'プラン・方針整理',
      description: '学習プランと進め方を共有し、合意のうえで開始します。',
    },
    {
      step: 4,
      title: '学習開始・サポート',
      description: '講座視聴や課題に取り組みながら、必要に応じて相談できます。',
    },
    {
      step: 5,
      title: '振り返り・見直し',
      description: '学習状況を振り返り、次のステップを一緒に整理します。',
    },
  ] satisfies FlowStep[],
}

export const worksSection = {
  title: 'LP構成の見どころ',
  lead: 'このページ自体が「ReactサービスLPサンプル」です。架空サービス「まなびスタート」の紹介LPとして構成しています。',
  items: [
    {
      label: 'LPサンプル',
      title: 'まなびスタート（本ページ）',
      summary: '架空のオンライン講座サービスを題材に、サービス紹介LPの基本構成を実装したサンプルです。',
      tech: ['React', 'TypeScript', 'Vite', 'CSS'],
      highlight: 'FV・課題提起・サービス・流れ・FAQ・CTAまで一通り配置',
    },
    {
      label: '自主制作サンプル',
      title: 'コンポーネント分割構成',
      summary: 'セクションごとにコンポーネントを分け、データ配列で文言を管理する構成です。',
      tech: ['React', 'TypeScript'],
      highlight: 'lpContent.ts によるコンテンツ一元管理',
    },
    {
      label: 'UIサンプル',
      title: '問い合わせモーダル',
      summary: 'CTAから開く相談フォームUIのデモです。送信処理は実装していません。',
      tech: ['React', 'TypeScript'],
      highlight: 'キーボード操作・アクセシビリティを意識した設計',
    },
  ] satisfies WorkItem[],
}

export const faqItems: FaqItem[] = [
  {
    question: '初心者でも利用できますか？',
    answer:
      'はい。基礎から順番に学べる内容のため、はじめての方でも利用しやすい構成です。',
  },
  {
    question: 'スマホでも見られますか？',
    answer: 'はい。スマホでも見やすいレイアウトを想定しています。',
  },
  {
    question: '途中でプラン変更できますか？',
    answer: 'はい。学習状況に合わせて、プランを見直せる想定です。',
  },
  {
    question: 'このページは実在するサービスですか？',
    answer:
      'いいえ。ポートフォリオ掲載用に作成した、架空サービス「まなびスタート」のLPサンプルです。',
  },
  {
    question: 'このLPは誰が制作したものですか？',
    answer:
      'React / TypeScriptで実装した自主制作サンプルです。実案件・実在サービスではありません。',
  },
]

export const ctaSection = {
  titleLine1: 'まずは学び方を',
  titleLine2: '相談してみませんか？',
  description:
    '自分に合った学び方やプランが知りたい方は、お気軽にご相談ください。こちらはサンプルLPのデモ導線です。',
  primaryLabel: 'お問い合わせへ',
  secondaryCta: { href: '#flow', label: '学びの流れを見る' },
} as const

export const contactModal = {
  title: 'お問い合わせ（デモ）',
  description:
    '学び方やプランについて、お気軽にご相談ください。こちらはポートフォリオ用のデモフォームです。',
  successTitle: '送信完了（デモ）',
  successText:
    'お問い合わせありがとうございます。こちらはデモ用フォームのため、実際の送信は行われません。',
  formNote: '※ デモ用フォームです。送信してもデータは送信されません。',
  serviceOptions: [
    { value: '', label: '選択してください' },
    { value: 'light', label: 'ライトプラン' },
    { value: 'standard', label: 'スタンダードプラン' },
    { value: 'support', label: 'サポートプラン' },
    { value: 'undecided', label: '未定・相談したい' },
  ],
} as const
